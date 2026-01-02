import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../Navbar.jsx";
import TvshowsRow from "./TvshowsRow.jsx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdInfoOutline } from "react-icons/md";
import TopTenTvRow from "./TopTenTvRow.jsx";
import primefooter from "../../../../assets/Home/primefooter.png";

/* ---------- HERO ASSETS ---------- */
import falloutbanner from "../../../../assets/TvShows/falloutbanner.jpeg";
import fallouttitle from "../../../../assets/TvShows/fallouttitle.png";
import common from "../../../../assets/TvShows/common.png";

import fourbanner from "../../../../assets/TvShows/fourbanner.jpeg";
import fourtitle from "../../../../assets/TvShows/fourtitle.png";

import oppobanner from "../../../../assets/TvShows/oppobanner.jpeg";
import oppotitle from "../../../../assets/TvShows/oppotitle.png";

import maxbanner from "../../../../assets/TvShows/maxbanner.jpeg";
import maxtitle from "../../../../assets/TvShows/maxtitle.png";

import surebanner from "../../../../assets/TvShows/surebanner.jpeg";
import suretitle from "../../../../assets/TvShows/suretitle.png";

import familymanbanner from "../../../../assets/TvShows/familymanbanner.jpeg";
import familymantitle from "../../../../assets/TvShows/familymantitle.png";

import dobanner from "../../../../assets/TvShows/dobanner.jpeg";
import dotitle from "../../../../assets/TvShows/dotitle.png";

import wolfbanner from "../../../../assets/TvShows/wolfbanner.jpeg";
import wolftitle from "../../../../assets/TvShows/wolftitle.png";

/* Row-1 Assets */
import cimg1 from "../../../../assets/TvShows/Row1/cimg1.jpg";
import cimg2 from "../../../../assets/TvShows/Row1/cimg2.jpg";
import cimg3 from "../../../../assets/TvShows/Row1/cimg3.png";
import cimg4 from "../../../../assets/TvShows/Row1/cimg4.jpg";
import cimg5 from "../../../../assets/TvShows/Row1/cimg5.jpg";
import cimg6 from "../../../../assets/TvShows/Row1/cimg6.jpg";
import cimg7 from "../../../../assets/TvShows/Row1/cimg7.jpg";
import cimg8 from "../../../../assets/TvShows/Row1/cimg8.jpg";
import cimg9 from "../../../../assets/TvShows/Row1/cimg9.jpg";
import cimg10 from "../../../../assets/TvShows/Row1/cimg10.png";
import cimg11 from "../../../../assets/TvShows/Row1/cimg11.png";
import cimg12 from "../../../../assets/TvShows/Row1/cimg12.png";
import cimg13 from "../../../../assets/TvShows/Row1/cimg13.png";
import cimg14 from "../../../../assets/TvShows/Row1/cimg14.png";
import cimg15 from "../../../../assets/TvShows/Row1/cimg15.png";
import cimg16 from "../../../../assets/TvShows/Row1/cimg16.png";
import cimg17 from "../../../../assets/TvShows/Row1/cimg17.jpg";
import cimg18 from "../../../../assets/TvShows/Row1/cimg18.jpg";

/* Row-2 Assets */
import dimg1 from "../../../../assets/TvShows/Row2/dimg1.png";
import dimg2 from "../../../../assets/TvShows/Row2/dimg2.jpg";
import dimg3 from "../../../../assets/TvShows/Row2/dimg3.jpg";
import dimg4 from "../../../../assets/TvShows/Row2/dimg4.jpg";
import dimg5 from "../../../../assets/TvShows/Row2/dimg5.png";
import dimg6 from "../../../../assets/TvShows/Row2/dimg6.jpg";
import dimg7 from "../../../../assets/TvShows/Row2/dimg7.jpg";
import dimg8 from "../../../../assets/TvShows/Row2/dimg8.jpg";
import dimg9 from "../../../../assets/TvShows/Row2/dimg9.jpg";

/* Row-3 Assets */
import eimg1 from "../../../../assets/TvShows/Row3/eimg1.jpg";
import eimg2 from "../../../../assets/TvShows/Row3/eimg2.jpg";
import eimg3 from "../../../../assets/TvShows/Row3/eimg3.png";
import eimg4 from "../../../../assets/TvShows/Row3/eimg4.png";
import eimg5 from "../../../../assets/TvShows/Row3/eimg5.jpg";
import eimg6 from "../../../../assets/TvShows/Row3/eimg6.jpg";
import eimg7 from "../../../../assets/TvShows/Row3/eimg7.jpg";
import eimg8 from "../../../../assets/TvShows/Row3/eimg8.jpg";
import eimg9 from "../../../../assets/TvShows/Row3/eimg9.jpg";
import eimg10 from "../../../../assets/TvShows/Row3/eimg10.jpg";
import eimg11 from "../../../../assets/TvShows/Row3/eimg11.jpg";
import eimg12 from "../../../../assets/TvShows/Row3/eimg12.jpg";
import eimg13 from "../../../../assets/TvShows/Row3/eimg13.jpg";
import eimg14 from "../../../../assets/TvShows/Row3/eimg14.jpg";
import eimg15 from "../../../../assets/TvShows/Row3/eimg15.jpg";


/* ---------- HERO DATA ---------- */
const heroSlides = [
  {
    banner: falloutbanner,
    titleImg: fallouttitle,
    stamp: common,
    description:
      "A courageous boy confronts his fears and uncovers a hidden truth that changes his village forever.",
    rank: "#3 in India",
    membershipText: "Watch with a Prime membership",
    rating: "U/A 16+",
  },
  {
    banner: fourbanner,
    titleImg: fourtitle,
    stamp: common,
    description:
      "A courageous boy confronts his fears and uncovers a hidden truth that changes his village forever.",
    rank: "#1 in India",
    membershipText: "Watch with a Prime membership",
    rating: "U/A 16+",
  },
  {
    banner: surebanner,
    titleImg: suretitle,
    stamp: common,
    description:
      "A courageous boy confronts his fears and uncovers a hidden truth that changes his village forever.",
    rank: "#2 in India",
    membershipText: "Watch with a Prime membership",
    rating: "U/A 16+",
  },
  {
    banner: familymanbanner,
    titleImg: familymantitle,
    stamp: common,
    description:
      "A courageous boy confronts his fears and uncovers a hidden truth that changes his village forever.",
    rank: "#4 in India",
    membershipText: "Watch with a Prime membership",
    rating: "U/A 16+",
  },
  {
    banner: maxbanner,
    titleImg: maxtitle,
    stamp: common,
    description:
      "A courageous boy confronts his fears and uncovers a hidden truth that changes his village forever.",
    rank: "#5 in India",
    membershipText: "Watch with a Prime membership",
    rating: "U/A 16+",
  },
  {
    banner: dobanner,
    titleImg: dotitle,
    stamp: common,
    description:
      "A courageous boy confronts his fears and uncovers a hidden truth that changes his village forever.",
    rank: "#7 in India",
    membershipText: "Watch with a Prime membership",
    rating: "U/A 16+",
  },
  {
    banner: wolfbanner,
    titleImg: wolftitle,
    stamp: common,
    description:
      "A courageous boy confronts his fears and uncovers a hidden truth that changes his village forever.",
    rank: "#8 in India",
    membershipText: "Watch with a Prime membership",
    rating: "U/A 16+",
  },
  {
    banner: oppobanner,
    titleImg: oppotitle,
    stamp: "",
    description:
      "A courageous boy confronts his fears and uncovers a hidden truth that changes his village forever.",
    rank: "",
    membershipText: "Watch with a Prime membership",
  },
];

/* ---------- ROW DATA ---------- */
const Row1 = [
  {
    image: cimg1,
    title: "Paatal Lok",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg2,
    title: "Bandish Bandits",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg3,
    title: "Mizapur",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg4,
    title: "Panchayaat",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg5,
    title: "Dupaiya",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg6,
    title: "Gram Chikitsalay",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg7,
    title: "Angry Young Men",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg8,
    title: "Call me Bae",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg9,
    title: "Khauf",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg10,
    title: "Mumbai Diaries",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg11,
    title: "The Family Man",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg12,
    title: "Cinema Marte Dum Tak",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg13,
    title: "The Forgotten Army",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg14,
    title: "Into the Shadows",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg15,
    title: "Dahaad",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg16,
    title: "Paatal lok",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg17,
    title: "Jubliee",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg18,
    title: "Pushpavali",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
];

{
  /* Row-2 */
}

const Row2 = [
  {
    image: dimg1,
    title: "Surely Tommorow",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: dimg2,
    title: "The 100",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: dimg3,
    title: "FBI",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: dimg4,
    title: "NCIS",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: dimg5,
    title: "Fallout",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: dimg6,
    title: "Maxton Hall",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: dimg7,
    title: "The Family Man",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: dimg8,
    title: "Two Much With Kajol",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: dimg9,
    title: "Four Shots",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg1,
    title: "Paatal Lok",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg4,
    title: "Panchayaat",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg5,
    title: "Dupaiya",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg6,
    title: "Gram Chikitsalay",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: dimg7,
    title: "The Family Man",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg8,
    title: "Call me Bae",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg11,
    title: "The Family Man",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg13,
    title: "The Forgotten Army",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: cimg17,
    title: "Jubilee",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
];

{
  /* Row-3 */
}
const Row3 = [
  {
    image: eimg1,
    title: "Pokemon",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: eimg2,
    title: "Friends",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: eimg3,
    title: "Mr.Bean",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: eimg4,
    title: "Rasbhari",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: eimg5,
    title: "Bandish Bandits",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: eimg6,
    title: "Do You Wanna Partners",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: eimg7,
    title: "Kumari Srimathi",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: eimg8,
    title: "Aspirants",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: eimg9,
    title: "The 100",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: eimg10,
    title: "OC",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: eimg11,
    title: "One Tree Hill",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: eimg12,
    title: "The Flash",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: eimg13,
    title: "SuperNatural",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: eimg14,
    title: "SakthiMaan",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
  {
    image: eimg15,
    title: "Two and a Half Men",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description:
      "Survivors emerge from underground vaults into a brutal post-apocalyptic world.",
  },
];

// Row 4
const Row4 = [
  {
    image: cimg1,
    title: "Paatal Lok",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "An epic adventure unfolds.",
  },
  {
    image: cimg5,
    title: "Duphiya",
    year: "2023",
    seasons: "Season 2",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Uncover the untold stories.",
  },
  {
    image: dimg3,
    title: "FBI",
    year: "2022",
    seasons: "Season 1",
    rating: "U/A 13+",
    watchText: "Watch with Prime",
    description: "City life, drama, and suspense.",
  },
  {
    image: eimg7,
    title: "Kumari Srimathi",
    year: "2024",
    seasons: "Season 3",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Survivors fight against all odds.",
  },
  {
    image: cimg10,
    title: "Mumbai Diaries",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Mystery and thrill at every turn.",
  },
  {
    image: dimg1,
    title: "Surely Tommorow",
    year: "2021",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Journey through dangerous terrains.",
  },
  {
    image: eimg12,
    title: "The Flash",
    year: "2022",
    seasons: "Season 2",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Who can survive the darkest secrets?",
  },
  {
    image: cimg2,
    title: "Bandish Bandits",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "A journey into the unknown.",
  },
  {
    image: dimg5,
    title: "Fallout",
    year: "2023",
    seasons: "Season 2",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Secrets everyone wants to hide.",
  },
  {
    image: eimg1,
    title: "Pokemon",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Darkness falls across the city.",
  },
  {
    image: cimg7,
    title: "Angry Young Men",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 13+",
    watchText: "Watch with Prime",
    description: "Time travel and hidden destinies.",
  },
  {
    image: dimg9,
    title: "Four Shots",
    year: "2022",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "What happens when no one is listening?",
  },
  {
    image: eimg5,
    title: "Bandish Bandits",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Freedom comes at a cost.",
  },
  {
    image: cimg12,
    title: "Cinema Marte Dum Tak",
    year: "2023",
    seasons: "Season 2",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Everyone has a secret to hide.",
  },
  {
    image: eimg15,
    title: "Two and a Half Men",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "The ultimate battle begins.",
  },
];

// Row 5
const Row5 = [
  {
    image: dimg2,
    title: "The 100",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "When reality breaks, who survives?",
  },
  {
    image: cimg3,
    title: "Mizapur",
    year: "2022",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Nighttime mysteries unravel.",
  },
  {
    image: eimg3,
    title: "Mr.Bean",
    year: "2024",
    seasons: "Season 2",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Survival in icy wilderness.",
  },
  {
    image: cimg4,
    title: "Panchaayat",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "A quest full of secrets.",
  },
  {
    image: dimg6,
    title: "Maxton Hall",
    year: "2022",
    seasons: "Season 1",
    rating: "U/A 13+",
    watchText: "Watch with Prime",
    description: "The city hides dark secrets.",
  },
  {
    image: eimg8,
    title: "Aspirants",
    year: "2024",
    seasons: "Season 3",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Time travel and destiny collide.",
  },
  {
    image: cimg8,
    title: "Call me Bae",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Nature tells its secrets.",
  },
  {
    image: dimg4,
    title: "NCIS",
    year: "2022",
    seasons: "Season 2",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Danger lurks in the shadows.",
  },
  {
    image: eimg2,
    title: "Friends",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Darkness engulfs the city.",
  },
  {
    image: cimg6,
    title: "Gram Chikitsalay",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Hope shines through challenges.",
  },
  {
    image: dimg7,
    title: "The Family Man",
    year: "2022",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Freedom comes at a cost.",
  },
  {
    image: eimg10,
    title: "OC",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Legends fall but hope rises.",
  },
  {
    image: cimg9,
    title: "Khauf",
    year: "2023",
    seasons: "Season 2",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Past secrets haunt the present.",
  },
  {
    image: dimg8,
    title: "Two Much",
    year: "2022",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Power and betrayal collide.",
  },
  {
    image: eimg12,
    title: "The Flash",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Icy secrets revealed.",
  },
];

// Row 6
const Row6 = [
  {
    image: cimg11,
    title: "The Family Man",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Silence hides danger.",
  },
  {
    image: dimg9,
    title: "Four Shots",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Flames of destiny rise.",
  },
  {
    image: eimg6,
    title: "Do You Wanna Partner",
    year: "2022",
    seasons: "Season 2",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Mystery in the darkness.",
  },
  {
    image: cimg13,
    title: "The Forgotten Army",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Darkness slowly takes over.",
  },
  {
    image: dimg1,
    title: "Surely Tommorow",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Evening stories come alive.",
  },
  {
    image: eimg9,
    title: "The 100",
    year: "2022",
    seasons: "Season 2",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Journeys to the unknown.",
  },
  {
    image: cimg14,
    title: "Into The Shadows",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Danger lurks everywhere.",
  },
  {
    image: dimg3,
    title: "FBI",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "The night speaks secrets.",
  },
  {
    image: eimg4,
    title: "Rasbhari",
    year: "2022",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Cold memories awaken.",
  },
  {
    image: cimg15,
    title: "Dahaad",
    year: "2023",
    seasons: "Season 2",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Secrets burning inside.",
  },
  {
    image: dimg2,
    title: "The 100",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "The journey is unpredictable.",
  },
  {
    image: eimg8,
    title: "Aspirants",
    year: "2022",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Darkness descends slowly.",
  },
  {
    image: cimg16,
    title: "Paatal Lok",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Reflections of a hidden past.",
  },
  {
    image: dimg5,
    title: "Fallout",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "An unending journey begins.",
  },
  {
    image: eimg14,
    title: "Sakthimaan",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Memories slowly disappear.",
  },
];

// Row 7
const Row7 = [
  {
    image: cimg17,
    title: "Jubilee",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Hunt begins at night.",
  },
  {
    image: dimg6,
    title: "Maxton Hall",
    year: "2023",
    seasons: "Season 2",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Secrets emerge at dusk.",
  },
  {
    image: eimg1,
    title: "Pokemon",
    year: "2022",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Icy mysteries unfold.",
  },
  {
    image: cimg18,
    title: "Pushpavali",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "The unknown awaits.",
  },
  {
    image: dimg8,
    title: "Two much with Kajol",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Red skies and secrets.",
  },
  {
    image: eimg5,
    title: "Bandish Bandits",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Quiet before the storm.",
  },
  {
    image: cimg11,
    title: "The Family Man",
    year: "2022",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Dark whispers everywhere.",
  },
  {
    image: dimg9,
    title: "Four Shots",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Night slowly fades away.",
  },
  {
    image: eimg3,
    title: "Mr.Bean",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Evening secrets revealed.",
  },
  {
    image: cimg7,
    title: "Angry Young Men",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Time conceals many secrets.",
  },
  {
    image: dimg7,
    title: "The Family Man",
    year: "2022",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Stories of the night.",
  },
  {
    image: eimg6,
    title: "Do You Wanna Partner",
    year: "2024",
    seasons: "Season 2",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Endless darkness surrounds.",
  },
  {
    image: cimg9,
    title: "Khauf",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Cold mysteries untold.",
  },
  {
    image: dimg4,
    title: "NCIS",
    year: "2022",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "A red dawn approaches.",
  },
  {
    image: eimg12,
    title: "The Flash",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Shadows in the twilight.",
  },
];

// Row 8
const Row8 = [
  {
    image: eimg9,
    title: "The 100",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Secrets revealed after dark.",
  },
  {
    image: cimg13,
    title: "The Forgotten Army",
    year: "2024",
    seasons: "Season 2",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Passions burning in secret.",
  },
  {
    image: dimg5,
    title: "Fallout",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Darkness falls everywhere.",
  },
  {
    image: eimg15,
    title: "Two and a Half Men",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Icy lands and mysteries.",
  },
  {
    image: cimg15,
    title: "Dahaad",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Whispers echo in the night.",
  },
  {
    image: dimg7,
    title: "The Family Man",
    year: "2022",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Shadows grow at dusk.",
  },
  {
    image: eimg13,
    title: "SuperNatural",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Darkness never ends.",
  },
  {
    image: cimg16,
    title: "Paatal Lok",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Red skies cover the land.",
  },
  {
    image: dimg2,
    title: "The 100",
    year: "2022",
    seasons: "Season 2",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Secrets unfold at dusk.",
  },
  {
    image: eimg2,
    title: "Friends",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Ice and darkness combine.",
  },
  {
    image: cimg17,
    title: "Jubilee",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Calm before the storm.",
  },
  {
    image: dimg6,
    title: "Maxton Hall",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Red light, dark shadows.",
  },
  {
    image: eimg7,
    title: "Kumari Srimathi",
    year: "2023",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Endless darkness.",
  },
  {
    image: cimg12,
    title: "Cinema Marte Dum Tak",
    year: "2022",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Light slowly fades away.",
  },
  {
    image: dimg8,
    title: "Two much with Kojol",
    year: "2024",
    seasons: "Season 1",
    rating: "U/A 16+",
    watchText: "Watch with Prime",
    description: "Blood-red mysteries.",
  },
];

const TvShows = () => {
  const [index, setIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  useEffect(() => {
    document.title = "Prime Video – TV Shows";
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <div className="relative w-full h-[80vh] overflow-hidden">
        <div
          ref={slideRef}
          className="flex h-full transition-transform duration-700 ease-in-out"
        >
          {heroSlides.map((slide, i) => (
            <div key={i} className="min-w-full h-full relative">
              <img src={slide.banner} className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

              <div className="absolute bottom-8 left-16 max-w-xl space-y-3">
                {slide.stamp && <img src={slide.stamp} className="w-16" />}
                {slide.titleImg && (
                  <img src={slide.titleImg} className="w-[320px]" />
                )}

                <span className="text-green-400 font-bold">{slide.rank}</span>
                <p className="text-gray-300">{slide.description}</p>

                <div className="flex gap-4">
                  <button className="bg-[#33373C] hover:bg-white hover:text-black cursor-pointer transition-all duration-300 text-xl px-6 py-2 rounded font-bold">
                    Join Prime <br /> Watch Now
                  </button>
                  <button className="bg-[#33373C] text-2xl p-6 rounded-full hover:bg-white hover:text-black hover:scale-110 cursor-pointer transition-all duration-300">
                    <IoMdAdd size={30} />
                  </button>
                  <button className="bg-[#33373C] p-6 text-2xl hover:bg-white hover:text-black hover:scale-110 cursor-pointer transition-all duration-300 rounded-full">
                    <MdInfoOutline size={30} />
                  </button>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <FaShoppingBag className="text-yellow-400" />
                    {slide.membershipText}
                  </div>
                  <span className="bg-[#33373D] relative left-200 font-bold px-2 rounded">
                    {slide.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*  conditional left arrow */}
        {index > 0 && (
          <button
            onClick={() =>
              setIndex((index - 1 + heroSlides.length) % heroSlides.length)
            }
            className="absolute left-6 top-1/2 -translate-y-1/2"
          >
            <FaChevronLeft size={32} />
          </button>
        )}

        <button
          onClick={() => setIndex((index + 1) % heroSlides.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2"
        >
          <FaChevronRight size={32} />
        </button>

        {/*  CENTER DOT TRACKER */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                index === i ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      <TvshowsRow title="Filmfare OTT Awards Winners" shows={Row1} />
      <TvshowsRow title="Latest TV" shows={Row2} />
      <TvshowsRow title="Throwback TV" shows={Row3} />
      <TvshowsRow title="Latest TV" shows={Row4} />
      <TvshowsRow title="Drama TV" shows={Row5} />
      <TvshowsRow title="Top-rated TV shows on IMDB" shows={Row6} />
      <TvshowsRow title="Crime TV" shows={Row7} />
      <TvshowsRow title="Mystery & Thriller TV" shows={Row8} />
      <TopTenTvRow title="Top 10 TV Shows in India" data={Row1} />

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

export default TvShows;
