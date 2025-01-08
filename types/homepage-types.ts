export interface NavbarItem {
  id: string;
  logo: string;
  nav_items: Array<{
    item: string;
    target: string;
  }>;
}
