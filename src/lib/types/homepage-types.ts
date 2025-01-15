export interface NavbarItem {
  id: string;
  logo: string;
  nav_items: Array<{
    item: string;
    target: string;
  }>;
}

export interface FooterItems {
  payment_icon: Array<{
    id: string;
    directus_files_id: string;
  }>;
  social_icon: Array<{
    Alt: string;
    icon: string;
    target: string;
  }>;
  footer_items: Array<{
    heading: string;
    subCategories: Array<{
      title: string;
      target: string;
    }>;
  }>;
}

export interface aboutUsType {
  title: string;
  description: string;
  file: string;
}

export interface OurPromiseSection {
  title: string;
  description: string;
  cards_details: Array<{
    img: string;
    heading: string;
    subheading: string;
  }>;
}

export interface HeroSectionType {
  main_title: string;
  main_description: string;
  features: Array<{
    title: string;
    desc: string;
  }>;
}
