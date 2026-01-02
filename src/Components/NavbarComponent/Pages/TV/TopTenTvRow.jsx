import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

const TopTenTvRow = ({ title, data }) => {
  const rowRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleScroll = () => {
    setShowLeftArrow(rowRef.current.scrollLeft > 0);
  };

  const scrollLeft = () => {
    rowRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <div className="px-10 mt-14 relative overflow-hidden">
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-2xl font-bold">{title}</h2>
        <FaChevronRight />
      </div>

      {/* LEFT ARROW */}
      {showLeftArrow && (
        <div className="absolute left-0 top-16 h-[180px] w-14 z-40 group pointer-events-none">
          <button
            onClick={scrollLeft}
            className="pointer-events-auto absolute left-2 top-1/2 -translate-y-1/2
                       bg-black/40 hover:bg-black/70 px-2 py-8 rounded-xl
                       opacity-0 group-hover:opacity-100"
          >
            <FaChevronLeft size={22} />
          </button>
        </div>
      )}

      {/* ROW */}
      <div
        ref={rowRef}
        onScroll={handleScroll}
        className="flex gap-10 overflow-x-hidden overflow-y-hidden scroll-smooth"
      >
        {data.slice(0, 10).map((item, index) => (
          <div key={index} className="relative min-w-[320px] h-[180px]">
            {/* BIG NUMBER */}
            <span
              className="absolute -left-12 top-1/2 -translate-y-1/2
                         text-[160px] font-extrabold text-white/10 select-none"
            >
              {index + 1}
            </span>

            {/* CARD */}
            <div
              className="relative h-full rounded-xl overflow-hidden
                         transition-transform duration-300 hover:scale-110"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* LOCK ICON */}
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
                     opacity-0 group-hover:opacity-100"
        >
          <FaChevronRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default TopTenTvRow;
