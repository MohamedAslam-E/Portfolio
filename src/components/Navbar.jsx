import React,{useState} from 'react'
import {FaBars,FaTimes} from "react-icons/fa"

function Navbar() {
    const [nav,setNav] = useState(false)
    const handleClick =()=> setNav(!nav) //true
  return (
    <div className='fixed w-full h-[80px] flex justify-between px-4 items-center bg-[#fff] drop-shadow-[0_1px_4px_rgba(0,0,0,0.1)]'>
        <div>
            <h1 className='text-xl ml-10 font-extrabold'>Aslam.dev</h1>
        </div>
        {/* menu */}
        
            <ul className='hidden md:flex font-semibold'>
                <li>Home</li>
                <li>About</li>
                <li>Skill</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full bg-white h-screen flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skill</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>
        {/* Social icons */}
        <div className='hidden'>

        </div>
    </div>
  )
}

export default Navbar