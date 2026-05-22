import React, { useState } from 'react';

import Accordion        from '../components/Accordion';
import Alert            from '../components/Alert';
import AspectRatio      from '../components/AspectRatio';
import Avatar           from '../components/Avatar';
import Badge            from '../components/Badge';
import Banner           from '../components/Banner';
import Breadcrumb       from '../components/Breadcrumb';
import Button           from '../components/Button';
import Carousel         from '../components/Carousel';
import Checkbox         from '../components/Checkbox';
import Collapsible      from '../components/Collapsible';
import ColorPicker      from '../components/ColorPicker';
import Combobox         from '../components/Combobox';
import ConfirmButton    from '../components/ConfirmButton';
import Container        from '../components/Container';
import CopyInput        from '../components/CopyInput';
import CountCard        from '../components/CountCard';
import DatePicker       from '../components/DatePicker';
import DateRangePicker  from '../components/DateRangePicker';
import Dialog           from '../components/Dialog';
import Drawer           from '../components/Drawer';
import Dropdown         from '../components/Dropdown';
import EmptyState       from '../components/EmptyState';
import FeatureList      from '../components/FeatureList';
import FeatureToggleCard from '../components/FeatureToggleCard';
import Field            from '../components/Field';
import FileUpload       from '../components/FileUpload';
import IconBox          from '../components/IconBox';
import Input            from '../components/Input';
import Kbd              from '../components/Kbd';
import Label            from '../components/Label';
import Modal            from '../components/Modal';
import MultiSelect      from '../components/MultiSelect';
import Notice           from '../components/Notice';
import NumberInput      from '../components/NumberInput';
import RadioGroup       from '../components/RadioGroup';
import Pagination       from '../components/Pagination';
import Popover          from '../components/Popover';
import Progress         from '../components/Progress';
import Radio            from '../components/Radio';
import ScrollArea       from '../components/ScrollArea';
import Search           from '../components/Search';
import Segmented        from '../components/Segmented';
import Select           from '../components/Select';
import Separator        from '../components/Separator';
import Sheet            from '../components/Sheet';
import Skeleton         from '../components/Skeleton';
import Slider           from '../components/Slider';
import ProPopup         from '../components/ProPopup';
import Spinner          from '../components/Spinner';
import StatCard         from '../components/StatCard';
import Status           from '../components/Status';
import Stepper          from '../components/Stepper';
import Table            from '../components/Table';
import Tabs             from '../components/Tabs';
import Tag              from '../components/Tag';
import Textarea         from '../components/Textarea';
import Toast            from '../components/Toast';
import Toggle           from '../components/Toggle';
import ToggleGrid       from '../components/ToggleGrid';
import Tooltip          from '../components/Tooltip';
import Typography       from '../components/Typography';

/* ── Helpers ─────────────────────────────────────────────────── */
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

function DemoLabel({ children }) {
  return (
    <p style={{
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--nxp-text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      marginBottom: 12,
      marginTop: 0,
    }}>
      {children}
    </p>
  );
}

/* ── App ─────────────────────────────────────────────────────── */
export default function App() {
  /* Modal / Dialog / Drawer */
  const [modalOpen,  setModalOpen]  = useState(false);
  const [dialogOpen, setDialogOpen] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  /* Toggle states */
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);

  /* FeatureToggleCard */
  const [ftcStates, setFtcStates] = useState({ adobe: true, smtp: false, cache: false, wl: false, ai: false });
  const ftcToggle = (key) => setFtcStates((s) => ({ ...s, [key]: !s[key] }));

  /* ToggleGrid */
  const [tgValues, setTgValues] = useState({ canonical: true, og: false, schema: true, sitemap: false, robots: true, indexnow: false });
  const tgItems = [
    { key: 'canonical', label: 'Canonical URL',  tooltip: 'Output canonical link tags to avoid duplicate content.' },
    { key: 'og',        label: 'Open Graph',      tooltip: 'Emit og:title, og:description, og:image meta tags.' },
    { key: 'schema',    label: 'JSON-LD Schema',  tooltip: 'Inject structured data for rich search results.' },
    { key: 'sitemap',   label: 'XML Sitemap',     tooltip: 'Auto-generate and update your sitemap.xml.' },
    { key: 'robots',    label: 'Robots Meta',     tooltip: 'Control per-page indexing directives.' },
    { key: 'indexnow',  label: 'IndexNow',        tooltip: 'Ping search engines instantly on publish.' },
  ];

  /* Form inputs */
  const [color,     setColor]    = useState('#1717cc');
  const [date,      setDate]     = useState('');
  const [range,     setRange]    = useState({ start: '', end: '' });
  const [numVal,    setNumVal]   = useState(12);
  const [files,     setFiles]    = useState([]);

  /* RadioGroup */
  const [radioGroupVal, setRadioGroupVal] = useState('monthly');
  const radioGroupOptions = [
    { value: 'monthly',  label: 'Monthly',  tooltip: 'Billed every month. Cancel anytime.' },
    { value: 'yearly',   label: 'Yearly',   tooltip: 'Save 30% with annual billing.' },
    { value: 'lifetime', label: 'Lifetime', tooltip: 'One-time payment, lifetime access.' },
  ];
  const radioGroupIndexing = [
    { value: 'index',   label: 'Index',   tooltip: 'Allow search engines to index this page.' },
    { value: 'noindex', label: 'No Index', tooltip: 'Prevent search engines from indexing.' },
    { value: 'auto',    label: 'Auto',    tooltip: 'Follow global site setting.' },
  ];
  const [radioGroupIndex, setRadioGroupIndex] = useState('index');

  /* ProPopup */
  const [proPopupOpen, setProPopupOpen] = useState(false);

  /* MultiSelect */
  const [msValue, setMsValue] = useState(['entire', 'singulars', 'archives']);
  const msOptions = [
    {
      label: 'Basic',
      options: [
        { label: 'Entire Website', value: 'entire' },
        { label: 'All Singulars',  value: 'singulars' },
        { label: 'All Archives',   value: 'archives' },
      ],
    },
    {
      label: 'Special Pages',
      options: [
        { label: 'Front Page',   value: 'front' },
        { label: 'Blog / Posts', value: 'blog' },
        { label: '404 Page',     value: '404' },
        { label: 'Search Page',  value: 'search' },
      ],
    },
    {
      label: 'Post Types',
      options: [
        { label: 'Posts',    value: 'posts' },
        { label: 'Pages',    value: 'pages' },
        { label: 'Products', value: 'products' },
      ],
    },
  ];

  /* Selection controls */
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [radio,    setRadio]    = useState('react');
  const [dropVal,  setDropVal]  = useState('');

  /* Tabs */
  const [tabPill,  setTabPill]  = useState('general');
  const [tabUnder, setTabUnder] = useState('overview');
  const [tabVert,  setTabVert]  = useState('account');

  /* Slider / Stepper / Segmented */
  const [sliderVal,     setSliderVal]     = useState(280);
  const [sliderUnit,    setSliderUnit]    = useState('px');
  const [sliderOpacity, setSliderOpacity] = useState(75);
  const [stepVal,       setStepVal]       = useState(3);
  const [seg,           setSeg]           = useState('monthly');

  /* Search / Combobox / Pagination */
  const [search,    setSearch]    = useState('');
  const [combo,     setCombo]     = useState('');
  const [page,      setPage]      = useState(1);

  /* Form text inputs */
  const [inputVal,    setInputVal]    = useState('');
  const [selectVal,   setSelectVal]   = useState('');
  const [textareaVal, setTextareaVal] = useState('');

  /* ── Static data ──────────────────────────────────────────── */
  const tabsPill = [
    { id: 'general', label: 'General', content: <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>General settings content goes here.</p> },
    { id: 'seo',     label: 'SEO',     content: <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>SEO configuration panel content.</p> },
    { id: 'social',  label: 'Social',  content: <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>Social meta tag settings.</p> },
  ];

  const tabsUnder = [
    { id: 'overview',   label: 'Overview',   content: <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>Overview content.</p> },
    { id: 'analytics',  label: 'Analytics',  content: <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>Analytics data here.</p> },
    { id: 'reports',    label: 'Reports',    content: <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>Reports will appear here.</p> },
  ];

  const tabsVert = [
    { id: 'account',       label: 'Account',       content: <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>Account settings content.</p>, subTabs: [{ id: 'profile', label: 'Profile' }, { id: 'billing', label: 'Billing' }] },
    { id: 'security',      label: 'Security',      content: <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>Security settings content.</p> },
    { id: 'notifications', label: 'Notifications', content: <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>Notification preferences.</p> },
  ];

  const dropOptions = [
    { value: 'published', label: 'Published', sub: 'Live' },
    { value: 'draft',     label: 'Draft' },
    { divider: true },
    { value: 'archived',  label: 'Archived', sub: 'Hidden' },
    { value: 'trash',     label: 'Trash' },
  ];

  const comboOptions = [
    { value: 'react',   label: 'React' },
    { value: 'vue',     label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte',  label: 'Svelte' },
    { value: 'nextjs',  label: 'Next.js' },
    { value: 'nuxt',    label: 'Nuxt' },
    { value: 'remix',   label: 'Remix' },
  ];

  const tableColumns = [
    { key: 'name',   label: 'Name' },
    { key: 'status', label: 'Status' },
    { key: 'visits', label: 'Visits', numeric: true },
    { key: 'score',  label: 'Score',  numeric: true },
  ];

  const tableRows = [
    { name: 'Homepage', status: 'Published', visits: 12400, score: 94 },
    { name: 'About Us', status: 'Published', visits: 3200,  score: 87 },
    { name: 'Blog',     status: 'Draft',     visits: 820,   score: 72 },
    { name: 'Contact',  status: 'Published', visits: 1540,  score: 91 },
  ];

  const carouselSlides = [
    { eyebrow: 'What\'s New',    title: 'Nexter SEO — Content Analysis',   description: 'Multi-keyword focus scoring with real-time readability feedback.', cta: 'Learn more', ctaHref: '#' },
    { eyebrow: 'Performance',    title: 'IndexNow Bulk Submission',         description: 'Submit up to 10 URLs per 5 minutes with built-in rate limiting.',   cta: 'View docs',  ctaHref: '#' },
    { eyebrow: 'Schema',         title: 'JSON-LD Schema Builder',           description: 'Structured data for every post type — validated and production-ready.', cta: 'Get started', ctaHref: '#' },
  ];

  const accordionItems = [
    { id: 'a1', title: 'What is Nexter SEO?',                  content: 'Nexter SEO is a full-featured WordPress SEO plugin with meta management, schema, IndexNow, redirects, and 404 monitoring.' },
    { id: 'a2', title: 'How does focus keyword analysis work?', content: 'The analyzer checks title, meta description, headings, body content, and URL for keyword presence and density — supporting multiple focus keywords.' },
    { id: 'a3', title: 'What redirect types are supported?',    content: 'Nexter SEO supports 301, 302, 307, and 308 redirects with support for external destination URLs.' },
  ];

  const featureListItems = [
    'Multi-keyword SEO analysis',
    'JSON-LD schema builder',
    'IndexNow bulk submission',
    'Redirect manager (301/302/307/308)',
    '404 monitor with bot filtering',
    'robots.txt & LLMs.txt editor',
  ];

  const featureListHorizontal = [
    'SEO ready',
    'RTL support',
    'Dark mode',
    'Accessible',
    'Responsive',
    'Tree-shakeable',
  ];

  const scrollContent = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    path: `/blog/post-${i + 1}`,
    status: i % 3 === 0 ? 'Draft' : 'Published',
  }));

  /* ────────────────────────────────────────────────────────────
     RENDER
  ──────────────────────────────────────────────────────────── */
  return (
    <div style={{
      fontFamily: 'var(--nxp-font)',
      color: 'var(--nxp-text)',
      background: 'var(--nxp-bg-alt)',
      minHeight: '100vh',
      padding: '32px 40px',
    }}>

      {/* ── Header ── */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: 'var(--nxp-brand-grad)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: '#fff', fontSize: 18, fontWeight: 700 }}>N</span>
          </div>
          <h1 style={{ fontFamily: 'var(--nxp-font)', fontSize: 24, fontWeight: 800, color: 'var(--nxp-text-strong)', margin: 0 }}>
            Nexter UI Components
          </h1>
          <Badge variant="gradient">v2.1.72</Badge>
        </div>
        <p style={{ color: 'var(--nxp-text-muted)', fontSize: 14, margin: 0 }}>
          Design system component library — interactive demo
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
          BUTTONS
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Interactions" title="Buttons" description="Primary actions, secondary controls, ghost, destructive, link, gradient, and animated underline styles across all sizes.">
        <DemoBox>
          <div className="nxp-u-stack">
            {/* Variants */}
            <div>
              <DemoLabel>Variants</DemoLabel>
              <div className="nxp-u-row">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="grad">Gradient</Button>
              </div>
            </div>
            {/* Link & underline */}
            <div>
              <DemoLabel>Link & Underline</DemoLabel>
              <div className="nxp-u-row">
                <Button variant="link">Link button</Button>
                <Button variant="underline">Animated underline</Button>
                <Button variant="underline" style={{ color: 'var(--nxp-color-primary)' }}>
                  Hover to see slide
                </Button>
              </div>
            </div>
            {/* Sizes */}
            <div>
              <DemoLabel>Sizes</DemoLabel>
              <div className="nxp-u-row">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
            </div>
            {/* States */}
            <div>
              <DemoLabel>States</DemoLabel>
              <div className="nxp-u-row">
                <Button variant="primary" loading>Saving…</Button>
                <Button variant="secondary" disabled>Disabled</Button>
                <Button variant="primary" icon aria-label="Add">+</Button>
                <Button variant="ghost" icon aria-label="Settings">⚙</Button>
              </div>
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          FEATURE LIST  (new in v2.1.6)
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Content" title="Feature List" description="Accessible checklist component with vertical / horizontal layouts, animated default check icon, per-item icon overrides, and full CSS-variable theming.">
        <div className="nxp-u-stack">
          {/* Vertical default */}
          <DemoBox>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              <div>
                <DemoLabel>Vertical (default) — 6 items</DemoLabel>
                <FeatureList items={featureListItems} />
              </div>
              <div>
                <DemoLabel>Vertical with dividers</DemoLabel>
                <FeatureList items={featureListItems.slice(0, 4)} divider />
              </div>
            </div>
          </DemoBox>

          {/* Horizontal */}
          <DemoBox>
            <DemoLabel>Horizontal — wrapping</DemoLabel>
            <FeatureList
              layout="horizontal"
              items={featureListHorizontal}
              itemGap={20}
            />
          </DemoBox>

          {/* Custom icon + per-item override */}
          <DemoBox>
            <DemoLabel>Custom icon color + no icon on specific item</DemoLabel>
            <FeatureList
              items={[
                'Full feature access',
                'Priority email support',
                { text: 'White-label option', icon: null },
                'Dedicated account manager',
              ]}
              style={{ '--nxpl-icon-bg': 'var(--nxp-color-success)' }}
            />
          </DemoBox>

          {/* Sizing + alignment */}
          <DemoBox>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
              <div>
                <DemoLabel>Icon size 20px</DemoLabel>
                <FeatureList items={['SEO score', 'Schema output', 'Sitemaps']} iconSize={20} />
              </div>
              <div>
                <DemoLabel>Center aligned (horizontal)</DemoLabel>
                <FeatureList layout="horizontal" items={['Fast', 'Light', 'Safe']} align="center" />
              </div>
              <div>
                <DemoLabel>Full width</DemoLabel>
                <FeatureList items={['One', 'Two', 'Three']} fullWidth />
              </div>
            </div>
          </DemoBox>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TYPOGRAPHY
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Content" title="Typography" description="Semantic text component supporting h1–h6, body, lead, small, muted, code, blockquote, and prose mode for rich content blocks.">
        <DemoBox>
          <div className="nxp-u-stack">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              {/* Headings */}
              <div>
                <DemoLabel>Heading variants</DemoLabel>
                <div className="nxp-u-stack--sm">
                  <Typography variant="h1">H1 — Page Title</Typography>
                  <Typography variant="h2">H2 — Section Title</Typography>
                  <Typography variant="h3">H3 — Sub-section</Typography>
                  <Typography variant="h4">H4 — Card Heading</Typography>
                </div>
              </div>
              {/* Body + colors */}
              <div>
                <DemoLabel>Body, muted & color</DemoLabel>
                <div className="nxp-u-stack--sm">
                  <Typography variant="lead">Lead — introductory paragraph text that sets context.</Typography>
                  <Typography variant="body">Body — standard paragraph copy for settings descriptions.</Typography>
                  <Typography variant="sm">Small — hint text, labels, and captions.</Typography>
                  <Typography variant="muted">Muted — secondary information and metadata.</Typography>
                  <Typography variant="body" color="primary">Primary color text</Typography>
                  <Typography variant="body" color="success">Success color text</Typography>
                </div>
              </div>
            </div>
            {/* Code & blockquote */}
            <div>
              <DemoLabel>Code & Blockquote</DemoLabel>
              <div className="nxp-u-stack--sm">
                <Typography variant="code">update_option( 'nexter_seo_settings', $settings );</Typography>
                <Typography variant="blockquote">
                  "The best SEO plugin for WordPress — fast, accessible, and production-ready."
                </Typography>
              </div>
            </div>
            {/* Truncate */}
            <div style={{ maxWidth: 300 }}>
              <DemoLabel>Truncate & line clamp</DemoLabel>
              <Typography variant="body" truncate>
                This is a very long sentence that will be truncated with an ellipsis because it exceeds the container width.
              </Typography>
              <Typography variant="body" clamp={2} style={{ marginTop: 8 }}>
                This body text is clamped to exactly two lines. Any content beyond that will be hidden with an ellipsis, keeping the layout clean and predictable.
              </Typography>
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          FORM FIELDS
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Forms" title="Fields, Inputs & Labels" description="Labelled form controls with hint text, validation error states, and standalone Label component.">
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
              <Input placeholder="Describe the page…" invalid />
            </Field>
            <Field
              label="Forms Support"
              tooltip="Add reCAPTCHA on third-party forms."
              extraContent={<Badge variant="warning">Coming Soon</Badge>}
            >
              <Input placeholder="Disabled until available…" disabled />
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
              tooltip="Enter one image path per line to exclude those images from optimisation."
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

          {/* Standalone Label */}
          <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--nxp-border)' }}>
            <DemoLabel>Standalone Label</DemoLabel>
            <div className="nxp-u-row" style={{ alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Label>Default label</Label>
              <Label required>Required field</Label>
              <Label disabled>Disabled label</Label>
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          SEPARATOR
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Layout" title="Separator" description="Horizontal and vertical rule lines with optional centered label text.">
        <DemoBox>
          <div className="nxp-u-stack">
            <div>
              <DemoLabel>Horizontal</DemoLabel>
              <Separator />
            </div>
            <div>
              <DemoLabel>With label</DemoLabel>
              <Separator label="OR" />
            </div>
            <div>
              <DemoLabel>With section label</DemoLabel>
              <Separator label="Advanced Settings" />
            </div>
            <div>
              <DemoLabel>Vertical (inline)</DemoLabel>
              <div className="nxp-u-row" style={{ height: 24, alignItems: 'center' }}>
                <span style={{ fontSize: 13, color: 'var(--nxp-text-muted)' }}>Edit</span>
                <Separator orientation="vertical" />
                <span style={{ fontSize: 13, color: 'var(--nxp-text-muted)' }}>Duplicate</span>
                <Separator orientation="vertical" />
                <span style={{ fontSize: 13, color: 'var(--nxp-text-muted)' }}>Delete</span>
              </div>
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          COLLAPSIBLE
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Content" title="Collapsible" description="A single generic collapse panel with animated chevron — use when you need one standalone expandable section.">
        <DemoBox>
          <div className="nxp-u-stack--sm" style={{ maxWidth: 540 }}>
            <Collapsible trigger="Advanced SEO Options" defaultOpen>
              <div className="nxp-u-stack--sm" style={{ paddingTop: 8 }}>
                <Toggle label="Enable hreflang tags" />
                <Toggle label="Output breadcrumb schema" />
                <Toggle label="Strip UTM parameters from canonicals" />
              </div>
            </Collapsible>
            <Collapsible trigger="Redirect Manager Settings">
              <div style={{ paddingTop: 8, fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>
                Configure global redirect behaviour — loop detection, chain resolution, and 404 auto-redirect rules.
              </div>
            </Collapsible>
            <Collapsible trigger="Disabled panel" disabled>
              <p>This content is hidden because the panel is disabled.</p>
            </Collapsible>
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          SCROLL AREA
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Layout" title="ScrollArea" description="Custom-scrollbar container — use for long lists inside fixed-height panels.">
        <DemoBox>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div>
              <DemoLabel>Vertical scroll (200px)</DemoLabel>
              <ScrollArea maxHeight="200px">
                {scrollContent.map((row) => (
                  <div key={row.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 4px',
                    borderBottom: '1px solid var(--nxp-border)',
                    fontSize: 13,
                    color: 'var(--nxp-text)',
                  }}>
                    <span>{row.path}</span>
                    <Tag variant={row.status === 'Published' ? 'success' : 'warning'}>{row.status}</Tag>
                  </div>
                ))}
              </ScrollArea>
            </div>
            <div>
              <DemoLabel>Horizontal scroll</DemoLabel>
              <ScrollArea horizontal>
                <div style={{ display: 'flex', gap: 8, paddingBottom: 4 }}>
                  {Array.from({ length: 14 }, (_, i) => (
                    <Badge key={i} variant={i % 2 === 0 ? 'primary' : 'default'} style={{ whiteSpace: 'nowrap' }}>
                      Tag {i + 1}
                    </Badge>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          ASPECT RATIO
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Layout" title="AspectRatio" description="Constrains content to a fixed ratio — useful for images, embeds, and media cards.">
        <DemoBox>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 640 }}>
            {[['16:9', 16/9], ['4:3', 4/3], ['1:1', 1]].map(([label, ratio]) => (
              <div key={label}>
                <DemoLabel>{label}</DemoLabel>
                <AspectRatio ratio={ratio}>
                  <div style={{
                    width: '100%', height: '100%',
                    background: 'var(--nxp-color-primary-subtle)',
                    borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 600, color: 'var(--nxp-color-primary)',
                  }}>
                    {label}
                  </div>
                </AspectRatio>
              </div>
            ))}
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          CONTAINER (layout primitive)
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Layout" title="Container" description="Flex and grid layout primitive with semantic gap tokens, responsive columns, and Item sub-component.">
        <DemoBox>
          <div className="nxp-u-stack">
            <div>
              <DemoLabel>Flex row — gap md, justify between</DemoLabel>
              <Container direction="row" justify="between" align="center" gap="md"
                style={{ background: 'var(--nxp-color-primary-subtle)', borderRadius: 8, padding: 12 }}>
                <Tag variant="primary">SEO</Tag>
                <Tag variant="success">Published</Tag>
                <Tag variant="warning">Draft</Tag>
                <Tag variant="error">Error</Tag>
                <Badge variant="gradient">Pro</Badge>
              </Container>
            </div>
            <div>
              <DemoLabel>Grid — 3 columns</DemoLabel>
              <Container containerType="grid" cols={3} gap="sm">
                {['Canonical', 'Open Graph', 'Schema', 'Sitemap', 'Robots', 'IndexNow'].map((label) => (
                  <Container.Item key={label}>
                    <div style={{
                      padding: '10px 14px',
                      background: 'var(--nxp-bg-alt)',
                      borderRadius: 6,
                      fontSize: 13,
                      fontWeight: 500,
                      color: 'var(--nxp-text)',
                      textAlign: 'center',
                    }}>
                      {label}
                    </div>
                  </Container.Item>
                ))}
              </Container>
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          DROPDOWN
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Selection" title="Dropdown" description="Fully accessible custom listbox with keyboard navigation, sub-labels, dividers, and three height sizes.">
        <DemoBox>
          <div className="nxp-u-stack">
            <div>
              <DemoLabel>Default (md) — with sub-labels & divider</DemoLabel>
              <div className="nxp-u-row">
                <Dropdown options={dropOptions} value={dropVal} onChange={setDropVal} placeholder="Post status…" />
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
                <p style={{ marginTop: 10, fontSize: 13, color: 'var(--nxp-text-muted)' }}>
                  Selected: <strong>{dropVal}</strong>
                </p>
              )}
            </div>
            <div>
              <DemoLabel>Size variants — sm (36px) · md (44px) · lg (48px)</DemoLabel>
              <div className="nxp-u-row" style={{ alignItems: 'center' }}>
                <Dropdown
                  size="sm"
                  options={[{ value: 'asc', label: 'A → Z' }, { value: 'desc', label: 'Z → A' }]}
                  placeholder="Sort (sm)…"
                />
                <Dropdown
                  size="md"
                  options={[{ value: 'published', label: 'Published' }, { value: 'draft', label: 'Draft' }]}
                  placeholder="Status (md)…"
                />
                <Dropdown
                  size="lg"
                  options={[{ value: 'article', label: 'Article' }, { value: 'product', label: 'Product' }, { value: 'faq', label: 'FAQ' }]}
                  placeholder="Schema type (lg)…"
                />
              </div>
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TOGGLE / CHECKBOX / RADIO
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Controls" title="Toggle, Checkbox & Radio" description="React-controlled interactive states with accessible keyboard support.">
        <DemoBox>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
            <div className="nxp-u-stack--sm">
              <DemoLabel>Toggle</DemoLabel>
              <Toggle checked={toggle1} onChange={setToggle1} label="Enable indexing" />
              <Toggle checked={toggle2} onChange={setToggle2} label="Noindex page" />
              <Toggle checked={true} disabled label="Always on (disabled)" />
              <Toggle checked={true} variant="success" label="Success variant" />
            </div>
            <div className="nxp-u-stack--sm">
              <DemoLabel>Checkbox</DemoLabel>
              <Checkbox checked={checked1} onChange={setChecked1} label="Enable canonical URL" />
              <Checkbox checked={checked2} onChange={setChecked2} label="Override robots.txt" />
              <Checkbox checked={false} disabled label="Disabled option" />
            </div>
            <div className="nxp-u-stack--sm">
              <DemoLabel>Radio</DemoLabel>
              <Radio name="framework" value="react"    checked={radio === 'react'}    onChange={setRadio} label="React" />
              <Radio name="framework" value="vue"      checked={radio === 'vue'}      onChange={setRadio} label="Vue" />
              <Radio name="framework" value="svelte"   checked={radio === 'svelte'}   onChange={setRadio} label="Svelte" />
              <Radio name="framework" value="disabled" checked={false} disabled                           label="Disabled" />
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          FEATURE TOGGLE CARD
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Composite" title="Feature Toggle Card" description="Settings-dashboard card with plan badge (PRO/FREEMIUM), NEW badge, tooltip, locked state with upgrade CTA, and controlled toggle.">
        <DemoBox>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 540 }}>
            <FeatureToggleCard title="Adobe Fonts" tooltip="Load fonts directly from Adobe Fonts CDN without hosting them locally." docsLabel="Read Docs" onDocsClick={() => {}} isEnabled={ftcStates.adobe} onToggle={() => ftcToggle('adobe')} onSettingsClick={() => {}} />
            <FeatureToggleCard title="SMTP Email" tooltip="Send transactional emails via your own SMTP server." planLabel="FREEMIUM" showBadge badgeText="BETA" badgeVariant="beta" docsLabel="Read Docs" onDocsClick={() => {}} isEnabled={ftcStates.smtp} onToggle={() => ftcToggle('smtp')} onSettingsClick={() => {}} />
            <FeatureToggleCard title="Advanced Cache" tooltip="Full-page caching layer for faster page loads." isNew docsLabel="Read Docs" onDocsClick={() => {}} isEnabled={ftcStates.cache} onToggle={() => ftcToggle('cache')} onSettingsClick={() => {}} />
            <FeatureToggleCard title="White Label" tooltip="Remove all Nexter branding from the admin interface." planLabel="PRO" isLocked docsLabel="Read Docs" onDocsClick={() => {}} isEnabled={ftcStates.wl} onToggle={() => ftcToggle('wl')} onUpgradeClick={() => {}} />
            <FeatureToggleCard title="AI Content Assistant" tooltip="Generate SEO-optimised meta descriptions using AI." planLabel="PRO" isNew isLocked docsLabel="Read Docs" onDocsClick={() => {}} isEnabled={ftcStates.ai} onToggle={() => ftcToggle('ai')} onUpgradeClick={() => {}} tooltipPosition="bottom" />
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TABS
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Navigation" title="Tabs" description="Three tab variants: pill (default), underline, and vertical with sub-tabs.">
        <div className="nxp-u-stack">
          <DemoBox>
            <DemoLabel>Pill (default)</DemoLabel>
            <Tabs tabs={tabsPill} activeTab={tabPill} onTabChange={setTabPill} />
          </DemoBox>
          <DemoBox>
            <DemoLabel>Underline</DemoLabel>
            <Tabs variant="underline" tabs={tabsUnder} activeTab={tabUnder} onTabChange={setTabUnder} />
          </DemoBox>
          <DemoBox>
            <DemoLabel>Vertical with sub-tabs</DemoLabel>
            <Tabs variant="vertical" tabs={tabsVert} activeTab={tabVert} onTabChange={setTabVert} />
          </DemoBox>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TAGS & BADGES
      ══════════════════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════════════════
          ALERTS
      ══════════════════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════════════════
          NOTICES
      ══════════════════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════════════════
          TOASTS
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Feedback" title="Toasts" description="Dark floating notifications for async confirmations and errors.">
        <DemoBox>
          <div className="nxp-u-row" style={{ flexWrap: 'wrap', gap: 12 }}>
            <Toast title="Settings saved" description="Your SEO configuration has been updated." onClose={() => {}} />
            <Toast variant="error" title="Save failed" description="Could not write to the database. Please try again." onClose={() => {}} />
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          BANNERS
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Feedback" title="Banners" description="Prominent section-level announcements with optional CTA actions.">
        <DemoBox>
          <div className="nxp-u-stack--sm">
            <Banner title="Upgrade to Nexter SEO Pro" text="Unlock schema templates, advanced redirects, and priority indexing with the Pro plan." size="lg" actions={<><Button variant="primary" size="sm">Upgrade now</Button><Button variant="ghost" size="sm">Learn more</Button></>} />
            <Banner variant="success" title="Plugin updated successfully" text="Nexter Extension has been updated to v2.4.0. All features are working correctly." />
            <p style={{ fontSize: 12, color: 'var(--nxp-text-muted)', margin: '8px 0 0' }}>Warning — sizes</p>
            <Banner variant="warning" size="sm" title="Canonical URLs not configured" text="Dense row: conflicting canonical tags detected." actions={<Button variant="secondary" size="sm">Fix</Button>} />
            <Banner variant="warning" title="Canonical URLs not configured" text="Some pages have conflicting canonical tags. Review the canonical settings panel." actions={<Button variant="secondary" size="sm">Review now</Button>} />
            <Banner variant="warning" size="lg" title="Canonical URLs not configured" text="Highlighted callout: review canonical settings before publishing bulk changes." actions={<Button variant="secondary" size="sm">Review now</Button>} />
            <Banner variant="error" title="IndexNow API key missing" text="Add your IndexNow API key to enable instant URL submission to search engines." actions={<Button variant="destructive" size="sm">Add key</Button>} />
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          PROGRESS
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Data" title="Progress Bars" description="Animated fill bars for task completion, scores, and metrics.">
        <DemoBox>
          <div className="nxp-u-stack" style={{ maxWidth: 480 }}>
            {[['SEO Score', 78, 'default'], ['Indexed Pages', 100, 'success'], ['Redirect health', 55, 'warning']].map(([label, value, variant]) => (
              <div key={label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--nxp-text-muted)', marginBottom: 6 }}>
                  <span>{label}</span><span>{value}%</span>
                </div>
                <Progress value={value} variant={variant === 'default' ? undefined : variant} />
              </div>
            ))}
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          SKELETON & SPINNER
      ══════════════════════════════════════════════════════ */}
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
              {['sm', 'md', 'lg'].map((size) => (
                <div key={size} style={{ textAlign: 'center' }}>
                  <Spinner size={size === 'md' ? undefined : size} />
                  <p style={{ fontSize: 11, color: 'var(--nxp-text-muted)', marginTop: 4 }}>{size}</p>
                </div>
              ))}
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          MODAL
      ══════════════════════════════════════════════════════ */}
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
              <Field label="Meta title"><Input placeholder="Homepage — Nexter SEO" /></Field>
              <Field label="Meta description" hint="Optimal length: 120–160 characters.">
                <Textarea placeholder="A short, compelling description of this page…" rows={3} />
              </Field>
              <Toggle label="Override default title template" />
            </div>
          </Modal>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          DRAWER
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Overlay" title="Drawer" description="Slide-in panel from any edge — right (default), left, top, bottom. Backdrop click and Esc to close.">
        <DemoBox>
          <div className="nxp-u-row">
            <Button variant="primary" onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
          </div>
          <Drawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            title="Schema Settings"
            byline="Configure JSON-LD for this post type"
            footer={
              <>
                <Button variant="ghost" onClick={() => setDrawerOpen(false)}>Cancel</Button>
                <Button variant="primary" onClick={() => setDrawerOpen(false)}>Apply</Button>
              </>
            }
          >
            <div className="nxp-u-stack">
              <Field label="Schema type">
                <Select
                  options={[
                    { value: 'article', label: 'Article' },
                    { value: 'product', label: 'Product' },
                    { value: 'faq', label: 'FAQ' },
                  ]}
                  placeholder="Select schema type…"
                />
              </Field>
              <Toggle label="Output JSON-LD on this post type" />
              <Toggle label="Include breadcrumb schema" />
              <Alert variant="info">Schema changes take effect on the next page load.</Alert>
            </div>
          </Drawer>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          DIALOG, SHEET, POPOVER
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Overlay" title="Dialog, Sheet & Popover" description="Confirm dialogs, card layouts, and inline info popover patterns.">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
          <DemoBox>
            <DemoLabel>Dialog</DemoLabel>
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
            <DemoLabel>Sheet</DemoLabel>
            <Sheet title="Schema Configuration" byline="JSON-LD settings for this post" footer={<><Button variant="ghost" size="sm">Reset</Button><Button variant="primary" size="sm">Apply</Button></>}>
              <p style={{ fontSize: 13.5, color: 'var(--nxp-text-muted)', lineHeight: 1.6 }}>
                Configure structured data output for this post type. Changes apply immediately on save.
              </p>
            </Sheet>
          </DemoBox>
          <DemoBox>
            <DemoLabel>Popover</DemoLabel>
            <Popover
              title="Focus keyword tip"
              description="Your focus keyword should appear in the first paragraph, at least one heading, and the meta description."
              footer={<Button variant="link" size="sm">Read guide →</Button>}
            />
          </DemoBox>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          SLIDER, STEPPER, SEGMENTED
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Input Controls" title="Slider, Stepper & Segmented" description="Numeric input patterns for ranges, counts, and option groups.">
        <DemoBox>
          <div className="nxp-u-stack">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <Slider label="Menu Width" value={sliderVal} onChange={setSliderVal} unit={sliderUnit} units={['px', '%', 'rem', 'em']} onUnitChange={setSliderUnit} min={0} max={600} step={1} />
              <Slider label="Border Radius" defaultValue={8} unit="px" min={0} max={48} step={1} />
              <Slider label="Opacity" value={sliderOpacity} onChange={setSliderOpacity} unit={false} min={0} max={100} step={1} />
            </div>
            <div>
              <DemoLabel>Stepper</DemoLabel>
              <div className="nxp-u-row">
                <Stepper value={stepVal} onChange={setStepVal} min={1} max={20} />
                <span style={{ fontSize: 13, color: 'var(--nxp-text-muted)' }}>max redirects per page</span>
              </div>
            </div>
            <div>
              <DemoLabel>Segmented</DemoLabel>
              <Segmented
                options={[{ value: 'monthly', label: 'Monthly' }, { value: 'yearly', label: 'Yearly' }, { value: 'lifetime', label: 'Lifetime' }]}
                value={seg}
                onChange={setSeg}
              />
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          SEARCH
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Input" title="Search" description="Icon-prefixed search input for filtering lists and content.">
        <DemoBox style={{ maxWidth: 400 }}>
          <Search value={search} onChange={setSearch} placeholder="Search redirects…" />
          {search && <p style={{ fontSize: 12, color: 'var(--nxp-text-muted)', marginTop: 8 }}>Query: <strong>{search}</strong></p>}
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          CAROUSEL
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Media" title="Carousel" description="Snap-scroll carousel with prev/next controls and dot indicators.">
        <Carousel slides={carouselSlides} />
      </Section>

      {/* ══════════════════════════════════════════════════════
          ACCORDION
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Content" title="Accordion" description="Expandable FAQ sections with smooth open/close toggle.">
        <Accordion items={accordionItems} defaultOpen={['a1']} />
      </Section>

      {/* ══════════════════════════════════════════════════════
          COMBOBOX
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Selection" title="Combobox" description="Filterable searchable dropdown with full keyboard navigation.">
        <DemoBox style={{ maxWidth: 320 }}>
          <Field label="Framework">
            <Combobox options={comboOptions} value={combo} onChange={setCombo} placeholder="Search framework…" />
          </Field>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          PAGINATION
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Navigation" title="Pagination" description="Page number navigation with prev/next controls.">
        <DemoBox>
          <Pagination page={page} totalPages={7} onChange={setPage} />
          <p style={{ fontSize: 12, color: 'var(--nxp-text-muted)', marginTop: 10 }}>Current page: {page}</p>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TABLE
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Data" title="Table" description="Striped data table with sortable columns, numeric alignment, and action slots.">
        <DemoBox style={{ padding: 0, overflow: 'hidden' }}>
          <Table
            columns={tableColumns}
            rows={tableRows}
            striped
            actions={() => (
              <>
                <Button variant="ghost" size="sm">Edit</Button>
                <Button variant="ghost" size="sm">View</Button>
              </>
            )}
          />
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          AVATAR, KBD, TOOLTIP
      ══════════════════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════════════════
          STAT & COUNT CARDS
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Analytics" title="Stat Cards & Count Cards" description="Key metric display cards for dashboards and overview panels.">
        <div className="nxp-u-stack">
          <div>
            <DemoLabel>StatCard</DemoLabel>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
              <StatCard label="Total Pages"  value="1,248" meta={<Tag variant="success">↑ 12%</Tag>} />
              <StatCard label="SEO Score"    value="94"    meta={<Tag variant="primary">Excellent</Tag>} />
              <StatCard label="404 Errors"   value="3"     meta={<Tag variant="warning">Review needed</Tag>} />
              <StatCard label="Redirects"    value="47"    meta="Active rules" />
            </div>
          </div>
          <div>
            <DemoLabel>CountCard</DemoLabel>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              <CountCard value="90+" label="Total Blocks"   badge="Active" />
              <CountCard value="12"  label="Pro Templates"  badge="Pro" />
              <CountCard value="3"   label="Pending Issues" badge="Review" />
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          ICONBOX
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Features" title="Icon Boxes" description="Feature highlight cards with icon, title, description, and CTA link.">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <IconBox topline="Step 1" step={1} title="Configure Meta Tags"   description="Set global templates for title and description tags across all post types." cta="Configure" />
          <IconBox topline="Step 2" step={2} title="Enable Schema Output"  description="Generate valid JSON-LD structured data for posts, pages, and custom types."  cta="Enable" />
          <IconBox topline="Step 3" step={3} title="Submit to IndexNow"    description="Bulk-submit new and updated URLs to Bing, Yandex, and other search engines."  cta="Submit" />
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          EMPTY STATE
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="States" title="Empty State" description="Friendly placeholder for empty lists and search results with no matches.">
        <DemoBox>
          <EmptyState
            icon="🔍"
            title="No redirects found"
            description="No redirect rules match your current search. Try adjusting your filters or add a new redirect."
            action={<Button variant="primary" size="sm">Add redirect</Button>}
          />
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TOGGLE GRID
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Controls" title="Toggle Grid" description="Compact grid of labeled toggles — controlled via valueMap, with PRO badges, tooltipPosition support, and responsive columns.">
        <DemoBox>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <DemoLabel>2 Columns (Controlled)</DemoLabel>
              <ToggleGrid items={tgItems} columns={2} valueMap={tgValues} onChange={(key, newValue) => setTgValues((v) => ({ ...v, [key]: newValue }))} />
            </div>
            <div>
              <DemoLabel>3 Columns with PRO badges</DemoLabel>
              <ToggleGrid
                columns={3}
                tooltipPosition="bottom"
                items={[
                  { key: 'canonical', label: 'Canonical URL',   value: true,  tooltip: 'Output canonical link tags.' },
                  { key: 'og',        label: 'Open Graph',       value: false, tooltip: 'Emit og: meta tags.',       isPro: true },
                  { key: 'schema',    label: 'JSON-LD Schema',   value: true,  tooltip: 'Structured data output.',   isPro: true, proText: 'PRO' },
                  { key: 'sitemap',   label: 'XML Sitemap',      value: false, tooltip: 'Auto-generate sitemap.xml.' },
                  { key: 'indexnow',  label: 'IndexNow',         value: false, tooltip: 'Instant URL submission.',   isPro: true, proText: 'PRO' },
                  { key: 'llms',      label: 'LLMs.txt',         value: false, tooltip: 'Generate LLMs.txt file.' },
                ]}
              />
            </div>
            <div>
              <DemoLabel>1 Column</DemoLabel>
              <ToggleGrid items={tgItems.slice(0, 3)} columns={1} />
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          BREADCRUMB
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Navigation" title="Breadcrumb" description="Contextual navigation trail for settings pages and deep views.">
        <DemoBox>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Breadcrumb items={[{ label: 'Dashboard', onClick: () => {} }, { label: 'Settings', onClick: () => {} }, { label: 'SEO' }]} />
            <Breadcrumb showHome items={[{ label: 'Home', href: '#' }, { label: 'Plugins', href: '#' }, { label: 'Nexter SEO', href: '#' }, { label: 'Schema Settings' }]} />
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          COPY INPUT
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Utilities" title="CopyInput" description="Read-only input with one-click clipboard copy — for API keys, license keys, shortcodes.">
        <DemoBox>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 480 }}>
            <CopyInput label="License Key" value="NXTR-PRO-A1B2-C3D4-E5F6" hint="Renews annually. Do not share." />
            <CopyInput label="Shortcode"   value='[nexter_schema type="article"]' />
            <CopyInput label="API Endpoint" value="https://api.nexterseo.com/v1/index" copyText="Copy URL" copiedText="URL Copied!" />
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          CONFIRM BUTTON
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Actions" title="ConfirmButton" description="Inline two-step confirmation pattern — prevents accidental destructive actions.">
        <DemoBox>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-start' }}>
            <ConfirmButton variant="error"   message="Delete this redirect?" onConfirm={() => {}} confirmText="Yes, delete" cancelText="Cancel">Delete Redirect</ConfirmButton>
            <ConfirmButton variant="warning" message="Reset to defaults?"    onConfirm={() => {}} confirmText="Reset"       cancelText="Cancel">Reset Settings</ConfirmButton>
            <ConfirmButton variant="primary" onConfirm={() => {}}            confirmText="Publish"                          cancelText="Cancel">Publish Changes</ConfirmButton>
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          NUMBER INPUT
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Form Controls" title="NumberInput" description="Precise numeric entry with +/− step buttons, min/max clamping, prefix/suffix support.">
        <DemoBox>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'flex-end' }}>
            <NumberInput label="Cache TTL"   value={numVal} onChange={setNumVal} min={1} max={9999} step={1} suffix="s" />
            <NumberInput label="Font Size"   defaultValue={16} min={8} max={72} step={1} suffix="px" />
            <NumberInput label="Line Height" defaultValue={1.5} min={1} max={3} step={0.1} precision={1} />
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          RADIO GROUP
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Controls" title="RadioGroup" description="Horizontal bordered radio group with per-item tooltips and tooltipPosition support — shared name auto-generated if omitted.">
        <DemoBox>
          <div className="nxp-u-stack">
            <div>
              <DemoLabel>Billing period (tooltip position: top)</DemoLabel>
              <RadioGroup
                options={radioGroupOptions}
                value={radioGroupVal}
                onChange={setRadioGroupVal}
                tooltipPosition="top"
              />
              <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 12, color: 'var(--nxp-text-muted)', marginTop: 10 }}>
                Selected: <strong>{radioGroupVal}</strong>
              </p>
            </div>
            <div>
              <DemoLabel>Indexing directive (tooltip position: bottom)</DemoLabel>
              <RadioGroup
                options={radioGroupIndexing}
                value={radioGroupIndex}
                onChange={setRadioGroupIndex}
                tooltipPosition="bottom"
              />
            </div>
            <div>
              <DemoLabel>Disabled group</DemoLabel>
              <RadioGroup
                options={radioGroupOptions}
                value="yearly"
                onChange={() => {}}
                disabled
              />
            </div>
            <div>
              <DemoLabel>Per-item disabled + mixed tooltipPosition</DemoLabel>
              <RadioGroup
                options={[
                  { value: 'auto',   label: 'Auto',   tooltip: 'Follow global settings.',     tooltipPosition: 'right' },
                  { value: 'manual', label: 'Manual', tooltip: 'Override per page.',           tooltipPosition: 'bottom' },
                  { value: 'off',    label: 'Off',    tooltip: 'Disabled option.', disabled: true },
                ]}
                value="auto"
                onChange={() => {}}
              />
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          PRO POPUP
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Overlay" title="ProPopup" description="Branded upgrade upsell modal with feature list, Crown CTA, and optional bottom note. Supports portal, scroll lock, and Esc-to-close.">
        <DemoBox>
          <div className="nxp-u-stack">
            <div className="nxp-u-row">
              <Button variant="grad" onClick={() => setProPopupOpen(true)}>Open Upgrade Popup</Button>
            </div>
            <ProPopup
              open={proPopupOpen}
              onClose={() => setProPopupOpen(false)}
              title="Unlock Nexter SEO Pro"
              list={[
                'Advanced schema templates (Article, Product, FAQ)',
                'Redirect manager with 301/302/307/308 support',
                '404 monitor with bot-filtering & bulk-delete',
                'IndexNow bulk URL submission',
                'White-label branding options',
                'Priority email support',
              ]}
              buttonText="Upgrade to Pro"
              onButtonClick={() => setProPopupOpen(false)}
              bottomText='Already have a license? <a href="#">Enter key →</a>'
            />
            <div>
              <DemoLabel>Inline (portal=false) — always visible</DemoLabel>
              <div style={{ position: 'relative', minHeight: 280 }}>
                <ProPopup
                  open
                  portal={false}
                  title="Unlock White Label"
                  list={[
                    'Remove all Nexter branding',
                    'Custom admin menu label',
                    'Branded client dashboards',
                  ]}
                  buttonText="Upgrade Now"
                  onButtonClick={() => {}}
                  bottomText="30-day money-back guarantee"
                />
              </div>
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          FILE UPLOAD
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Form Controls" title="FileUpload / Dropzone" description="Drag-and-drop file upload with preview.">
        <DemoBox>
          <div style={{ maxWidth: 480 }}>
            <FileUpload value={files} onChange={setFiles} accept="image/*,.pdf" multiple maxSize={5 * 1024 * 1024} maxSizeText="PNG, JPG, PDF up to 5 MB" />
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          COLOR PICKER
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Form Controls" title="ColorPicker" description="HSV color picker with 2D gradient box, hue slider, hex input, and preset swatches.">
        <DemoBox>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'flex-start' }}>
            <div>
              <DemoLabel>Standard</DemoLabel>
              <ColorPicker value={color} onChange={setColor} />
              <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 11, color: 'var(--nxp-text-faint)', marginTop: 8 }}>Value: {color}</p>
            </div>
            <div>
              <DemoLabel>With Alpha</DemoLabel>
              <ColorPicker defaultValue="#3B82F6" showAlpha />
            </div>
            <div>
              <DemoLabel>No swatches</DemoLabel>
              <ColorPicker defaultValue="#22C55E" swatches={[]} />
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          DATE PICKER
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Form Controls" title="DatePicker" description="Calendar popover date selector with min/max support, Today shortcut, and clearable input.">
        <DemoBox>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'flex-start' }}>
            <div>
              <DemoLabel>Single Date (controlled)</DemoLabel>
              <DatePicker value={date} onChange={setDate} placeholder="Select expiry date" />
              <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 11, color: 'var(--nxp-text-faint)', marginTop: 8 }}>Value: {date || '—'}</p>
            </div>
            <div>
              <DemoLabel>With min/max</DemoLabel>
              <DatePicker defaultValue="2026-05-01" minDate="2026-01-01" maxDate="2026-12-31" />
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          DATE RANGE PICKER
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Form Controls" title="DateRangePicker" description="Two-calendar range picker for analytics filters.">
        <DemoBox>
          <DateRangePicker value={range} onChange={setRange} startPlaceholder="From date" endPlaceholder="To date" />
          <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 11, color: 'var(--nxp-text-faint)', marginTop: 10 }}>
            Range: {range.start || '—'} → {range.end || '—'}
          </p>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          MULTI-SELECT
      ══════════════════════════════════════════════════════ */}
      <Section eyebrow="Input Controls" title="MultiSelect" description="Div-based multi-select with tag chips, grouped options, live search, and full keyboard navigation.">
        <DemoBox>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 540 }}>
            <div>
              <DemoLabel>Grouped — searchable (controlled)</DemoLabel>
              <MultiSelect options={msOptions} value={msValue} onChange={setMsValue} placeholder="Select pages…" searchPlaceholder="Search pages…" />
              <p style={{ fontFamily: 'var(--nxp-font)', fontSize: 11.5, color: 'var(--nxp-text-muted)', marginTop: 8 }}>
                Selected: {msValue.length ? msValue.join(', ') : '—'}
              </p>
            </div>
            <div>
              <DemoLabel>No search / Disabled</DemoLabel>
              <div className="nxp-u-row">
                <div style={{ flex: 1 }}>
                  <MultiSelect options={msOptions} value={[]} onChange={() => {}} searchable={false} placeholder="Select pages…" />
                </div>
                <div style={{ flex: 1 }}>
                  <MultiSelect options={msOptions} value={['entire', 'front']} onChange={() => {}} disabled />
                </div>
              </div>
            </div>
          </div>
        </DemoBox>
      </Section>

      {/* ══════════════════════════════════════════════════════
          STATUS
      ══════════════════════════════════════════════════════ */}
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

      {/* ── Footer ── */}
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
          Nexter UI Components v2.1.72 — Nexter Design System
        </p>
        <div className="nxp-u-row--sm">
          <Badge variant="primary">React 18</Badge>
          <Badge variant="success">66 Components</Badge>
          <Badge variant="gradient">WCAG 2.2 AA</Badge>
        </div>
      </div>

    </div>
  );
}
