import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../imge/logo.png";
import {AiOutlineClose,AiOutlineMenu}from 'react-icons/ai'

function NavBar() {
    const [open, setOpen] = useState(false)
    
    function openMenu(){
        setOpen(!open)
        
    }
    const closeMenu = ()=>{
        setOpen(!open)
    }
    
    return (
        <>
        
        <div className="  sm:w-full sm:h-auto sm:bg-gray-800 sm:box-border  ">
            <div className=" sm:w-[90%] sm:m-auto sm:flex sm:justify-around sm:items-center hidden">
                <div className=" sm:w-[40%] ">
                <NavLink to="/">
                    <img className=" sm:max-w-[20%] " src={logo} alt="" />
                    </NavLink>
                </div>
                     <div className=" sm:flex sm:justify-around sm:w-[50%] sm:text-orange-500 ">
                    <NavLink to="/About" className="sm:uppercase sm:text-[20px] sm:hover:text-white ">about</NavLink>
                    <NavLink to="/" className="sm:uppercase sm:text-[20px] sm:hover:text-white ">home</NavLink>
                    <NavLink to="/Contact" className="sm:uppercase sm:text-[20px] sm:hover:text-white ">Contact</NavLink>

                    <NavLink to="/Movies" className="sm:uppercase sm:text-[20px] sm:hover:text-white ">Movies</NavLink>
                </div>
            </div>
        </div>
        {/* style phone menu */}
        
        <div className="bg-gray-800 w-full h-auto sm:hidden z-10">
            <div className=" w-[90%] m-auto h-[100px] flex justify-between px-[20px] items-center relative">
                <div className=" w-[40%] ">
                   <NavLink to="/">
                      <img className=" max-w-[50%] " src={logo} alt="" />
                   </NavLink>
                </div >
                <div className="text-[35px] text-orange-500" onClick={closeMenu}> {!open? <AiOutlineClose/>:<AiOutlineMenu/>}</div>
                
            </div>
            
            
            <div className={!open?'absolute bg-gray-800 w-[250px] h-screen z-[5] top-[100px] border-t-[2px] border-solid border-orange-500 text-center flex flex-col ease-in-out duration-[1s] overflow-hidden shadow-2xl shadow-[black]':'fixed top-[-200px]'}>
            <NavLink to="/About" className="uppercase text-[20px] hover:text-white text-orange-500 mt-[30px] border-b-[2px] border-solid border-orange-500">about</NavLink>
                    <NavLink to="/" className="uppercase text-[20px] hover:text-white text-orange-500 mt-[30px] border-b-[2px] border-solid border-orange-500">home</NavLink>
                    <NavLink to="/Movies" className="uppercase text-[20px] hover:text-white text-orange-500 my-[30px] border-b-[2px] border-solid border-orange-500">Movies</NavLink>
                    <NavLink to="/Contact" className="uppercase text-[20px] hover:text-white text-orange-500 my-[30px] border-b-[2px] border-solid border-orange-500">Contact</NavLink>
                    
            </div>
            

        </div>
        
        
        
        </>
    );
}
export default NavBar;
