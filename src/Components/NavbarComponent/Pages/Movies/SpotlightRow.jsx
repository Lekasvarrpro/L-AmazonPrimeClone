import React, { useRef, useState } from "react";
import { FaLock } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

/* spotlight images */
import simg1 from "../../../../assets/Movies/leaves/Spotlight/simg1.jpg";
import simg2 from "../../../../assets/Movies/leaves/Spotlight/simg2.jpg";
import simg3 from "../../../../assets/Movies/leaves/Spotlight/simg3.png";
import simg4 from "../../../../assets/Movies/leaves/Spotlight/simg4.jpg";
import simg5 from "../../../../assets/Movies/leaves/Spotlight/simg5.jpg";
import simg6 from "../../../../assets/Movies/leaves/Spotlight/simg6.jpg";
import simg7 from "../../../../assets/Movies/leaves/Spotlight/simg7.jpg";
import simg8 from "../../../../assets/Movies/leaves/Spotlight/simg8.jpg";  
import simg9 from "../../../../assets/Movies/leaves/Spotlight/simg9.jpg";
import simg10 from "../../../../assets/Movies/leaves/Spotlight/simg10.jpg";
import simg11 from "../../../../assets/Movies/leaves/Spotlight/simg11.jpg";
import simg12 from "../../../../assets/Movies/leaves/Spotlight/simg12.jpg";
import simg13 from "../../../../assets/Movies/leaves/Spotlight/simg13.jpg";
import simg14 from "../../../../assets/Movies/leaves/Spotlight/simg14.jpg";
import simg15 from "../../../../assets/Movies/leaves/Spotlight/simg15.jpg";

const spotlightData = [
  { image: simg13, badge: false },
  { image: simg14, badge: true },
  { image: simg3, badge: true },
  { image: simg4, badge: true },
  { image: simg5, badge: false },
  { image: simg6, badge: false },
  { image: simg7, badge: true },
  { image: simg8, badge: false },
  { image: simg9, badge: false },
  { image: simg10, badge: false },
  { image: simg11, badge: false },
  { image: simg12, badge: false },
  { image: simg1, badge: true },
  { image: simg2, badge: true },
  { image: simg15, badge: false },
];

const SpotlightRow = () => {
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
    <div className="px-10 mt-10 relative overflow-hidden">
      {/* TITLE */}
      <h2 className="text-2xl font-bold mb-4">Shop: In the spotlight</h2>

      {/* LEFT ARROW */}
      {showLeftArrow && (
        <div className="absolute left-0 top-16 h-[360px] w-14 z-40 group pointer-events-none">
          <button
            onClick={scrollLeft}
            className="pointer-events-auto absolute left-2 top-1/2 -translate-y-1/2
                       bg-black/40 hover:bg-black/70 px-2 py-10 rounded-xl
                       opacity-0 group-hover:opacity-100
                       transition-opacity duration-300"
          >
            <FaChevronLeft size={22} />
          </button>
        </div>
      )}

      {/* SCROLL ROW */}
      <div
        ref={rowRef}
        onScroll={handleScroll}
        className="flex gap-5 overflow-x-hidden overflow-y-hidden scrollbar-hide scroll-smooth"
      >
        {spotlightData.map((item, index) => (
          <div
            key={index}
            className="relative min-w-[240px] h-[360px] rounded-xl overflow-hidden
                       cursor-pointer transition-transform duration-300 hover:scale-110"
          >
            {item.badge && (
              <span className="absolute top-3 right-3 bg-white text-black text-xs font-bold px-2 py-1 rounded">
                NEW MOVIE
              </span>
            )}

            <img
              src={item.image}
              alt="Spotlight Movie"
              className="w-full h-full object-cover"
            />

            <FaLock className="absolute bottom-3 left-3 text-yellow-400 text-lg" />
          </div>
        ))}
      </div>

      {/* RIGHT ARROW */}
      <div className="absolute right-0 top-16 h-[360px] w-14 z-40 group pointer-events-none">
        <button
          onClick={scrollRight}
          className="pointer-events-auto absolute right-2 top-1/2 -translate-y-1/2
                     bg-black/40 hover:bg-black/70 px-2 py-10 rounded-xl
                     opacity-0 group-hover:opacity-100
                     transition-opacity duration-300"
        >
          <FaChevronRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default SpotlightRow;
