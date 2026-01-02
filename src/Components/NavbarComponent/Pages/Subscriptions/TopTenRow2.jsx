import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

/* ---------- SUBSCRIPTIONS IMAGES ---------- */
import pimg1 from "../../../../assets/Subscriptions/Row4/pimg1.jpg";
import pimg2 from "../../../../assets/Subscriptions/Row4/pimg2.jpg";
import pimg3 from "../../../../assets/Subscriptions/Row4/pimg3.jpg";
import pimg4 from "../../../../assets/Subscriptions/Row4/pimg4.jpg";
import pimg5 from "../../../../assets/Subscriptions/Row4/pimg5.jpg";
import pimg6 from "../../../../assets/Subscriptions/Row4/pimg6.jpg";
import pimg7 from "../../../../assets/Subscriptions/Row4/pimg7.jpg";
import pimg8 from "../../../../assets/Subscriptions/Row4/pimg8.jpg";

/* ---------- DATA ---------- */
const topTenData = [
  { image: pimg1 },
  { image: pimg2 },
  { image: pimg3 },
  { image: pimg4 },
  { image: pimg5 },
  { image: pimg6 },
  { image: pimg7 },
  { image: pimg8 },
];

const TopTenRow2 = () => {
  const rowRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleScroll = () => {
    if (!rowRef.current) return;
    setShowLeftArrow(rowRef.current.scrollLeft > 0);
  };

  const scrollLeft = () => {
    rowRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <div className="px-10 mt-12 relative overflow-hidden">
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-2xl font-bold">Top 8 with subscriptions </h2>
        <FaChevronRight />
      </div>

      {/* LEFT ARROW */}
      {showLeftArrow && (
        <div className="absolute left-0 top-16 h-[180px] w-14 z-40 group pointer-events-none">
          <button
            onClick={scrollLeft}
            className="pointer-events-auto absolute left-2 top-1/2 -translate-y-1/2
                       bg-black/40 hover:bg-black/70 px-2 py-8 rounded-xl
                       opacity-0 group-hover:opacity-100 transition"
          >
            <FaChevronLeft size={22} />
          </button>
        </div>
      )}

      {/* ROW */}
      <div
        ref={rowRef}
        onScroll={handleScroll}
        className="flex gap-10 overflow-x-hidden overflow-y-hidden scrollbar-hide scroll-smooth cursor-pointer"
      >
        {topTenData.map((item, index) => (
          <div key={index} className="relative  min-w-[320px] h-[180px]">
            {/* BIG NUMBER */}
            <span
              className="absolute -left-12 top-1/2 -translate-y-1/2
                         text-[160px] font-extrabold text-white/30 select-none"
            >
              {index + 1}
            </span>

            {/* CARD */}
            <div
              className="relative h-full  rounded-xl overflow-hidden
                         transition-transform duration-300 hover:scale-110"
            >
              <img
                src={item.image}
                alt="Top subscription"
                className="w-full h-full object-cover"
              />

              <FaLock className="absolute bottom-3 left-3 text-yellow-400" />
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT ARROW */}
      <div className="absolute right-0 top-16 h-[180px] w-14 z-40 group pointer-events-none">
        <button
          onClick={scrollRight}
          className="pointer-events-auto absolute right-2 top-1/2 -translate-y-1/2
                     bg-black/40 hover:bg-black/70 px-2 py-8 rounded-xl
                     opacity-0 group-hover:opacity-100 transition"
        >
          <FaChevronRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default TopTenRow2;
