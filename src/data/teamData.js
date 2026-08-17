// All data below is static sample/demo data — no backend, no network calls.
// Each member has 1–2 projects with the required metric fields:
// valueAdded, businessImpact, costSaving, aiInvolvement.
// `trend` powers the savings line chart, `allocation` powers the donut chart.

const teamData = [
  {
    id: 'preetha-menon',
    name: 'Preetha Menon',
    role: 'Team Manager',
    initials: 'PM',
    colorKey: 1,
    alert: 'Schema validation failed for legacy database',
    projects: [
      {
        id: 'dmnd0005501',
        code: 'DMND0005501',
        name: 'Enterprise Data Lake Migration',
        type: 'Program',
        category: 'Transformation',
        status: 'EA Review',
        startDate: '15 Jul 2026',
        endDate: '31 Dec 2027',
        valueAdded:
          'Consolidates 14 fragmented data sources into a unified, query-optimized lake with 3x faster insight generation.',
        businessImpact:
          'Provides leadership with real-time dashboards and predictive analytics for strategic decision-making.',
        costSaving: 340000,
        aiInvolvement: 65,
        trend: [
          { month: 'Jan', value: 40 },
          { month: 'Feb', value: 46 },
          { month: 'Mar', value: 58 },
          { month: 'Apr', value: 62 },
          { month: 'May', value: 71 },
          { month: 'Jun', value: 80 },
        ],
        allocation: [
          { label: 'Data Engineering', value: 42, colorKey: 1 },
          { label: 'ML / AI', value: 26, colorKey: 2 },
          { label: 'Cloud Ops', value: 20, colorKey: 3 },
          { label: 'QA & Governance', value: 12, colorKey: 4 },
        ],
      },
    ],
  },
  {
    id: 'suzette-williams',
    name: 'Suzette Williams',
    role: 'Team Member',
    initials: 'SW',
    colorKey: 4,
    alert: 'Model drift detected — retraining scheduled',
    projects: [
      {
        id: 'dmnd0005512',
        code: 'DMND0005512',
        name: 'Customer Churn Prediction Platform',
        type: 'Project',
        category: 'Strategic',
        status: 'SARB',
        startDate: '02 Mar 2026',
        endDate: '30 Sep 2026',
        valueAdded:
          'Replaces three manual retention spreadsheets with a single scored, self-updating watchlist of at-risk accounts.',
        businessImpact:
          'Lets the retention team act two weeks earlier on average, ahead of contract renewal windows.',
        costSaving: 450000,
        aiInvolvement: 78,
        trend: [
          { month: 'Jan', value: 55 },
          { month: 'Feb', value: 60 },
          { month: 'Mar', value: 68 },
          { month: 'Apr', value: 82 },
          { month: 'May', value: 90 },
          { month: 'Jun', value: 98 },
        ],
        allocation: [
          { label: 'ML / AI', value: 48, colorKey: 2 },
          { label: 'Data Engineering', value: 24, colorKey: 1 },
          { label: 'Product & UX', value: 16, colorKey: 5 },
          { label: 'QA & Governance', value: 12, colorKey: 4 },
        ],
      },
    ],
  },
  {
    id: 'priya-anandamohan',
    name: 'Priya Anandamohan',
    role: 'Team Member',
    initials: 'PA',
    colorKey: 2,
    alert: '2 tasks overdue in current sprint',
    projects: [
      {
        id: 'dmnd0005523',
        code: 'DMND0005523',
        name: 'Automated Claims Processing',
        type: 'Project',
        category: 'Operational',
        status: 'Completed',
        startDate: '10 Sep 2025',
        endDate: '28 Feb 2026',
        valueAdded:
          'Auto-adjudicates routine claims end to end, cutting manual review volume by more than half.',
        businessImpact:
          'Reduces average claim turnaround from 6 days to under 18 hours for the standard-tier queue.',
        costSaving: 950000,
        aiInvolvement: 82,
        trend: [
          { month: 'Jan', value: 70 },
          { month: 'Feb', value: 78 },
          { month: 'Mar', value: 85 },
          { month: 'Apr', value: 91 },
          { month: 'May', value: 96 },
          { month: 'Jun', value: 100 },
        ],
        allocation: [
          { label: 'ML / AI', value: 44, colorKey: 2 },
          { label: 'Data Engineering', value: 22, colorKey: 1 },
          { label: 'Cloud Ops', value: 18, colorKey: 3 },
          { label: 'QA & Governance', value: 16, colorKey: 4 },
        ],
      },
      {
        id: 'dmnd0005524',
        code: 'DMND0005524',
        name: 'Predictive Maintenance for Fleet Ops',
        type: 'Project',
        category: 'Operational',
        status: 'TAC',
        startDate: '05 Jan 2026',
        endDate: '20 Nov 2026',
        valueAdded:
          'Flags likely vehicle failures 10–14 days out using telematics signals instead of fixed service intervals.',
        businessImpact:
          'Projected to cut unplanned downtime across the fleet by roughly a third in year one.',
        costSaving: 800000,
        aiInvolvement: 54,
        trend: [
          { month: 'Jan', value: 30 },
          { month: 'Feb', value: 35 },
          { month: 'Mar', value: 41 },
          { month: 'Apr', value: 47 },
          { month: 'May', value: 55 },
          { month: 'Jun', value: 63 },
        ],
        allocation: [
          { label: 'Data Engineering', value: 34, colorKey: 1 },
          { label: 'ML / AI', value: 30, colorKey: 2 },
          { label: 'Cloud Ops', value: 24, colorKey: 3 },
          { label: 'QA & Governance', value: 12, colorKey: 4 },
        ],
      },
    ],
  },
  {
    id: 'petr-jericha',
    name: 'Petr Jericha',
    role: 'Team Member',
    initials: 'PJ',
    colorKey: 5,
    alert: 'Awaiting SARB sign-off',
    projects: [
      {
        id: 'dmnd0005531',
        code: 'DMND0005531',
        name: 'Global Supply Chain Visibility Hub',
        type: 'Program',
        category: 'Strategic',
        status: 'SARB',
        startDate: '18 Nov 2025',
        endDate: '15 Aug 2026',
        valueAdded:
          'Merges freight, customs and supplier data into one tracking layer covering 22 countries.',
        businessImpact:
          'Cuts shipment-status escalations to the ops desk by giving planners a live exceptions feed.',
        costSaving: 750000,
        aiInvolvement: 47,
        trend: [
          { month: 'Jan', value: 48 },
          { month: 'Feb', value: 50 },
          { month: 'Mar', value: 57 },
          { month: 'Apr', value: 61 },
          { month: 'May', value: 66 },
          { month: 'Jun', value: 75 },
        ],
        allocation: [
          { label: 'Data Engineering', value: 40, colorKey: 1 },
          { label: 'Cloud Ops', value: 28, colorKey: 3 },
          { label: 'ML / AI', value: 18, colorKey: 2 },
          { label: 'Product & UX', value: 14, colorKey: 5 },
        ],
      },
    ],
  },
  {
    id: 'sushma-b-b',
    name: 'Sushma B B',
    role: 'Team Member',
    initials: 'SB',
    colorKey: 3,
    alert: 'Vendor risk review due this week',
    projects: [
      {
        id: 'dmnd0005542',
        code: 'DMND0005542',
        name: 'HR Chatbot & Self-Service Portal',
        type: 'Project',
        category: 'Innovation',
        status: 'Draft',
        startDate: '01 Jun 2026',
        endDate: '30 Jan 2027',
        valueAdded:
          'Deflects routine HR queries (leave, payroll, benefits) away from the shared-services inbox.',
        businessImpact:
          'Frees an estimated 25 hours per week of HR analyst time for higher-value casework.',
        costSaving: 500000,
        aiInvolvement: 71,
        trend: [
          { month: 'Jan', value: 12 },
          { month: 'Feb', value: 18 },
          { month: 'Mar', value: 27 },
          { month: 'Apr', value: 38 },
          { month: 'May', value: 46 },
          { month: 'Jun', value: 55 },
        ],
        allocation: [
          { label: 'ML / AI', value: 40, colorKey: 2 },
          { label: 'Product & UX', value: 26, colorKey: 5 },
          { label: 'Data Engineering', value: 20, colorKey: 1 },
          { label: 'QA & Governance', value: 14, colorKey: 4 },
        ],
      },
      {
        id: 'dmnd0005543',
        code: 'DMND0005543',
        name: 'Vendor Risk Scoring Model',
        type: 'Project',
        category: 'Security',
        status: 'TAC',
        startDate: '20 Feb 2026',
        endDate: '10 Oct 2026',
        valueAdded:
          'Scores third-party vendors on a single risk index instead of six disconnected questionnaires.',
        businessImpact:
          'Shortens vendor onboarding review time from 3 weeks to roughly 4 business days.',
        costSaving: 350000,
        aiInvolvement: 39,
        trend: [
          { month: 'Jan', value: 20 },
          { month: 'Feb', value: 24 },
          { month: 'Mar', value: 29 },
          { month: 'Apr', value: 33 },
          { month: 'May', value: 38 },
          { month: 'Jun', value: 42 },
        ],
        allocation: [
          { label: 'Data Engineering', value: 36, colorKey: 1 },
          { label: 'QA & Governance', value: 28, colorKey: 4 },
          { label: 'ML / AI', value: 22, colorKey: 2 },
          { label: 'Cloud Ops', value: 14, colorKey: 3 },
        ],
      },
    ],
  },
]

export default teamData
