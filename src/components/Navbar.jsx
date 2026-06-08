import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Backend_Base_Url } from '../utils/constent'
import { removeUser } from '../utils/userSlice'

export default function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(store => store.user)
    const logoutHandler = async ()=>{
        await axios.post(Backend_Base_Url + '/logout', {}, {withCredentials : true})
        dispatch(removeUser())
        navigate('/login')
    }
    return (
        <div className="navbar bg-neutral shadow-sm px-4">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl bg-base-300 text-black">DevTinde</Link>
            </div>
            <div className="flex gap-2">
                {user &&<div className="dropdown dropdown-end ">
                     <div className='flex items-center text-xl font-bold  gap-x-2'>
                        <div className="user-Name text-white">Mr. <span className='capitalize'>{user.firstName}</span></div>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to="/profile" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a onClick={logoutHandler}>Logout</a></li>
                    </ul>
                    
                </div>}
            </div>
        </div>
    )
}
