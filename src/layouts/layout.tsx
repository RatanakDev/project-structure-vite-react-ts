import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

import { useLocation } from "react-router-dom";

export default function Layout() {

    const location = useLocation();

    const parts = location.pathname.split("/").filter(Boolean);

    const capitalizedParts = parts.map(
        str => str.charAt(0).toUpperCase() + str.slice(1)
    );
    const [first, second] = capitalizedParts;


    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink>
                                        {
                                            location.pathname === "/dashboard" ? "Dashboard" :
                                                location.pathname === "/invoice" ? "Invoice"
                                                    : first ? first : "Invalid path"
                                        }
                                    </BreadcrumbLink>
                                    {/* <BreadcrumbLink>
                                        {location.pathname === "/dashboard" ? "Dashboard" :
                                            location.pathname === "/invoice" ? "Invoice"
                                                : "Invalid path"}
                                    </BreadcrumbLink> */}
                                </BreadcrumbItem>
                                {
                                    parts.length > 1 && (
                                        <>
                                            <BreadcrumbSeparator className="hidden md:block" />
                                            <BreadcrumbItem>
                                                <BreadcrumbPage>{second}</BreadcrumbPage>
                                            </BreadcrumbItem>
                                        </>
                                    )
                                }

                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex h-full w-full flex-col overflow-hidden">
                    <div className="p-[16px]">
                        <Outlet />
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
