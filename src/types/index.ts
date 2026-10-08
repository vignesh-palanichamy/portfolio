export type Category = 'All' | 'Popular' | 'Apps' | 'Sections';

export type SubCategory =
  | 'Hero Section'
  | 'Landing Page'
  | 'Features Section'
  | 'Footer Section'
  | 'Agency'
  | 'Social Media'
  | 'SaaS'
  | 'Pricing';

export interface PromptItem {
  id: string;
  title: string;
  category: SubCategory;
  type: 'All' | 'Popular' | 'Apps' | 'Sections';
  isPopular?: boolean;
  isNew?: boolean;
  isLocked?: boolean;
  image: string;
  aspectRatio?: '4/3' | 'tall';
  description: string;
  tags: string[];
  supportedTools: ('Cursor' | 'Claude' | 'Lovable' | 'Bolt' | 'v0')[];
  promptText: string;
}

export interface PromoCard {
  id: string;
  type: 'promo';
  title: string;
  subtitle?: string;
  buttonText: string;
  link: string;
  category: string;
  backgroundGradient: string;
  isExternal?: boolean;
}
