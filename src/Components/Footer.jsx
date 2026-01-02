import React from "react";
import primefooter from "../assets/Home/primefooter.png";

const Footer = () => {
  return (
    <footer className="w-full h-40 bg-[#222222] py-10 flex flex-col items-center gap-4 text-sm">

      {/* Prime Video Logo */}
      <img
        src={primefooter}
        alt="Prime Video"
        className="w-28 opacity-90"
      />

      {/* Footer Links */}
      <div className="flex flex-wrap justify-center gap-6 text-[#79b8f3] text-[15px] font-medium">
        <span className="cursor-pointer hover:underline">
          Terms and Privacy Notice
        </span>
        <span className="cursor-pointer hover:underline">
          Send us feedback
        </span>
        <span className="cursor-pointer hover:underline">
          Help
        </span>
      </div>

      {/* Copyright */}
      <p className="text-[#5C7687] font-semibold text-[15px]">
        © 1996–2025, Amazon.com, Inc. or its affiliates
      </p>

    </footer>
  );
};

export default Footer;
