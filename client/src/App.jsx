import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Button } from "./components/ui/button"
import Layout from "./Layout/Layout.jsx"
import { RouteIndex, RouteProfile, RouteSignIn, RouteSignUp } from "./helpers/RouteName"
import Index from "./pages/Index"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"

function App() {


  return (
        <BrowserRouter >
           <Routes>
             <Route path = {RouteIndex} element={<Layout />} > 
                {/* we'll add our nested routes here */}
                <Route index element={<Index />} />
                <Route path={RouteProfile} element={<Profile />} />
             </Route >
            
            <Route path={RouteSignIn} element={<SignIn />} />
            <Route path={RouteSignUp} element={<SignUp />} />
           </Routes>
        </BrowserRouter>
  )
}

export default App
