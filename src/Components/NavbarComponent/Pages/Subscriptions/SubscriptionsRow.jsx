import { NavLink } from "react-router-dom";
import { FaChevronRight, FaChevronLeft, FaShoppingBag } from "react-icons/fa";
import { useRef, useState } from "react";
import { TbMovie } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { MdInfoOutline } from "react-icons/md";

/* ---------------- HOVER POPUP ---------------- */
const HoverPopup = ({ show, position, onEnter, onLeave }) => {
  if (!show) return null;

  return (
    <div
      className="fixed bg-black w-[250px] p-3 rounded-lg z-50"
      style={{ top: position.top, left: position.left }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <h2 className="font-bold text-2xl">{show.title}</h2>

      {/* ACTIONS */}
      <div className="flex gap-2 mt-2">
        <div className="bg-[#333] p-3 rounded-full text-2xl hover:bg-white hover:text-black transition cursor-pointer">
          <TbMovie />
        </div>
        <div className="bg-[#333] p-3 rounded-full text-2xl hover:bg-white hover:text-black transition cursor-pointer">
          <IoMdAdd />
        </div>
        <div className="bg-[#333] p-3 rounded-full text-2xl hover:bg-white hover:text-black transition cursor-pointer">
          <MdInfoOutline />
        </div>
      </div>

      {/* PRIME INFO */}
      <div className="flex items-center gap-2 mt-2">
        <FaShoppingBag className="text-yellow-400" />
        <span className="font-semibold text-sm">{show.watchText}</span>
      </div>

      {/* META */}
      <p className="text-sm font-semibold text-gray-400 mt-2">
        {show.year} • {show.seasons}
        <span className="bg-gray-900 p-1 rounded ml-1">{show.rating}</span>
      </p>

      {/* DESCRIPTION */}
      <p className="text-md font-bold mt-2 text-gray-300 line-clamp-3">
        {show.description}
      </p>
    </div>
  );
};

/* ---------------- SUBSCRIPTIONS ROW ---------------- */
const SubscriptionsRow = ({
  title,
  shows = [],
  linkText = "See more",
  linkTo = "/",
  enableHover = true, // 🔑 CONTROL HOVER HERE
}) => {
  const rowRef = useRef(null);
  const hideTimeout = useRef(null);

  const [hoverShow, setHoverShow] = useState(null);
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

  const handleHover = (e, show) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverShow(show);
    setPopupPos({
      top: rect.bottom + 8,
      left: rect.left,
    });
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

      {/* LEFT ARROW */}
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

      {/* ROW */}
      <div
        ref={rowRef}
        onScroll={handleScroll}
        className="flex gap-4 scrollbar-hide overflow-hidden scroll-smooth"
      >
        {shows.map((show, index) => (
          <img
            key={index}
            src={show.image}
            alt={show.title || "subscription"}
            className={`min-w-[250px] h-[140px] object-cover rounded-lg cursor-pointer
              ${
                enableHover
                  ? "transition-transform duration-300 hover:scale-[1.1]"
                  : ""
              }`}
            onMouseEnter={
              enableHover
                ? (e) => {
                    clearTimeout(hideTimeout.current);
                    handleHover(e, show);
                  }
                : undefined
            }
            onMouseLeave={
              enableHover
                ? () => {
                    hideTimeout.current = setTimeout(
                      () => setHoverShow(null),
                      200
                    );
                  }
                : undefined
            }
          />
        ))}
      </div>

      {/* RIGHT ARROW */}
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
      {enableHover && (
        <HoverPopup
          show={hoverShow}
          position={popupPos}
          onEnter={() => clearTimeout(hideTimeout.current)}
          onLeave={() =>
            (hideTimeout.current = setTimeout(() => setHoverShow(null), 200))
          }
        />
      )}
    </div>
  );
};

export default SubscriptionsRow;
