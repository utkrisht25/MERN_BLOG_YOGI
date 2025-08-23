import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";
import Layout from "./Layout/Layout.jsx";
import {
  RouteAddCategory,
  RouteBlog,
  RouteBlogAdd,
  RouteBlogByCategory,
  RouteBlogDetails,
  RouteBlogEdit,
  RouteCategoryDetails,
  RouteCommnentDetails,
  RouteEditCategory,
  RouteIndex,
  RouteProfile,
  RouteSearch,
  RouteSignIn,
  RouteSignUp,
  RouteUser,
} from "./helpers/RouteName";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import AddCategory from "./pages/Category/AddCategory";
import CategoryDetails from "./pages/Category/CategoryDetails";
import EditCategory from "./pages/Category/EditCategory";
import { CategoryProvider } from "./contexts/CategoryContext"; // ✅ Import the context
import AddBlog from "./pages/Blog/AddBlog";
import BlogDetails from "./pages/Blog/BlogDetails";
import EditBlog from "./pages/Blog/EditBlog";
import SingleBlogDetails from "./pages/SingleBlogDetails";
import BlogByCategory from "./pages/Blog/BlogByCategory";
import SearchResult from "./pages/SearchResult";
import AuthRouteProtechtion from "./components/AuthRouteProtechtion";
import Comments from "./pages/Comments";
import OnlyAdminAllowed from "./components/OnlyAdminAllowed";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <CategoryProvider>
        <Routes>
          <Route path={RouteIndex} element={<Layout />}>
            {/* we'll add our nested routes here */}
            <Route index element={<Index />} />


            <Route path={RouteBlogDetails()}  element={<SingleBlogDetails/>}/>
            <Route path={RouteBlogByCategory()} element={<BlogByCategory />} />
            <Route path={RouteSearch()} element={<SearchResult />} />


            <Route element={<AuthRouteProtechtion />}>
               <Route path={RouteProfile} element={<Profile />} />
               <Route path={RouteBlogAdd}  element={<AddBlog/>} />
               <Route path={RouteBlog}  element={<BlogDetails/>}/>
               <Route path={RouteBlogEdit()}  element={<EditBlog/>}/>
               <Route path={RouteCommnentDetails} element={<Comments />} />
            </Route>

            <Route element={< OnlyAdminAllowed />} >
               <Route path={RouteAddCategory} element={<AddCategory />} />
               <Route path={RouteCategoryDetails} element={<CategoryDetails />} />
               <Route path={RouteEditCategory()} element={<EditCategory />} />
               <Route path={RouteUser} element={<User />} />
            </Route>

            
          </Route>

          <Route path={RouteSignIn} element={<SignIn />} />
          <Route path={RouteSignUp} element={<SignUp />} />
        </Routes>
      </CategoryProvider>
    </BrowserRouter>
  );
}

export default App;
