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
}
