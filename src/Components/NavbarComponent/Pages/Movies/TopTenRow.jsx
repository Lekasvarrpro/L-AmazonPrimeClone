import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

/* images */
import cimg1 from "../../../../assets/Movies/leaves/Row3/cimg1.jpg";
import cimg2 from "../../../../assets/Movies/leaves/Row3/cimg2.png";
import cimg3 from "../../../../assets/Movies/leaves/Row3/cimg3.jpg";
import cimg4 from "../../../../assets/Movies/leaves/Row3/cimg4.jpg";
import cimg5 from "../../../../assets/Movies/leaves/Row3/cimg5.jpg";
import cimg6 from "../../../../assets/Movies/leaves/Row3/cimg6.jpg";
import cimg7 from "../../../../assets/Movies/leaves/Row3/cimg7.jpg";
import cimg8 from "../../../../assets/Movies/leaves/Row3/cimg8.jpg";
import cimg9 from "../../../../assets/Movies/leaves/Row3/cimg9.jpg";
import cimg10 from "../../../../assets/Movies/leaves/Row3/cimg10.jpg";

const topTenData = [
  { image: cimg1 },
  { image: cimg2 },
  { image: cimg3 },
  { image: cimg4 },
  { image: cimg5 },
  { image: cimg6 },
  { image: cimg7 },
  { image: cimg8 },
  { image: cimg9 },
  { image: cimg10 },
];

const TopTenRow = () => {
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
    <div className="px-10 mt-12 relative overflow-hidden">
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-2xl font-bold">
          Shop: Top 10 purchases in India
        </h2>
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
        className="flex gap-10 overflow-x-hidden overflow-y-hidden scrollbar-hide scroll-smooth cursor-pointer"
      >
        {topTenData.map((item, index) => (
          <div key={index} className="relative min-w-[320px] h-[180px]">
            {/* BIG NUMBER */}
            <span className="absolute -left-12 top-1/2 -translate-y-1/2
                             text-[160px] font-extrabold text-white/10 select-none">
              {index + 1}
            </span>

            {/* CARD */}
            <div className="relative h-full rounded-xl overflow-hidden
                            transition-transform duration-300 hover:scale-110">
              <img
                src={item.image}
                alt="Top movie"
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
                     opacity-0 group-hover:opacity-100"
        >
          <FaChevronRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default TopTenRow;
