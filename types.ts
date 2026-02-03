
export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'Performance' | 'Prevention' | 'Physio' | 'Talent';
}

export interface InsightData {
  name: string;
  value: number;
}
