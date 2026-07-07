# DCP Predictive Maintenance Dashboard

A plant-wide predictive maintenance and reliability dashboard built for the **DCP University Engineering Challenge** (Track 2: Predictive Maintenance and Reliability Early-Warning System), sponsored by Dangote Cement Plc and organised by the University of Lagos Engineering Society Academic & Research Board (ULES ARB).

The dashboard visualizes real-time equipment health across a cement plant — tracking machine-specific signals (current draw, vibration, temperature, dust emissions) to flag developing faults before they cause unplanned downtime.

## Tech Stack

- **React** (Vite)
- **Tailwind CSS** (via `@tailwindcss/vite`)
- **Recharts** — trend sparklines and mini line charts
- **Lucide React** — icon set

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
git clone <your-repo-url>
cd dcp-dashboard
npm install
```

### Run the dev server

```bash
npm run dev
```

Open the local URL shown in your terminal (usually `http://localhost:5173`).

## Project Structure

```
dcp-dashboard/
├── src/
│   ├── assets/                    # Logo and static images
│   ├── components/
│   │   ├── Sidebar.jsx            # Left navigation
│   │   ├── TopBar.jsx             # Header: weather, alerts, profile
│   │   ├── StatCard.jsx           # Reusable top-row stat tile
│   │   ├── ProcessFlow.jsx        # Plant process flow diagram
│   │   ├── MaintenancePriority.jsx
│   │   ├── RecentAlerts.jsx
│   │   ├── EquipmentHealthTable.jsx
│   │   ├── EquipmentDetail.jsx    # Rotary Kiln detail panel
│   │   ├── ActOnThis.jsx
│   │   ├── Predictions.jsx
│   │   ├── PlantKPIs.jsx
│   │   ├── MTBFCharts.jsx
│   │   ├── SparePartsAtRisk.jsx
│   │   ├── BestMaintenanceWindow.jsx
│   │   └── AIAssistant.jsx
│   ├── data/
│   │   └── mockData.js            # All mock plant data (single source of truth)
│   ├── pages/
│   │   └── Overview.jsx           # Assembles all components into the Overview page
│   ├── App.jsx                    # Layout shell + page routing state
│   ├── main.jsx
│   └── index.css                  # Tailwind entry point
├── vite.config.js
└── package.json
```

## Pages

| Page | Status |
|---|---|
| Overview | ✅ Built |
| Process Flow | 🔲 Not yet built |
| Equipment | 🔲 Not yet built |
| Alerts | 🔲 Not yet built |
| Predictions | 🔲 Not yet built |
| Maintenance Planner | 🔲 Not yet built |
| Spare Parts | 🔲 Not yet built |
| Reports & KPIs | 🔲 Not yet built |
| AI Assistant | 🔲 Not yet built |

Navigation between pages is handled via `activePage` state in `App.jsx`. Unbuilt pages currently show a placeholder message.

## Core Concept

The system monitors machine-specific signals rather than relying on a single fixed threshold:

- **Current draw vs. feed rate** — flags internal mechanical wear on mills (bearings, gearbox, grinding elements) when current rises or drops relative to what the feed rate would predict, not against a single fixed number.
- **Dust/emissions monitoring** — flags containment issues (worn seals, gaskets, filter bags) as a complementary signal.
- **Risk scoring** — Green (normal) / Yellow (watch) / Red (critical), based on the above signals in combination.
- **Escalation workflow** — defines who gets alerted and when, based on severity level.

This multi-signal approach is intended to go beyond DCP's likely existing fixed-threshold alarms by being predictive (catching trends before failure) and context-aware (relative to operating conditions, not a static number).

## Data

All data in this build is currently **mock data** for demonstration purposes (`src/data/mockData.js`), based on publicly available engineering assumptions rather than confidential DCP plant data, per the challenge guidelines.

## Contributors

- [Your name] — Frontend development, dashboard design
- [Teammate names] — Risk-scoring logic, business case, hardware/electrical modeling

## License

This project was built for submission to the DCP University Engineering Challenge (Inaugural Edition, 2026) and is not affiliated with or endorsed by Dangote Cement Plc.