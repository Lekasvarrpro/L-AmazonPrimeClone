import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../Navbar.jsx";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaShoppingBag } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdInfoOutline } from "react-icons/md";
import SubscriptionsRow from "./SubscriptionsRow.jsx";
import TopTenRow2 from "./TopTenRow2.jsx";
import primefooter from "../../../../assets/Home/primefooter.png";
{
  /*Banner Images */
}
/* ---------- Banner Images ---------- */
import plubanner from "../../../../assets/Subscriptions/plubanner.jpeg";
import plutitle from "../../../../assets/Subscriptions/plutitle.png";
import f1banner from "../../../../assets/Subscriptions/f1banner.jpeg";
import f1title from "../../../../assets/Subscriptions/f1title.png";
import servancebanner from "../../../../assets/Subscriptions/servancebanner.jpeg";
import servancetitle from "../../../../assets/Subscriptions/servancetitle.png";
import cheifbanner from "../../../../assets/Subscriptions/cheifbanner.jpeg";
import cheiftitle from "../../../../assets/Subscriptions/cheiftitle.png";
import lostbanner from "../../../../assets/Subscriptions/lostbanner.jpeg";
import losttitle from "../../../../assets/Subscriptions/losttitle.png";
import applestamp from "../../../../assets/Subscriptions/applestamp.png";

/* ---------- Row1 Images ---------- */
import simg1 from "../../../../assets/Subscriptions/Row1/simg1.jpg";
import simg2 from "../../../../assets/Subscriptions/Row1/simg2.jpg";
import simg3 from "../../../../assets/Subscriptions/Row1/simg3.jpg";
import simg4 from "../../../../assets/Subscriptions/Row1/simg4.jpg";
import simg5 from "../../../../assets/Subscriptions/Row1/simg5.jpg";
import simg6 from "../../../../assets/Subscriptions/Row1/simg6.jpg";
import simg7 from "../../../../assets/Subscriptions/Row1/simg7.jpg";
import simg8 from "../../../../assets/Subscriptions/Row1/simg8.jpg";

/* ---------- Row2 Images ---------- */
import timg1 from "../../../../assets/Subscriptions/Row2/timg1.jpg";
import timg2 from "../../../../assets/Subscriptions/Row2/timg2.jpg";
import timg3 from "../../../../assets/Subscriptions/Row2/timg3.jpg";
import timg4 from "../../../../assets/Subscriptions/Row2/timg4.jpg";
import timg5 from "../../../../assets/Subscriptions/Row2/timg5.jpg";
import timg6 from "../../../../assets/Subscriptions/Row2/timg6.jpg";
import timg7 from "../../../../assets/Subscriptions/Row2/timg7.jpg";
import timg8 from "../../../../assets/Subscriptions/Row2/timg8.jpg";

/* ---------- Row3 Images ---------- */
import rimg1 from "../../../../assets/Subscriptions/Row3/rimg1.jpg";
import rimg2 from "../../../../assets/Subscriptions/Row3/rimg2.jpg";
import rimg3 from "../../../../assets/Subscriptions/Row3/rimg3.jpg";
import rimg4 from "../../../../assets/Subscriptions/Row3/rimg4.jpg";
import rimg5 from "../../../../assets/Subscriptions/Row3/rimg5.jpg";
import rimg6 from "../../../../assets/Subscriptions/Row3/rimg6.jpg";
import rimg7 from "../../../../assets/Subscriptions/Row3/rimg7.jpg";
import rimg8 from "../../../../assets/Subscriptions/Row3/rimg8.jpg";

/* ---------- HERO SLIDES (SAME AS MOVIES) ---------- */
const slides = [
  {
    banner: plubanner,
    video: null,
    titleImg: plutitle,
    stamp: "",
    description:
      "Season 1・The most miserable person on Earth must save the world from happiness..",
    rank: "#1 TV shows in Subscriptions",
    membershipText: "Subscribe for ₹99/month",
    rating: "A",
  },
  {
    banner: f1banner,
    video: null,
    titleImg: f1title,
    stamp: applestamp,
    description:
      "Sonny Hayes is a former driver who returns to FORMULA 1® from retirement to mentor and team with a younger driver...",
    rank: "#2 in movies subscriptions",
    membershipText: "Subscribe for ₹99/month",
    rating: "A",
  },
  {
    banner: servancebanner,
    video: null,
    titleImg: servancetitle,
    stamp: applestamp,
    description:
      "Season 1・From Ben Stiller, this series stars Adam Scott as a man whose memories have been surgically divided by his...",
    rank: "GOLDEN GLOBES® 2X nominee in 2026",
    membershipText: "Subscribe for ₹99/month",
    rating: "U/A 16+",
  },
  {
    banner: cheifbanner,
    video: null,
    titleImg: cheiftitle,
    stamp: applestamp,
    description:
      "Season 1・An epic adventure about the origin of Hawai‘i, its people, and a dangerous power struggle.",
    rank: "",
    membershipText: "Subscribe for ₹99/month",
    rating: "U/A 16+",
  },
  {
    banner: lostbanner,
    video: null,
    titleImg: losttitle,
    stamp: applestamp,
    description:
      "A determined father risks everything to save a teacher and her students from a raging wildfire. Inspired by true events.",
    rank: "",
    membershipText: "Subscribe for ₹99/month",
    rating: "U/A 16+",
  },
];

/* ---------- ROW-1 DATA ---------- */
const Row1 = [
  {
    image: simg1,
    title: "High School",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Endless darkness.",
  },
  {
    image: simg2,
    title: "Crushology 101",
    year: "2024",
    seasons: "Season 2",
    rating: "U/A 16+",
    watchText: "Subscribe to Disney+ Hotstar",
    description: "An undercover agent battles global crime.",
  },
  {
    image: simg3,
    title: "Bring the Soul",
    year: "2023",
    seasons: "Season 1",
    rating: "A",
    watchText: "Watch with Prime",
    description: "A small artist enters the world of fake currency.",
  },
  {
    image: simg4,
    title: "Pale Moon",
    year: "2022",
    seasons: "Season 3",
    rating: "A",
    watchText: "Watch with Prime",
    description: "Power, politics, and revenge in Purvanchal.",
  },
  {
    image: simg5,
    title: "Sline",
    year: "2023",
    seasons: "Season 2",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "A middle-class man secretly works for intelligence.",
  },
  {
    image: simg6,
    title: "Idoli",
    year: "2023",
    seasons: "Season 2",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "A middle-class man secretly works for intelligence.",
  },
  {
    image: simg7,
    title: "Jewel in the Palace",
    year: "2023",
    seasons: "Season 2",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "A middle-class man secretly works for intelligence.",
  },
  {
    image: simg8,
    title: "Family Matters",
    year: "2023",
    seasons: "Season 2",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "A middle-class man secretly works for intelligence.",
  },
];

/* ---------- ROW-2 DATA ---------- */
const Row2 = [
  { image: timg1 },
  { image: timg2 },
  { image: timg3 },
  { image: timg4 },
  { image: timg5 },
  { image: timg6 },
  { image: timg7 },
  { image: timg8 },
];

{
  /*Row-3*/
}
const Row3 = [
  { image: rimg1 },
  { image: rimg2 },
  { image: rimg3 },
  { image: rimg4 },
  { image: rimg5 },
  { image: rimg6 },
  { image: rimg7 },
  { image: rimg8 },
];

const Subscriptions = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    document.title = "Prime Video – Subscriptions";
  }, []);

  /* ---------- SLIDER SETTINGS (SAME LOGIC) ---------- */
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 12000,
    arrows: false,
    lazyLoad: "ondemand",
    afterChange: (current) => {
      setCurrentSlide(current);
      setShowVideo(false);

      if (slides[current]?.video) {
        setTimeout(() => setShowVideo(true), 1500);
      }
    },
  };

  return (
    <div className="bg-[#00050d] min-h-screen text-white">
      <Navbar />

      {/* ================= HERO SLIDER ================= */}
      <div className="relative w-full h-[86vh]">
        <Slider {...settings} ref={sliderRef}>
          {slides.map((slide, index) => (
            <div key={index} className="relative h-[88vh]">
              <div className="absolute inset-0">
                {/* Banner Image */}
                <img
                  src={slide.banner}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    currentSlide === index && showVideo && slide.video
                      ? "opacity-0"
                      : "opacity-100"
                  }`}
                />

                {/* Preview Video */}
                {currentSlide === index && showVideo && slide.video && (
                  <video
                    src={slide.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Stamp */}
              <div className="absolute top-44 left-20 z-10">
                <img src={slide.stamp} className="w-24" />
              </div>

              {/* Content */}
              <div className="absolute left-20 top-60 z-10 max-w-xl">
                <img src={slide.titleImg} className="w-[400px]" />

                <p className="text-green-400 font-bold mt-2">{slide.rank}</p>

                <p className="mt-4 text-lg font-semibold whitespace-pre-line">
                  {slide.description}
                </p>

                <div className="flex gap-4 mt-4">
                  <NavLink className="bg-[#3E4248] px-7 py-2 rounded-md font-bold hover:bg-white hover:text-black transition text-xl">
                    Watch With Apple TV <br /> Start your subscription
                  </NavLink>

                  <button className="bg-[#3E4248] hover:scale-105 cursor-pointer p-5 rounded-full hover:bg-white hover:text-black transition">
                    <IoMdAdd className="text-3xl" />
                  </button>

                  <button className="bg-[#3E4248] hover:scale-105 cursor-pointer p-5 rounded-full hover:bg-white hover:text-black transition">
                    <MdInfoOutline className="text-3xl" />
                  </button>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <FaShoppingBag className="text-yellow-400" />
                  <span className="font-normal">{slide.membershipText}</span>
                </div>

                <div className="absolute left-[1320px] bottom-10 w-20 text-center rounded-md bg-[#33373D]">
                  <span className="font-bold">{slide.rating}</span>
                </div>
              </div>

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent" />
            </div>
          ))}
        </Slider>

        {/* ---------- SLIDER TRACKER ---------- */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => sliderRef.current?.slickGoTo(index)}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                currentSlide === index ? "w-8 bg-white" : "w-3 bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-20"
        >
          <FaChevronLeft size={30} />
        </button>

        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-20"
        >
          <FaChevronRight size={30} />
        </button>
      </div>

      {/* ================= ROWS ================= */}
      <div className="pt-10 space-y-6">
        <SubscriptionsRow title="Channel K: Recently added" shows={Row1} />

        <SubscriptionsRow
          title="Subscriptions you might like"
          shows={Row2}
          enableHover={false}
        />

        <SubscriptionsRow
          title="Subscriptions you might like"
          shows={Row3}
          enableHover={false}
        />

        <TopTenRow2 />

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
    </div>
  );
};

export default Subscriptions;
