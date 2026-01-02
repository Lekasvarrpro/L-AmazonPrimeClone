import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../Navbar";
import { FaShoppingBag } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { MdInfoOutline } from "react-icons/md";
import primefooter from "../../../../assets/Home/primefooter.png";

/* ---------- IMAGES ---------- */
import limg1 from "../../../../assets/LiveTv/limg1.jpg";
import limg2 from "../../../../assets/LiveTv/limg2.png";
import limg3 from "../../../../assets/LiveTv/limg3.jpg";
import limg4 from "../../../../assets/LiveTv/limg4.jpg";
import limg5 from "../../../../assets/LiveTv/limg5.jpg";
import limg6 from "../../../../assets/LiveTv/limg6.jpg";
import limg7 from "../../../../assets/LiveTv/limg7.png";
import limg8 from "../../../../assets/LiveTv/limg8.jpg";
import limg9 from "../../../../assets/LiveTv/limg9.png";
import limg10 from "../../../../assets/LiveTv/limg10.png";
import limg11 from "../../../../assets/LiveTv/limg11.png";
import limg12 from "../../../../assets/LiveTv/limg12.png";
import limg13 from "../../../../assets/LiveTv/limg13.jpg";
import limg14 from "../../../../assets/LiveTv/limg14.png";
import limg15 from "../../../../assets/LiveTv/limg15.jpg";
import limg16 from "../../../../assets/LiveTv/limg16.jpg";
import limg17 from "../../../../assets/LiveTv/limg17.jpg";

/* ---------- DATA ---------- */
const upcomingShows = [
  {
    title: "Gulf Giants vs Abu Dhabi",
    time: "Live at 8 PM",
    image: limg1,
    year: "2025",
    seasons: "Live Match",
    rating: "U/A",
    watchText: "Watch Live with Prime",
    description:
      "An intense live cricket clash between Gulf Giants and Abu Dhabi Knights.",
  },
  {
    title: "Rangpur Riders vs Chattogram",
    time: "Tomorrow 12:30 PM",
    image: limg2,
    year: "2025",
    seasons: "Live Match",
    rating: "U/A",
    watchText: "Watch Live with Prime",
    description:
      "A thrilling Bangladesh Premier League encounter you shouldn't miss.",
  },
  {
    title: "Rajshahi Warriors vs North",
    time: "Tomorrow 5:30 PM",
    image: limg3,
    year: "2025",
    seasons: "Live Match",
    rating: "U/A",
    watchText: "Watch Live with Prime",
    description:
      "High-stakes showdown featuring top players battling for victory.",
  },
];

const timeline = ["7:05 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"];

const channelRows = [
  {
    channel: "BBC Kids",
    programs: [
      { title: "Hey Duggee", image: limg16 },
      { title: "Go Jetters", image: limg5 },
      { title: "My World", image: limg6 },
      { title: "Andy's Safari", image: limg7 },
      { title: "Swashbuckle", image: limg8 },
    ],
  },
  {
    channel: "BBC Player",
    programs: [
      { title: "Drama Live", image: limg4 },
      { title: "Nature Doc", image: limg10 },
      { title: "World News", image: limg11 },
      { title: "History Hour", image: limg12 },
      { title: "Prime Talk", image: limg13 },
    ],
  },
  {
    channel: "FanCode",
    programs: [
      { title: "Best of T20", image: limg14 },
      { title: "Best of Cup", image: limg15 },
      { title: "Best of Cricket", image: limg17 },
      { title: "Best of IPL", image: limg9 },
      { title: "Best of Wcc", image: limg3 },
    ],
  }
];

/* ---------- HOVER POPUP ---------- */
const HoverPopup = ({ show, position, onEnter, onLeave }) => {
  if (!show) return null;

  return (
    <div
      className="fixed bg-black w-[260px] p-4 rounded-lg z-50"
      style={{ top: position.top, left: position.left }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <h2 className="font-bold text-xl">{show.title}</h2>

      <div className="flex gap-3 mt-3">
        <div className="bg-[#333] p-3 rounded-full text-xl hover:bg-white hover:text-black transition cursor-pointer">
          <TbMovie />
        </div>
        <div className="bg-[#333] p-3 rounded-full text-xl hover:bg-white hover:text-black transition cursor-pointer">
          <IoMdAdd />
        </div>
        <div className="bg-[#333] p-3 rounded-full text-xl hover:bg-white hover:text-black transition cursor-pointer">
          <MdInfoOutline />
        </div>
      </div>

      <div className="flex items-center gap-2 mt-3">
        <FaShoppingBag className="text-yellow-400" />
        <span className="font-semibold text-sm">{show.watchText}</span>
      </div>

      <p className="text-sm text-gray-400 mt-2">
        {show.year} • {show.seasons}
        <span className="bg-gray-800 px-2 py-1 rounded ml-2">
          {show.rating}
        </span>
      </p>

      <p className="text-sm font-semibold mt-2 text-gray-300 line-clamp-3">
        {show.description}
      </p>
    </div>
  );
};

const LiveTV = () => {
  const hideTimeout = useRef(null);
  const [hoverShow, setHoverShow] = useState(null);
  const [popupPos, setPopupPos] = useState({ top: 0, left: 0 });

  useEffect(() => {
    document.title = "Prime Video – Live TV";
  }, []);

  const handleHover = (e, show) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverShow(show);
    setPopupPos({
      top: rect.bottom + 8,
      left: rect.left,
    });
  };

  return (
    <div className="bg-[#00050d] min-h-screen text-white">
      <Navbar />

      <div className="px-10 pt-24">
        <h2 className="text-xl font-bold mb-4">
          FanCode: Live & Upcoming unmissable deal @ ₹119/month
        </h2>

        {/* ---------- UPCOMING ---------- */}
        <div className="flex gap-6 mb-10">
          {upcomingShows.map((item, index) => (
            <div
              key={index}
              className="w-[260px] h-[150px] relative rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.12]"
              onMouseEnter={(e) => {
                clearTimeout(hideTimeout.current);
                handleHover(e, item);
              }}
              onMouseLeave={() =>
                (hideTimeout.current = setTimeout(
                  () => setHoverShow(null),
                  200
                ))
              }
            >
              <img src={item.image} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <span className="absolute top-0 right-0 text-xs bg-[#333] px-2 py-1">
                UPCOMING
              </span>
              <div className="absolute bottom-3 left-3">
                <p className="font-bold">{item.title}</p>
                <div className="flex items-center gap-2">
                  <FaShoppingBag className="text-yellow-500" />
                  <p className="text-sm font-semibold">{item.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- TIMELINE ---------- */}
        <div className="flex gap-6 mb-4 ml-[160px]">
          {timeline.map((time, i) => (
            <span key={i} className="text-lg font-bold text-gray-400 min-w-[100px]">
              {time}
            </span>
          ))}
        </div>

        {/* ---------- CHANNEL ROWS (BBC STYLE) ---------- */}
        {channelRows.map((row, idx) => (
          <div key={idx} className="flex flex-col gap-5 mb-10 relative">
            <div className="w-[140px] text-xl font-bold pt-2">
              {row.channel}
            </div>

            <div className="relative flex gap-3 ">
              <div className="w-[220px] h-[90px] relative rounded-lg overflow-hidden hover:scale-[1.08] transition">
                <img
                  src={row.programs[0].image}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
              </div>

              {row.programs.slice(1).map((p, i) => (
                <div
                  key={i}
                  className="w-[120px] cursor-pointer h-[90px] bg-[#1a1d23] rounded-lg flex items-center justify-center text-md text-center font-bold hover:scale-[1.1] transition"
                >
                  {p.title}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <HoverPopup
        show={hoverShow}
        position={popupPos}
        onEnter={() => clearTimeout(hideTimeout.current)}
        onLeave={() =>
          (hideTimeout.current = setTimeout(
            () => setHoverShow(null),
            200
          ))
        }
      />

       {/* FOOTER */}
            <footer className="bg-[#00050d] mt-24 py-10 text-center text-sm text-gray-400">
              {/* LOGO */}
              <div className="flex justify-center mb-6">
                <img
                  src={primefooter}
                  alt="Prime Video"
                  className="h-10 opacity-90"
                />
              </div>
      
              {/* LINKS */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 text-blue-400">
                <span className="hover:text-white cursor-pointer transition">
                  Terms and Privacy Notice
                </span>
                <span className="hover:text-white cursor-pointer transition">
                  Send us feedback
                </span>
                <span className="hover:text-white cursor-pointer transition">
                  Help
                </span>
                {/* COPYRIGHT */}
                <p className="text-gray-500">
                  © 1996–2025, Amazon.com, Inc. or its affiliates
                </p>
              </div>
            </footer>
      
            {/* Footer End */}
    </div>
  );
};

export default LiveTV;
