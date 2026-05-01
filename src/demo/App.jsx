import React, { useState } from 'react';

import Accordion from '../components/Accordion';
import Alert from '../components/Alert';
import Avatar from '../components/Avatar';
import Badge from '../components/Badge';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import Checkbox from '../components/Checkbox';
import Combobox from '../components/Combobox';
import Dialog from '../components/Dialog';
import Dropdown from '../components/Dropdown';
import EmptyState from '../components/EmptyState';
import Field from '../components/Field';
import IconBox from '../components/IconBox';
import Input from '../components/Input';
import Kbd from '../components/Kbd';
import Modal from '../components/Modal';
import Notice from '../components/Notice';
import Pagination from '../components/Pagination';
import Popover from '../components/Popover';
import Progress from '../components/Progress';
import Radio from '../components/Radio';
import Search from '../components/Search';
import Segmented from '../components/Segmented';
import Select from '../components/Select';
import Sheet from '../components/Sheet';
import Skeleton from '../components/Skeleton';
import Slider from '../components/Slider';
import Spinner from '../components/Spinner';
import StatCard from '../components/StatCard';
import Status from '../components/Status';
import Stepper from '../components/Stepper';
import Table from '../components/Table';
import Tabs from '../components/Tabs';
import Tag from '../components/Tag';
import Textarea from '../components/Textarea';
import Toast from '../components/Toast';
import Toggle from '../components/Toggle';
import Tooltip from '../components/Tooltip';
import FeatureToggleCard from '../components/FeatureToggleCard';
import ToggleGrid from '../components/ToggleGrid';

/* ── Helpers ─────────────────────────────────────────────── */
function Section({ eyebrow, title, description, children }) {
  return (
    <section style={{ marginBottom: 56 }}>
      <div style={{ marginBottom: 20 }}>
        {eyebrow && (
          <p style={{
            fontFamily: 'var(--nxp-font)',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--nxp-brand)',
            marginBottom: 4,
          }}>
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 style={{
            fontFamily: 'var(--nxp-font)',
            fontSize: 20,
            fontWeight: 700,
            color: 'var(--nxp-text-strong)',
            marginBottom: 6,
          }}>
            {title}
          </h2>
        )}
        {description && (
          <p style={{
            fontFamily: 'var(--nxp-font)',
            fontSize: 13.5,
            color: 'var(--nxp-text-muted)',
            lineHeight: 1.6,
            maxWidth: 560,
          }}>
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

function DemoBox({ children, style = {} }) {
  return (
    <div style={{
      background: 'var(--nxp-bg)',
      border: '1px solid var(--nxp-border)',
      borderRadius: 'var(--nxp-radius-lg)',
      padding: 24,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ── App ─────────────────────────────────────────────────── */
export default function App() {
  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  // Dialog
  const [dialogOpen, setDialogOpen] = useState(true);
  // Toggle states
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  // FeatureToggleCard
  const [ftcStates, setFtcStates] = useState({ adobe: true, smtp: false, cache: false, wl: false, ai: false });
  const ftcToggle = (key) => setFtcStates((s) => ({ ...s, [key]: !s[key] }));
  // ToggleGrid
  const [tgValues, setTgValues] = useState({ canonical: true, og: false, schema: true, sitemap: false, robots: true, indexnow: false });
  const tgItems = [
    { key: 'canonical', label: 'Canonical URL', tooltip: 'Output canonical link tags to avoid duplicate content.' },
    { key: 'og', label: 'Open Graph', tooltip: 'Emit og:title, og:description, og:image meta tags.' },
    { key: 'schema', label: 'JSON-LD Schema', tooltip: 'Inject structured data for rich search results.' },
    { key: 'sitemap', label: 'XML Sitemap', tooltip: 'Auto-generate and update your sitemap.xml.' },
    { key: 'robots', label: 'Robots Meta', tooltip: 'Control per-page indexing directives.' },
    { key: 'indexnow', label: 'IndexNow', tooltip: 'Ping search engines instantly on publish.' },
  ];
  // Checkbox
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  // Radio
  const [radio, setRadio] = useState('react');
  // Dropdown
  const [dropVal, setDropVal] = useState('');
  // Tabs
  const [tabPill, setTabPill] = useState('general');
  const [tabUnder, setTabUnder] = useState('overview');
  const [tabVert, setTabVert] = useState('account');
  // Slider
  const [sliderVal, setSliderVal]       = useState(280);
  const [sliderUnit, setSliderUnit]     = useState('px');
  const [sliderOpacity, setSliderOpacity] = useState(75);
  // Stepper
  const [stepVal, setStepVal] = useState(3);
  // Segmented
  const [seg, setSeg] = useState('monthly');
  // Search
  const [search, setSearch] = useState('');
  // Combobox
  const [combo, setCombo] = useState('');
  // Pagination
  const [page, setPage] = useState(1);
  // Input
  const [inputVal, setInputVal] = useState('');
  const [selectVal, setSelectVal] = useState('');
  const [textareaVal, setTextareaVal] = useState('');

  const tabsPill = [
    { id: 'general', label: 'General', content: <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>General settings content goes here.</p> },
    { id: 'seo', label: 'SEO', content: <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>SEO configuration panel content.</p> },
    { id: 'social', label: 'Social', content: <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>Social meta tag settings.</p> },
  ];

  const tabsUnder = [
    { id: 'overview', label: 'Overview', content: <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>Overview content.</p> },
    { id: 'analytics', label: 'Analytics', content: <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>Analytics data here.</p> },
    { id: 'reports', label: 'Reports', content: <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>Reports will appear here.</p> },
  ];

  const tabsVert = [
    {
      id: 'account', label: 'Account',
      content: <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>Account settings content.</p>,
      subTabs: [{ id: 'profile', label: 'Profile' }, { id: 'billing', label: 'Billing' }]
    },
    { id: 'security', label: 'Security', content: <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>Security settings content.</p> },
    { id: 'notifications', label: 'Notifications', content: <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>Notification preferences.</p> },
  ];

  const dropOptions = [
    { value: 'published', label: 'Published', sub: 'Live' },
    { value: 'draft', label: 'Draft' },
    { divider: true },
    { value: 'archived', label: 'Archived', sub: 'Hidden' },
    { value: 'trash', label: 'Trash' },
  ];

  const comboOptions = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'nextjs', label: 'Next.js' },
    { value: 'nuxt', label: 'Nuxt' },
    { value: 'remix', label: 'Remix' },
  ];

  const tableColumns = [
    { key: 'name', label: 'Name' },
    { key: 'status', label: 'Status' },
    { key: 'visits', label: 'Visits', numeric: true },
    { key: 'score', label: 'Score', numeric: true },
  ];

  const tableRows = [
    { name: 'Homepage', status: 'Published', visits: 12400, score: 94 },
    { name: 'About Us', status: 'Published', visits: 3200, score: 87 },
    { name: 'Blog', status: 'Draft', visits: 820, score: 72 },
    { name: 'Contact', status: 'Published', visits: 1540, score: 91 },
  ];

  const carouselSlides = [
    {
      eyebrow: 'What\'s New',
      title: 'Nexter SEO — Content Analysis',
      description: 'Multi-keyword focus scoring with real-time readability feedback.',
      cta: 'Learn more',
      ctaHref: '#',
    },
    {
      eyebrow: 'Performance',
      title: 'IndexNow Bulk Submission',
      description: 'Submit up to 10 URLs per 5 minutes with built-in rate limiting.',
      cta: 'View docs',
      ctaHref: '#',
    },
    {
      eyebrow: 'Schema',
      title: 'JSON-LD Schema Builder',
      description: 'Structured data for every post type — validated and production-ready.',
      cta: 'Get started',
      ctaHref: '#',
    },
  ];

  const accordionItems = [
    {
      id: 'a1',
      title: 'What is Nexter SEO?',
      content: 'Nexter SEO is a full-featured WordPress SEO plugin with meta management, schema, IndexNow, redirects, and 404 monitoring.',
    },
    {
      id: 'a2',
      title: 'How does focus keyword analysis work?',
      content: 'The analyzer checks title, meta description, headings, body content, and URL for keyword presence and density — supporting multiple focus keywords.',
    },
    {
      id: 'a3',
      title: 'What redirect types are supported?',
      content: 'Nexter SEO supports 301, 302, 307, and 308 redirects with support for external destination URLs.',
    },
  ];

  return (
    <div style={{
      fontFamily: 'var(--nxp-font)',
      color: 'var(--nxp-text)',
      background: 'var(--nxp-bg-alt)',
      minHeight: '100vh',
      padding: '32px 40px',
    }}>
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            background: 'var(--nxp-brand-grad)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ color: '#fff', fontSize: 18, fontWeight: 700 }}>N</span>
          </div>
          <h1 style={{ fontFamily: 'var(--nxp-font)', fontSize: 24, fontWeight: 800, color: 'var(--nxp-text-strong)', margin: 0 }}>
            Nexter UI Components
          </h1>
          <Badge variant="gradient">v1.0</Badge>
        </div>
        <p style={{ color: 'var(--nxp-text-muted)', fontSize: 14, margin: 0 }}>
          Design system component library — interactive demo
        </p>
      </div>

      {/* ── BUTTONS ── */}
      <Section eyebrow="Interactions" title="Buttons" description="Primary actions, secondary controls, ghost, destructive, and link styles across all sizes.">
        <DemoBox>
          <div className="nxp-u-stack">
            <div className="nxp-u-row">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link button</Button>
            </div>
            <div className="nxp-u-row">
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
            <div className="nxp-u-row">
              <Button variant="primary" loading>Saving…</Button>
              <Button variant="secondary" disabled>Disabled</Button>
              <Button variant="primary" icon aria-label="Add">+</Button>
              <Button variant="ghost" icon aria-label="Settings">⚙</Button>
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ── FORM FIELDS ── */}
      <Section eyebrow="Forms" title="Fields & Inputs" description="Labelled form controls with hint text and validation error states.">
        <DemoBox>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <Field label="Page title" hint="Used as the browser tab title.">
              <Input
                placeholder="Enter page title…"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
            </Field>
            <Field label="Meta description" error="Meta description is required.">
              <Input
                placeholder="Describe the page…"
                invalid
              />
            </Field>
            <Field label="Post type" hint="Select the content type.">
              <Select
                options={[
                  { value: 'post', label: 'Post' },
                  { value: 'page', label: 'Page' },
                  { value: 'product', label: 'Product' },
                ]}
                value={selectVal}
                onChange={(e) => setSelectVal(e.target.value)}
                placeholder="Choose type…"
              />
            </Field>
            <Field label="Redirect target (disabled)">
              <Input placeholder="https://example.com" disabled />
            </Field>
            <Field
              label="Exclude Images From Optimisation"
              tooltip="Enter one image path per line to exclude those images from optimisation. Supports partial paths and wildcards."
              hint="One path per line."
              style={{ gridColumn: '1 / -1' }}
            >
              <Textarea
                placeholder="Enter one path per line"
                value={textareaVal}
                onChange={(e) => setTextareaVal(e.target.value)}
                maxLength={500}
                showCount
              />
            </Field>
          </div>
        </DemoBox>
      </Section>

      {/* ── DROPDOWN ── */}
      <Section eyebrow="Selection" title="Dropdown" description="Fully accessible custom listbox with keyboard navigation, sub-labels, and dividers.">
        <DemoBox>
          <div className="nxp-u-row">
            <Dropdown
              options={dropOptions}
              value={dropVal}
              onChange={setDropVal}
              placeholder="Post status…"
            />
            <Dropdown
              options={[
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Español' },
                { value: 'fr', label: 'Français' },
              ]}
              placeholder="Language…"
            />
            <Dropdown options={[{ value: 'x', label: 'Option' }]} placeholder="Disabled" disabled />
          </div>
          {dropVal && (
            <p style={{ marginTop: 12, fontSize: 13, color: 'var(--nxp-text-muted)' }}>
              Selected: <strong>{dropVal}</strong>
            </p>
          )}
        </DemoBox>
      </Section>

      {/* ── TOGGLE / CHECKBOX / RADIO ── */}
      <Section eyebrow="Controls" title="Toggle, Checkbox & Radio" description="React-controlled interactive states with accessible keyboard support.">
        <DemoBox>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
            <div className="nxp-u-stack--sm">
              <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--nxp-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Toggle</p>
              <Toggle checked={toggle1} onChange={setToggle1} label="Enable indexing" />
              <Toggle checked={toggle2} onChange={setToggle2} label="Noindex page" />
              <Toggle checked={true} disabled label="Always on (disabled)" />
              <Toggle checked={true} variant="success" label="Success variant" />
            </div>
            <div className="nxp-u-stack--sm">
              <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--nxp-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Checkbox</p>
              <Checkbox checked={checked1} onChange={setChecked1} label="Enable canonical URL" />
              <Checkbox checked={checked2} onChange={setChecked2} label="Override robots.txt" />
              <Checkbox checked={false} disabled label="Disabled option" />
            </div>
            <div className="nxp-u-stack--sm">
              <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--nxp-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Radio</p>
              <Radio name="framework" value="react" checked={radio === 'react'} onChange={setRadio} label="React" />
              <Radio name="framework" value="vue" checked={radio === 'vue'} onChange={setRadio} label="Vue" />
              <Radio name="framework" value="svelte" checked={radio === 'svelte'} onChange={setRadio} label="Svelte" />
              <Radio name="framework" value="disabled" checked={false} disabled label="Disabled" />
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ── FEATURE TOGGLE CARD ── */}
      <Section eyebrow="Composite" title="Feature Toggle Card" description="Settings-dashboard card with plan badge (PRO/FREEMIUM), NEW badge, tooltip, locked state with upgrade CTA, and controlled toggle.">
        <DemoBox>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 540 }}>
            {/* free — plain toggle */}
            <FeatureToggleCard
              title="Adobe Fonts"
              tooltip="Load fonts directly from Adobe Fonts CDN without hosting them locally."
              planType="free"
              docsLabel="Read Docs"
              onDocsClick={() => {}}
              isEnabled={ftcStates.adobe}
              onToggle={() => ftcToggle('adobe')}
              onSettingsClick={() => {}}
            />
            {/* freemium — plan badge + BETA inline badge */}
            <FeatureToggleCard
              title="SMTP Email"
              tooltip="Send transactional emails via your own SMTP server."
              planType="freemium"
              showBadge
              badgeText="BETA"
              badgeVariant="beta"
              docsLabel="Read Docs"
              onDocsClick={() => {}}
              isEnabled={ftcStates.smtp}
              onToggle={() => ftcToggle('smtp')}
              onSettingsClick={() => {}}
            />
            {/* free — NEW badge */}
            <FeatureToggleCard
              title="Advanced Cache"
              tooltip="Full-page caching layer for faster page loads."
              planType="free"
              isNew
              docsLabel="Read Docs"
              onDocsClick={() => {}}
              isEnabled={ftcStates.cache}
              onToggle={() => ftcToggle('cache')}
              onSettingsClick={() => {}}
            />
            {/* pro — locked with upgrade link */}
            <FeatureToggleCard
              title="White Label"
              tooltip="Remove all Nexter branding from the admin interface."
              planType="pro"
              isLocked
              docsLabel="Read Docs"
              onDocsClick={() => {}}
              isEnabled={ftcStates.wl}
              onToggle={() => ftcToggle('wl')}
              onUpgradeClick={() => {}}
            />
            {/* pro — locked + NEW */}
            <FeatureToggleCard
              title="AI Content Assistant"
              tooltip="Generate SEO-optimised meta descriptions using AI."
              planType="pro"
              isNew
              isLocked
              docsLabel="Read Docs"
              onDocsClick={() => {}}
              isEnabled={ftcStates.ai}
              onToggle={() => ftcToggle('ai')}
              onUpgradeClick={() => {}}
            />
          </div>
        </DemoBox>
      </Section>

      {/* ── TABS ── */}
      <Section eyebrow="Navigation" title="Tabs" description="Three tab variants: pill (default), underline, and vertical with sub-tabs.">
        <div className="nxp-u-stack">
          <DemoBox>
            <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--nxp-text-muted)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Pill (default)</p>
            <Tabs tabs={tabsPill} activeTab={tabPill} onTabChange={setTabPill} />
          </DemoBox>
          <DemoBox>
            <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--nxp-text-muted)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Underline</p>
            <Tabs variant="underline" tabs={tabsUnder} activeTab={tabUnder} onTabChange={setTabUnder} />
          </DemoBox>
          <DemoBox>
            <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--nxp-text-muted)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Vertical with sub-tabs</p>
            <Tabs variant="vertical" tabs={tabsVert} activeTab={tabVert} onTabChange={setTabVert} />
          </DemoBox>
        </div>
      </Section>

      {/* ── TAGS & BADGES ── */}
      <Section eyebrow="Labels" title="Tags & Badges" description="Semantic status labels and count badges in all variants.">
        <DemoBox>
          <div className="nxp-u-stack--sm">
            <div className="nxp-u-row">
              <Tag>Default</Tag>
              <Tag variant="primary">Primary</Tag>
              <Tag variant="success">Published</Tag>
              <Tag variant="warning">Draft</Tag>
              <Tag variant="error">Error</Tag>
            </div>
            <div className="nxp-u-row">
              <Badge>42</Badge>
              <Badge variant="primary">New</Badge>
              <Badge variant="success">Live</Badge>
              <Badge variant="warning">Beta</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="gradient">Pro</Badge>
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ── ALERTS ── */}
      <Section eyebrow="Feedback" title="Alerts" description="Inline feedback messages in four semantic variants.">
        <DemoBox>
          <div className="nxp-u-stack--sm">
            <Alert variant="info">Your sitemap was submitted to Google Search Console successfully.</Alert>
            <Alert variant="success">All 48 redirects are working correctly. No errors detected.</Alert>
            <Alert variant="warning">IndexNow rate limit approaching — 8 of 10 requests used this window.</Alert>
            <Alert variant="error">Failed to fetch robots.txt. Check your site's .htaccess configuration.</Alert>
          </div>
        </DemoBox>
      </Section>

      {/* ── NOTICES ── */}
      <Section eyebrow="Feedback" title="Notices" description="Dismissible bordered notices with smooth fade-out transition.">
        <DemoBox>
          <div className="nxp-u-stack--sm">
            <Notice variant="info">You are viewing a cached version of the SEO report. Refresh to update.</Notice>
            <Notice variant="success">Schema JSON-LD validated successfully. No structured data errors.</Notice>
            <Notice variant="warning">The focus keyword appears only once in the body. Consider adding more uses.</Notice>
            <Notice variant="error" dismissible>A critical error occurred reading the 404 log database table.</Notice>
          </div>
        </DemoBox>
      </Section>

      {/* ── TOASTS ── */}
      <Section eyebrow="Feedback" title="Toasts" description="Dark floating notifications for async confirmations and errors.">
        <DemoBox>
          <div className="nxp-u-row" style={{ flexWrap: 'wrap', gap: 12 }}>
            <Toast title="Settings saved" description="Your SEO configuration has been updated." onClose={() => {}} />
            <Toast variant="error" title="Save failed" description="Could not write to the database. Please try again." onClose={() => {}} />
          </div>
        </DemoBox>
      </Section>

      {/* ── BANNERS ── */}
      <Section eyebrow="Feedback" title="Banners" description="Prominent section-level announcements with optional CTA actions.">
        <DemoBox>
          <div className="nxp-u-stack--sm">
            <Banner
              title="Upgrade to Nexter SEO Pro"
              text="Unlock schema templates, advanced redirects, and priority indexing with the Pro plan."
              actions={<><Button variant="primary" size="sm">Upgrade now</Button><Button variant="ghost" size="sm">Learn more</Button></>}
            />
            <Banner
              variant="success"
              title="Plugin updated successfully"
              text="Nexter Extension has been updated to v2.4.0. All features are working correctly."
            />
            <Banner
              variant="warning"
              title="Canonical URLs not configured"
              text="Some pages have conflicting canonical tags. Review the canonical settings panel."
              actions={<Button variant="secondary" size="sm">Review now</Button>}
            />
            <Banner
              variant="error"
              title="IndexNow API key missing"
              text="Add your IndexNow API key to enable instant URL submission to search engines."
              actions={<Button variant="destructive" size="sm">Add key</Button>}
            />
          </div>
        </DemoBox>
      </Section>

      {/* ── PROGRESS ── */}
      <Section eyebrow="Data" title="Progress Bars" description="Animated fill bars for task completion, scores, and metrics.">
        <DemoBox>
          <div className="nxp-u-stack" style={{ maxWidth: 480 }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--nxp-text-muted)', marginBottom: 6 }}>
                <span>SEO Score</span><span>78%</span>
              </div>
              <Progress value={78} />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--nxp-text-muted)', marginBottom: 6 }}>
                <span>Indexed Pages</span><span>100%</span>
              </div>
              <Progress value={100} variant="success" />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--nxp-text-muted)', marginBottom: 6 }}>
                <span>Redirect health</span><span>55%</span>
              </div>
              <Progress value={55} variant="warning" />
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ── SKELETON & SPINNER ── */}
      <Section eyebrow="Loading" title="Skeletons & Spinners" description="Placeholder states for async content and loading indicators.">
        <DemoBox>
          <div className="nxp-u-row" style={{ alignItems: 'flex-start', gap: 32 }}>
            <div className="nxp-u-stack--sm" style={{ flex: 1 }}>
              <div className="nxp-u-row">
                <Skeleton variant="circle" />
                <div className="nxp-u-stack--sm" style={{ flex: 1 }}>
                  <Skeleton variant="title" style={{ width: '60%' }} />
                  <Skeleton style={{ width: '100%' }} />
                  <Skeleton style={{ width: '80%' }} />
                </div>
              </div>
            </div>
            <div className="nxp-u-row" style={{ gap: 20, alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <Spinner size="sm" />
                <p style={{ fontSize: 11, color: 'var(--nxp-text-muted)', marginTop: 4 }}>sm</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Spinner />
                <p style={{ fontSize: 11, color: 'var(--nxp-text-muted)', marginTop: 4 }}>md</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Spinner size="lg" />
                <p style={{ fontSize: 11, color: 'var(--nxp-text-muted)', marginTop: 4 }}>lg</p>
              </div>
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ── MODAL ── */}
      <Section eyebrow="Overlay" title="Modal" description="Portal-rendered dialog with brand accent stripe, backdrop, and Esc-to-close.">
        <DemoBox>
          <Button variant="primary" onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Edit SEO Settings"
            byline="Customize meta title and description for this page."
            footer={
              <>
                <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
                <Button variant="primary" onClick={() => setModalOpen(false)}>Save changes</Button>
              </>
            }
          >
            <div className="nxp-u-stack">
              <Field label="Meta title">
                <Input placeholder="Homepage — Nexter SEO" />
              </Field>
              <Field label="Meta description" hint="Optimal length: 120–160 characters.">
                <Textarea placeholder="A short, compelling description of this page…" rows={3} />
              </Field>
              <Toggle label="Override default title template" />
            </div>
          </Modal>
        </DemoBox>
      </Section>

      {/* ── DIALOG, SHEET, POPOVER ── */}
      <Section eyebrow="Overlay" title="Dialog, Sheet & Popover" description="Confirm dialogs, card layouts, and inline info popover patterns.">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
          <DemoBox>
            <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--nxp-text-muted)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Dialog</p>
            <Dialog
              open={dialogOpen}
              icon="⚠"
              iconVariant="warning"
              title="Delete redirect rule?"
              description="This will permanently remove the 301 redirect from /old-url to /new-url. This action cannot be undone."
              actions={
                <>
                  <Button variant="ghost" size="sm" onClick={() => setDialogOpen(false)}>Cancel</Button>
                  <Button variant="destructive" size="sm">Delete</Button>
                </>
              }
            />
            {!dialogOpen && (
              <Button variant="secondary" size="sm" onClick={() => setDialogOpen(true)}>Show Dialog</Button>
            )}
          </DemoBox>
          <DemoBox>
            <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--nxp-text-muted)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Sheet</p>
            <Sheet
              title="Schema Configuration"
              byline="JSON-LD settings for this post"
              footer={<><Button variant="ghost" size="sm">Reset</Button><Button variant="primary" size="sm">Apply</Button></>}
            >
              <p style={{ fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>
                Configure structured data output for this post type. Changes apply immediately on save.
              </p>
            </Sheet>
          </DemoBox>
          <DemoBox>
            <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--nxp-text-muted)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Popover</p>
            <Popover
              title="Focus keyword tip"
              description="Your focus keyword should appear in the first paragraph, at least one heading, and the meta description."
              footer={<Button variant="link" size="sm">Read guide →</Button>}
            />
          </DemoBox>
        </div>
      </Section>

      {/* ── SLIDER, STEPPER, SEGMENTED ── */}
      <Section eyebrow="Input Controls" title="Slider, Stepper & Segmented" description="Numeric input patterns for ranges, counts, and option groups.">
        <DemoBox>
          <div className="nxp-u-stack">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <Slider
                label="Menu Width"
                value={sliderVal}
                onChange={setSliderVal}
                unit={sliderUnit}
                units={['px', '%', 'rem', 'em']}
                onUnitChange={setSliderUnit}
                min={0}
                max={600}
                step={1}
              />
              <Slider
                label="Border Radius"
                defaultValue={8}
                unit="px"
                min={0}
                max={48}
                step={1}
              />
              <Slider
                label="Opacity"
                value={sliderOpacity}
                onChange={setSliderOpacity}
                unit={false}
                min={0}
                max={100}
                step={1}
              />
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--nxp-text-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Stepper</p>
              <div className="nxp-u-row">
                <Stepper value={stepVal} onChange={setStepVal} min={1} max={20} />
                <span style={{ fontSize: 13, color: 'var(--nxp-text-muted)' }}>max redirects per page</span>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--nxp-text-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Segmented</p>
              <Segmented
                options={[{ value: 'monthly', label: 'Monthly' }, { value: 'yearly', label: 'Yearly' }, { value: 'lifetime', label: 'Lifetime' }]}
                value={seg}
                onChange={setSeg}
              />
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ── SEARCH ── */}
      <Section eyebrow="Input" title="Search" description="Icon-prefixed search input for filtering lists and content.">
        <DemoBox style={{ maxWidth: 400 }}>
          <Search value={search} onChange={setSearch} placeholder="Search redirects…" />
          {search && (
            <p style={{ fontSize: 12, color: 'var(--nxp-text-muted)', marginTop: 8 }}>Query: <strong>{search}</strong></p>
          )}
        </DemoBox>
      </Section>

      {/* ── CAROUSEL ── */}
      <Section eyebrow="Media" title="Carousel" description="Snap-scroll carousel with prev/next controls and dot indicators.">
        <Carousel slides={carouselSlides} />
      </Section>

      {/* ── ACCORDION ── */}
      <Section eyebrow="Content" title="Accordion" description="Expandable FAQ sections with smooth open/close toggle.">
        <Accordion items={accordionItems} defaultOpen={['a1']} />
      </Section>

      {/* ── COMBOBOX ── */}
      <Section eyebrow="Selection" title="Combobox" description="Filterable searchable dropdown with full keyboard navigation.">
        <DemoBox style={{ maxWidth: 320 }}>
          <Field label="Framework">
            <Combobox
              options={comboOptions}
              value={combo}
              onChange={setCombo}
              placeholder="Search framework…"
            />
          </Field>
        </DemoBox>
      </Section>

      {/* ── PAGINATION ── */}
      <Section eyebrow="Navigation" title="Pagination" description="Page number navigation with prev/next controls.">
        <DemoBox>
          <Pagination page={page} totalPages={7} onChange={setPage} />
          <p style={{ fontSize: 12, color: 'var(--nxp-text-muted)', marginTop: 10 }}>Current page: {page}</p>
        </DemoBox>
      </Section>

      {/* ── TABLE ── */}
      <Section eyebrow="Data" title="Table" description="Striped data table with sortable columns, numeric alignment, and action slots.">
        <DemoBox style={{ padding: 0, overflow: 'hidden' }}>
          <Table
            columns={tableColumns}
            rows={tableRows}
            striped
            actions={(row) => (
              <>
                <Button variant="ghost" size="sm">Edit</Button>
                <Button variant="ghost" size="sm">View</Button>
              </>
            )}
          />
        </DemoBox>
      </Section>

      {/* ── AVATAR, KBD, TOOLTIP ── */}
      <Section eyebrow="Misc" title="Avatar, Kbd & Tooltip" description="User avatars, keyboard shortcut badges, and hover tooltip overlays.">
        <DemoBox>
          <div className="nxp-u-stack">
            <div className="nxp-u-row">
              <Avatar size="sm">NK</Avatar>
              <Avatar>NK</Avatar>
              <Avatar size="lg">NK</Avatar>
              <Avatar src="https://i.pravatar.cc/48?img=12" alt="User avatar" size="lg" />
            </div>
            <div className="nxp-u-row">
              <span style={{ fontSize: 13.5, color: 'var(--nxp-text-muted)' }}>Save changes</span>
              <Kbd>⌘</Kbd>
              <Kbd>S</Kbd>
            </div>
            <div className="nxp-u-row">
              <Tooltip content="Edit this redirect rule">
                <Button variant="secondary" size="sm">Hover me</Button>
              </Tooltip>
              <Tooltip content="View page in new tab">
                <Button variant="ghost" size="sm">Open ↗</Button>
              </Tooltip>
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ── STAT CARDS ── */}
      <Section eyebrow="Analytics" title="Stat Cards" description="Key metric display cards for dashboards and overview panels.">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          <StatCard label="Total Pages" value="1,248" meta={<Tag variant="success">↑ 12%</Tag>} />
          <StatCard label="SEO Score" value="94" meta={<Tag variant="primary">Excellent</Tag>} />
          <StatCard label="404 Errors" value="3" meta={<Tag variant="warning">Review needed</Tag>} />
          <StatCard label="Redirects" value="47" meta="Active rules" />
        </div>
      </Section>

      {/* ── ICONBOX ── */}
      <Section eyebrow="Features" title="Icon Boxes" description="Feature highlight cards with icon, title, description, and CTA link.">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <IconBox
            topline="Step 1"
            step={1}
            title="Configure Meta Tags"
            description="Set global templates for title and description tags across all post types."
            cta="Configure"
          />
          <IconBox
            topline="Step 2"
            step={2}
            title="Enable Schema Output"
            description="Generate valid JSON-LD structured data for posts, pages, and custom types."
            cta="Enable"
          />
          <IconBox
            topline="Step 3"
            step={3}
            title="Submit to IndexNow"
            description="Bulk-submit new and updated URLs to Bing, Yandex, and other search engines."
            cta="Submit"
          />
        </div>
      </Section>

      {/* ── EMPTY STATE ── */}
      <Section eyebrow="States" title="Empty State" description="Friendly placeholder for empty lists, search results with no matches.">
        <DemoBox>
          <EmptyState
            icon="🔍"
            title="No redirects found"
            description="No redirect rules match your current search. Try adjusting your filters or add a new redirect."
            action={<Button variant="primary" size="sm">Add redirect</Button>}
          />
        </DemoBox>
      </Section>

      {/* ── TOGGLE GRID ── */}
      <Section eyebrow="Controls" title="Toggle Grid" description="Compact grid of labeled toggles — controlled via valueMap or uncontrolled with internal state.">
        <DemoBox>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 12, fontWeight: 600, color: 'var(--nxp-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>2 Columns (Controlled)</p>
              <ToggleGrid
                items={tgItems}
                columns={2}
                valueMap={tgValues}
                onChange={(key, newValue, updatedItems) => setTgValues((v) => ({ ...v, [key]: newValue }))}
              />
            </div>
            <div>
              <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 12, fontWeight: 600, color: 'var(--nxp-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>3 Columns (Uncontrolled)</p>
              <ToggleGrid
                items={tgItems.map((it) => ({ ...it, value: false }))}
                columns={3}
              />
            </div>
            <div>
              <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 12, fontWeight: 600, color: 'var(--nxp-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>1 Column</p>
              <ToggleGrid
                items={tgItems.slice(0, 3)}
                columns={1}
              />
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ── STATUS ── */}
      <Section eyebrow="Labels" title="Status Pills" description="Animated presence indicators for active, inactive, pending, and info states.">
        <DemoBox>
          <div className="nxp-u-row">
            <Status>Default</Status>
            <Status variant="active">Active</Status>
            <Status variant="inactive">Inactive</Status>
            <Status variant="pending">Pending</Status>
            <Status variant="info">Indexing</Status>
          </div>
        </DemoBox>
      </Section>

      {/* Footer */}
      <div style={{
        marginTop: 48,
        paddingTop: 24,
        borderTop: '1px solid var(--nxp-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <p style={{ fontSize: 12.5, color: 'var(--nxp-text-muted)', margin: 0 }}>
          Nexter UI Components v1.0.0 — Nexter Design System
        </p>
        <div className="nxp-u-row--sm">
          <Badge variant="primary">React 18</Badge>
          <Badge>Zero dependencies</Badge>
          <Badge variant="success">WCAG 2.2 AA</Badge>
        </div>
      </div>
    </div>
  );
}
