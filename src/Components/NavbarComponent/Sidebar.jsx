import React, { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import user from "../../assets/user.svg";
import { NavLink } from "react-router-dom";

const languages = [
  { code: "EN", label: "English" },
  { code: "ES", label: "Spanish" },
  { code: "FR", label: "French" },
  { code: "DE", label: "German" },
  { code: "IT", label: "Italian" },
  { code: "JP", label: "Japanese" },
  { code: "CN", label: "Chinese" },
  { code: "IN", label: "Hindi" },
  { code: "RU", label: "Russian" },
  { code: "AR", label: "Arabic" },
  { code: "PT", label: "Portuguese" },
  { code: "KO", label: "Korean" },
  { code: "TH", label: "Thai" },
];

const Sidebar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="flex items-center gap-5 text-white pr-10 font-bold cursor-pointer">

        {/* SEARCH ICON */}
        <button
          onClick={() => setSearchOpen(true)}
          className="hover:bg-white hover:text-black p-2 rounded-full transition cursor-pointer"
        >
          <IoIosSearch className="text-2xl" />
        </button>

        {/* LANGUAGE */}
        <div className="relative group">
          <button className="flex items-center cursor-pointer gap-1 px-3 py-2 hover:bg-white hover:text-black rounded-md transition">
            <span className="font-semibold">{selectedLanguage.code}</span>
            <PiCaretDownBold className="group-hover:rotate-180 transition-transform" />
          </button>

          <div className="absolute right-0 mt-2 w-100 max-h-64 overflow-y-auto bg-[#24262E] backdrop-blur-lg border border-white/30 rounded-md grid grid-cols-5 gap-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition z-50 p-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLanguage(lang)}
                className="px-2 py-2 text-white hover:bg-white hover:text-black rounded text-sm font-semibold"
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>

        {/* GENRES */}
        <div className="relative group">
          <TbGridDots className="text-4xl cursor-pointer hover:bg-white hover:text-black p-2 rounded-full transition" />

          <div className="absolute right-0 mt-2 w-100 bg-[#24262E] backdrop-blur-lg border border-white/30 rounded-md grid grid-cols-2 gap-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition z-50 p-3">
            <span className="col-span-2 text-gray-300 text-center">Genres</span>
            {[
              "Action & Adventure",
              "Mystery & Thrillers",
              "Anime",
              "Romance",
              "Comedy",
              "Science Fiction",
              "Documentary",
              "Drama",
              "Fantasy",
              "Horror",
              "Kids",
            ].map((genre) => (
              <button
                key={genre}
                className="text-white hover:bg-white hover:text-black px-2 py-1 rounded text-sm"
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* USER */}
        <div className="relative group">
          <img
            src={user}
            alt="user"
            className="w-8 h-8 rounded-full cursor-pointer hover:ring-4 hover:ring-white transition"
          />

          <div className="absolute right-0 mt-2 bg-[#24262E] backdrop-blur-lg border border-white/30 rounded-md p-4 shadow-xl w-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
            <p className="text-gray-300 text-center mb-2">Your account</p>
            <button className="w-full text-left p-2 hover:bg-white hover:text-black rounded">Sign In</button>
            <button className="w-full text-left p-2 hover:bg-white hover:text-black rounded">Help</button>
            <button className="w-full text-left p-2 hover:bg-white hover:text-black rounded">Watch Anywhere</button>
          </div>
        </div>

        {/* JOIN */}
        <NavLink
          to="/join"
          className="font-semibold bg-sky-600 hover:bg-sky-400 px-5 py-2.5 rounded-lg transition"
        >
          Join Prime
        </NavLink>
      </div>

      {/* SEARCH POPUP */}
      {searchOpen && (
        <div className="fixed inset-0 z-[999] flex justify-center">
          {/* OVERLAY */}
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setSearchOpen(false)}
          />

          {/* SEARCH BOX */}
          <div className="relative mt-24 w-[90%] max-w-6xl z-10">
            <div className="bg-[#0f171e] border border-[#181D24] rounded-lg shadow-2xl p-11">
              <div className="flex items-center gap-4 bg-[#33373D] rounded-lg px-6 py-7 border border-transparent focus-within:border-white transition">
                <IoIosSearch className="text-3xl text-[#AAAAAA]" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search"
                  className="w-full bg-transparent outline-none text-[#E6E6E6] placeholder-[#AAAAAA] text-2xl font-medium"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
