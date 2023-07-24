import React from 'react';
import Morroco from '../assets/Morroco.jpg'
import {  NavLink } from 'react-router-dom'

import Nav from './Nav';

export const Home = () => {
  return (
    <div className="container bg-black text-white h-[100%] flex flex-col-reverse md:flex-row w-full">
    <div className="w-full md:w-[50%] m-auto flex flex-col gap-2">
    
    
<button className="bg-orange-500 text-white hover:bg-orange-600 py-1 px-6 w-full"><NavLink to="/board">Save your favourite Recipes</NavLink>

</button>


    </div>
    <div className="flex flex-col gap-2  w-full md:w-[50%]">
  <h2 className="text-orange-500 font-extrabold text-xl  ">
    Food Recipe App
  </h2>
  </div>
    <div className="w-full h-full saturate-200">
        <img 
        src={Morroco}
        alt="recipe"
        className='w-full h-full object-center object-cover'
        ></img>
    </div>
    {/* <Nav/> */}
</div>

  );
};
