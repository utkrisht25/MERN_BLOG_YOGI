import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";
import Layout from "./Layout/Layout.jsx";
import {
  RouteAddCategory,
  RouteBlog,
  RouteBlogAdd,
  RouteBlogEdit,
  RouteCategoryDetails,
  RouteEditCategory,
  RouteIndex,
  RouteProfile,
  RouteSignIn,
  RouteSignUp,
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

function App() {
  return (
    <BrowserRouter>
      <CategoryProvider>
        <Routes>
          <Route path={RouteIndex} element={<Layout />}>
            {/* we'll add our nested routes here */}
            <Route index element={<Index />} />
            <Route path={RouteProfile} element={<Profile />} />

            {/* Blog category */}
            <Route path={RouteAddCategory} element={<AddCategory />} />
            <Route path={RouteCategoryDetails} element={<CategoryDetails />} />
            <Route path={RouteEditCategory()} element={<EditCategory />} />

            {/* blog */}
            <Route path={RouteBlogAdd}  element={<AddBlog/>} />
            <Route path={RouteBlog}  element={<BlogDetails/>}/>
            <Route path={RouteBlogEdit()}  element={<EditBlog/>}/>
          </Route>

          <Route path={RouteSignIn} element={<SignIn />} />
          <Route path={RouteSignUp} element={<SignUp />} />
        </Routes>
      </CategoryProvider>
    </BrowserRouter>
  );
}

export default App;
