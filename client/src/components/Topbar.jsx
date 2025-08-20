import React from 'react'
import logo from "@/assets/images/logo-white.png"
import SearchBox from './SearchBox'
import { IoLogIn, IoLogOutOutline } from "react-icons/io5";
import { Button } from './ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { RouteIndex, RouteProfile, RouteSignIn } from '@/helpers/RouteName';
import { useDispatch, useSelector } from 'react-redux';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import usericon from '@/assets/images/user.png'
import { FaPlus, FaRegUser } from 'react-icons/fa';
import { showToast } from '@/helpers/showToast';
import { getEvn } from '@/helpers/getEnv';
import { removeUser } from '@/redux/user/user.slice';


const TopBar = () => {
     const dispath = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const handleLogout = async () =>{
        try {
            const response = await fetch(`${getEvn('VITE_API_BASE_URL')}/auth/logout`, {
                method: 'get',
                credentials: 'include',
                // creadentials include is neccessary to take the cookie and send it to backend
            })
            const data = await response.json()
            if (!response.ok) {
                return showToast('error', data.message)
            }
            dispath(removeUser())
            navigate(RouteIndex)
            showToast('success', data.message)
        } catch (error) {
            showToast('error', error.message)
        }
    }
  return (
    <div className='flex justify-between items-center h-16 fixed p-5 bg-white w-full z-20 border-b border-gray-100'>
        <div>
            <img src={logo} />
        </div>
        <div className='w-[600px] '>
            <SearchBox />
        </div>
        <div>
            {!user.isLoggedIn ? 
              <Button asChild  className='rounded-full'>
                <Link to={RouteSignIn} >
                   <IoLogIn />
                   Sign In
                </Link>
            </Button>
            : <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src={user.user.avatar || usericon} />
                            </Avatar>

                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>
                                <p>{user.user.username}</p>
                                <p className='text-sm'>{user.user.email}</p>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild className="cursor-pointer">
                                <Link to={RouteProfile}>
                                    <FaRegUser />
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="cursor-pointer">
                                <Link to=''>
                                    <FaPlus />
                                    Create Blog
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                                <IoLogOutOutline color='red' />
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                </DropdownMenu>
            
            }
            
        </div>
    </div>
  )
}

export default TopBar
