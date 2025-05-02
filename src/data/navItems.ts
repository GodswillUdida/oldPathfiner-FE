interface NavItem {
    path: string;
    label: string;
    dropdown?: SubNavItem[];
}

interface SubNavItem {
    path: string;
    label: string;
    sideMenu?: SideMenuItem[];
}

interface SideMenuItem {
    path: string;
    label: string;
    sideMenus?: { path: string; label: string }[];
}


export const navItems: NavItem[] = [
  { path: "/", label: "Home" },
  {
    path: "/programs",
    label: "Programs",
    dropdown: [
      {
        path: "/programs/ican",
        label: "ICAN",
        sideMenu: [
          {
            path: "/programs/ican/ats",
            label: "ATS",
            sideMenus: [
              { path: "/programs/ican/ats/ats-1", label: "ATS 1" },
              { path: "/programs/ican/ats/ats-2", label: "ATS 2" },
              { path: "/programs/ican/ats/ats-3", label: "ATS 3" },
            ],
          },
          {
            path: "/programs/ican/professional",
            label: "Professional",
            sideMenus: [
              { path: "/programs/ican/professional/foundation", label: "Foundation" },
              { path: "/programs/ican/professional/skills", label: "Skills" },
              { path: "/programs/ican/professional/professional", label: "Professional" },
            ],
          },
        ],
      },
      { path: "/programs/bsc", label: "BSC" },
      { path: "/programs/mba", label: "MBA" },
      { path: "/programs/dba", label: "DBA" },
      { path: "/programs/diploma", label: "Diploma in Applied Accounting" },
      { path: "/programs/software", label: "Accounting Software" },
      { path: "/programs/analytics", label: "Data Analytics" },
    ],
  },
  { path: "/about", label: "About" },
  {
    path: "/e-learning",
    label: "E-Learning",
    dropdown: [
      { path: "/e-learning/enroll", label: "Registration" },
      { path: "/e-learning/faqs", label: "FAQs" },
    ],
  },
  { path: "/contact", label: "Contact Us" },
];