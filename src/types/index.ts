export interface NavItem {
  title: string;
  href: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: React.ComponentType;
  features: string[];
}

export interface BenefitCard {
  title: string;
  description: string;
  icon: React.ComponentType;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}