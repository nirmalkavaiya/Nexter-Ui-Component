# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dropdowns.spec.js >> Dropdown >> selecting an item updates trigger text
- Location: e2e\dropdowns.spec.js:69:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.nxp-dropdown').first().locator('.nxp-dropdown__trigger')
Expected substring: "PublishedLive"
Received string:    "Published"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.nxp-dropdown').first().locator('.nxp-dropdown__trigger')
    8 × locator resolved to <button type="button" aria-expanded="false" aria-haspopup="listbox" class="nxp-dropdown__trigger">…</button>
      - unexpected value "Published"

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
    - generic [ref=e74]:
      - generic [ref=e75]:
        - button "Published" [ref=e77] [cursor=pointer]:
          - generic [ref=e78]: Published
          - img [ref=e79]
        - button "Language…" [ref=e82] [cursor=pointer]:
          - generic [ref=e83]: Language…
          - img [ref=e84]
        - button "Disabled" [disabled] [ref=e87]:
          - generic [ref=e88]: Disabled
          - img [ref=e89]
      - paragraph [ref=e91]:
        - text: "Selected:"
        - strong [ref=e92]: published
  - generic [ref=e93]:
    - generic [ref=e94]:
      - paragraph [ref=e95]: Controls
      - heading "Toggle, Checkbox & Radio" [level=2] [ref=e96]
      - paragraph [ref=e97]: React-controlled interactive states with accessible keyboard support.
    - generic [ref=e99]:
      - generic [ref=e100]:
        - paragraph [ref=e101]: Toggle
        - switch "Enable indexing" [checked] [ref=e102] [cursor=pointer]:
          - generic [ref=e105]: Enable indexing
        - switch "Noindex page" [ref=e106] [cursor=pointer]:
          - generic [ref=e109]: Noindex page
        - switch "Always on (disabled)" [checked] [disabled] [ref=e110]:
          - generic [ref=e113]: Always on (disabled)
        - switch "Success variant" [checked] [ref=e114] [cursor=pointer]:
          - generic [ref=e117]: Success variant
      - generic [ref=e118]:
        - paragraph [ref=e119]: Checkbox
        - generic [ref=e120] [cursor=pointer]:
          - checkbox [checked] [ref=e121]:
            - img [ref=e122]
          - generic [ref=e124]: Enable canonical URL
        - generic [ref=e125] [cursor=pointer]:
          - checkbox [ref=e126]
          - generic [ref=e127]: Override robots.txt
        - generic [ref=e128]:
          - checkbox [disabled] [ref=e129]
          - generic [ref=e130]: Disabled option
      - generic [ref=e131]:
        - paragraph [ref=e132]: Radio
        - generic [ref=e133] [cursor=pointer]:
          - radio [checked] [ref=e134]
          - generic [ref=e136]: React
        - generic [ref=e137] [cursor=pointer]:
          - radio [ref=e138]
          - generic [ref=e140]: Vue
        - generic [ref=e141] [cursor=pointer]:
          - radio [ref=e142]
          - generic [ref=e144]: Svelte
        - generic [ref=e145]:
          - radio [disabled] [ref=e146]
          - generic [ref=e148]: Disabled
  - generic [ref=e149]:
    - generic [ref=e150]:
      - paragraph [ref=e151]: Composite
      - heading "Feature Toggle Card" [level=2] [ref=e152]
      - paragraph [ref=e153]: Settings-dashboard card with plan badge (PRO/FREEMIUM), NEW badge, tooltip, locked state with upgrade CTA, and controlled toggle.
    - generic [ref=e155]:
      - generic [ref=e158]:
        - generic [ref=e159]:
          - generic [ref=e160]:
            - generic [ref=e161]: Adobe Fonts
            - button "About Adobe Fonts" [ref=e163] [cursor=pointer]:
              - img [ref=e164]
          - button "Read Docs" [ref=e168] [cursor=pointer]
        - generic [ref=e169]:
          - button "Adobe Fonts settings" [ref=e170] [cursor=pointer]:
            - img [ref=e171]
          - switch [checked] [ref=e174] [cursor=pointer]
      - generic [ref=e177]:
        - generic [ref=e178]: FREEMIUM
        - generic [ref=e180]:
          - generic [ref=e181]:
            - generic [ref=e182]:
              - generic [ref=e183]: SMTP Email
              - generic "BETA feature" [ref=e184]: BETA
              - button "About SMTP Email" [ref=e186] [cursor=pointer]:
                - img [ref=e187]
            - button "Read Docs" [ref=e191] [cursor=pointer]
          - generic [ref=e192]:
            - button "SMTP Email settings" [ref=e193] [cursor=pointer]:
              - img [ref=e194]
            - switch [ref=e197] [cursor=pointer]
      - generic [ref=e202]:
        - generic [ref=e203]:
          - generic [ref=e204]:
            - generic [ref=e205]: Advanced Cache
            - generic "New feature" [ref=e206]: NEW
            - button "About Advanced Cache" [ref=e208] [cursor=pointer]:
              - img [ref=e209]
          - button "Read Docs" [ref=e213] [cursor=pointer]
        - generic [ref=e214]:
          - button "Advanced Cache settings" [ref=e215] [cursor=pointer]:
            - img [ref=e216]
          - switch [ref=e219] [cursor=pointer]
      - generic [ref=e222]:
        - generic [ref=e223]: PRO
        - generic [ref=e225]:
          - generic [ref=e226]:
            - generic [ref=e227]:
              - generic [ref=e228]: White Label
              - button "About White Label" [ref=e230] [cursor=pointer]:
                - img [ref=e231]
            - generic [ref=e234]:
              - button "Read Docs" [disabled] [ref=e235]
              - generic [ref=e236]: ·
              - button "Upgrade" [ref=e237] [cursor=pointer]:
                - text: Upgrade
                - img [ref=e238]
          - button "Upgrade to unlock White Label" [ref=e241] [cursor=pointer]:
            - img [ref=e242]
      - generic [ref=e245]:
        - generic [ref=e246]: PRO
        - generic [ref=e248]:
          - generic [ref=e249]:
            - generic [ref=e250]:
              - generic [ref=e251]: AI Content Assistant
              - generic "New feature" [ref=e252]: NEW
              - button "About AI Content Assistant" [ref=e254] [cursor=pointer]:
                - img [ref=e255]
            - generic [ref=e258]:
              - button "Read Docs" [disabled] [ref=e259]
              - generic [ref=e260]: ·
              - button "Upgrade" [ref=e261] [cursor=pointer]:
                - text: Upgrade
                - img [ref=e262]
          - button "Upgrade to unlock AI Content Assistant" [ref=e265] [cursor=pointer]:
            - img [ref=e266]
  - generic [ref=e269]:
    - generic [ref=e270]:
      - paragraph [ref=e271]: Navigation
      - heading "Tabs" [level=2] [ref=e272]
      - paragraph [ref=e273]: "Three tab variants: pill (default), underline, and vertical with sub-tabs."
    - generic [ref=e274]:
      - generic [ref=e275]:
        - paragraph [ref=e276]: Pill (default)
        - tablist [ref=e277]:
          - generic [ref=e278]:
            - tab "General" [selected] [ref=e279] [cursor=pointer]
            - tab "SEO" [ref=e280] [cursor=pointer]
            - tab "Social" [ref=e281] [cursor=pointer]
          - tabpanel [ref=e282]:
            - paragraph [ref=e283]: General settings content goes here.
      - generic [ref=e284]:
        - paragraph [ref=e285]: Underline
        - tablist [ref=e286]:
          - generic [ref=e287]:
            - tab "Overview" [selected] [ref=e288] [cursor=pointer]
            - tab "Analytics" [ref=e289] [cursor=pointer]
            - tab "Reports" [ref=e290] [cursor=pointer]
          - tabpanel [ref=e291]:
            - paragraph [ref=e292]: Overview content.
      - generic [ref=e293]:
        - paragraph [ref=e294]: Vertical with sub-tabs
        - tablist [ref=e295]:
          - generic [ref=e296]:
            - tab "Account" [selected] [ref=e297] [cursor=pointer]
            - generic [ref=e298]:
              - button "Profile" [ref=e299] [cursor=pointer]
              - button "Billing" [ref=e300] [cursor=pointer]
            - tab "Security" [ref=e301] [cursor=pointer]
            - tab "Notifications" [ref=e302] [cursor=pointer]
          - tabpanel [ref=e303]:
            - paragraph [ref=e304]: Account settings content.
  - generic [ref=e305]:
    - generic [ref=e306]:
      - paragraph [ref=e307]: Labels
      - heading "Tags & Badges" [level=2] [ref=e308]
      - paragraph [ref=e309]: Semantic status labels and count badges in all variants.
    - generic [ref=e311]:
      - generic [ref=e312]:
        - generic [ref=e313]: Default
        - generic [ref=e314]: Primary
        - generic [ref=e315]: Published
        - generic [ref=e316]: Draft
        - generic [ref=e317]: Error
      - generic [ref=e318]:
        - generic [ref=e319]: "42"
        - generic [ref=e320]: New
        - generic [ref=e321]: Live
        - generic [ref=e322]: Beta
        - generic [ref=e323]: Error
        - generic [ref=e324]: Pro
  - generic [ref=e325]:
    - generic [ref=e326]:
      - paragraph [ref=e327]: Feedback
      - heading "Alerts" [level=2] [ref=e328]
      - paragraph [ref=e329]: Inline feedback messages in four semantic variants.
    - generic [ref=e331]:
      - alert [ref=e332]:
        - generic [ref=e333]: i
        - generic [ref=e334]: Your sitemap was submitted to Google Search Console successfully.
      - alert [ref=e335]:
        - generic [ref=e336]: ✓
        - generic [ref=e337]: All 48 redirects are working correctly. No errors detected.
      - alert [ref=e338]:
        - generic [ref=e339]: "!"
        - generic [ref=e340]: IndexNow rate limit approaching — 8 of 10 requests used this window.
      - alert [ref=e341]:
        - generic [ref=e342]: ×
        - generic [ref=e343]: Failed to fetch robots.txt. Check your site's .htaccess configuration.
  - generic [ref=e344]:
    - generic [ref=e345]:
      - paragraph [ref=e346]: Feedback
      - heading "Notices" [level=2] [ref=e347]
      - paragraph [ref=e348]: Dismissible bordered notices with smooth fade-out transition.
    - generic [ref=e350]:
      - status [ref=e351]:
        - generic [ref=e352]: ℹ
        - generic [ref=e353]: You are viewing a cached version of the SEO report. Refresh to update.
        - button "Dismiss" [ref=e354] [cursor=pointer]: ×
      - status [ref=e355]:
        - generic [ref=e356]: ✓
        - generic [ref=e357]: Schema JSON-LD validated successfully. No structured data errors.
        - button "Dismiss" [ref=e358] [cursor=pointer]: ×
      - status [ref=e359]:
        - generic [ref=e360]: ⚠
        - generic [ref=e361]: The focus keyword appears only once in the body. Consider adding more uses.
        - button "Dismiss" [ref=e362] [cursor=pointer]: ×
      - status [ref=e363]:
        - generic [ref=e364]: ✕
        - generic [ref=e365]: A critical error occurred reading the 404 log database table.
        - button "Dismiss" [ref=e366] [cursor=pointer]: ×
  - generic [ref=e367]:
    - generic [ref=e368]:
      - paragraph [ref=e369]: Feedback
      - heading "Toasts" [level=2] [ref=e370]
      - paragraph [ref=e371]: Dark floating notifications for async confirmations and errors.
    - generic [ref=e373]:
      - alert [ref=e374]:
        - generic [ref=e375]: ✓
        - generic [ref=e376]:
          - generic [ref=e377]: Settings saved
          - generic [ref=e378]: Your SEO configuration has been updated.
        - button "Close" [ref=e379] [cursor=pointer]: ×
      - alert [ref=e380]:
        - generic [ref=e381]: ✕
        - generic [ref=e382]:
          - generic [ref=e383]: Save failed
          - generic [ref=e384]: Could not write to the database. Please try again.
        - button "Close" [ref=e385] [cursor=pointer]: ×
  - generic [ref=e386]:
    - generic [ref=e387]:
      - paragraph [ref=e388]: Feedback
      - heading "Banners" [level=2] [ref=e389]
      - paragraph [ref=e390]: Prominent section-level announcements with optional CTA actions.
    - generic [ref=e392]:
      - region [ref=e393]:
        - generic [ref=e394]: 🚀
        - generic [ref=e395]:
          - generic [ref=e396]: Upgrade to Nexter SEO Pro
          - paragraph [ref=e397]: Unlock schema templates, advanced redirects, and priority indexing with the Pro plan.
          - generic [ref=e398]:
            - button "Upgrade now" [ref=e399] [cursor=pointer]
            - button "Learn more" [ref=e400] [cursor=pointer]
      - region [ref=e401]:
        - generic [ref=e402]: ✅
        - generic [ref=e403]:
          - generic [ref=e404]: Plugin updated successfully
          - paragraph [ref=e405]: Nexter Extension has been updated to v2.4.0. All features are working correctly.
      - region [ref=e406]:
        - generic [ref=e407]: ⚠️
        - generic [ref=e408]:
          - generic [ref=e409]: Canonical URLs not configured
          - paragraph [ref=e410]: Some pages have conflicting canonical tags. Review the canonical settings panel.
          - button "Review now" [ref=e412] [cursor=pointer]
      - region [ref=e413]:
        - generic [ref=e414]: ❌
        - generic [ref=e415]:
          - generic [ref=e416]: IndexNow API key missing
          - paragraph [ref=e417]: Add your IndexNow API key to enable instant URL submission to search engines.
          - button "Add key" [ref=e419] [cursor=pointer]
  - generic [ref=e420]:
    - generic [ref=e421]:
      - paragraph [ref=e422]: Data
      - heading "Progress Bars" [level=2] [ref=e423]
      - paragraph [ref=e424]: Animated fill bars for task completion, scores, and metrics.
    - generic [ref=e426]:
      - generic [ref=e427]:
        - generic [ref=e428]:
          - generic [ref=e429]: SEO Score
          - generic [ref=e430]: 78%
        - progressbar [ref=e431]
      - generic [ref=e433]:
        - generic [ref=e434]:
          - generic [ref=e435]: Indexed Pages
          - generic [ref=e436]: 100%
        - progressbar [ref=e437]
      - generic [ref=e439]:
        - generic [ref=e440]:
          - generic [ref=e441]: Redirect health
          - generic [ref=e442]: 55%
        - progressbar [ref=e443]
  - generic [ref=e445]:
    - generic [ref=e446]:
      - paragraph [ref=e447]: Loading
      - heading "Skeletons & Spinners" [level=2] [ref=e448]
      - paragraph [ref=e449]: Placeholder states for async content and loading indicators.
    - generic [ref=e459]:
      - generic [ref=e460]:
        - status "Loading" [ref=e461]
        - paragraph [ref=e462]: sm
      - generic [ref=e463]:
        - status "Loading" [ref=e464]
        - paragraph [ref=e465]: md
      - generic [ref=e466]:
        - status "Loading" [ref=e467]
        - paragraph [ref=e468]: lg
  - generic [ref=e469]:
    - generic [ref=e470]:
      - paragraph [ref=e471]: Overlay
      - heading "Modal" [level=2] [ref=e472]
      - paragraph [ref=e473]: Portal-rendered dialog with brand accent stripe, backdrop, and Esc-to-close.
    - button "Open Modal" [ref=e475] [cursor=pointer]
  - generic [ref=e476]:
    - generic [ref=e477]:
      - paragraph [ref=e478]: Overlay
      - heading "Dialog, Sheet & Popover" [level=2] [ref=e479]
      - paragraph [ref=e480]: Confirm dialogs, card layouts, and inline info popover patterns.
    - generic [ref=e481]:
      - generic [ref=e482]:
        - paragraph [ref=e483]: Dialog
        - alertdialog "Delete redirect rule?" [ref=e484]:
          - generic [ref=e485]: ⚠
          - generic [ref=e486]: Delete redirect rule?
          - paragraph [ref=e487]: This will permanently remove the 301 redirect from /old-url to /new-url. This action cannot be undone.
          - generic [ref=e488]:
            - button "Cancel" [ref=e489] [cursor=pointer]
            - button "Delete" [ref=e490] [cursor=pointer]
      - generic [ref=e491]:
        - paragraph [ref=e492]: Sheet
        - generic [ref=e493]:
          - generic [ref=e494]:
            - generic [ref=e495]: Schema Configuration
            - generic [ref=e496]: JSON-LD settings for this post
          - paragraph [ref=e498]: Configure structured data output for this post type. Changes apply immediately on save.
          - generic [ref=e499]:
            - button "Reset" [ref=e500] [cursor=pointer]
            - button "Apply" [ref=e501] [cursor=pointer]
      - generic [ref=e502]:
        - paragraph [ref=e503]: Popover
        - tooltip "Focus keyword tip Your focus keyword should appear in the first paragraph, at least one heading, and the meta description. Read guide →" [ref=e504]:
          - generic [ref=e505]: Focus keyword tip
          - paragraph [ref=e506]: Your focus keyword should appear in the first paragraph, at least one heading, and the meta description.
          - button "Read guide →" [ref=e508] [cursor=pointer]
  - generic [ref=e509]:
    - generic [ref=e510]:
      - paragraph [ref=e511]: Input Controls
      - heading "Slider, Stepper & Segmented" [level=2] [ref=e512]
      - paragraph [ref=e513]: Numeric input patterns for ranges, counts, and option groups.
    - generic [ref=e515]:
      - generic [ref=e516]:
        - generic [ref=e517]:
          - generic [ref=e518]:
            - generic [ref=e519]: Menu Width
            - generic [ref=e520]:
              - combobox "Unit" [ref=e521] [cursor=pointer]:
                - option "px" [selected]
                - option "%"
                - option "rem"
                - option "em"
              - spinbutton "Menu Width value" [ref=e523]: "280"
          - slider "Menu Width" [ref=e524] [cursor=pointer]: "280"
        - generic [ref=e525]:
          - generic [ref=e526]:
            - generic [ref=e527]: Border Radius
            - generic [ref=e529]:
              - spinbutton "Border Radius value" [ref=e530]: "8"
              - generic [ref=e531]: px
          - slider "Border Radius" [ref=e532] [cursor=pointer]: "8"
        - generic [ref=e533]:
          - generic [ref=e534]:
            - generic [ref=e535]: Opacity
            - spinbutton "Opacity value" [ref=e538]: "75"
          - slider "Opacity" [ref=e539] [cursor=pointer]: "75"
      - generic [ref=e540]:
        - paragraph [ref=e541]: Stepper
        - generic [ref=e542]:
          - generic "Stepper" [ref=e543]:
            - button "Decrease" [ref=e544] [cursor=pointer]: −
            - spinbutton "Value" [ref=e545]: "3"
            - button "Increase" [ref=e546] [cursor=pointer]: +
          - generic [ref=e547]: max redirects per page
      - generic [ref=e548]:
        - paragraph [ref=e549]: Segmented
        - group "Segmented control" [ref=e550]:
          - button "Monthly" [pressed] [ref=e551] [cursor=pointer]
          - button "Yearly" [ref=e552] [cursor=pointer]
          - button "Lifetime" [ref=e553] [cursor=pointer]
  - generic [ref=e554]:
    - generic [ref=e555]:
      - paragraph [ref=e556]: Input
      - heading "Search" [level=2] [ref=e557]
      - paragraph [ref=e558]: Icon-prefixed search input for filtering lists and content.
    - generic [ref=e560]:
      - generic: ⌕
      - searchbox "Search redirects…" [ref=e561]
  - generic [ref=e562]:
    - generic [ref=e563]:
      - paragraph [ref=e564]: Media
      - heading "Carousel" [level=2] [ref=e565]
      - paragraph [ref=e566]: Snap-scroll carousel with prev/next controls and dot indicators.
    - generic [ref=e567]:
      - generic [ref=e568]:
        - generic [ref=e569]:
          - generic [ref=e570]: What's New
          - generic [ref=e571]: Nexter SEO — Content Analysis
          - paragraph [ref=e572]: Multi-keyword focus scoring with real-time readability feedback.
          - link "Learn more →" [ref=e573] [cursor=pointer]:
            - /url: "#"
        - generic [ref=e574]:
          - generic [ref=e575]: Performance
          - generic [ref=e576]: IndexNow Bulk Submission
          - paragraph [ref=e577]: Submit up to 10 URLs per 5 minutes with built-in rate limiting.
          - link "View docs →" [ref=e578] [cursor=pointer]:
            - /url: "#"
        - generic [ref=e579]:
          - generic [ref=e580]: Schema
          - generic [ref=e581]: JSON-LD Schema Builder
          - paragraph [ref=e582]: Structured data for every post type — validated and production-ready.
          - link "Get started →" [ref=e583] [cursor=pointer]:
            - /url: "#"
      - generic [ref=e584]:
        - button "Previous slide" [disabled] [ref=e585]: ‹
        - generic [ref=e586]:
          - button "Go to slide 1" [ref=e587] [cursor=pointer]
          - button "Go to slide 2" [ref=e588] [cursor=pointer]
          - button "Go to slide 3" [ref=e589] [cursor=pointer]
        - button "Next slide" [ref=e590] [cursor=pointer]: ›
  - generic [ref=e591]:
    - generic [ref=e592]:
      - paragraph [ref=e593]: Content
      - heading "Accordion" [level=2] [ref=e594]
      - paragraph [ref=e595]: Expandable FAQ sections with smooth open/close toggle.
    - generic [ref=e596]:
      - generic [ref=e597]:
        - button "What is Nexter SEO?" [expanded] [ref=e598] [cursor=pointer]:
          - generic [ref=e599]: What is Nexter SEO?
          - img [ref=e600]
        - region [ref=e602]: Nexter SEO is a full-featured WordPress SEO plugin with meta management, schema, IndexNow, redirects, and 404 monitoring.
      - button "How does focus keyword analysis work?" [ref=e604] [cursor=pointer]:
        - generic [ref=e605]: How does focus keyword analysis work?
        - img [ref=e606]
      - button "What redirect types are supported?" [ref=e609] [cursor=pointer]:
        - generic [ref=e610]: What redirect types are supported?
        - img [ref=e611]
  - generic [ref=e613]:
    - generic [ref=e614]:
      - paragraph [ref=e615]: Selection
      - heading "Combobox" [level=2] [ref=e616]
      - paragraph [ref=e617]: Filterable searchable dropdown with full keyboard navigation.
    - generic [ref=e619]:
      - generic [ref=e621]: Framework
      - combobox "Search framework…" [ref=e623]
  - generic [ref=e624]:
    - generic [ref=e625]:
      - paragraph [ref=e626]: Navigation
      - heading "Pagination" [level=2] [ref=e627]
      - paragraph [ref=e628]: Page number navigation with prev/next controls.
    - generic [ref=e629]:
      - navigation "Pagination" [ref=e630]:
        - button "Previous page" [disabled] [ref=e631]: ‹
        - button "1" [ref=e632] [cursor=pointer]
        - button "2" [ref=e633] [cursor=pointer]
        - button "3" [ref=e634] [cursor=pointer]
        - button "4" [ref=e635] [cursor=pointer]
        - button "5" [ref=e636] [cursor=pointer]
        - button "6" [ref=e637] [cursor=pointer]
        - button "7" [ref=e638] [cursor=pointer]
        - button "Next page" [ref=e639] [cursor=pointer]: ›
      - paragraph [ref=e640]: "Current page: 1"
  - generic [ref=e641]:
    - generic [ref=e642]:
      - paragraph [ref=e643]: Data
      - heading "Table" [level=2] [ref=e644]
      - paragraph [ref=e645]: Striped data table with sortable columns, numeric alignment, and action slots.
    - table [ref=e648]:
      - rowgroup [ref=e649]:
        - row "Name Status Visits Score Actions" [ref=e650]:
          - columnheader "Name" [ref=e651]
          - columnheader "Status" [ref=e652]
          - columnheader "Visits" [ref=e653]
          - columnheader "Score" [ref=e654]
          - columnheader "Actions" [ref=e655]
      - rowgroup [ref=e656]:
        - row "Homepage Published 12400 94 Edit View" [ref=e657]:
          - cell "Homepage" [ref=e658]
          - cell "Published" [ref=e659]
          - cell "12400" [ref=e660]
          - cell "94" [ref=e661]
          - cell "Edit View" [ref=e662]:
            - generic [ref=e663]:
              - button "Edit" [ref=e664] [cursor=pointer]
              - button "View" [ref=e665] [cursor=pointer]
        - row "About Us Published 3200 87 Edit View" [ref=e666]:
          - cell "About Us" [ref=e667]
          - cell "Published" [ref=e668]
          - cell "3200" [ref=e669]
          - cell "87" [ref=e670]
          - cell "Edit View" [ref=e671]:
            - generic [ref=e672]:
              - button "Edit" [ref=e673] [cursor=pointer]
              - button "View" [ref=e674] [cursor=pointer]
        - row "Blog Draft 820 72 Edit View" [ref=e675]:
          - cell "Blog" [ref=e676]
          - cell "Draft" [ref=e677]
          - cell "820" [ref=e678]
          - cell "72" [ref=e679]
          - cell "Edit View" [ref=e680]:
            - generic [ref=e681]:
              - button "Edit" [ref=e682] [cursor=pointer]
              - button "View" [ref=e683] [cursor=pointer]
        - row "Contact Published 1540 91 Edit View" [ref=e684]:
          - cell "Contact" [ref=e685]
          - cell "Published" [ref=e686]
          - cell "1540" [ref=e687]
          - cell "91" [ref=e688]
          - cell "Edit View" [ref=e689]:
            - generic [ref=e690]:
              - button "Edit" [ref=e691] [cursor=pointer]
              - button "View" [ref=e692] [cursor=pointer]
  - generic [ref=e693]:
    - generic [ref=e694]:
      - paragraph [ref=e695]: Misc
      - heading "Avatar, Kbd & Tooltip" [level=2] [ref=e696]
      - paragraph [ref=e697]: User avatars, keyboard shortcut badges, and hover tooltip overlays.
    - generic [ref=e699]:
      - generic [ref=e700]:
        - generic "NK" [ref=e701]
        - generic "NK" [ref=e702]
        - generic "NK" [ref=e703]
        - generic "User avatar" [ref=e704]:
          - img "User avatar" [ref=e705]
      - generic [ref=e706]:
        - generic [ref=e707]: Save changes
        - generic [ref=e708]: ⌘
        - generic [ref=e709]: S
      - generic [ref=e710]:
        - button "Hover me" [ref=e712] [cursor=pointer]
        - button "Open ↗" [ref=e714] [cursor=pointer]
  - generic [ref=e715]:
    - generic [ref=e716]:
      - paragraph [ref=e717]: Analytics
      - heading "Stat Cards" [level=2] [ref=e718]
      - paragraph [ref=e719]: Key metric display cards for dashboards and overview panels.
    - generic [ref=e720]:
      - generic [ref=e721]:
        - generic [ref=e722]: Total Pages
        - generic [ref=e723]: 1,248
        - generic [ref=e725]: ↑ 12%
      - generic [ref=e726]:
        - generic [ref=e727]: SEO Score
        - generic [ref=e728]: "94"
        - generic [ref=e730]: Excellent
      - generic [ref=e731]:
        - generic [ref=e732]: 404 Errors
        - generic [ref=e733]: "3"
        - generic [ref=e735]: Review needed
      - generic [ref=e736]:
        - generic [ref=e737]: Redirects
        - generic [ref=e738]: "47"
        - generic [ref=e739]: Active rules
  - generic [ref=e740]:
    - generic [ref=e741]:
      - paragraph [ref=e742]: Features
      - heading "Icon Boxes" [level=2] [ref=e743]
      - paragraph [ref=e744]: Feature highlight cards with icon, title, description, and CTA link.
    - generic [ref=e745]:
      - generic [ref=e746]:
        - generic [ref=e747]: Step 1
        - generic [ref=e748]: "1"
        - generic [ref=e749]: Configure Meta Tags
        - paragraph [ref=e750]: Set global templates for title and description tags across all post types.
        - link "Configure →" [ref=e751] [cursor=pointer]:
          - /url: "#"
      - generic [ref=e752]:
        - generic [ref=e753]: Step 2
        - generic [ref=e754]: "2"
        - generic [ref=e755]: Enable Schema Output
        - paragraph [ref=e756]: Generate valid JSON-LD structured data for posts, pages, and custom types.
        - link "Enable →" [ref=e757] [cursor=pointer]:
          - /url: "#"
      - generic [ref=e758]:
        - generic [ref=e759]: Step 3
        - generic [ref=e760]: "3"
        - generic [ref=e761]: Submit to IndexNow
        - paragraph [ref=e762]: Bulk-submit new and updated URLs to Bing, Yandex, and other search engines.
        - link "Submit →" [ref=e763] [cursor=pointer]:
          - /url: "#"
  - generic [ref=e764]:
    - generic [ref=e765]:
      - paragraph [ref=e766]: States
      - heading "Empty State" [level=2] [ref=e767]
      - paragraph [ref=e768]: Friendly placeholder for empty lists, search results with no matches.
    - status [ref=e770]:
      - generic [ref=e771]: 🔍
      - generic [ref=e772]: No redirects found
      - paragraph [ref=e773]: No redirect rules match your current search. Try adjusting your filters or add a new redirect.
      - button "Add redirect" [ref=e775] [cursor=pointer]
  - generic [ref=e776]:
    - generic [ref=e777]:
      - paragraph [ref=e778]: Controls
      - heading "Toggle Grid" [level=2] [ref=e779]
      - paragraph [ref=e780]: Compact grid of labeled toggles — controlled via valueMap or uncontrolled with internal state.
    - generic [ref=e782]:
      - generic [ref=e783]:
        - paragraph [ref=e784]: 2 Columns (Controlled)
        - group [ref=e785]:
          - generic [ref=e786]:
            - generic [ref=e787]:
              - generic [ref=e788]: Canonical URL
              - button "About Canonical URL" [ref=e790] [cursor=pointer]:
                - img [ref=e791]
            - switch [checked] [ref=e794] [cursor=pointer]
          - generic [ref=e797]:
            - generic [ref=e798]:
              - generic [ref=e799]: Open Graph
              - button "About Open Graph" [ref=e801] [cursor=pointer]:
                - img [ref=e802]
            - switch [ref=e805] [cursor=pointer]
          - generic [ref=e808]:
            - generic [ref=e809]:
              - generic [ref=e810]: JSON-LD Schema
              - button "About JSON-LD Schema" [ref=e812] [cursor=pointer]:
                - img [ref=e813]
            - switch [checked] [ref=e816] [cursor=pointer]
          - generic [ref=e819]:
            - generic [ref=e820]:
              - generic [ref=e821]: XML Sitemap
              - button "About XML Sitemap" [ref=e823] [cursor=pointer]:
                - img [ref=e824]
            - switch [ref=e827] [cursor=pointer]
          - generic [ref=e830]:
            - generic [ref=e831]:
              - generic [ref=e832]: Robots Meta
              - button "About Robots Meta" [ref=e834] [cursor=pointer]:
                - img [ref=e835]
            - switch [checked] [ref=e838] [cursor=pointer]
          - generic [ref=e841]:
            - generic [ref=e842]:
              - generic [ref=e843]: IndexNow
              - button "About IndexNow" [ref=e845] [cursor=pointer]:
                - img [ref=e846]
            - switch [ref=e849] [cursor=pointer]
      - generic [ref=e852]:
        - paragraph [ref=e853]: 3 Columns (Uncontrolled)
        - group [ref=e854]:
          - generic [ref=e855]:
            - generic [ref=e856]:
              - generic [ref=e857]: Canonical URL
              - button "About Canonical URL" [ref=e859] [cursor=pointer]:
                - img [ref=e860]
            - switch [ref=e863] [cursor=pointer]
          - generic [ref=e866]:
            - generic [ref=e867]:
              - generic [ref=e868]: Open Graph
              - button "About Open Graph" [ref=e870] [cursor=pointer]:
                - img [ref=e871]
            - switch [ref=e874] [cursor=pointer]
          - generic [ref=e877]:
            - generic [ref=e878]:
              - generic [ref=e879]: JSON-LD Schema
              - button "About JSON-LD Schema" [ref=e881] [cursor=pointer]:
                - img [ref=e882]
            - switch [ref=e885] [cursor=pointer]
          - generic [ref=e888]:
            - generic [ref=e889]:
              - generic [ref=e890]: XML Sitemap
              - button "About XML Sitemap" [ref=e892] [cursor=pointer]:
                - img [ref=e893]
            - switch [ref=e896] [cursor=pointer]
          - generic [ref=e899]:
            - generic [ref=e900]:
              - generic [ref=e901]: Robots Meta
              - button "About Robots Meta" [ref=e903] [cursor=pointer]:
                - img [ref=e904]
            - switch [ref=e907] [cursor=pointer]
          - generic [ref=e910]:
            - generic [ref=e911]:
              - generic [ref=e912]: IndexNow
              - button "About IndexNow" [ref=e914] [cursor=pointer]:
                - img [ref=e915]
            - switch [ref=e918] [cursor=pointer]
      - generic [ref=e921]:
        - paragraph [ref=e922]: 1 Column
        - group [ref=e923]:
          - generic [ref=e924]:
            - generic [ref=e925]:
              - generic [ref=e926]: Canonical URL
              - button "About Canonical URL" [ref=e928] [cursor=pointer]:
                - img [ref=e929]
            - switch [ref=e932] [cursor=pointer]
          - generic [ref=e935]:
            - generic [ref=e936]:
              - generic [ref=e937]: Open Graph
              - button "About Open Graph" [ref=e939] [cursor=pointer]:
                - img [ref=e940]
            - switch [ref=e943] [cursor=pointer]
          - generic [ref=e946]:
            - generic [ref=e947]:
              - generic [ref=e948]: JSON-LD Schema
              - button "About JSON-LD Schema" [ref=e950] [cursor=pointer]:
                - img [ref=e951]
            - switch [ref=e954] [cursor=pointer]
  - generic [ref=e957]:
    - generic [ref=e958]:
      - paragraph [ref=e959]: Navigation
      - heading "Breadcrumb" [level=2] [ref=e960]
      - paragraph [ref=e961]: Contextual navigation trail for settings pages and deep views.
    - generic [ref=e963]:
      - navigation "Breadcrumb" [ref=e964]:
        - list [ref=e965]:
          - listitem [ref=e966]:
            - button "Dashboard" [ref=e967] [cursor=pointer]
            - img [ref=e969]
          - listitem [ref=e971]:
            - button "Settings" [ref=e972] [cursor=pointer]
            - img [ref=e974]
          - listitem [ref=e976]:
            - generic [ref=e977]: SEO
      - navigation "Breadcrumb" [ref=e978]:
        - list [ref=e979]:
          - listitem [ref=e980]:
            - link "Home" [ref=e981] [cursor=pointer]:
              - /url: "#"
              - img [ref=e983]
              - text: Home
            - img [ref=e987]
          - listitem [ref=e989]:
            - link "Plugins" [ref=e990] [cursor=pointer]:
              - /url: "#"
            - img [ref=e992]
          - listitem [ref=e994]:
            - link "Nexter SEO" [ref=e995] [cursor=pointer]:
              - /url: "#"
            - img [ref=e997]
          - listitem [ref=e999]:
            - generic [ref=e1000]: Schema Settings
  - generic [ref=e1001]:
    - generic [ref=e1002]:
      - paragraph [ref=e1003]: Utilities
      - heading "CopyInput" [level=2] [ref=e1004]
      - paragraph [ref=e1005]: Read-only input with one-click clipboard copy — for API keys, license keys, shortcodes.
    - generic [ref=e1007]:
      - generic [ref=e1008]:
        - generic [ref=e1009]: License Key
        - generic [ref=e1010]:
          - textbox "License Key" [ref=e1011]: NXTR-PRO-A1B2-C3D4-E5F6
          - button "Copy to clipboard" [ref=e1012] [cursor=pointer]:
            - img [ref=e1013]
            - generic [ref=e1016]: Copy
        - generic [ref=e1017]: Renews annually. Do not share.
      - generic [ref=e1018]:
        - generic [ref=e1019]: Shortcode
        - generic [ref=e1020]:
          - textbox "Shortcode" [ref=e1021]: "[nexter_schema type=\"article\"]"
          - button "Copy to clipboard" [ref=e1022] [cursor=pointer]:
            - img [ref=e1023]
            - generic [ref=e1026]: Copy
      - generic [ref=e1027]:
        - generic [ref=e1028]: API Endpoint
        - generic [ref=e1029]:
          - textbox "API Endpoint" [ref=e1030]: https://api.nexterseo.com/v1/index
          - button "Copy to clipboard" [ref=e1031] [cursor=pointer]:
            - img [ref=e1032]
            - generic [ref=e1035]: Copy URL
  - generic [ref=e1036]:
    - generic [ref=e1037]:
      - paragraph [ref=e1038]: Actions
      - heading "ConfirmButton" [level=2] [ref=e1039]
      - paragraph [ref=e1040]: Inline two-step confirmation pattern — prevents accidental destructive actions.
    - generic [ref=e1042]:
      - button "Delete Redirect" [ref=e1043] [cursor=pointer]
      - button "Reset Settings" [ref=e1044] [cursor=pointer]
      - button "Publish Changes" [ref=e1045] [cursor=pointer]
  - generic [ref=e1046]:
    - generic [ref=e1047]:
      - paragraph [ref=e1048]: Form Controls
      - heading "NumberInput" [level=2] [ref=e1049]
      - paragraph [ref=e1050]: Precise numeric entry with +/− step buttons, min/max clamping, prefix/suffix support.
    - generic [ref=e1052]:
      - generic [ref=e1053]:
        - generic [ref=e1054]: Cache TTL
        - generic [ref=e1055]:
          - button "Decrease" [ref=e1056] [cursor=pointer]:
            - img [ref=e1057]
          - generic [ref=e1058]:
            - textbox "Cache TTL" [ref=e1059]: "12"
            - generic [ref=e1060]: s
          - button "Increase" [ref=e1061] [cursor=pointer]:
            - img [ref=e1062]
      - generic [ref=e1064]:
        - generic [ref=e1065]: Font Size
        - generic [ref=e1066]:
          - button "Decrease" [ref=e1067] [cursor=pointer]:
            - img [ref=e1068]
          - generic [ref=e1069]:
            - textbox "Font Size" [ref=e1070]: "16"
            - generic [ref=e1071]: px
          - button "Increase" [ref=e1072] [cursor=pointer]:
            - img [ref=e1073]
      - generic [ref=e1075]:
        - generic [ref=e1076]: Line Height
        - generic [ref=e1077]:
          - button "Decrease" [ref=e1078] [cursor=pointer]:
            - img [ref=e1079]
          - textbox "Line Height" [ref=e1081]: "1.5"
          - button "Increase" [ref=e1082] [cursor=pointer]:
            - img [ref=e1083]
  - generic [ref=e1085]:
    - generic [ref=e1086]:
      - paragraph [ref=e1087]: Form Controls
      - heading "OTPInput" [level=2] [ref=e1088]
      - paragraph [ref=e1089]: Segmented input for license codes — auto-advances on type, handles paste, arrow-key navigation.
    - generic [ref=e1091]:
      - generic [ref=e1092]:
        - paragraph [ref=e1093]: 6-digit OTP
        - group "OTP input" [ref=e1094]:
          - textbox "OTP digit 1" [ref=e1095]
          - textbox "OTP digit 2" [ref=e1096]
          - textbox "OTP digit 3" [ref=e1097]
          - textbox "OTP digit 4" [ref=e1098]
          - textbox "OTP digit 5" [ref=e1099]
          - textbox "OTP digit 6" [ref=e1100]
        - paragraph [ref=e1101]: "Value: \"\""
      - generic [ref=e1102]:
        - paragraph [ref=e1103]: License key — 4+4 with separator
        - group "OTP input" [ref=e1104]:
          - textbox "OTP digit 1" [ref=e1105]
          - textbox "OTP digit 2" [ref=e1106]
          - textbox "OTP digit 3" [ref=e1107]
          - textbox "OTP digit 4" [ref=e1108]
          - generic [ref=e1109]: –
          - textbox "OTP digit 5" [ref=e1110]
          - textbox "OTP digit 6" [ref=e1111]
          - textbox "OTP digit 7" [ref=e1112]
          - textbox "OTP digit 8" [ref=e1113]
  - generic [ref=e1114]:
    - generic [ref=e1115]:
      - paragraph [ref=e1116]: Layout
      - heading "SortableList" [level=2] [ref=e1117]
      - paragraph [ref=e1118]: Drag-to-reorder list using HTML5 DnD — no external dependencies.
    - list [ref=e1120]:
      - listitem [ref=e1121]:
        - generic "Drag to reorder" [ref=e1122]:
          - img [ref=e1123]
        - generic [ref=e1131]:
          - generic [ref=e1132]: "301 Redirect: /old-page → /new-page"
          - generic [ref=e1133]: Active
      - listitem [ref=e1134]:
        - generic "Drag to reorder" [ref=e1135]:
          - img [ref=e1136]
        - generic [ref=e1144]:
          - generic [ref=e1145]: "302 Redirect: /promo → /sale"
          - generic [ref=e1146]: Active
      - listitem [ref=e1147]:
        - generic "Drag to reorder" [ref=e1148]:
          - img [ref=e1149]
        - generic [ref=e1157]:
          - generic [ref=e1158]: "307 Redirect: /temp → /landing"
          - generic [ref=e1159]: Active
  - generic [ref=e1160]:
    - generic [ref=e1161]:
      - paragraph [ref=e1162]: Form Controls
      - heading "FileUpload / Dropzone" [level=2] [ref=e1163]
      - paragraph [ref=e1164]: "Drag-and-drop file upload with preview. Supports WP Media Library when wpMedia={true}."
    - generic "File upload area" [ref=e1168] [cursor=pointer]:
      - img [ref=e1169]
      - generic [ref=e1172]: Drag & drop files here, or
      - button "Browse" [ref=e1174]
      - generic [ref=e1175]: PNG, JPG, PDF up to 5 MB
  - generic [ref=e1176]:
    - generic [ref=e1177]:
      - paragraph [ref=e1178]: Form Controls
      - heading "ColorPicker" [level=2] [ref=e1179]
      - paragraph [ref=e1180]: HSV color picker with 2D gradient box, hue slider, hex input, and preset swatches.
    - generic [ref=e1182]:
      - generic [ref=e1183]:
        - paragraph [ref=e1184]: Standard
        - 'button "Color picker, current: #1e40af" [ref=e1186] [cursor=pointer]':
          - generic [ref=e1188]: "#1E40AF"
          - generic [ref=e1189]: ▾
        - paragraph [ref=e1190]: "Value: #1E40AF"
      - generic [ref=e1191]:
        - paragraph [ref=e1192]: With Alpha
        - 'button "Color picker, current: #3b82f6" [ref=e1194] [cursor=pointer]':
          - generic [ref=e1196]: "#3B82F6"
          - generic [ref=e1197]: ▾
      - generic [ref=e1198]:
        - paragraph [ref=e1199]: No swatches
        - 'button "Color picker, current: #22c55e" [ref=e1201] [cursor=pointer]':
          - generic [ref=e1203]: "#22C55E"
          - generic [ref=e1204]: ▾
  - generic [ref=e1205]:
    - generic [ref=e1206]:
      - paragraph [ref=e1207]: Form Controls
      - heading "DatePicker" [level=2] [ref=e1208]
      - paragraph [ref=e1209]: Calendar popover date selector with min/max support, Today shortcut, and clearable input.
    - generic [ref=e1211]:
      - generic [ref=e1212]:
        - paragraph [ref=e1213]: Single Date (controlled)
        - button "Select expiry date" [ref=e1215] [cursor=pointer]:
          - img [ref=e1217]
          - generic [ref=e1220]: Select expiry date
        - paragraph [ref=e1221]: "Value: —"
      - generic [ref=e1222]:
        - paragraph [ref=e1223]: With min/max
        - button "Select date" [ref=e1225] [cursor=pointer]:
          - img [ref=e1227]
          - generic [ref=e1230]: 2026-05-01
          - button "Clear" [ref=e1231]:
            - img [ref=e1232]
  - generic [ref=e1234]:
    - generic [ref=e1235]:
      - paragraph [ref=e1236]: Form Controls
      - heading "DateRangePicker" [level=2] [ref=e1237]
      - paragraph [ref=e1238]: Two-calendar range picker for analytics filters — start/end date selection with range highlight.
    - generic [ref=e1240]:
      - button "From date To date" [ref=e1242] [cursor=pointer]:
        - img [ref=e1244]
        - generic [ref=e1247]: From date
        - img [ref=e1249]
        - generic [ref=e1251]: To date
      - paragraph [ref=e1252]: "Range: — → —"
  - generic [ref=e1253]:
    - generic [ref=e1254]:
      - paragraph [ref=e1255]: Input Controls
      - heading "MultiSelect" [level=2] [ref=e1256]
      - paragraph [ref=e1257]: Div-based multi-select with tag chips, grouped options, live search, and full keyboard navigation.
    - generic [ref=e1259]:
      - generic [ref=e1260]:
        - paragraph [ref=e1261]: Grouped — searchable (controlled)
        - combobox [ref=e1262]:
          - generic "Open select" [ref=e1263] [cursor=pointer]:
            - generic [ref=e1264]:
              - generic [ref=e1265]:
                - generic [ref=e1266]: Entire Website
                - button "Remove Entire Website" [ref=e1267]: ×
              - generic [ref=e1268]:
                - generic [ref=e1269]: All Singulars
                - button "Remove All Singulars" [ref=e1270]: ×
              - generic [ref=e1271]:
                - generic [ref=e1272]: All Archives
                - button "Remove All Archives" [ref=e1273]: ×
            - generic [ref=e1274]:
              - button "Clear all" [ref=e1275]: ×
              - img [ref=e1277]
        - paragraph [ref=e1279]: "Selected: entire, singulars, archives"
      - generic [ref=e1280]:
        - paragraph [ref=e1281]: No search input
        - combobox [ref=e1282]:
          - generic "Open select" [ref=e1283] [cursor=pointer]:
            - generic [ref=e1285]: Select pages…
            - img [ref=e1288]
      - generic [ref=e1290]:
        - paragraph [ref=e1291]: Disabled
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
  - generic [ref=e1292]:
    - generic [ref=e1293]:
      - paragraph [ref=e1294]: Labels
      - heading "Status Pills" [level=2] [ref=e1295]
      - paragraph [ref=e1296]: Animated presence indicators for active, inactive, pending, and info states.
    - generic [ref=e1298]:
      - 'generic "Status: default" [ref=e1299]': Default
      - 'generic "Status: active" [ref=e1300]': Active
      - 'generic "Status: inactive" [ref=e1301]': Inactive
      - 'generic "Status: pending" [ref=e1302]': Pending
      - 'generic "Status: info" [ref=e1303]': Indexing
  - generic [ref=e1304]:
    - paragraph [ref=e1305]: Nexter UI Components v1.0.0 — Nexter Design System
    - generic [ref=e1306]:
      - generic [ref=e1307]: React 18
      - generic [ref=e1308]: Zero dependencies
      - generic [ref=e1309]: WCAG 2.2 AA
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { gotoDemo } from './helpers.js';
  3   | 
  4   | /**
  5   |  * Select (native), Dropdown (custom), Combobox, MultiSelect
  6   |  */
  7   | 
  8   | test.describe('Select (native)', () => {
  9   |   test.beforeEach(async ({ page }) => { await gotoDemo(page); });
  10  | 
  11  |   test('native select element is visible', async ({ page }) => {
  12  |     const sel = page.locator('select.nxp-select').first();
  13  |     await sel.scrollIntoViewIfNeeded();
  14  |     await expect(sel).toBeVisible();
  15  |   });
  16  | 
  17  |   test('native select has options', async ({ page }) => {
  18  |     const sel = page.locator('select.nxp-select').first();
  19  |     await sel.scrollIntoViewIfNeeded();
  20  |     expect(await sel.locator('option').count()).toBeGreaterThan(0);
  21  |   });
  22  | 
  23  |   test('selecting an option changes the value', async ({ page }) => {
  24  |     const sel = page.locator('select.nxp-select').first();
  25  |     await sel.scrollIntoViewIfNeeded();
  26  |     const options = await sel.locator('option').all();
  27  |     const targetText = await options[options.length - 1].textContent();
  28  |     const targetValue = await options[options.length - 1].getAttribute('value');
  29  |     await sel.selectOption({ value: targetValue });
  30  |     await expect(sel).toHaveValue(targetValue);
  31  |   });
  32  | });
  33  | 
  34  | test.describe('Dropdown', () => {
  35  |   test.beforeEach(async ({ page }) => { await gotoDemo(page); });
  36  | 
  37  |   test('dropdown trigger opens menu', async ({ page }) => {
  38  |     const dd = page.locator('.nxp-dropdown').first();
  39  |     await dd.scrollIntoViewIfNeeded();
  40  |     await dd.locator('.nxp-dropdown__trigger').click();
  41  |     await expect(dd.locator('.nxp-dropdown__menu')).toBeVisible();
  42  |   });
  43  | 
  44  |   test('dropdown renders divider', async ({ page }) => {
  45  |     const dd = page.locator('.nxp-dropdown').first();
  46  |     await dd.scrollIntoViewIfNeeded();
  47  |     await dd.locator('.nxp-dropdown__trigger').click();
  48  |     await expect(dd.locator('.nxp-dropdown__divider').first()).toBeVisible();
  49  |   });
  50  | 
  51  |   test('dropdown closes on Escape', async ({ page }) => {
  52  |     const dd = page.locator('.nxp-dropdown').first();
  53  |     await dd.scrollIntoViewIfNeeded();
  54  |     await dd.locator('.nxp-dropdown__trigger').click();
  55  |     await expect(dd.locator('.nxp-dropdown__menu')).toBeVisible();
  56  |     await page.keyboard.press('Escape');
  57  |     await expect(dd.locator('.nxp-dropdown__menu')).not.toBeVisible();
  58  |   });
  59  | 
  60  |   test('dropdown closes on outside click', async ({ page }) => {
  61  |     const dd = page.locator('.nxp-dropdown').first();
  62  |     await dd.scrollIntoViewIfNeeded();
  63  |     await dd.locator('.nxp-dropdown__trigger').click();
  64  |     await expect(dd.locator('.nxp-dropdown__menu')).toBeVisible();
  65  |     await page.mouse.click(5, 5);
  66  |     await expect(dd.locator('.nxp-dropdown__menu')).not.toBeVisible();
  67  |   });
  68  | 
  69  |   test('selecting an item updates trigger text', async ({ page }) => {
  70  |     const dd = page.locator('.nxp-dropdown').first();
  71  |     await dd.scrollIntoViewIfNeeded();
  72  |     await dd.locator('.nxp-dropdown__trigger').click();
  73  |     const item = dd.locator('.nxp-dropdown__item').first();
  74  |     const itemText = await item.textContent();
  75  |     await item.click();
> 76  |     await expect(dd.locator('.nxp-dropdown__trigger')).toContainText(itemText.trim().split('\n')[0].trim());
      |                                                        ^ Error: expect(locator).toContainText(expected) failed
  77  |   });
  78  | });
  79  | 
  80  | test.describe('Combobox', () => {
  81  |   test.beforeEach(async ({ page }) => { await gotoDemo(page); });
  82  | 
  83  |   test('combobox input accepts typing', async ({ page }) => {
  84  |     const input = page.locator('.nxp-combobox__input').first();
  85  |     await input.scrollIntoViewIfNeeded();
  86  |     await input.fill('Re');
  87  |     await expect(input).toHaveValue('Re');
  88  |   });
  89  | 
  90  |   test('typing opens and filters the list', async ({ page }) => {
  91  |     const input = page.locator('.nxp-combobox__input').first();
  92  |     await input.scrollIntoViewIfNeeded();
  93  |     await input.fill('vue');
  94  |     await expect(page.locator('.nxp-combobox__list').first()).toBeVisible();
  95  |     await expect(page.locator('.nxp-combobox__item').getByText('Vue')).toBeVisible();
  96  |   });
  97  | 
  98  |   test('Escape closes the list', async ({ page }) => {
  99  |     const input = page.locator('.nxp-combobox__input').first();
  100 |     await input.scrollIntoViewIfNeeded();
  101 |     await input.fill('re');
  102 |     await expect(page.locator('.nxp-combobox__list').first()).toBeVisible();
  103 |     await page.keyboard.press('Escape');
  104 |     await expect(page.locator('.nxp-combobox__list').first()).not.toBeVisible();
  105 |   });
  106 | 
  107 |   test('clicking an item selects it', async ({ page }) => {
  108 |     const input = page.locator('.nxp-combobox__input').first();
  109 |     await input.scrollIntoViewIfNeeded();
  110 |     await input.fill('Re');
  111 |     const item = page.locator('.nxp-combobox__item').first();
  112 |     const label = await item.textContent();
  113 |     await item.click();
  114 |     await expect(input).toHaveValue(label.trim());
  115 |   });
  116 | });
  117 | 
  118 | test.describe('MultiSelect', () => {
  119 |   test.beforeEach(async ({ page }) => { await gotoDemo(page); });
  120 | 
  121 |   async function openMultiSelect(page) {
  122 |     const ms = page.locator('.nxp-ms').first();
  123 |     await ms.scrollIntoViewIfNeeded();
  124 |     await ms.locator('.nxp-ms__trigger').click();
  125 |     await expect(ms.locator('[role="listbox"]')).toBeVisible();
  126 |     return ms;
  127 |   }
  128 | 
  129 |   test('pre-selected tags are visible', async ({ page }) => {
  130 |     const ms = page.locator('.nxp-ms').first();
  131 |     await ms.scrollIntoViewIfNeeded();
  132 |     await expect(ms.locator('.nxp-ms__tag').first()).toBeVisible();
  133 |   });
  134 | 
  135 |   test('opens listbox on trigger click', async ({ page }) => {
  136 |     await openMultiSelect(page);
  137 |   });
  138 | 
  139 |   test('group labels are visible when open', async ({ page }) => {
  140 |     await openMultiSelect(page);
  141 |     await expect(page.locator('.nxp-ms__group-label').first()).toBeVisible();
  142 |   });
  143 | 
  144 |   test('search filters options', async ({ page }) => {
  145 |     const ms = await openMultiSelect(page);
  146 |     await ms.locator('.nxp-ms__search').fill('front');
  147 |     await expect(ms.locator('.nxp-ms__option').getByText('Front Page')).toBeVisible();
  148 |     await expect(ms.locator('.nxp-ms__option').getByText('Entire Website')).not.toBeVisible();
  149 |   });
  150 | 
  151 |   test('no-results message on empty search', async ({ page }) => {
  152 |     const ms = await openMultiSelect(page);
  153 |     await ms.locator('.nxp-ms__search').fill('xyzxyz');
  154 |     await expect(ms.locator('[role="status"]')).toBeVisible();
  155 |   });
  156 | 
  157 |   test('Escape closes listbox', async ({ page }) => {
  158 |     const ms = await openMultiSelect(page);
  159 |     await page.keyboard.press('Escape');
  160 |     await expect(ms.locator('[role="listbox"]')).not.toBeVisible();
  161 |   });
  162 | 
  163 |   test('remove tag via pointer event', async ({ page }) => {
  164 |     const ms = page.locator('.nxp-ms').first();
  165 |     await ms.scrollIntoViewIfNeeded();
  166 |     const tagsBefore = await ms.locator('.nxp-ms__tag').count();
  167 |     if (tagsBefore > 0) {
  168 |       await ms.locator('.nxp-ms__tag-remove').first().dispatchEvent('pointerdown');
  169 |       await expect(ms.locator('.nxp-ms__tag')).toHaveCount(tagsBefore - 1);
  170 |     }
  171 |   });
  172 | 
  173 |   test('combobox aria-expanded=true when open', async ({ page }) => {
  174 |     const ms = await openMultiSelect(page);
  175 |     await expect(ms).toHaveAttribute('aria-expanded', 'true');
  176 |   });
```