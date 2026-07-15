import { execSync } from 'child_process';

const commitMsg = process.argv[2] || 'chore: update';

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

// 1. Stage all changes
run('git add -A');

// 2. Commit only if there are staged changes
const dirty = execSync('git status --porcelain').toString().trim();
if (dirty) {
  run(`git commit -m "${commitMsg}"`);
  console.log(`\n✔ Committed: ${commitMsg}`);
} else {
  console.log('\n✔ Nothing to commit — working tree clean');
}

// 3. Bump patch version (creates a version commit + tag automatically)
run('npm version patch');

const version = JSON.parse(
  execSync('node -e "process.stdout.write(require(\'./package.json\').version)"').toString(),
);
console.log(`\n✔ Version bumped to ${version}`);

// 4. Push commits + tag → GitHub Actions creates the release
run('git push --follow-tags');

console.log(`\n✔ Pushed. GitHub Actions will create release v${version} automatically.\n`);
