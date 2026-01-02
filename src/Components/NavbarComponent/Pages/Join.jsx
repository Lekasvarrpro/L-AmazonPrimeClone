import { useEffect } from "react";
import React from "react";
import join_logo from "../../../assets/Join/join_logo.png";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const Join = () => {
  useEffect(() => {
    document.title = "Amazon Sign-In";

    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = "/Images/join.ico";
    }
  }, []);

  return <div>
    <div className="flex justify-center items-center mt-5">
      <img src={join_logo} alt="Join Logo" />
    </div>
    <div className="relative left-150 mt-3 h-80 w-85 border border-1 border-gray-300 bg-white/20 rounded-md flex flex-col">
       <b className="font-extralight text-[20px] font-['Arial','sans-serif','Helvetica'] absolute top-4 left-6">Sign in</b>
       <div className="mt-10 relative">
        <b className="text-[14px] absolute left-6 top-5 font-['Arial','sans-serif','Helvetica']">Enter your mobile number or email</b>
          <input type="email" placeholder="" className="w-70 h-7 rounded-md ml-5 p-2 mt-11 border-1 "/>
       </div>
       <div className="mt-6 relative w-70 left-5 py-1 rounded-full cursor-pointer bg-[#FFCE12] hover:opacity-90">
          <button className="font-normal text-[14px] cursor-pointer w-full text-center">Continue</button>
       </div>
       <div className="mt-6">
          <p className="text-[12px] mt-3 ml-5">By continuing, you agree to the Amazon<NavLink className="underline text-[#2162A1] hover:text-black"> Conditions<br/>of Use and Privacy Notice.</NavLink></p>
       </div>
       <div className="mt-4 flex items-center gap-1">
          <p className="text-[14px] text-[#2162A1] cursor-pointer hover:underline font-semibold ml-5">Need help?</p>
          <MdKeyboardArrowDown className="text-xl  text-black"/>
       </div>
    </div>

    <div className="text-center mt-6">
      <p className="text-[12px] text-[#565959]">-----------------------New to Amazon?----------------------</p>
      <div className="mt-3 border-1 w-80 py-1 rounded-full cursor-pointer ml-150 hover:bg-gray-100">
        <p className="text-center text-[13px] font-['Arial','sans-serif','Helvetica'] font-normal">Create your Amazon account</p>
      </div>
      <div className="overflow-x-hidden mt-6">
        <p className="text-gray-400">____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</p>
      </div>

        <div className="flex flex-wrap justify-center mt-10 gap-x-6 gap-y-2 mb-4 text-[#21626A] text-[12px]">
          <span className="hover:text-white cursor-pointer transition">
            Terms and Privacy Notice
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Send us feedback
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Help
          </span>
        </div>
        <div>
          {/* COPYRIGHT */}
          <p className="text-[#565959] text-center text-[12px]">
            © 1996–2025, Amazon.com, Inc. or its affiliates
          </p>
        </div>
    </div>
  </div>
};

export default Join;
