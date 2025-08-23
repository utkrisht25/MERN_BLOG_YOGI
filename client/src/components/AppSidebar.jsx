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
import { FaHome, FaRegComments } from "react-icons/fa";
import { BiCategory, BiCategoryAlt } from "react-icons/bi";
import { GrBlog } from "react-icons/gr";
import { LuUsers } from "react-icons/lu";
import { FaComments } from "react-icons/fa";
import { PiUsersFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { RouteBlog, RouteBlogByCategory, RouteCategoryDetails, RouteCommnentDetails, RouteIndex, RouteUser } from "@/helpers/RouteName.js";
import { useFetch } from "@/hooks/useFetch.js";
import { getEvn } from "@/helpers/getEnv.js";
import { useSelector } from "react-redux";
import Loading from "./Loading.jsx";
import { useCategoryRefresh } from "@/contexts/CategoryContext.jsx";

export function AppSidebar() {
  const user = useSelector(state => state.user)
 const { refreshData } = useCategoryRefresh();
  const {data: categoryData,loading} = useFetch(`${getEvn("VITE_API_BASE_URL")}/category/all-category`,
    {
      method: "get",
      credentials: "include",
    },[refreshData]);
  
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
                <Link to={RouteIndex}>Home</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
             {user && user.isLoggedIn
                            ? <>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <GrBlog />
                                        <Link to={RouteBlog}>Blogs</Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <FaRegComments />
                                        <Link to={RouteCommnentDetails}>Comments</Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </>
                            :
                            <></>
                        }

              {user && user.isLoggedIn && user.user.role === 'admin'
                            ? <>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <BiCategoryAlt />
                                        <Link to={RouteCategoryDetails}>Categories</Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>

                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <LuUsers />
                                        <Link to={RouteUser}>Users</Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </>
                            :
                            <></>
                        }
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
                      <Link to={RouteBlogByCategory(category.slug)}>{category.name}</Link>
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
