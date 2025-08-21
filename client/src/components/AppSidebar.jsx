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
import logo from "@/assets/images/logo-white.png";
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { GrBlog } from "react-icons/gr";
import { FaComments } from "react-icons/fa";
import { PiUsersFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { RouteBlog, RouteCategoryDetails } from "@/helpers/RouteName.js";
import { useState } from "react";
import { useFetch } from "@/hooks/useFetch.js";
import { getEvn } from "@/helpers/getEnv.js";
import Loading from "./Loading.jsx";
import { useCategoryRefresh } from "@/contexts/CategoryContext.jsx";

export function AppSidebar() {
 const { refreshData } = useCategoryRefresh();
  const {
    data: categoryData,
    loading,
    error,
  } = useFetch(
    `${getEvn("VITE_API_BASE_URL")}/category/all-category`,
    {
      method: "get",
      credentials: "include",
    },
    [refreshData]
  );
  
  return (
    <Sidebar>
      <SidebarHeader className="bg-white">
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
                <Link to={RouteCategoryDetails}>Categories</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <GrBlog />
                <Link to={RouteBlog}>Blogs</Link>
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
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          {loading ? (
            <Loading />
          ) : (
            <SidebarMenu>
              <SidebarMenuItem>
                {categoryData && categoryData.category.length > 0 ? (
                  categoryData.category.map((category) => (
                    <SidebarMenuButton key={category._id}>
                      <GoDotFill />
                      <Link to="/">{category.name}</Link>
                    </SidebarMenuButton>
                  ))
                ) : (
                  <div className="text-center p-3 "> Data Not found </div>
                )}
              </SidebarMenuItem>
            </SidebarMenu>
          )}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
