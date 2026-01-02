import { NavLink } from "react-router-dom";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { useRef, useState } from "react";
import { TbMovie } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { MdInfoOutline } from "react-icons/md";

/* ---------------- HOVER POPUP ---------------- */
const HoverPopup = ({ movie, position, onEnter, onLeave }) => {
  if (!movie) return null;

  return (
    <div
      className="fixed bg-black w-[250px] p-3 rounded-lg z-50"
      style={{ top: position.top, left: position.left }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <h2 className="font-bold text-2xl">{movie.title}</h2>

      <div className="flex gap-2 mt-2">
        <div className="bg-[#333] p-3 rounded-full text-2xl hover:bg-white hover:text-black transition cursor-pointer">
          <TbMovie />
        </div>
        <div className="bg-[#333] p-3 rounded-full text-2xl hover:bg-white hover:text-black transition cursor-pointer">
          <IoMdAdd />
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <FaShoppingBag className="text-yellow-400" />
        <span className="font-semibold text-sm">{movie.watchText}</span>
      </div>

      <p className="text-sm font-semibold text-gray-400 mt-2">
        {movie.year} {movie.duration}{" "}
        <span className="bg-gray-900 p-1 rounded">{movie.rating}</span>
      </p>

      <p className="text-md font-bold mt-2 text-gray-300 line-clamp-3">
        {movie.story}
      </p>
    </div>
  );
};

/* ---------------- MOVIES ROW ---------------- */
const MoviesRow = ({ title, movies = [], linkText = "See more", linkTo = "/" }) => {
  const rowRef = useRef(null);
  const hideTimeout = useRef(null);

  const [hoverMovie, setHoverMovie] = useState(null);
  const [popupPos, setPopupPos] = useState({ top: 0, left: 0 });
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

  const handleHover = (e, movie) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverMovie(movie);
    setPopupPos({ top: rect.bottom + 8, left: rect.left });
  };

  return (
    <div className="mt-15 ml-5 relative">
      {/* HEADER */}
      <div className="flex items-center ml-3 gap-6 mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <NavLink to={linkTo} className="font-bold text-xl flex items-center">
          {linkText}
          <FaChevronRight className="ml-1" />
        </NavLink>
      </div>

      {/* LEFT EDGE HOVER ZONE */}
      {showLeftArrow && (
        <div className="absolute left-0 top-0 h-full w-14 z-40 group">
          <button
            onClick={scrollLeft}
            className="absolute left-3 top-26 -translate-y-1/2
                       bg-black/40 hover:bg-black/70 px-2 py-11 rounded-xl
                       opacity-0 group-hover:opacity-100
                       transition-opacity duration-300"
          >
            <FaChevronLeft size={22} />
          </button>
        </div>
      )}

      {/* MOVIES ROW */}
      <div
        ref={rowRef}
        onScroll={handleScroll}
        className="flex gap-4 scrollbar-hide overflow-hidden scroll-smooth"
      >
        {movies.map((movie, index) => (
          <img
            key={index}
            src={movie.image}
            alt={movie.title}
            className="min-w-[250px] h-[140px] object-cover rounded-lg
                       transition-transform duration-300 hover:scale-[1.1] cursor-pointer"
            onMouseEnter={(e) => {
              clearTimeout(hideTimeout.current);
              handleHover(e, movie);
            }}
            onMouseLeave={() => {
              hideTimeout.current = setTimeout(() => setHoverMovie(null), 200);
            }}
          />
        ))}
      </div>

      {/* RIGHT EDGE HOVER ZONE */}
      <div className="absolute right-0 top-0 h-full w-14 z-40 group">
        <button
          onClick={scrollRight}
          className="absolute right-3 top-26 -translate-y-1/2
                     bg-black/40 hover:bg-black/70 px-2 py-11 rounded-xl
                     opacity-0 group-hover:opacity-100
                     transition-opacity duration-300"
        >
          <FaChevronRight size={22} />
        </button>
      </div>

      {/* HOVER POPUP */}
      <HoverPopup
        movie={hoverMovie}
        position={popupPos}
        onEnter={() => clearTimeout(hideTimeout.current)}
        onLeave={() =>
          (hideTimeout.current = setTimeout(() => setHoverMovie(null), 200))
        }
      />
    </div>
  );
};
  
export default MoviesRow;
