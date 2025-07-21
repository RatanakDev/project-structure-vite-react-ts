import {
    type LucideIcon,
} from "lucide-react"
// import { ChevronRight } from "lucide-react"

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    // SidebarMenuSub,
    // SidebarMenuSubButton,
    // SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import {
    Collapsible,
    // CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { Link } from "react-router-dom"

import { useLocation } from "react-router-dom";


export default function NavMenu({
    menu,
}: {
    menu: {
        title: string
        url: string
        icon?: LucideIcon
        isActive?: boolean
        items?: {
            title: string
            url: string
        }[]
    }[]
}) {

    const location = useLocation();

    return (
        <SidebarGroup>
            <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
            <SidebarMenu>
                {menu.map((item) => (
                    <Collapsible
                        key={item.title}
                        asChild
                        // defaultOpen={item.isActive}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                                <Link to={item.url}>
                                    <SidebarMenuButton tooltip={item.title}
                                        className={`${location.pathname === item.url ? "bg-secondary text-secondary-foreground" : ""}`}>
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </Link>
                            </CollapsibleTrigger>
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}