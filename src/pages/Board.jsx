import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

export default function Board() {
  return (
    <div className="w-full h-full bg-black overflow-x-hidden">
      <div className="h-[60px] md:h-[80px] bg-zinc-900 flex items-center justify-between px-3 sticky top-0 z-50">
        <div className="flex items-center">
          <h2 className="text-white font-bold text-xl underline-offset-4 underline">
            <NavLink to="/board">Food App</NavLink>
          </h2>
          </div>
          </div>
          <div className=""><Nav/>
            <div >
            

            </div>
            </div>
            
    </div>
  );
}
