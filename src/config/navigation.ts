import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  ShoppingCart as ShoppingCartIcon,
  Assessment as AssessmentIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

import { SvgIconComponent } from "@mui/icons-material";

export interface NavItem {
  label: string;
  path: `/${string}`;
  icon: SvgIconComponent;
}

export const navigation: NavItem[] = [
  {
    label: "Overview",
    path: "/",
    icon: DashboardIcon,
  },
  {
    label: "Users",
    path: "/users",
    icon: PeopleIcon,
  },
  {
    label: "Products",
    path: "/products",
    icon: ShoppingCartIcon,
  },
  {
    label: "Reports",
    path: "/reports",
    icon: AssessmentIcon,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: SettingsIcon,
  },
];