import React, { useState } from 'react';
import logo from '../../assets/logo/logo.png'
import './Nav.css'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Dropdown from '../Dropdown/Dropdown';
const NavBar = () => {
    const navClass = 'font-Roboto text-lg font-medium hover-effect'
    const [open, setOpen] = useState(false)
    // console.log(open)
    const handleCheckboxChange = () => {
        setOpen(!open);
    };
    const { user } = useAuth()
    // console.log(user)
    return (
        <>
            <div className='bg-blue-1 py-4 relative z-50 '>
                <div className='flex items-center justify-between lg:w-4/5 mx-auto px-4 lg:px-0'>
                    <img className='w-48' src={logo} alt="Logo" />
                    <div className='hidden lg:flex gap-10 justify-center items-center'>
                        <Link to={'/'} className={navClass}>Home</Link>
                        <div className={navClass}>About Us</div>
                        <div className={navClass}>Features</div>
                        <div className={navClass}>Contact</div>
                        {
                            user ?
                                <Dropdown />
                                :
                                <Link to={'/login'}>
                                    <Button title={"Log In"} />
                                </Link>
                        }

                    </div>
                    {/* Hamburger Menu */}
                    <div className='flex lg:hidden'>
                        <label className="hamburger">
                            <input onClick={handleCheckboxChange} type="checkbox" checked={open} readOnly />
                            <svg viewBox="0 0 32 32">
                                <path className="line line-top-bottom" d="M27 10H13C10.8 10 9 8.2 9 6C9 3.5 10.8 2 13 2C15.2 2 17 3.8 17 6V26C17 28.2 18.8 30 21 30C23.2 30 25 28.2 25 26C25 23.8 23.2 22 21 22H7"></path>
                                <path className="line" d="M7 16H27"></path>
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
            {/* Dropdown Menu */}
            <div
                className={`flex flex-wrap  md:justify-center items-center gap-10 px-4 py-4 mt-10 w-full absolute bg-blue-1 transition-all duration-[700ms] ease-in-out lg:hidden ${open ? 'top-10 opacity-100 z-40' : '-top-52 opacity-0 z-10'}`}
            >
                <Link to={'/'} className={navClass}>Home</Link>
                <div className={navClass}>About Us</div>
                <div className={navClass}>Features</div>
                <div className={navClass}>Contact</div>
                <Link to={'/login'}>
                    <Button title={"Log In"} />
                </Link>
            </div>
        </>
    );
};

export default NavBar;