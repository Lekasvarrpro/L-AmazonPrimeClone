import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiQr } from "react-icons/bi";
import { PiLineVerticalBold } from "react-icons/pi";

const Links = () => {
  return (
    <div className='flex font-semibold items-center'>

       <NavLink 
         to="/" 
         end
         className="text-white px-4 py-2 hover:bg-white hover:text-black rounded-lg">
         Home
       </NavLink>

       {/* MOVIES */}
       <NavLink 
         to="/movies"
         className={({ isActive }) =>
           isActive
             ? `
                px-4 py-2 rounded-xl text-white font-semibold
                bg-[radial-gradient(50%_50%_at_50%_0,rgba(255,255,255,0.8)_0,transparent_100%)]
                border-t-[2px] border-solid border-transparent
                border-image-[linear-gradient(90deg,rgba(255,255,255,0)_10%,rgba(255,255,255,.3)_50%,rgba(255,255,255,0)_90%)]
                border-image-slice-[1]
                shadow-[0_-4px_16px_rgba(255,255,255,0.2)]
              `
             : "text-white px-4 py-2 hover:bg-white hover:text-black rounded-lg"
         }
       >
         Movies
       </NavLink>

       {/* TV SHOWS */}
       <NavLink 
         to="/tvshows"
         className={({ isActive }) =>
           isActive
             ? `
                px-4 py-2 rounded-xl text-white font-semibold
                bg-[radial-gradient(50%_50%_at_50%_0,rgba(255,255,255,0.8)_0,transparent_100%)]
                border-t-[2px] border-solid border-transparent
                border-image-[linear-gradient(90deg,rgba(255,255,255,0)_10%,rgba(255,255,255,.3)_50%,rgba(255,255,255,0)_90%)]
                border-image-slice-[1]
                shadow-[0_-4px_16px_rgba(255,255,255,0.2)]
              `
             : "text-white px-4 py-2 hover:bg-white hover:text-black rounded-lg"
         }
       >
         TV Shows
       </NavLink>

       {/* LIVE TV */}
       <NavLink 
         to="/livetv"
         className={({ isActive }) =>
           isActive
             ? `
                px-4 py-2 rounded-xl text-white font-semibold
                bg-[radial-gradient(50%_50%_at_50%_0,rgba(255,255,255,0.8)_0,transparent_100%)]
                border-t-[2px] border-solid border-transparent
                border-image-[linear-gradient(90deg,rgba(255,255,255,0)_10%,rgba(255,255,255,.3)_50%,rgba(255,255,255,0)_90%)]
                border-image-slice-[1]
                shadow-[0_-4px_16px_rgba(255,255,255,0.2)]
              `
             : "text-white px-4 py-2 hover:bg-white hover:text-black rounded-lg"
         }
       >
         Live TV
       </NavLink>

       <div className='flex items-center text-white'>
          <PiLineVerticalBold className='text-3xl text-gray-500'/>

          {/* SUBSCRIPTIONS */}
          <NavLink
            to="/subscriptions"
            className={({ isActive }) =>
              isActive
                ? `
                    flex items-center gap-2 px-4 py-2 rounded-xl text-white font-semibold
                    bg-[radial-gradient(50%_50%_at_50%_0,rgba(255,255,255,0.8)_0,transparent_100%)]
                    border-t-[2px] border-solid border-transparent
                    border-image-[linear-gradient(90deg,rgba(255,255,255,0)_10%,rgba(255,255,255,.3)_50%,rgba(255,255,255,0)_90%)]
                    border-image-slice-[1]
                    shadow-[0_-4px_16px_rgba(255,255,255,0.2)]
                  `
                : "flex items-center gap-2 text-white hover:bg-white hover:text-black px-4 py-2 rounded-lg"
            }
          >
            <BiQr className='text-2xl'/>
            Subscriptions
          </NavLink>

       </div>

    </div>
  )
}

export default Links
