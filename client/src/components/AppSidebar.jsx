import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar.jsx";
import logo from "@/assets/images/logo-white.png"
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { GrBlog } from "react-icons/gr";
import { FaComments } from "react-icons/fa";
import { PiUsersFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";



export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="bg-white" > 
        <img src={logo} alt="logo image" width={120} />
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <SidebarGroup>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <FaHome />
                        <Link to="/">Home</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <BiCategory />
                        <Link to="/">Categories</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <GrBlog />
                        <Link to="/">Blogs</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <FaComments />
                        <Link to="/">Comments</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <PiUsersFill />
                        <Link to="/">Users</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
            <SidebarGroupLabel >Categories</SidebarGroupLabel>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <GoDotFill />
                        <Link to="/">Category item</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                
            </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}