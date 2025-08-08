import React from 'react'
import logo from "@/assets/images/logo-white.png"
import SearchBox from './SearchBox'
import { IoLogIn } from "react-icons/io5";
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { RouteSignIn } from '@/helpers/RouteName';


const TopBar = () => {
  return (
    <div className='flex justify-between items-center h-16 fixed p-5 bg-white w-full z-20 border-b border-gray-100'>
        <div>
            <img src={logo} />
        </div>
        <div className='w-[600px] '>
            <SearchBox />
        </div>
        <div>
            <Button asChild  className='rounded-full'>
                <Link to={RouteSignIn} >
                   <IoLogIn />
                   Sign In
                </Link>
            </Button>
        </div>
    </div>
  )
}

export default TopBar
