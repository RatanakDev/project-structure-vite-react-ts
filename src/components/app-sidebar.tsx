import * as React from "react"

import {
  Settings2,
  LayoutDashboard,
  Monitor,
  ReceiptText
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
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        { title: "Users", url: "/settings/users" },
        { title: "Roles", url: "/settings/roles" },
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
