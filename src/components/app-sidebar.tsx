import * as React from "react"

import {
  LayoutDashboard,
  Monitor,
  ReceiptText,
  UserRoundCog,
  Package,
  User
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import { NavUser } from "@/components/nav-user"
import { CompanyLogo } from "./company-logo"
import NavDashboard from "./nav-dashboard"
import NavAccounting from "./nav-acc"
import { NavConfiguration } from "./nav-configuration"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  company:
  {
    name: "Company A",
    icon: Monitor,
    plan: "Enterprise",
  },
  dashboardMenu: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
      items: [],
    },
  ],
  accountingMenu: [
    {
      title: "Invoice",
      url: "/invoice",
      icon: ReceiptText,
      isActive: true,
      items: [],
    },
  ],
  navConfig: [
    {
      title: "User Configuration",
      url: "/user-config",
      icon: UserRoundCog,
      items: [
        { title: "Users", url: "/user-config/users", icon: User },
        { title: "Customers", url: "/user-config/customers", icon: User },
        { title: "Customer Type", url: "/user-config/customer-type", icon: User },
        { title: "Sale Person", url: "/user-config/sale-person", icon: User },
      ],
    },
    {
      title: "Products Setup",
      url: "/product",
      icon: Package,
      items: [
        { title: "Products", url: "/product/products", icon: User },
        { title: "Brands", url: "/product/brands", icon: User },
        { title: "Sizes", url: "/product/sizes", icon: User },
        { title: "Units", url: "/product/units", icon: User },
      ],
    },
  ],


}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <CompanyLogo companies={data.company} />
      </SidebarHeader>
      <SidebarContent>
        <NavDashboard dashboardMenu={data.dashboardMenu} />
        <NavAccounting accountingMenu={data.accountingMenu} />
        <NavConfiguration items={data.navConfig} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
