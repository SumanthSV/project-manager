# Team Project Tracker

A single-page analytics dashboard for reviewing a team's projects, cost savings
and AI involvement. Built with React (Vite) and plain CSS — no UI framework,
no charting library, no backend.

- **Landing page** — a grid of five clickable team member cards with an
  avatar, role, project count, total savings and an alert badge.
- **Member dashboard** — clicking a member shows their project(s), each with:
  - Value Added
  - Business Impact
  - Cost Saving (animated count-up, currency formatted)
  - AI Involvement % (animated circular progress ring)
  - a pipeline/status stepper (Draft → EA Review → TAC → SARB → Completed)
  - a cost-savings trend chart and an effort-allocation donut chart, both
    hand-built in SVG
  - a **Back to Team** button to return to the landing page
- **Light / dark theme toggle**, top right, persisted in `localStorage`:
  - Light — fresh green + gold accents
  - Dark — deep navy with a blue / green / orange / purple accent palette

All content is fully responsive (mobile, tablet, desktop), keyboard
accessible (member cards are real `<button>` elements, focus states are
visible), and respects `prefers-reduced-motion`.

## Project structure

```
team-dashboard/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── hooks.js                     # useCountUp, usePrefersReducedMotion
    ├── data/
    │   └── teamData.js              # all sample data lives here
    ├── utils/
    │   └── format.js                # currency formatters
    ├── styles/
    │   └── index.css                # design tokens (2 themes) + all styles
    └── components/
        ├── Icons.jsx                # inline SVG icon set
        ├── TeamList.jsx             # landing page
        ├── MemberCard.jsx
        ├── Dashboard.jsx            # member dashboard view
        ├── ProjectCard.jsx
        ├── MetricCard.jsx
        ├── CountUpValue.jsx
        ├── ProgressRing.jsx         # AI Involvement %
        ├── TrendChart.jsx           # savings trend (SVG line/area)
        ├── DonutChart.jsx           # effort allocation (SVG donut)
        ├── PipelineStepper.jsx
        └── ThemeToggle.jsx
```

## Tech stack

- **React 18** + **Vite 5** (`npm create vite@latest` scaffold)
- Plain CSS — CSS custom properties drive both themes; no Tailwind/Bootstrap/MUI
- View switching via a single `useState` in `App.jsx` — no router
- No backend — all data is hardcoded in `src/data/teamData.js`
- Charts and progress rings are hand-built SVG — no charting library

## Local setup

Requires Node.js 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Vite will print a local URL (typically `http://localhost:5173`). Open it in
your browser — the app hot-reloads as you edit files.

To build a production bundle locally:

```bash
npm run build      # outputs to /dist
npm run preview    # serves the built /dist folder locally, to sanity-check it
```

## Editing the data

Everything shown on the dashboard comes from `src/data/teamData.js`. Each
member object looks like this:

```js
{
  id: 'preetha-menon',
  name: 'Preetha Menon',
  role: 'Team Manager',
  initials: 'PM',
  colorKey: 1,          // 1–5, maps to the --chart-1..5 accent colors
  alert: 'Schema validation failed for legacy database', // optional
  projects: [
    {
      id: 'dmnd0005501',
      code: 'DMND0005501',
      name: 'Enterprise Data Lake Migration',
      type: 'Program',
      category: 'Transformation',
      status: 'EA Review',   // Draft | EA Review | TAC | SARB | Completed | Rejected
      startDate: '15 Jul 2026',
      endDate: '31 Dec 2027',
      valueAdded: '...',
      businessImpact: '...',
      costSaving: 340000,
      aiInvolvement: 65,     // 0–100
      trend: [ { month: 'Jan', value: 40 }, /* … 6 points … */ ],
      allocation: [ { label: 'Data Engineering', value: 42, colorKey: 1 }, /* … */ ],
    },
  ],
}
```

Add, remove, or edit members and projects directly in that file — every
screen re-renders from it automatically.

## Deploying to Vercel

The app is a static Vite build, so it deploys to Vercel with **zero config
changes**. Framework preset, build command and output directory are all
auto-detected, but for reference:

| Setting          | Value           |
|-------------------|-----------------|
| Framework Preset  | Vite            |
| Build Command     | `npm run build` |
| Output Directory  | `dist`          |
| Install Command   | `npm install`   |

### Option A — GitHub → Vercel import

1. Push this project to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Team Project Tracker dashboard"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and sign in.
3. Click **Import Project**, select your GitHub repo.
4. Vercel auto-detects the Vite framework preset and fills in the build
   settings from the table above — leave them as-is.
5. Click **Deploy**. Your live URL is ready in under a minute.
6. Every future `git push` to `main` triggers an automatic redeploy.

### Option B — Vercel CLI

1. Install the CLI globally (one-time):
   ```bash
   npm i -g vercel
   ```
2. From the project root, log in and deploy a preview:
   ```bash
   vercel
   ```
   Answer the prompts (link to a new or existing project, keep the detected
   Vite settings).
3. Once you're happy with the preview, ship it to production:
   ```bash
   vercel --prod
   ```

That's it — no `vercel.json` or extra config is required for this project.

## Accessibility notes

- Member cards are semantic `<button>` elements — reachable and activatable
  with <kbd>Tab</kbd> / <kbd>Enter</kbd> / <kbd>Space</kbd>.
- All charts include an `aria-label` summarizing what they show, for screen
  readers.
- Focus states use a visible outline (`:focus-visible`) throughout.
- Animations (count-up, ring fill, chart draw-in) are skipped in favor of an
  instant state when the OS-level "reduce motion" preference is on.
