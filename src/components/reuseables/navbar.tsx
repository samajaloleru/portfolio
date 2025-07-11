import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';


const Navbar = () => {
  const [showMenu, SetShowMenu] = useState(false)


  return (
    <div className='flex flex-col items-center w-full relative'>
      <div className='flex flex-row justify-between items-center lg:w-8/12 w-11/12 lg:py-5 py-3'>
        <NavLink  to='/'>
          <img src={logo} alt='logo' className='md:h-20 h-16'/>
        </NavLink>
        <div className="hidden lg:block">
          <div className={`flex flex-col text-lg text-default  justify-end`}>
            <div className={`tracking-wide flex flex-row gap-[4rem] text-[1rem] items-center justify-end`}>
              <NavLink to='/' className={({ isActive }) => (isActive ? 'text-white' : '')}>
                Home
              </NavLink>
              <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-white' : '')}>
                About
              </NavLink>
              <NavLink to='/works' className={({ isActive }) => (isActive ? 'text-white' : '')}>
                Works
              </NavLink>
              <NavLink to='/contact' className={({ isActive }) => (isActive ? 'text-white' : '')}>
                Contact
              </NavLink>
            </div>
          </div>
        </div>
        <div className="lg:hidden block">
          <div className={`flex flex-row gap-4 text-white items-center`}>
            <i onClick={() => SetShowMenu(true)} className='fi fi-rr-menu-burger cursor-pointer'></i>
          </div>
        </div>
      </div>
      {showMenu && 
        <div className='flex flex-col fixed top-0 right-0 w-screen h-screen bg-black bg-opacity-70 z-50'>
          <div className='flex flex-col w-full relative bg-[#110f16]'>
            <div className='flex flex-row items-center justify-between w-full py-3 px-5 border-b border-gray-200'>
              <NavLink to='/' onClick={() => SetShowMenu(false)}>
                <img src={logo} alt='logo' className='h-10'/>
              </NavLink>
              <i onClick={() => SetShowMenu(false)} className='fi fi-rr-cross text-white cursor-pointer'></i>
            </div>
            <div className='flex flex-col tracking-wide w-full gap-[2rem] p-5 text-white'>
              <NavLink onClick={() => SetShowMenu(false)} to='/about'>
                About
              </NavLink>
              <NavLink onClick={() => SetShowMenu(false)} to='/works'>
                Works
              </NavLink>
              <NavLink onClick={() => SetShowMenu(false)} to='/contact'>
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar