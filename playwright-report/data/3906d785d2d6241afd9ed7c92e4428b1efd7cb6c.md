# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: overlays.spec.js >> Alert >> dismissible notice hides after close click
- Location: e2e\overlays.spec.js:146:7

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('.nxp-notice').last()
Expected: not visible
Received: visible
Timeout:  5000ms

Call log:
  - Expect "not toBeVisible" with timeout 5000ms
  - waiting for locator('.nxp-notice').last()
    2 × locator resolved to <div role="status" class="nxp-notice nxp-notice--error is-dismissing ">…</div>
      - unexpected value "visible"
    6 × locator resolved to <div role="status" class="nxp-notice nxp-notice--warning ">…</div>
      - unexpected value "visible"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e7]: "N"
      - heading "Nexter UI Components" [level=1] [ref=e8]
      - generic [ref=e9]: v1.0
    - paragraph [ref=e10]: Design system component library — interactive demo
  - generic [ref=e11]:
    - generic [ref=e12]:
      - paragraph [ref=e13]: Interactions
      - heading "Buttons" [level=2] [ref=e14]
      - paragraph [ref=e15]: Primary actions, secondary controls, ghost, destructive, and link styles across all sizes.
    - generic [ref=e17]:
      - generic [ref=e18]:
        - button "Primary" [ref=e19] [cursor=pointer]
        - button "Secondary" [ref=e20] [cursor=pointer]
        - button "Ghost" [ref=e21] [cursor=pointer]
        - button "Destructive" [ref=e22] [cursor=pointer]
        - button "Link button" [ref=e23] [cursor=pointer]
      - generic [ref=e24]:
        - button "Small" [ref=e25] [cursor=pointer]
        - button "Medium" [ref=e26] [cursor=pointer]
        - button "Large" [ref=e27] [cursor=pointer]
      - generic [ref=e28]:
        - button "Saving…" [disabled]: Saving…
        - button "Disabled" [disabled]
        - button "Add" [ref=e29] [cursor=pointer]: +
        - button "Settings" [ref=e30] [cursor=pointer]: ⚙
  - generic [ref=e31]:
    - generic [ref=e32]:
      - paragraph [ref=e33]: Forms
      - heading "Fields & Inputs" [level=2] [ref=e34]
      - paragraph [ref=e35]: Labelled form controls with hint text and validation error states.
    - generic [ref=e37]:
      - generic [ref=e38]:
        - generic [ref=e40]: Page title
        - textbox "Enter page title…" [ref=e41]
        - generic [ref=e42]: Used as the browser tab title.
      - generic [ref=e43]:
        - generic [ref=e45]: Meta description
        - textbox "Describe the page…" [ref=e46]
        - alert [ref=e47]: Meta description is required.
      - generic [ref=e48]:
        - generic [ref=e50]: Post type
        - combobox [ref=e51] [cursor=pointer]:
          - option "Choose type…" [disabled] [selected]
          - option "Post"
          - option "Page"
          - option "Product"
        - generic [ref=e52]: Select the content type.
      - generic [ref=e53]:
        - generic [ref=e55]: Redirect target (disabled)
        - textbox "https://example.com" [disabled] [ref=e56]
      - generic [ref=e57]:
        - generic [ref=e58]:
          - generic [ref=e59]: Exclude Images From Optimisation
          - button "More information" [ref=e61] [cursor=pointer]:
            - img [ref=e62]
        - generic [ref=e65]:
          - textbox "Enter one path per line" [ref=e66]
          - generic [ref=e67]: 0/500
        - generic [ref=e68]: One path per line.
  - generic [ref=e69]:
    - generic [ref=e70]:
      - paragraph [ref=e71]: Selection
      - heading "Dropdown" [level=2] [ref=e72]
      - paragraph [ref=e73]: Fully accessible custom listbox with keyboard navigation, sub-labels, and dividers.
    - generic [ref=e75]:
      - button "Post status…" [ref=e77] [cursor=pointer]:
        - generic [ref=e78]: Post status…
        - img [ref=e79]
      - button "Language…" [ref=e82] [cursor=pointer]:
        - generic [ref=e83]: Language…
        - img [ref=e84]
      - button "Disabled" [disabled] [ref=e87]:
        - generic [ref=e88]: Disabled
        - img [ref=e89]
  - generic [ref=e91]:
    - generic [ref=e92]:
      - paragraph [ref=e93]: Controls
      - heading "Toggle, Checkbox & Radio" [level=2] [ref=e94]
      - paragraph [ref=e95]: React-controlled interactive states with accessible keyboard support.
    - generic [ref=e97]:
      - generic [ref=e98]:
        - paragraph [ref=e99]: Toggle
        - switch "Enable indexing" [checked] [ref=e100] [cursor=pointer]:
          - generic [ref=e103]: Enable indexing
        - switch "Noindex page" [ref=e104] [cursor=pointer]:
          - generic [ref=e107]: Noindex page
        - switch "Always on (disabled)" [checked] [disabled] [ref=e108]:
          - generic [ref=e111]: Always on (disabled)
        - switch "Success variant" [checked] [ref=e112] [cursor=pointer]:
          - generic [ref=e115]: Success variant
      - generic [ref=e116]:
        - paragraph [ref=e117]: Checkbox
        - generic [ref=e118] [cursor=pointer]:
          - checkbox [checked] [ref=e119]:
            - img [ref=e120]
          - generic [ref=e122]: Enable canonical URL
        - generic [ref=e123] [cursor=pointer]:
          - checkbox [ref=e124]
          - generic [ref=e125]: Override robots.txt
        - generic [ref=e126]:
          - checkbox [disabled] [ref=e127]
          - generic [ref=e128]: Disabled option
      - generic [ref=e129]:
        - paragraph [ref=e130]: Radio
        - generic [ref=e131] [cursor=pointer]:
          - radio [checked] [ref=e132]
          - generic [ref=e134]: React
        - generic [ref=e135] [cursor=pointer]:
          - radio [ref=e136]
          - generic [ref=e138]: Vue
        - generic [ref=e139] [cursor=pointer]:
          - radio [ref=e140]
          - generic [ref=e142]: Svelte
        - generic [ref=e143]:
          - radio [disabled] [ref=e144]
          - generic [ref=e146]: Disabled
  - generic [ref=e147]:
    - generic [ref=e148]:
      - paragraph [ref=e149]: Composite
      - heading "Feature Toggle Card" [level=2] [ref=e150]
      - paragraph [ref=e151]: Settings-dashboard card with plan badge (PRO/FREEMIUM), NEW badge, tooltip, locked state with upgrade CTA, and controlled toggle.
    - generic [ref=e153]:
      - generic [ref=e156]:
        - generic [ref=e157]:
          - generic [ref=e158]:
            - generic [ref=e159]: Adobe Fonts
            - button "About Adobe Fonts" [ref=e161] [cursor=pointer]:
              - img [ref=e162]
          - button "Read Docs" [ref=e166] [cursor=pointer]
        - generic [ref=e167]:
          - button "Adobe Fonts settings" [ref=e168] [cursor=pointer]:
            - img [ref=e169]
          - switch [checked] [ref=e172] [cursor=pointer]
      - generic [ref=e175]:
        - generic [ref=e176]: FREEMIUM
        - generic [ref=e178]:
          - generic [ref=e179]:
            - generic [ref=e180]:
              - generic [ref=e181]: SMTP Email
              - generic "BETA feature" [ref=e182]: BETA
              - button "About SMTP Email" [ref=e184] [cursor=pointer]:
                - img [ref=e185]
            - button "Read Docs" [ref=e189] [cursor=pointer]
          - generic [ref=e190]:
            - button "SMTP Email settings" [ref=e191] [cursor=pointer]:
              - img [ref=e192]
            - switch [ref=e195] [cursor=pointer]
      - generic [ref=e200]:
        - generic [ref=e201]:
          - generic [ref=e202]:
            - generic [ref=e203]: Advanced Cache
            - generic "New feature" [ref=e204]: NEW
            - button "About Advanced Cache" [ref=e206] [cursor=pointer]:
              - img [ref=e207]
          - button "Read Docs" [ref=e211] [cursor=pointer]
        - generic [ref=e212]:
          - button "Advanced Cache settings" [ref=e213] [cursor=pointer]:
            - img [ref=e214]
          - switch [ref=e217] [cursor=pointer]
      - generic [ref=e220]:
        - generic [ref=e221]: PRO
        - generic [ref=e223]:
          - generic [ref=e224]:
            - generic [ref=e225]:
              - generic [ref=e226]: White Label
              - button "About White Label" [ref=e228] [cursor=pointer]:
                - img [ref=e229]
            - generic [ref=e232]:
              - button "Read Docs" [disabled] [ref=e233]
              - generic [ref=e234]: ·
              - button "Upgrade" [ref=e235] [cursor=pointer]:
                - text: Upgrade
                - img [ref=e236]
          - button "Upgrade to unlock White Label" [ref=e239] [cursor=pointer]:
            - img [ref=e240]
      - generic [ref=e243]:
        - generic [ref=e244]: PRO
        - generic [ref=e246]:
          - generic [ref=e247]:
            - generic [ref=e248]:
              - generic [ref=e249]: AI Content Assistant
              - generic "New feature" [ref=e250]: NEW
              - button "About AI Content Assistant" [ref=e252] [cursor=pointer]:
                - img [ref=e253]
            - generic [ref=e256]:
              - button "Read Docs" [disabled] [ref=e257]
              - generic [ref=e258]: ·
              - button "Upgrade" [ref=e259] [cursor=pointer]:
                - text: Upgrade
                - img [ref=e260]
          - button "Upgrade to unlock AI Content Assistant" [ref=e263] [cursor=pointer]:
            - img [ref=e264]
  - generic [ref=e267]:
    - generic [ref=e268]:
      - paragraph [ref=e269]: Navigation
      - heading "Tabs" [level=2] [ref=e270]
      - paragraph [ref=e271]: "Three tab variants: pill (default), underline, and vertical with sub-tabs."
    - generic [ref=e272]:
      - generic [ref=e273]:
        - paragraph [ref=e274]: Pill (default)
        - tablist [ref=e275]:
          - generic [ref=e276]:
            - tab "General" [selected] [ref=e277] [cursor=pointer]
            - tab "SEO" [ref=e278] [cursor=pointer]
            - tab "Social" [ref=e279] [cursor=pointer]
          - tabpanel [ref=e280]:
            - paragraph [ref=e281]: General settings content goes here.
      - generic [ref=e282]:
        - paragraph [ref=e283]: Underline
        - tablist [ref=e284]:
          - generic [ref=e285]:
            - tab "Overview" [selected] [ref=e286] [cursor=pointer]
            - tab "Analytics" [ref=e287] [cursor=pointer]
            - tab "Reports" [ref=e288] [cursor=pointer]
          - tabpanel [ref=e289]:
            - paragraph [ref=e290]: Overview content.
      - generic [ref=e291]:
        - paragraph [ref=e292]: Vertical with sub-tabs
        - tablist [ref=e293]:
          - generic [ref=e294]:
            - tab "Account" [selected] [ref=e295] [cursor=pointer]
            - generic [ref=e296]:
              - button "Profile" [ref=e297] [cursor=pointer]
              - button "Billing" [ref=e298] [cursor=pointer]
            - tab "Security" [ref=e299] [cursor=pointer]
            - tab "Notifications" [ref=e300] [cursor=pointer]
          - tabpanel [ref=e301]:
            - paragraph [ref=e302]: Account settings content.
  - generic [ref=e303]:
    - generic [ref=e304]:
      - paragraph [ref=e305]: Labels
      - heading "Tags & Badges" [level=2] [ref=e306]
      - paragraph [ref=e307]: Semantic status labels and count badges in all variants.
    - generic [ref=e309]:
      - generic [ref=e310]:
        - generic [ref=e311]: Default
        - generic [ref=e312]: Primary
        - generic [ref=e313]: Published
        - generic [ref=e314]: Draft
        - generic [ref=e315]: Error
      - generic [ref=e316]:
        - generic [ref=e317]: "42"
        - generic [ref=e318]: New
        - generic [ref=e319]: Live
        - generic [ref=e320]: Beta
        - generic [ref=e321]: Error
        - generic [ref=e322]: Pro
  - generic [ref=e323]:
    - generic [ref=e324]:
      - paragraph [ref=e325]: Feedback
      - heading "Alerts" [level=2] [ref=e326]
      - paragraph [ref=e327]: Inline feedback messages in four semantic variants.
    - generic [ref=e329]:
      - alert [ref=e330]:
        - generic [ref=e331]: i
        - generic [ref=e332]: Your sitemap was submitted to Google Search Console successfully.
      - alert [ref=e333]:
        - generic [ref=e334]: ✓
        - generic [ref=e335]: All 48 redirects are working correctly. No errors detected.
      - alert [ref=e336]:
        - generic [ref=e337]: "!"
        - generic [ref=e338]: IndexNow rate limit approaching — 8 of 10 requests used this window.
      - alert [ref=e339]:
        - generic [ref=e340]: ×
        - generic [ref=e341]: Failed to fetch robots.txt. Check your site's .htaccess configuration.
  - generic [ref=e342]:
    - generic [ref=e343]:
      - paragraph [ref=e344]: Feedback
      - heading "Notices" [level=2] [ref=e345]
      - paragraph [ref=e346]: Dismissible bordered notices with smooth fade-out transition.
    - generic [ref=e348]:
      - status [ref=e349]:
        - generic [ref=e350]: ℹ
        - generic [ref=e351]: You are viewing a cached version of the SEO report. Refresh to update.
        - button "Dismiss" [ref=e352] [cursor=pointer]: ×
      - status [ref=e353]:
        - generic [ref=e354]: ✓
        - generic [ref=e355]: Schema JSON-LD validated successfully. No structured data errors.
        - button "Dismiss" [ref=e356] [cursor=pointer]: ×
      - status [ref=e357]:
        - generic [ref=e358]: ⚠
        - generic [ref=e359]: The focus keyword appears only once in the body. Consider adding more uses.
        - button "Dismiss" [ref=e360] [cursor=pointer]: ×
  - generic [ref=e361]:
    - generic [ref=e362]:
      - paragraph [ref=e363]: Feedback
      - heading "Toasts" [level=2] [ref=e364]
      - paragraph [ref=e365]: Dark floating notifications for async confirmations and errors.
    - generic [ref=e367]:
      - alert [ref=e368]:
        - generic [ref=e369]: ✓
        - generic [ref=e370]:
          - generic [ref=e371]: Settings saved
          - generic [ref=e372]: Your SEO configuration has been updated.
        - button "Close" [ref=e373] [cursor=pointer]: ×
      - alert [ref=e374]:
        - generic [ref=e375]: ✕
        - generic [ref=e376]:
          - generic [ref=e377]: Save failed
          - generic [ref=e378]: Could not write to the database. Please try again.
        - button "Close" [ref=e379] [cursor=pointer]: ×
  - generic [ref=e380]:
    - generic [ref=e381]:
      - paragraph [ref=e382]: Feedback
      - heading "Banners" [level=2] [ref=e383]
      - paragraph [ref=e384]: Prominent section-level announcements with optional CTA actions.
    - generic [ref=e386]:
      - region [ref=e387]:
        - generic [ref=e388]: 🚀
        - generic [ref=e389]:
          - generic [ref=e390]: Upgrade to Nexter SEO Pro
          - paragraph [ref=e391]: Unlock schema templates, advanced redirects, and priority indexing with the Pro plan.
          - generic [ref=e392]:
            - button "Upgrade now" [ref=e393] [cursor=pointer]
            - button "Learn more" [ref=e394] [cursor=pointer]
      - region [ref=e395]:
        - generic [ref=e396]: ✅
        - generic [ref=e397]:
          - generic [ref=e398]: Plugin updated successfully
          - paragraph [ref=e399]: Nexter Extension has been updated to v2.4.0. All features are working correctly.
      - region [ref=e400]:
        - generic [ref=e401]: ⚠️
        - generic [ref=e402]:
          - generic [ref=e403]: Canonical URLs not configured
          - paragraph [ref=e404]: Some pages have conflicting canonical tags. Review the canonical settings panel.
          - button "Review now" [ref=e406] [cursor=pointer]
      - region [ref=e407]:
        - generic [ref=e408]: ❌
        - generic [ref=e409]:
          - generic [ref=e410]: IndexNow API key missing
          - paragraph [ref=e411]: Add your IndexNow API key to enable instant URL submission to search engines.
          - button "Add key" [ref=e413] [cursor=pointer]
  - generic [ref=e414]:
    - generic [ref=e415]:
      - paragraph [ref=e416]: Data
      - heading "Progress Bars" [level=2] [ref=e417]
      - paragraph [ref=e418]: Animated fill bars for task completion, scores, and metrics.
    - generic [ref=e420]:
      - generic [ref=e421]:
        - generic [ref=e422]:
          - generic [ref=e423]: SEO Score
          - generic [ref=e424]: 78%
        - progressbar [ref=e425]
      - generic [ref=e427]:
        - generic [ref=e428]:
          - generic [ref=e429]: Indexed Pages
          - generic [ref=e430]: 100%
        - progressbar [ref=e431]
      - generic [ref=e433]:
        - generic [ref=e434]:
          - generic [ref=e435]: Redirect health
          - generic [ref=e436]: 55%
        - progressbar [ref=e437]
  - generic [ref=e439]:
    - generic [ref=e440]:
      - paragraph [ref=e441]: Loading
      - heading "Skeletons & Spinners" [level=2] [ref=e442]
      - paragraph [ref=e443]: Placeholder states for async content and loading indicators.
    - generic [ref=e453]:
      - generic [ref=e454]:
        - status "Loading" [ref=e455]
        - paragraph [ref=e456]: sm
      - generic [ref=e457]:
        - status "Loading" [ref=e458]
        - paragraph [ref=e459]: md
      - generic [ref=e460]:
        - status "Loading" [ref=e461]
        - paragraph [ref=e462]: lg
  - generic [ref=e463]:
    - generic [ref=e464]:
      - paragraph [ref=e465]: Overlay
      - heading "Modal" [level=2] [ref=e466]
      - paragraph [ref=e467]: Portal-rendered dialog with brand accent stripe, backdrop, and Esc-to-close.
    - button "Open Modal" [ref=e469] [cursor=pointer]
  - generic [ref=e470]:
    - generic [ref=e471]:
      - paragraph [ref=e472]: Overlay
      - heading "Dialog, Sheet & Popover" [level=2] [ref=e473]
      - paragraph [ref=e474]: Confirm dialogs, card layouts, and inline info popover patterns.
    - generic [ref=e475]:
      - generic [ref=e476]:
        - paragraph [ref=e477]: Dialog
        - alertdialog "Delete redirect rule?" [ref=e478]:
          - generic [ref=e479]: ⚠
          - generic [ref=e480]: Delete redirect rule?
          - paragraph [ref=e481]: This will permanently remove the 301 redirect from /old-url to /new-url. This action cannot be undone.
          - generic [ref=e482]:
            - button "Cancel" [ref=e483] [cursor=pointer]
            - button "Delete" [ref=e484] [cursor=pointer]
      - generic [ref=e485]:
        - paragraph [ref=e486]: Sheet
        - generic [ref=e487]:
          - generic [ref=e488]:
            - generic [ref=e489]: Schema Configuration
            - generic [ref=e490]: JSON-LD settings for this post
          - paragraph [ref=e492]: Configure structured data output for this post type. Changes apply immediately on save.
          - generic [ref=e493]:
            - button "Reset" [ref=e494] [cursor=pointer]
            - button "Apply" [ref=e495] [cursor=pointer]
      - generic [ref=e496]:
        - paragraph [ref=e497]: Popover
        - tooltip "Focus keyword tip Your focus keyword should appear in the first paragraph, at least one heading, and the meta description. Read guide →" [ref=e498]:
          - generic [ref=e499]: Focus keyword tip
          - paragraph [ref=e500]: Your focus keyword should appear in the first paragraph, at least one heading, and the meta description.
          - button "Read guide →" [ref=e502] [cursor=pointer]
  - generic [ref=e503]:
    - generic [ref=e504]:
      - paragraph [ref=e505]: Input Controls
      - heading "Slider, Stepper & Segmented" [level=2] [ref=e506]
      - paragraph [ref=e507]: Numeric input patterns for ranges, counts, and option groups.
    - generic [ref=e509]:
      - generic [ref=e510]:
        - generic [ref=e511]:
          - generic [ref=e512]:
            - generic [ref=e513]: Menu Width
            - generic [ref=e514]:
              - combobox "Unit" [ref=e515] [cursor=pointer]:
                - option "px" [selected]
                - option "%"
                - option "rem"
                - option "em"
              - spinbutton "Menu Width value" [ref=e517]: "280"
          - slider "Menu Width" [ref=e518] [cursor=pointer]: "280"
        - generic [ref=e519]:
          - generic [ref=e520]:
            - generic [ref=e521]: Border Radius
            - generic [ref=e523]:
              - spinbutton "Border Radius value" [ref=e524]: "8"
              - generic [ref=e525]: px
          - slider "Border Radius" [ref=e526] [cursor=pointer]: "8"
        - generic [ref=e527]:
          - generic [ref=e528]:
            - generic [ref=e529]: Opacity
            - spinbutton "Opacity value" [ref=e532]: "75"
          - slider "Opacity" [ref=e533] [cursor=pointer]: "75"
      - generic [ref=e534]:
        - paragraph [ref=e535]: Stepper
        - generic [ref=e536]:
          - generic "Stepper" [ref=e537]:
            - button "Decrease" [ref=e538] [cursor=pointer]: −
            - spinbutton "Value" [ref=e539]: "3"
            - button "Increase" [ref=e540] [cursor=pointer]: +
          - generic [ref=e541]: max redirects per page
      - generic [ref=e542]:
        - paragraph [ref=e543]: Segmented
        - group "Segmented control" [ref=e544]:
          - button "Monthly" [pressed] [ref=e545] [cursor=pointer]
          - button "Yearly" [ref=e546] [cursor=pointer]
          - button "Lifetime" [ref=e547] [cursor=pointer]
  - generic [ref=e548]:
    - generic [ref=e549]:
      - paragraph [ref=e550]: Input
      - heading "Search" [level=2] [ref=e551]
      - paragraph [ref=e552]: Icon-prefixed search input for filtering lists and content.
    - generic [ref=e554]:
      - generic: ⌕
      - searchbox "Search redirects…" [ref=e555]
  - generic [ref=e556]:
    - generic [ref=e557]:
      - paragraph [ref=e558]: Media
      - heading "Carousel" [level=2] [ref=e559]
      - paragraph [ref=e560]: Snap-scroll carousel with prev/next controls and dot indicators.
    - generic [ref=e561]:
      - generic [ref=e562]:
        - generic [ref=e563]:
          - generic [ref=e564]: What's New
          - generic [ref=e565]: Nexter SEO — Content Analysis
          - paragraph [ref=e566]: Multi-keyword focus scoring with real-time readability feedback.
          - link "Learn more →" [ref=e567] [cursor=pointer]:
            - /url: "#"
        - generic [ref=e568]:
          - generic [ref=e569]: Performance
          - generic [ref=e570]: IndexNow Bulk Submission
          - paragraph [ref=e571]: Submit up to 10 URLs per 5 minutes with built-in rate limiting.
          - link "View docs →" [ref=e572] [cursor=pointer]:
            - /url: "#"
        - generic [ref=e573]:
          - generic [ref=e574]: Schema
          - generic [ref=e575]: JSON-LD Schema Builder
          - paragraph [ref=e576]: Structured data for every post type — validated and production-ready.
          - link "Get started →" [ref=e577] [cursor=pointer]:
            - /url: "#"
      - generic [ref=e578]:
        - button "Previous slide" [disabled] [ref=e579]: ‹
        - generic [ref=e580]:
          - button "Go to slide 1" [ref=e581] [cursor=pointer]
          - button "Go to slide 2" [ref=e582] [cursor=pointer]
          - button "Go to slide 3" [ref=e583] [cursor=pointer]
        - button "Next slide" [ref=e584] [cursor=pointer]: ›
  - generic [ref=e585]:
    - generic [ref=e586]:
      - paragraph [ref=e587]: Content
      - heading "Accordion" [level=2] [ref=e588]
      - paragraph [ref=e589]: Expandable FAQ sections with smooth open/close toggle.
    - generic [ref=e590]:
      - generic [ref=e591]:
        - button "What is Nexter SEO?" [expanded] [ref=e592] [cursor=pointer]:
          - generic [ref=e593]: What is Nexter SEO?
          - img [ref=e594]
        - region [ref=e596]: Nexter SEO is a full-featured WordPress SEO plugin with meta management, schema, IndexNow, redirects, and 404 monitoring.
      - button "How does focus keyword analysis work?" [ref=e598] [cursor=pointer]:
        - generic [ref=e599]: How does focus keyword analysis work?
        - img [ref=e600]
      - button "What redirect types are supported?" [ref=e603] [cursor=pointer]:
        - generic [ref=e604]: What redirect types are supported?
        - img [ref=e605]
  - generic [ref=e607]:
    - generic [ref=e608]:
      - paragraph [ref=e609]: Selection
      - heading "Combobox" [level=2] [ref=e610]
      - paragraph [ref=e611]: Filterable searchable dropdown with full keyboard navigation.
    - generic [ref=e613]:
      - generic [ref=e615]: Framework
      - combobox "Search framework…" [ref=e617]
  - generic [ref=e618]:
    - generic [ref=e619]:
      - paragraph [ref=e620]: Navigation
      - heading "Pagination" [level=2] [ref=e621]
      - paragraph [ref=e622]: Page number navigation with prev/next controls.
    - generic [ref=e623]:
      - navigation "Pagination" [ref=e624]:
        - button "Previous page" [disabled] [ref=e625]: ‹
        - button "1" [ref=e626] [cursor=pointer]
        - button "2" [ref=e627] [cursor=pointer]
        - button "3" [ref=e628] [cursor=pointer]
        - button "4" [ref=e629] [cursor=pointer]
        - button "5" [ref=e630] [cursor=pointer]
        - button "6" [ref=e631] [cursor=pointer]
        - button "7" [ref=e632] [cursor=pointer]
        - button "Next page" [ref=e633] [cursor=pointer]: ›
      - paragraph [ref=e634]: "Current page: 1"
  - generic [ref=e635]:
    - generic [ref=e636]:
      - paragraph [ref=e637]: Data
      - heading "Table" [level=2] [ref=e638]
      - paragraph [ref=e639]: Striped data table with sortable columns, numeric alignment, and action slots.
    - table [ref=e642]:
      - rowgroup [ref=e643]:
        - row "Name Status Visits Score Actions" [ref=e644]:
          - columnheader "Name" [ref=e645]
          - columnheader "Status" [ref=e646]
          - columnheader "Visits" [ref=e647]
          - columnheader "Score" [ref=e648]
          - columnheader "Actions" [ref=e649]
      - rowgroup [ref=e650]:
        - row "Homepage Published 12400 94 Edit View" [ref=e651]:
          - cell "Homepage" [ref=e652]
          - cell "Published" [ref=e653]
          - cell "12400" [ref=e654]
          - cell "94" [ref=e655]
          - cell "Edit View" [ref=e656]:
            - generic [ref=e657]:
              - button "Edit" [ref=e658] [cursor=pointer]
              - button "View" [ref=e659] [cursor=pointer]
        - row "About Us Published 3200 87 Edit View" [ref=e660]:
          - cell "About Us" [ref=e661]
          - cell "Published" [ref=e662]
          - cell "3200" [ref=e663]
          - cell "87" [ref=e664]
          - cell "Edit View" [ref=e665]:
            - generic [ref=e666]:
              - button "Edit" [ref=e667] [cursor=pointer]
              - button "View" [ref=e668] [cursor=pointer]
        - row "Blog Draft 820 72 Edit View" [ref=e669]:
          - cell "Blog" [ref=e670]
          - cell "Draft" [ref=e671]
          - cell "820" [ref=e672]
          - cell "72" [ref=e673]
          - cell "Edit View" [ref=e674]:
            - generic [ref=e675]:
              - button "Edit" [ref=e676] [cursor=pointer]
              - button "View" [ref=e677] [cursor=pointer]
        - row "Contact Published 1540 91 Edit View" [ref=e678]:
          - cell "Contact" [ref=e679]
          - cell "Published" [ref=e680]
          - cell "1540" [ref=e681]
          - cell "91" [ref=e682]
          - cell "Edit View" [ref=e683]:
            - generic [ref=e684]:
              - button "Edit" [ref=e685] [cursor=pointer]
              - button "View" [ref=e686] [cursor=pointer]
  - generic [ref=e687]:
    - generic [ref=e688]:
      - paragraph [ref=e689]: Misc
      - heading "Avatar, Kbd & Tooltip" [level=2] [ref=e690]
      - paragraph [ref=e691]: User avatars, keyboard shortcut badges, and hover tooltip overlays.
    - generic [ref=e693]:
      - generic [ref=e694]:
        - generic "NK" [ref=e695]
        - generic "NK" [ref=e696]
        - generic "NK" [ref=e697]
        - generic "User avatar" [ref=e698]:
          - img "User avatar" [ref=e699]
      - generic [ref=e700]:
        - generic [ref=e701]: Save changes
        - generic [ref=e702]: ⌘
        - generic [ref=e703]: S
      - generic [ref=e704]:
        - button "Hover me" [ref=e706] [cursor=pointer]
        - button "Open ↗" [ref=e708] [cursor=pointer]
  - generic [ref=e709]:
    - generic [ref=e710]:
      - paragraph [ref=e711]: Analytics
      - heading "Stat Cards" [level=2] [ref=e712]
      - paragraph [ref=e713]: Key metric display cards for dashboards and overview panels.
    - generic [ref=e714]:
      - generic [ref=e715]:
        - generic [ref=e716]: Total Pages
        - generic [ref=e717]: 1,248
        - generic [ref=e719]: ↑ 12%
      - generic [ref=e720]:
        - generic [ref=e721]: SEO Score
        - generic [ref=e722]: "94"
        - generic [ref=e724]: Excellent
      - generic [ref=e725]:
        - generic [ref=e726]: 404 Errors
        - generic [ref=e727]: "3"
        - generic [ref=e729]: Review needed
      - generic [ref=e730]:
        - generic [ref=e731]: Redirects
        - generic [ref=e732]: "47"
        - generic [ref=e733]: Active rules
  - generic [ref=e734]:
    - generic [ref=e735]:
      - paragraph [ref=e736]: Features
      - heading "Icon Boxes" [level=2] [ref=e737]
      - paragraph [ref=e738]: Feature highlight cards with icon, title, description, and CTA link.
    - generic [ref=e739]:
      - generic [ref=e740]:
        - generic [ref=e741]: Step 1
        - generic [ref=e742]: "1"
        - generic [ref=e743]: Configure Meta Tags
        - paragraph [ref=e744]: Set global templates for title and description tags across all post types.
        - link "Configure →" [ref=e745] [cursor=pointer]:
          - /url: "#"
      - generic [ref=e746]:
        - generic [ref=e747]: Step 2
        - generic [ref=e748]: "2"
        - generic [ref=e749]: Enable Schema Output
        - paragraph [ref=e750]: Generate valid JSON-LD structured data for posts, pages, and custom types.
        - link "Enable →" [ref=e751] [cursor=pointer]:
          - /url: "#"
      - generic [ref=e752]:
        - generic [ref=e753]: Step 3
        - generic [ref=e754]: "3"
        - generic [ref=e755]: Submit to IndexNow
        - paragraph [ref=e756]: Bulk-submit new and updated URLs to Bing, Yandex, and other search engines.
        - link "Submit →" [ref=e757] [cursor=pointer]:
          - /url: "#"
  - generic [ref=e758]:
    - generic [ref=e759]:
      - paragraph [ref=e760]: States
      - heading "Empty State" [level=2] [ref=e761]
      - paragraph [ref=e762]: Friendly placeholder for empty lists, search results with no matches.
    - status [ref=e764]:
      - generic [ref=e765]: 🔍
      - generic [ref=e766]: No redirects found
      - paragraph [ref=e767]: No redirect rules match your current search. Try adjusting your filters or add a new redirect.
      - button "Add redirect" [ref=e769] [cursor=pointer]
  - generic [ref=e770]:
    - generic [ref=e771]:
      - paragraph [ref=e772]: Controls
      - heading "Toggle Grid" [level=2] [ref=e773]
      - paragraph [ref=e774]: Compact grid of labeled toggles — controlled via valueMap or uncontrolled with internal state.
    - generic [ref=e776]:
      - generic [ref=e777]:
        - paragraph [ref=e778]: 2 Columns (Controlled)
        - group [ref=e779]:
          - generic [ref=e780]:
            - generic [ref=e781]:
              - generic [ref=e782]: Canonical URL
              - button "About Canonical URL" [ref=e784] [cursor=pointer]:
                - img [ref=e785]
            - switch [checked] [ref=e788] [cursor=pointer]
          - generic [ref=e791]:
            - generic [ref=e792]:
              - generic [ref=e793]: Open Graph
              - button "About Open Graph" [ref=e795] [cursor=pointer]:
                - img [ref=e796]
            - switch [ref=e799] [cursor=pointer]
          - generic [ref=e802]:
            - generic [ref=e803]:
              - generic [ref=e804]: JSON-LD Schema
              - button "About JSON-LD Schema" [ref=e806] [cursor=pointer]:
                - img [ref=e807]
            - switch [checked] [ref=e810] [cursor=pointer]
          - generic [ref=e813]:
            - generic [ref=e814]:
              - generic [ref=e815]: XML Sitemap
              - button "About XML Sitemap" [ref=e817] [cursor=pointer]:
                - img [ref=e818]
            - switch [ref=e821] [cursor=pointer]
          - generic [ref=e824]:
            - generic [ref=e825]:
              - generic [ref=e826]: Robots Meta
              - button "About Robots Meta" [ref=e828] [cursor=pointer]:
                - img [ref=e829]
            - switch [checked] [ref=e832] [cursor=pointer]
          - generic [ref=e835]:
            - generic [ref=e836]:
              - generic [ref=e837]: IndexNow
              - button "About IndexNow" [ref=e839] [cursor=pointer]:
                - img [ref=e840]
            - switch [ref=e843] [cursor=pointer]
      - generic [ref=e846]:
        - paragraph [ref=e847]: 3 Columns (Uncontrolled)
        - group [ref=e848]:
          - generic [ref=e849]:
            - generic [ref=e850]:
              - generic [ref=e851]: Canonical URL
              - button "About Canonical URL" [ref=e853] [cursor=pointer]:
                - img [ref=e854]
            - switch [ref=e857] [cursor=pointer]
          - generic [ref=e860]:
            - generic [ref=e861]:
              - generic [ref=e862]: Open Graph
              - button "About Open Graph" [ref=e864] [cursor=pointer]:
                - img [ref=e865]
            - switch [ref=e868] [cursor=pointer]
          - generic [ref=e871]:
            - generic [ref=e872]:
              - generic [ref=e873]: JSON-LD Schema
              - button "About JSON-LD Schema" [ref=e875] [cursor=pointer]:
                - img [ref=e876]
            - switch [ref=e879] [cursor=pointer]
          - generic [ref=e882]:
            - generic [ref=e883]:
              - generic [ref=e884]: XML Sitemap
              - button "About XML Sitemap" [ref=e886] [cursor=pointer]:
                - img [ref=e887]
            - switch [ref=e890] [cursor=pointer]
          - generic [ref=e893]:
            - generic [ref=e894]:
              - generic [ref=e895]: Robots Meta
              - button "About Robots Meta" [ref=e897] [cursor=pointer]:
                - img [ref=e898]
            - switch [ref=e901] [cursor=pointer]
          - generic [ref=e904]:
            - generic [ref=e905]:
              - generic [ref=e906]: IndexNow
              - button "About IndexNow" [ref=e908] [cursor=pointer]:
                - img [ref=e909]
            - switch [ref=e912] [cursor=pointer]
      - generic [ref=e915]:
        - paragraph [ref=e916]: 1 Column
        - group [ref=e917]:
          - generic [ref=e918]:
            - generic [ref=e919]:
              - generic [ref=e920]: Canonical URL
              - button "About Canonical URL" [ref=e922] [cursor=pointer]:
                - img [ref=e923]
            - switch [ref=e926] [cursor=pointer]
          - generic [ref=e929]:
            - generic [ref=e930]:
              - generic [ref=e931]: Open Graph
              - button "About Open Graph" [ref=e933] [cursor=pointer]:
                - img [ref=e934]
            - switch [ref=e937] [cursor=pointer]
          - generic [ref=e940]:
            - generic [ref=e941]:
              - generic [ref=e942]: JSON-LD Schema
              - button "About JSON-LD Schema" [ref=e944] [cursor=pointer]:
                - img [ref=e945]
            - switch [ref=e948] [cursor=pointer]
  - generic [ref=e951]:
    - generic [ref=e952]:
      - paragraph [ref=e953]: Navigation
      - heading "Breadcrumb" [level=2] [ref=e954]
      - paragraph [ref=e955]: Contextual navigation trail for settings pages and deep views.
    - generic [ref=e957]:
      - navigation "Breadcrumb" [ref=e958]:
        - list [ref=e959]:
          - listitem [ref=e960]:
            - button "Dashboard" [ref=e961] [cursor=pointer]
            - img [ref=e963]
          - listitem [ref=e965]:
            - button "Settings" [ref=e966] [cursor=pointer]
            - img [ref=e968]
          - listitem [ref=e970]:
            - generic [ref=e971]: SEO
      - navigation "Breadcrumb" [ref=e972]:
        - list [ref=e973]:
          - listitem [ref=e974]:
            - link "Home" [ref=e975] [cursor=pointer]:
              - /url: "#"
              - img [ref=e977]
              - text: Home
            - img [ref=e981]
          - listitem [ref=e983]:
            - link "Plugins" [ref=e984] [cursor=pointer]:
              - /url: "#"
            - img [ref=e986]
          - listitem [ref=e988]:
            - link "Nexter SEO" [ref=e989] [cursor=pointer]:
              - /url: "#"
            - img [ref=e991]
          - listitem [ref=e993]:
            - generic [ref=e994]: Schema Settings
  - generic [ref=e995]:
    - generic [ref=e996]:
      - paragraph [ref=e997]: Utilities
      - heading "CopyInput" [level=2] [ref=e998]
      - paragraph [ref=e999]: Read-only input with one-click clipboard copy — for API keys, license keys, shortcodes.
    - generic [ref=e1001]:
      - generic [ref=e1002]:
        - generic [ref=e1003]: License Key
        - generic [ref=e1004]:
          - textbox "License Key" [ref=e1005]: NXTR-PRO-A1B2-C3D4-E5F6
          - button "Copy to clipboard" [ref=e1006] [cursor=pointer]:
            - img [ref=e1007]
            - generic [ref=e1010]: Copy
        - generic [ref=e1011]: Renews annually. Do not share.
      - generic [ref=e1012]:
        - generic [ref=e1013]: Shortcode
        - generic [ref=e1014]:
          - textbox "Shortcode" [ref=e1015]: "[nexter_schema type=\"article\"]"
          - button "Copy to clipboard" [ref=e1016] [cursor=pointer]:
            - img [ref=e1017]
            - generic [ref=e1020]: Copy
      - generic [ref=e1021]:
        - generic [ref=e1022]: API Endpoint
        - generic [ref=e1023]:
          - textbox "API Endpoint" [ref=e1024]: https://api.nexterseo.com/v1/index
          - button "Copy to clipboard" [ref=e1025] [cursor=pointer]:
            - img [ref=e1026]
            - generic [ref=e1029]: Copy URL
  - generic [ref=e1030]:
    - generic [ref=e1031]:
      - paragraph [ref=e1032]: Actions
      - heading "ConfirmButton" [level=2] [ref=e1033]
      - paragraph [ref=e1034]: Inline two-step confirmation pattern — prevents accidental destructive actions.
    - generic [ref=e1036]:
      - button "Delete Redirect" [ref=e1037] [cursor=pointer]
      - button "Reset Settings" [ref=e1038] [cursor=pointer]
      - button "Publish Changes" [ref=e1039] [cursor=pointer]
  - generic [ref=e1040]:
    - generic [ref=e1041]:
      - paragraph [ref=e1042]: Form Controls
      - heading "NumberInput" [level=2] [ref=e1043]
      - paragraph [ref=e1044]: Precise numeric entry with +/− step buttons, min/max clamping, prefix/suffix support.
    - generic [ref=e1046]:
      - generic [ref=e1047]:
        - generic [ref=e1048]: Cache TTL
        - generic [ref=e1049]:
          - button "Decrease" [ref=e1050] [cursor=pointer]:
            - img [ref=e1051]
          - generic [ref=e1052]:
            - textbox "Cache TTL" [ref=e1053]: "12"
            - generic [ref=e1054]: s
          - button "Increase" [ref=e1055] [cursor=pointer]:
            - img [ref=e1056]
      - generic [ref=e1058]:
        - generic [ref=e1059]: Font Size
        - generic [ref=e1060]:
          - button "Decrease" [ref=e1061] [cursor=pointer]:
            - img [ref=e1062]
          - generic [ref=e1063]:
            - textbox "Font Size" [ref=e1064]: "16"
            - generic [ref=e1065]: px
          - button "Increase" [ref=e1066] [cursor=pointer]:
            - img [ref=e1067]
      - generic [ref=e1069]:
        - generic [ref=e1070]: Line Height
        - generic [ref=e1071]:
          - button "Decrease" [ref=e1072] [cursor=pointer]:
            - img [ref=e1073]
          - textbox "Line Height" [ref=e1075]: "1.5"
          - button "Increase" [ref=e1076] [cursor=pointer]:
            - img [ref=e1077]
  - generic [ref=e1079]:
    - generic [ref=e1080]:
      - paragraph [ref=e1081]: Form Controls
      - heading "OTPInput" [level=2] [ref=e1082]
      - paragraph [ref=e1083]: Segmented input for license codes — auto-advances on type, handles paste, arrow-key navigation.
    - generic [ref=e1085]:
      - generic [ref=e1086]:
        - paragraph [ref=e1087]: 6-digit OTP
        - group "OTP input" [ref=e1088]:
          - textbox "OTP digit 1" [ref=e1089]
          - textbox "OTP digit 2" [ref=e1090]
          - textbox "OTP digit 3" [ref=e1091]
          - textbox "OTP digit 4" [ref=e1092]
          - textbox "OTP digit 5" [ref=e1093]
          - textbox "OTP digit 6" [ref=e1094]
        - paragraph [ref=e1095]: "Value: \"\""
      - generic [ref=e1096]:
        - paragraph [ref=e1097]: License key — 4+4 with separator
        - group "OTP input" [ref=e1098]:
          - textbox "OTP digit 1" [ref=e1099]
          - textbox "OTP digit 2" [ref=e1100]
          - textbox "OTP digit 3" [ref=e1101]
          - textbox "OTP digit 4" [ref=e1102]
          - generic [ref=e1103]: –
          - textbox "OTP digit 5" [ref=e1104]
          - textbox "OTP digit 6" [ref=e1105]
          - textbox "OTP digit 7" [ref=e1106]
          - textbox "OTP digit 8" [ref=e1107]
  - generic [ref=e1108]:
    - generic [ref=e1109]:
      - paragraph [ref=e1110]: Layout
      - heading "SortableList" [level=2] [ref=e1111]
      - paragraph [ref=e1112]: Drag-to-reorder list using HTML5 DnD — no external dependencies.
    - list [ref=e1114]:
      - listitem [ref=e1115]:
        - generic "Drag to reorder" [ref=e1116]:
          - img [ref=e1117]
        - generic [ref=e1125]:
          - generic [ref=e1126]: "301 Redirect: /old-page → /new-page"
          - generic [ref=e1127]: Active
      - listitem [ref=e1128]:
        - generic "Drag to reorder" [ref=e1129]:
          - img [ref=e1130]
        - generic [ref=e1138]:
          - generic [ref=e1139]: "302 Redirect: /promo → /sale"
          - generic [ref=e1140]: Active
      - listitem [ref=e1141]:
        - generic "Drag to reorder" [ref=e1142]:
          - img [ref=e1143]
        - generic [ref=e1151]:
          - generic [ref=e1152]: "307 Redirect: /temp → /landing"
          - generic [ref=e1153]: Active
  - generic [ref=e1154]:
    - generic [ref=e1155]:
      - paragraph [ref=e1156]: Form Controls
      - heading "FileUpload / Dropzone" [level=2] [ref=e1157]
      - paragraph [ref=e1158]: "Drag-and-drop file upload with preview. Supports WP Media Library when wpMedia={true}."
    - generic "File upload area" [ref=e1162] [cursor=pointer]:
      - img [ref=e1163]
      - generic [ref=e1166]: Drag & drop files here, or
      - button "Browse" [ref=e1168]
      - generic [ref=e1169]: PNG, JPG, PDF up to 5 MB
  - generic [ref=e1170]:
    - generic [ref=e1171]:
      - paragraph [ref=e1172]: Form Controls
      - heading "ColorPicker" [level=2] [ref=e1173]
      - paragraph [ref=e1174]: HSV color picker with 2D gradient box, hue slider, hex input, and preset swatches.
    - generic [ref=e1176]:
      - generic [ref=e1177]:
        - paragraph [ref=e1178]: Standard
        - 'button "Color picker, current: #1e40af" [ref=e1180] [cursor=pointer]':
          - generic [ref=e1182]: "#1E40AF"
          - generic [ref=e1183]: ▾
        - paragraph [ref=e1184]: "Value: #1E40AF"
      - generic [ref=e1185]:
        - paragraph [ref=e1186]: With Alpha
        - 'button "Color picker, current: #3b82f6" [ref=e1188] [cursor=pointer]':
          - generic [ref=e1190]: "#3B82F6"
          - generic [ref=e1191]: ▾
      - generic [ref=e1192]:
        - paragraph [ref=e1193]: No swatches
        - 'button "Color picker, current: #22c55e" [ref=e1195] [cursor=pointer]':
          - generic [ref=e1197]: "#22C55E"
          - generic [ref=e1198]: ▾
  - generic [ref=e1199]:
    - generic [ref=e1200]:
      - paragraph [ref=e1201]: Form Controls
      - heading "DatePicker" [level=2] [ref=e1202]
      - paragraph [ref=e1203]: Calendar popover date selector with min/max support, Today shortcut, and clearable input.
    - generic [ref=e1205]:
      - generic [ref=e1206]:
        - paragraph [ref=e1207]: Single Date (controlled)
        - button "Select expiry date" [ref=e1209] [cursor=pointer]:
          - img [ref=e1211]
          - generic [ref=e1214]: Select expiry date
        - paragraph [ref=e1215]: "Value: —"
      - generic [ref=e1216]:
        - paragraph [ref=e1217]: With min/max
        - button "Select date" [ref=e1219] [cursor=pointer]:
          - img [ref=e1221]
          - generic [ref=e1224]: 2026-05-01
          - button "Clear" [ref=e1225]:
            - img [ref=e1226]
  - generic [ref=e1228]:
    - generic [ref=e1229]:
      - paragraph [ref=e1230]: Form Controls
      - heading "DateRangePicker" [level=2] [ref=e1231]
      - paragraph [ref=e1232]: Two-calendar range picker for analytics filters — start/end date selection with range highlight.
    - generic [ref=e1234]:
      - button "From date To date" [ref=e1236] [cursor=pointer]:
        - img [ref=e1238]
        - generic [ref=e1241]: From date
        - img [ref=e1243]
        - generic [ref=e1245]: To date
      - paragraph [ref=e1246]: "Range: — → —"
  - generic [ref=e1247]:
    - generic [ref=e1248]:
      - paragraph [ref=e1249]: Input Controls
      - heading "MultiSelect" [level=2] [ref=e1250]
      - paragraph [ref=e1251]: Div-based multi-select with tag chips, grouped options, live search, and full keyboard navigation.
    - generic [ref=e1253]:
      - generic [ref=e1254]:
        - paragraph [ref=e1255]: Grouped — searchable (controlled)
        - combobox [ref=e1256]:
          - generic "Open select" [ref=e1257] [cursor=pointer]:
            - generic [ref=e1258]:
              - generic [ref=e1259]:
                - generic [ref=e1260]: Entire Website
                - button "Remove Entire Website" [ref=e1261]: ×
              - generic [ref=e1262]:
                - generic [ref=e1263]: All Singulars
                - button "Remove All Singulars" [ref=e1264]: ×
              - generic [ref=e1265]:
                - generic [ref=e1266]: All Archives
                - button "Remove All Archives" [ref=e1267]: ×
            - generic [ref=e1268]:
              - button "Clear all" [ref=e1269]: ×
              - img [ref=e1271]
        - paragraph [ref=e1273]: "Selected: entire, singulars, archives"
      - generic [ref=e1274]:
        - paragraph [ref=e1275]: No search input
        - combobox [ref=e1276]:
          - generic "Open select" [ref=e1277] [cursor=pointer]:
            - generic [ref=e1279]: Select pages…
            - img [ref=e1282]
      - generic [ref=e1284]:
        - paragraph [ref=e1285]: Disabled
        - combobox [disabled]:
          - generic "Open select":
            - generic:
              - generic:
                - generic: Entire Website
                - button "Remove Entire Website" [disabled]: ×
              - generic:
                - generic: Front Page
                - button "Remove Front Page" [disabled]: ×
            - generic:
              - generic:
                - img
  - generic [ref=e1286]:
    - generic [ref=e1287]:
      - paragraph [ref=e1288]: Labels
      - heading "Status Pills" [level=2] [ref=e1289]
      - paragraph [ref=e1290]: Animated presence indicators for active, inactive, pending, and info states.
    - generic [ref=e1292]:
      - 'generic "Status: default" [ref=e1293]': Default
      - 'generic "Status: active" [ref=e1294]': Active
      - 'generic "Status: inactive" [ref=e1295]': Inactive
      - 'generic "Status: pending" [ref=e1296]': Pending
      - 'generic "Status: info" [ref=e1297]': Indexing
  - generic [ref=e1298]:
    - paragraph [ref=e1299]: Nexter UI Components v1.0.0 — Nexter Design System
    - generic [ref=e1300]:
      - generic [ref=e1301]: React 18
      - generic [ref=e1302]: Zero dependencies
      - generic [ref=e1303]: WCAG 2.2 AA
```

# Test source

```ts
  54  |   });
  55  | 
  56  |   test('body scroll is locked while modal is open', async ({ page }) => {
  57  |     const openBtn = page.getByRole('button', { name: /open modal/i }).first();
  58  |     await openBtn.scrollIntoViewIfNeeded();
  59  |     await openBtn.click();
  60  |     await expect(page.locator('[role="dialog"]')).toBeVisible();
  61  |     const overflow = await page.evaluate(() => document.body.style.overflow);
  62  |     expect(overflow).toBe('hidden');
  63  |   });
  64  | });
  65  | 
  66  | test.describe('Sheet', () => {
  67  |   test.beforeEach(async ({ page }) => { await gotoDemo(page); });
  68  | 
  69  |   // Sheet in the demo is rendered as a static always-visible card (no modal trigger).
  70  |   // Trigger-based Sheet tests require a demo update; these verify static render.
  71  |   test('sheet renders with title', async ({ page }) => {
  72  |     const sheet = page.locator('.nxp-sheet').first();
  73  |     await sheet.scrollIntoViewIfNeeded();
  74  |     await expect(sheet).toBeVisible();
  75  |     await expect(page.locator('.nxp-sheet__title').first()).toBeVisible();
  76  |   });
  77  | 
  78  |   test('sheet has body content', async ({ page }) => {
  79  |     const body = page.locator('.nxp-sheet__body').first();
  80  |     await body.scrollIntoViewIfNeeded();
  81  |     await expect(body).toBeVisible();
  82  |   });
  83  | 
  84  |   test('sheet has footer actions', async ({ page }) => {
  85  |     const foot = page.locator('.nxp-sheet__foot').first();
  86  |     await foot.scrollIntoViewIfNeeded();
  87  |     await expect(foot).toBeVisible();
  88  |   });
  89  | });
  90  | 
  91  | test.describe('Popover', () => {
  92  |   test.beforeEach(async ({ page }) => { await gotoDemo(page); });
  93  | 
  94  |   // Popover in the demo is a static always-visible info card (role="tooltip").
  95  |   // It renders with .nxp-popover; no toggle trigger in this demo variant.
  96  |   test('popover renders with title', async ({ page }) => {
  97  |     const popover = page.locator('.nxp-popover').first();
  98  |     await popover.scrollIntoViewIfNeeded();
  99  |     await expect(popover).toBeVisible();
  100 |     await expect(page.locator('.nxp-popover__title').first()).toBeVisible();
  101 |   });
  102 | 
  103 |   test('popover has description text', async ({ page }) => {
  104 |     const desc = page.locator('.nxp-popover__desc').first();
  105 |     await desc.scrollIntoViewIfNeeded();
  106 |     await expect(desc).toBeVisible();
  107 |   });
  108 | 
  109 |   test('popover has footer action', async ({ page }) => {
  110 |     const footer = page.locator('.nxp-popover__footer').first();
  111 |     await footer.scrollIntoViewIfNeeded();
  112 |     await expect(footer).toBeVisible();
  113 |   });
  114 | });
  115 | 
  116 | test.describe('Tooltip', () => {
  117 |   test.beforeEach(async ({ page }) => { await gotoDemo(page); });
  118 | 
  119 |   // Tooltip wraps trigger content in .nxp-tooltip-wrap; the bubble is .nxp-tooltip
  120 |   test('tooltip content appears on hover', async ({ page }) => {
  121 |     const trigger = page.locator('.nxp-tooltip-wrap').first();
  122 |     await trigger.scrollIntoViewIfNeeded();
  123 |     await trigger.hover();
  124 |     await waitForAnimation(page, 300);
  125 |     await expect(page.locator('.nxp-tooltip').first()).toBeVisible();
  126 |   });
  127 | 
  128 |   test('tooltip hides after mouse leaves', async ({ page }) => {
  129 |     const trigger = page.locator('.nxp-tooltip-wrap').first();
  130 |     await trigger.scrollIntoViewIfNeeded();
  131 |     await trigger.hover();
  132 |     await waitForAnimation(page, 300);
  133 |     await page.mouse.move(0, 0);
  134 |     await waitForAnimation(page, 400);
  135 |     await expect(page.locator('.nxp-tooltip').first()).not.toBeVisible();
  136 |   });
  137 | });
  138 | 
  139 | test.describe('Alert', () => {
  140 |   test.beforeEach(async ({ page }) => { await gotoDemo(page); });
  141 | 
  142 |   test('info alert is visible', async ({ page }) => {
  143 |     await expect(page.locator('.nxp-alert--info, .nxp-alert').first()).toBeVisible();
  144 |   });
  145 | 
  146 |   test('dismissible notice hides after close click', async ({ page }) => {
  147 |     // Alert component has no close button. Notice component has dismissible prop.
  148 |     // Demo renders: <Notice variant="error" dismissible>...</Notice>
  149 |     const notice = page.locator('.nxp-notice').last(); // last notice has dismissible prop
  150 |     await notice.scrollIntoViewIfNeeded();
  151 |     const closeBtn = notice.locator('button[aria-label], button.nxp-notice__close, [class*="close"]').first();
  152 |     if (await closeBtn.count() > 0) {
  153 |       await closeBtn.click();
> 154 |       await expect(notice).not.toBeVisible();
      |                                ^ Error: expect(locator).not.toBeVisible() failed
  155 |     } else {
  156 |       // Notice renders but dismiss button uses a different selector — skip gracefully
  157 |       await expect(notice).toBeAttached();
  158 |     }
  159 |   });
  160 | });
  161 | 
  162 | test.describe('Notice / Banner', () => {
  163 |   test.beforeEach(async ({ page }) => { await gotoDemo(page); });
  164 | 
  165 |   test('notice renders', async ({ page }) => {
  166 |     await expect(page.locator('.nxp-notice').first()).toBeAttached();
  167 |   });
  168 | 
  169 |   test('banner renders', async ({ page }) => {
  170 |     await expect(page.locator('.nxp-banner').first()).toBeAttached();
  171 |   });
  172 | });
  173 | 
```