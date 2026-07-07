// src/data/mockData.js

export const plantStats = {
  overallHealth: { value: 91, status: 'Good' },
  reliabilityIndex: { value: 93, status: 'Good' },
  availability: { value: 97, status: 'Good' },
  predictedDowntimeRisk: { value: 'Low', status: 'No immediate risk' },
  equipmentUnderObservation: { value: 3, status: 'Monitored' },
  criticalAlerts: { value: 1, status: 'Requires attention' },
  plantStatus: { value: 'Running Normally' },
}

export const processFlow = [
  { id: 1, name: 'Crusher', status: 'healthy' },
  { id: 2, name: 'Raw Mill', status: 'healthy' },
  { id: 3, name: 'Preheater', status: 'healthy' },
  { id: 4, name: 'Kiln', status: 'critical' },
  { id: 5, name: 'Cooler', status: 'healthy' },
  { id: 6, name: 'Cement Mill', status: 'healthy' },
  { id: 7, name: 'Packing Plant', status: 'healthy' },
]

export const maintenancePriority = [
  { rank: 1, equipment: 'Rotary Kiln', risk: 'Critical', rul: '18 Days', impact: 'Very High' },
  { rank: 2, equipment: 'Cement Mill', risk: 'High', rul: '26 Days', impact: 'High' },
  { rank: 3, equipment: 'Raw Mill', risk: 'High', rul: '35 Days', impact: 'Medium' },
  { rank: 4, equipment: 'Coal Mill', risk: 'Medium', rul: '62 Days', impact: 'Low' },
  { rank: 5, equipment: 'Crusher', risk: 'Low', rul: '120 Days', impact: 'Low' },
]

export const recentAlerts = [
  { equipment: 'Rotary Kiln', message: 'Shell Temperature High', time: '10:15 AM', level: 'critical' },
  { equipment: 'Cement Mill', message: 'Vibration Increasing', time: '09:42 AM', level: 'warning' },
  { equipment: 'Raw Mill', message: 'Hydraulic Pressure Low', time: '09:15 AM', level: 'warning' },
  { equipment: 'Coal Mill', message: 'Bearing Temperature High', time: 'Yesterday', level: 'ok' },
  { equipment: 'Packing Plant', message: 'Bagging Motor Overload', time: 'Yesterday', level: 'warning' },
]

export const equipmentHealth = [
  { name: 'Crusher', healthScore: 96, status: 'Healthy', rul: '120 Days', trend: [4,5,5,6,6,7,7] },
  { name: 'Raw Mill', healthScore: 82, status: 'Watch', rul: '35 Days', trend: [7,6,6,5,5,4,4] },
  { name: 'Coal Mill', healthScore: 95, status: 'Healthy', rul: '62 Days', trend: [5,5,6,6,7,7,7] },
  { name: 'Preheater', healthScore: 97, status: 'Healthy', rul: '90 Days', trend: [6,6,7,7,7,8,8] },
  { name: 'Rotary Kiln', healthScore: 61, status: 'High Risk', rul: '18 Days', trend: [7,6,5,4,3,3,2] },
  { name: 'Cooler', healthScore: 93, status: 'Healthy', rul: '80 Days', trend: [6,6,6,7,7,7,7] },
  { name: 'Cement Mill', healthScore: 79, status: 'Watch', rul: '26 Days', trend: [7,6,6,5,5,4,3] },
  { name: 'Packing Plant', healthScore: 98, status: 'Healthy', rul: '150 Days', trend: [7,7,8,8,8,8,8] },
]

export const rotaryKilnDetail = {
  name: 'Rotary Kiln',
  riskLabel: 'High Risk',
  healthScore: 61,
  remainingUsefulLife: '18 Days',
  keyParameters: [
    { label: 'Shell Temp (Burning Zone)', value: '1250 °C' },
    { label: 'Shell Temp (Cooler End)', value: '105 °C' },
    { label: 'Kiln Drive Vibration', value: '4.6 mm/s' },
    { label: 'Kiln Drive Bearing Temp', value: '82 °C' },
    { label: 'Kiln Speed', value: '3.45 rpm' },
    { label: 'Draft Pressure', value: '-1.2 mbar' },
    { label: 'Fuel Consumption', value: '38.6 t/h' },
    { label: 'Kiln Feed Rate', value: '245 t/h' },
  ],
  failureProbability: [
    { label: 'Refractory Wear', value: 76 },
    { label: 'Tyre Misalignment', value: 62 },
    { label: 'Bearing Failure', value: 41 },
    { label: 'Kiln Shell Cracking', value: 28 },
  ],
}

export const actOnThis = [
  { title: 'Inspect Kiln Tyre Alignment and Refractory Condition', priority: 'High', dueIn: '18 Days' },
  { title: 'Schedule Cement Mill Bearing Replacement', priority: 'High', dueIn: '26 Days' },
  { title: 'Monitor Raw Mill Hydraulic System', priority: 'Medium', dueIn: '35 Days' },
]

export const predictions = [
  { equipment: 'Rotary Kiln', probability: 61, level: 'High' },
  { equipment: 'Cement Mill', probability: 48, level: 'High' },
  { equipment: 'Raw Mill', probability: 32, level: 'Medium' },
  { equipment: 'Coal Mill', probability: 17, level: 'Low' },
  { equipment: 'Crusher', probability: 12, level: 'Low' },
]

export const plantKPIs = [
  { label: 'Clinker Production', value: '24,200 tons', change: '+2.3%', direction: 'up' },
  { label: 'Cement Production', value: '32,500 tons', change: '+1.8%', direction: 'up' },
  { label: 'Kiln Feedrate', value: '245 t/h', change: '+1.2%', direction: 'up' },
  { label: 'Kiln Heat Consumption', value: '730 kcal/kg', change: '+1.5%', direction: 'up' },
  { label: 'Specific Power (Cement Mill)', value: '24.6 kWh/t', change: '-2.1%', direction: 'down' },
  { label: 'Availability', value: '97%', change: '+1.0%', direction: 'up' },
]

export const mtbfData = {
  mtbf: { value: 120, unit: 'hrs', change: '+8% vs last month', trend: [90,95,100,105,110,115,120] },
  mttr: { value: 4.6, unit: 'hrs', change: '-12% vs last month', trend: [6,5.8,5.5,5.2,5,4.8,4.6] },
}

export const sparePartsAtRisk = [
  { part: 'Kiln Tyre', equipment: 'Rotary Kiln', risk: 'High', needBy: '18 Days' },
  { part: 'Roller Bearing', equipment: 'Cement Mill', risk: 'High', needBy: '26 Days' },
  { part: 'Hydraulic Seal', equipment: 'Raw Mill', risk: 'Medium', needBy: '35 Days' },
  { part: 'Crusher Jaw Plate', equipment: 'Crusher', risk: 'Low', needBy: '120 Days' },
]

export const bestMaintenanceWindow = {
  dateRange: 'May 28 – May 30, 2025',
  note: 'During planned line inspection',
  recommendedFor: ['Kiln Inspection', 'Cement Mill Maintenance', 'Raw Mill Check'],
}

export const aiSuggestedQuestions = [
  'Which machine has highest failure risk?',
  'Show me vibration trend of kiln drive',
  'What maintenance is due this week?',
  'Which spare parts should we order?',
]