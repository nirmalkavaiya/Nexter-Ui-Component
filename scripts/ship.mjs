import { execSync } from 'child_process';

const commitMsg = process.argv[2] || 'chore: update';

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

run('git add -A');

const dirty = execSync('git status --porcelain').toString().trim();
if (dirty) {
  run(`git commit -m "${commitMsg}"`);
  console.log(`\n✔ Committed: ${commitMsg}`);
} else {
  console.log('\n✔ Nothing to commit — working tree clean');
}

run('git push');

console.log('\n✔ Pushed. GitHub Actions will bump the version and create the release automatically.\n');
