export interface NavItem {
  path: string;
  label: string;
  dropdown?: SubNavItem[];
}

export interface SubNavItem {
  path: string;
  label: string;
  sideMenu?: SideMenuItem[];
}

export interface SideMenuItem {
  path: string;
  label: string;
  sideMenus?: { path: string; label: string }[];
}

export const navItems: NavItem[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/gallery", label: "Gallery" },
  { path: "/testimonials", label: "Testimonials" },
];