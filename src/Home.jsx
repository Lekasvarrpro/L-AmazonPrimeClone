import React from "react";
import first from "./assets/Home/first.jpg";
import second from "./assets/Home/second.jpg";
import { Outlet } from "react-router-dom";
import img1 from "./assets/Home/img1.jpg";
import img2 from "./assets/Home/img2.jpg";
import img3 from "./assets/Home/img3.jpg";
import img4 from "./assets/Home/img4.jpg";
import img5 from "./assets/Home/img5.jpg";
import img6 from "./assets/Home/img6.jpg";
import img7 from "./assets/Home/img7.jpg";
import img8 from "./assets/Home/img8.jpg";
import img9 from "./assets/Home/img9.jpg";
import { useEffect } from "react";
import Footer from "./Components/Footer.jsx";

const subscriptionImages = [
  img6, img2, img3,
  img4, img5, img1,
  img7, img8, img9
];


const Home = () => {
  useEffect(() => {
    document.title = "Welcome to Prime Video";
  }, []);

  return (
    <div className="w-full h-auto">
      {" "}

      {/* FIRST HERO SECTION */}
        <div className="relative w-full h-auto text-white overflow-hidden">
        <div className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0  from-black via-black/70 to-transparent z-10"></div>

          <div className="w-full h-full flex items-center px-11 relative z-20">
            <div
              className="w-[49%] h-[97%] bg-gradient-to-r bg-black from-black via-black/70 pt-30 pl-10 shadow-2xl shadow-black 
                            relative left-1 top-3 space-y-10"
            >
              <h1 className="text-5xl font-bold">Welcome to Prime Video</h1>

              <p className="text-xl font-semibold">
                Join Prime to watch the latest movies, TV shows and
                award-winning Amazon Originals
              </p>

              <button
                className="px-6 cursor-pointer py-4 hover:scale-105 hover:transition 
                                 hover:duration-200 hover:text-gray-500 text-xl bg-white text-black 
                                 rounded-md font-semibold"
              >
                Sign in to Join Prime
              </button>
            </div>
          </div>

          <img
            src={first}
            alt="poster"
            className="absolute right-0 top-17 h-full w-auto object-cover"
          />
        </div>

        {/* 
            SECOND HERO SECTION */}
        <div className="relative w-full h-screen overflow-hidden mt-10">
          <div className="absolute inset-0 z-10"></div>

          <div className="w-full h-full flex items-center px-11 relative z-20">
            <div
              className="w-[49%] h-[97%] bg-black pt-30 pl-10 shadow-2xl shadow-black 
                            relative left-1 top-3 space-y-10"
            >
              <h1 className="text-5xl font-bold">
                Movie rentals on Prime Video
              </h1>

              <p className="text-xl font-semibold">
                Early Access to new movies, before digital subscription
              </p>

              <button
                className="px-6 cursor-pointer py-4 hover:scale-105 hover:transition 
                                 hover:duration-200 hover:text-gray-500 text-xl bg-white text-black 
                                 rounded-md font-semibold"
              >
                Rent now
              </button>
            </div>
          </div>

          <img
            src={second}
            alt="second poster"
            className="absolute right-0 top-17 h-full w-auto object-cover"
          />
        </div>
      </div>
      {/*
    THIRD HERO SECTION WITH SUBSCRIPTIONS */}
<div className="w-full bg-black py-20 px-14 text-white flex gap-16">
  
  {/* LEFT TEXT */}
  <div className="w-1/2">
    <h1 className="text-5xl font-bold mb-6 leading-tight">
      Your favorite subscriptions <br /> all in one place
    </h1>

    <p className="text-lg text-white/100 font-semibold">
      Customers can subscribe to get access to a variety of premium and
      specialty content, easily accessible within the Prime Video app.
    </p>
  </div>

  {/* RIGHT GRID OF IMAGES */}
  <div className="w-1/2 grid grid-cols-3 gap-[2px]">

    {subscriptionImages.map((img, i) => (
      <div
        key={i}
        className="w-full h-auto p-[2px]"
      >
        <img
          src={img}
          alt=""
          className="object-contain rounded-xl shadow-sm hover:shadow-white cursor-pointer"/>
      </div>
    ))}
  </div>
</div>

    <Footer/>


      <Outlet />
    </div>
  );
};

export default Home;



