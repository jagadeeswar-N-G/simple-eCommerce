import React from "react";
import dior from "../Assets/dior.png";
import { AiOutlineShoppingCart,AiOutlineSearch,AiFillHeart } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { Link, useNavigate, } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  return (
    <div>
      <header>
        <nav class="bg-white border-gray-200 px-8 py-8 lg:px-6 dark:bg-gray-800">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to={"/"}>
              <img src={dior} alt="dior" className="h-6" />
            </Link>
            <div>
              <form className="flex items-center border">
                <input type="text"  className="border border-black outline-none p-1 px-2"/>
                <button>
                       <figure className="border p-1 px-2 border-black border-l-0">
                         <AiOutlineSearch className="h-6 w-6"/>
                       </figure>
                </button>
              </form>
            </div>
            <div className="flex gap-4">
                <button onClick = {()=>navigate('/login')}className="flex items-center gap-2 border p-1 px-2">
                       <IoIosContact/>
                        <p>Log In</p> 
                </button>
                <button className="flex items-center gap-2 border p-1 px-2 ">
                        <AiFillHeart/>
                        <p>0</p>
                </button>
                <button className="flex items-center gap-2 border p-1 px-2">
                        <AiOutlineShoppingCart/>
                        <p>0</p>
                </button>
            </div>
          </div>
        </nav>
        <hr className="border border-black" />
      </header>
    </div>
  );
}

export default Header;
