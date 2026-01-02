import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar.jsx";
import { NavLink } from "react-router-dom";

import { IoMdAdd } from "react-icons/io";
import { MdInfoOutline } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { FaMicrophoneSlash, FaMicrophone } from "react-icons/fa";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MoviesRow from "./MoviesRow.jsx";
import primefooter from "../../../../assets/Home/primefooter.png";

/* ===== LOCAL IMAGES ===== */
import mi2Banner from "../../../../assets/Movies/Banner/mi2banner.jpeg";
import mititle from "../../../../assets/Movies/Banner/mititle.png";

import jatharaBanner from "../../../../assets/Movies/Banner/jatharabanner.jpeg";
import jatharatitle from "../../../../assets/Movies/Banner/jatharatitle.png";

import thamabanner from "../../../../assets/Movies/Banner/thamabanner.jpeg";
import thamatitle from "../../../../assets/Movies/Banner/thamatitle.png";

import tellbanner from "../../../../assets/Movies/Banner/tellbanner.jpeg";
import telltitle from "../../../../assets/Movies/Banner/telltitle.png";

import togetherbanner from "../../../../assets/Movies/Banner/togetherbanner.jpeg";
import togethertitle from "../../../../assets/Movies/Banner/togethertitle.png";

import bratbanner from "../../../../assets/Movies/Banner/bratbanner.jpeg";
import brattitle from "../../../../assets/Movies/Banner/brattitle.png";

import panchbanner from "../../../../assets/Movies/Banner/panchbanner.jpeg";
import panchtitle from "../../../../assets/Movies/Banner/panchtitle.png";

import a12banner from "../../../../assets/Movies/Banner/a12banner.jpeg";
import a12title from "../../../../assets/Movies/Banner/a12title.png";

import mervbanner from "../../../../assets/Movies/Banner/mervbanner.jpeg";
import mervtitle from "../../../../assets/Movies/Banner/mervtitle.png";

import kantarabanner from "../../../../assets/Movies/Banner/kantarabanner.jpeg";
import kantaratitle from "../../../../assets/Movies/Banner/kantaratitle.png";

import stampImg from "../../../../assets/Movies/Banner/common-stamp.png.png";

/* Video Preview */
import thammavideo from "../../../../assets/Movies/Preview/thammavideo.mp4";
import tellvideo from "../../../../assets/Movies/Preview/tellvideo.mp4";
import togethervideo from "../../../../assets/Movies/Preview/togethervideo.mp4";
import jatharavideo from "../../../../assets/Movies/Preview/jatharavideo.mp4";
import mervvideo from "../../../../assets/Movies/Preview/mervvideo.mp4";
import kanataravideo from "../../../../assets/Movies/Preview/kantaravideo.mp4";
import mivideo from "../../../../assets/Movies/Preview/mivideo.mp4";
import bratvideo from "../../../../assets/Movies/Preview/bratvideo.mp4";
import panchvideo from "../../../../assets/Movies/Preview/panchvideo.mp4";
import railwayvideo from "../../../../assets/Movies/Preview/railwayvideo.mp4";

/* Row1-a images import */
import aimg1 from "../../../../assets/Movies/leaves/Row1/aimg1.jpg";
import aimg2 from "../../../../assets/Movies/leaves/Row1/aimg2.png";
import aimg3 from "../../../../assets/Movies/leaves/Row1/aimg3.png";
import aimg4 from "../../../../assets/Movies/leaves/Row1/aimg4.jpg";
import aimg5 from "../../../../assets/Movies/leaves/Row1/aimg5.jpg";
import aimg6 from "../../../../assets/Movies/leaves/Row1/aimg6.jpg";
import aimg7 from "../../../../assets/Movies/leaves/Row1/aimg7.jpg";
import aimg8 from "../../../../assets/Movies/leaves/Row1/aimg8.jpg";
import aimg9 from "../../../../assets/Movies/leaves/Row1/aimg9.png";
import aimg10 from "../../../../assets/Movies/leaves/Row1/aimg10.jpg";
import aimg11 from "../../../../assets/Movies/leaves/Row1/aimg11.jpg";
import aimg12 from "../../../../assets/Movies/leaves/Row1/aimg12.jpg";
import aimg13 from "../../../../assets/Movies/leaves/Row1/aimg13.jpg";
import aimg14 from "../../../../assets/Movies/leaves/Row1/aimg14.jpg";
import aimg15 from "../../../../assets/Movies/leaves/Row1/aimg15.jpg";
import aimg16 from "../../../../assets/Movies/leaves/Row1/aimg16.png";
import aimg17 from "../../../../assets/Movies/leaves/Row1/aimg17.jpg";
import aimg18 from "../../../../assets/Movies/leaves/Row1/aimg18.jpg";
import aimg19 from "../../../../assets/Movies/leaves/Row1/aimg19.jpg";
import aimg20 from "../../../../assets/Movies/leaves/Row1/aimg20.jpg";
import aimg21 from "../../../../assets/Movies/leaves/Row1/aimg21.png";
import aimg22 from "../../../../assets/Movies/leaves/Row1/aimg22.png";
import aimg23 from "../../../../assets/Movies/leaves/Row1/aimg23.jpg";
import aimg24 from "../../../../assets/Movies/leaves/Row1/aimg24.jpg";
import aimg25 from "../../../../assets/Movies/leaves/Row1/aimg25.png";

/* Row1-b images import */
import bimg1 from "../../../../assets/Movies/leaves/Row2/bimg1.jpg";
import bimg2 from "../../../../assets/Movies/leaves/Row2/bimg2.jpg";
import bimg3 from "../../../../assets/Movies/leaves/Row2/bimg3.jpg";
import bimg4 from "../../../../assets/Movies/leaves/Row2/bimg4.jpg";
import bimg5 from "../../../../assets/Movies/leaves/Row2/bimg5.jpg";
import bimg6 from "../../../../assets/Movies/leaves/Row2/bimg6.jpg";
import bimg7 from "../../../../assets/Movies/leaves/Row2/bimg7.jpg";
import bimg8 from "../../../../assets/Movies/leaves/Row2/bimg8.jpg";
import bimg9 from "../../../../assets/Movies/leaves/Row2/bimg9.jpg";
import bimg10 from "../../../../assets/Movies/leaves/Row2/bimg10.jpg";
import bimg11 from "../../../../assets/Movies/leaves/Row2/bimg11.jpg";
import bimg12 from "../../../../assets/Movies/leaves/Row2/bimg12.jpg";
import bimg13 from "../../../../assets/Movies/leaves/Row2/bimg13.png";
import bimg14 from "../../../../assets/Movies/leaves/Row2/bimg14.png";
import bimg15 from "../../../../assets/Movies/leaves/Row2/bimg15.png";
import bimg16 from "../../../../assets/Movies/leaves/Row2/bimg16.jpg";
import bimg17 from "../../../../assets/Movies/leaves/Row2/bimg17.jpg";
import bimg18 from "../../../../assets/Movies/leaves/Row2/bimg18.jpg";
import bimg19 from "../../../../assets/Movies/leaves/Row2/bimg19.jpg";
import bimg20 from "../../../../assets/Movies/leaves/Row2/bimg20.jpg";
import bimg21 from "../../../../assets/Movies/leaves/Row2/bimg21.jpg";
import bimg22 from "../../../../assets/Movies/leaves/Row2/bimg22.jpg";
import bimg23 from "../../../../assets/Movies/leaves/Row2/bimg23.jpg";
import bimg24 from "../../../../assets/Movies/leaves/Row2/bimg24.png";
import bimg25 from "../../../../assets/Movies/leaves/Row2/bimg25.jpg";

/* Row-c images import */
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
import cimg11 from "../../../../assets/Movies/leaves/Row3/cimg11.jpg";

import SpotlightRow from "./SpotlightRow.jsx";
import TopTenRow from "./TopTenRow.jsx";

const Movies = () => {
  useEffect(() => {
    document.title = "Prime Video Movies – rental or buy";
  }, []);

  const slides = [
    {
      banner: thamabanner,
      video: thammavideo,
      titleImg: thamatitle,
      stamp: stampImg,
      description:
        "A courageous boy confronts his fears and uncovers a hidden truth that changes his village forever.",
      rank: "#1 in India",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 16+",
    },
    {
      banner: tellbanner,
      video: tellvideo,
      titleImg: telltitle,
      stamp: stampImg,
      description:
        "A shy young musician and a free-spirited girl form a quiet, tender bond that helps them face love, loss, and self-discovery.",
      rank: "#5 in Drama Movies",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 13+",
    },
    {
      banner: mi2Banner,
      titleImg: mititle,
      video: mivideo,
      stamp: stampImg,
      description:
        "Our lives are the sum of our choices.\nTom Cruise is Ethan Hunt in Mission: Impossible - The Final Reckoning.",
      rank: "",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 16+",
    },
    {
      banner: jatharaBanner,
      titleImg: jatharatitle,
      video: jatharavideo,
      stamp: stampImg,
      description:
        "Set in Kerala's historic temple, this supernatural thriller\nties folklore with modern skepticism.",
      rank: "#9 in India",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 13+",
    },
    {
      banner: togetherbanner,
      video: togethervideo,
      titleImg: togethertitle,
      stamp: stampImg,
      description:
        "A lonely man and a free-spirited woman form an unexpected bond, discovering love and healing through their shared struggles",
      rank: "#4 in Romance Movies",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 13+",
    },
    {
      banner: bratbanner,
      video: bratvideo,
      titleImg: brattitle,
      stamp: stampImg,
      description:
        "A mischievous boy’s playful antics spiral out of control, teaching him the value of responsibility.",
      rank: "#7 in India",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 16+",
    },
    {
      banner: panchbanner,
      video: panchvideo,
      titleImg: panchtitle,
      stamp: stampImg,
      description:
        "Five strangers’ destinies collide in a small village, uncovering secrets that could change their lives forever.",
      rank: "#9 in action Movies",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 13+",
    },
    {
      banner: a12banner,
      video: railwayvideo,
      titleImg: a12title,
      stamp: stampImg,
      description:
        "A group of children from 12 Railway Colony uncover a hidden secret that changes their lives forever.",
      rank: "#7 in India",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 16+",
    },
    {
      banner: mervbanner,
      video: mervvideo,
      titleImg: mervtitle,
      stamp: stampImg,
      description:
        "A simple village man, Santha, faces challenges with honesty and courage, ultimately bringing justice and harmony to his community.",
      rank: "#9 in Romance Movies",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 16+",
    },
    {
      banner: kantarabanner,
      video: kanataravideo,
      titleImg: kantaratitle,
      stamp: stampImg,
      description:
        "A young villager, Shiva, defends his ancestral land and traditions against greedy forces, blending folklore, nature, and raw human courage.",
      rank: "#3 in India",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 16+",
    },
  ];

  {
    /* ROW DATA-a */
  }

  const Row1 = [
    {
      image: aimg1,
      title: "Mission Impossible The Final reckoning",
      year: 2025,
      duration: "2h 30m",
      rating: "U/A 16+",
      story: "Ethan Hunt embarks on his most dangerous mission yet.",
      watchText: "Watch Now",
    },
    {
      image: aimg2,
      title: "My Fault",
      year: 2024,
      duration: "2h 10m",
      rating: "U/A 16+",
      story: "A young musician and a free-spirited girl form a tender bond.",
      watchText: "Watch Now",
    },
    {
      image: aimg3,
      title: "A Working Man",
      year: 2022,
      duration: "1h 10m",
      rating: "U/A 16+",
      story:
        "A simple village man, Santha, faces challenges with honesty and courage.",
      watchText: "Watch Now",
    },
    {
      image: aimg4,
      title: "After",
      year: 2025,
      duration: "2h 05m",
      rating: "A",
      story:
        "A young couple's passionate romance is tested by secrets from their past.",
      watchText: "Watch Now",
    },
    {
      image: aimg5,
      title: "Red One",
      year: 2024,
      duration: "1h 50m",
      rating: "U/A 13+",
      story:
        "A group of unlikely heroes must save the world from an ancient evil.",
      watchText: "Watch Now",
    },
    {
      image: aimg6,
      title: "Spider-Man: No Way Home",
      year: 2023,
      duration: "2h 20m",
      rating: "U/A 13+",
      story: "Peter Parker navigates the challenges of being Spider-Man.",
      watchText: "Watch Now",
    },
    {
      image: aimg7,
      title: "Babygirl",
      year: 2022,
      duration: "1h 20m",
      rating: "U/A 15+",
      story: "A heartfelt journey of a young girl's journey.",
      watchText: "Watch Now",
    },
    {
      image: aimg8,
      title: "Your Fault",
      year: 2021,
      duration: "1h 30m",
      rating: "A",
      story: "A gripping drama about love and redemption.",
      watchText: "Watch Now",
    },
    {
      image: aimg9,
      title: "How to have sex",
      year: 2020,
      duration: "1h 20m",
      rating: "U/A 16+",
      story: "A candid exploration of relationships and intimacy.",
      watchText: "Watch Now",
    },
    {
      image: aimg10,
      title: "Our Fault",
      year: 2022,
      duration: "2h 10m",
      rating: "U/A 16+",
      story: "A young musician and a free-spirited girl form a tender bond.",
      watchText: "Watch Now",
    },
    {
      image: aimg11,
      title: "IT",
      year: 2024,
      duration: "2h 08m",
      rating: "U/A 16+",
      story:
        "A group of kids face their fears to confront a terrifying entity.",
      watchText: "Watch Now",
    },
    {
      image: aimg12,
      title: "The Withch",
      year: 2020,
      duration: "1h 30m",
      rating: "U/A 16+",
      story:
        "A family in 1630s New England encounters dark forces in the woods.",
      watchText: "Watch Now",
    },
    {
      image: aimg13,
      title: "I am Legend",
      year: 2009,
      duration: "1h 30m",
      rating: "A",
      story: "A scientist in a post-apocalyptic world fights for survival.",
      watchText: "Watch Now",
    },
    {
      image: aimg14,
      title: "The Conjuring 2",
      year: 2019,
      duration: "2h 10m",
      rating: "U/A 16+",
      story:
        "Paranormal investigators help a family terrorized by a dark presence.",
      watchText: "Watch Now",
    },
    {
      image: aimg15,
      title: "She Rides Shotgun",
      year: 2023,
      duration: "2h 00m",
      rating: "U/A 16+",
      story:
        "A young woman embarks on a cross-country journey to find her estranged father.",
      watchText: "Watch Now",
    },
    {
      image: aimg16,
      title: "The only living boy",
      year: 2025,
      duration: "2h 20m",
      rating: "U/A 16+",
      story:
        "A courageous boy confronts his fears and uncovers a hidden truth.",
      watchText: "Watch Now",
    },
    {
      image: aimg17,
      title: "Good Luck",
      year: 2023,
      duration: "1h 30m",
      rating: "U/A 16+",
      story:
        "A good-hearted man's life takes an unexpected turn after a series of fortunate events.",
      watchText: "Watch Now",
    },
    {
      image: aimg18,
      title: "American Beauty",
      year: 2023,
      duration: "1h 30m",
      rating: "U/A 16+",
      story:
        "A good-hearted man's life takes an unexpected turn after a series of fortunate events.",
      watchText: "Watch Now",
    },
    {
      image: aimg19,
      title: "Jurassic Attack",
      year: 1999,
      duration: "1h 20m",
      rating: "U/A 16+",
      story:
        "A group of scientists face prehistoric dangers on a remote island.",
      watchText: "Watch Now",
    },
    {
      image: aimg20,
      title: "Mission Impossible",
      year: 1998,
      duration: "2h 03m",
      rating: "U/A 16+",
      story: "Ethan Hunt embarks on a high-stakes mission to save the world.",
      watchText: "Watch Now",
    },
    {
      image: aimg21,
      title: "Deep Water",
      year: 2021,
      duration: "2h 10m",
      rating: "U/A 16+",
      story:
        "A married couple's dark secrets lead to a dangerous game of cat and mouse.",
      watchText: "Watch Now",
    },
    {
      image: aimg22,
      title: "Chemical Hearts",
      year: 2018,
      duration: "1h 20m",
      rating: "U/A 16+",
      story:
        "A high school student falls for a new transfer student with a troubled past.",
      watchText: "Watch Now",
    },
    {
      image: aimg23,
      title: "American Pie",
      year: 2024,
      duration: "1h 30m",
      rating: "U/A 16+",
      story:
        "A group of high school kids face their fears to confront a terrifying entity.",
      watchText: "Watch Now",
    },
    {
      image: aimg24,
      title: "No String Attached",
      year: 2025,
      duration: "2h 10m",
      rating: "U/A 16+",
      story:
        "A married couple's dark secrets lead to a dangerous game of cat and mouse.",
      watchText: "Watch Now",
    },
    {
      image: aimg25,
      title: "Ice Road Vegence",
      year: 2025,
      duration: "2h 10m",
      rating: "U/A 16+",
      story:
        "A truck driver embarks on a perilous journey across icy roads to save his kidnapped brother.",
      watchText: "Watch Now",
    },
  ];

  {
    /* ROW DATA-b */
  }
  const Row2 = [
    {
      image: bimg1,
      title: "Dark Knight",
      year: 2008,
      duration: "2h 32m",
      rating: "U/A 13+",
      story:
        "A vigilante battles his inner demons while saving Gotham from chaos.",
      watchText: "Watch Now",
    },
    {
      image: bimg2,
      title: "If you can catch me",
      year: 2009,
      duration: "2h 15m",
      rating: "U/A 16+",
      story:
        "A master thief challenges a detective in a thrilling city-wide chase.",
      watchText: "Watch Now",
    },
    {
      image: bimg3,
      title: "Nuremburg",
      year: 2010,
      duration: "2h 40m",
      rating: "U/A 18+",
      story: "The trial of war criminals exposes dark secrets of humanity.",
      watchText: "Watch Now",
    },
    {
      image: bimg4,
      title: "Kantara",
      year: 2021,
      duration: "2h 25m",
      rating: "U/A 13+",
      story: "A villager discovers ancient powers while defending his land.",
      watchText: "Watch Now",
    },
    {
      image: bimg5,
      title: "KGF Chapter 2",
      year: 2022,
      duration: "2h 50m",
      rating: "U/A 16+",
      story: "A gangster rises to power amidst violence and betrayal.",
      watchText: "Watch Now",
    },
    {
      image: bimg6,
      title: "Gladitor",
      year: 2007,
      duration: "2h 30m",
      rating: "U/A 16+",
      story: "A fallen soldier fights for freedom in the gladiator arena.",
      watchText: "Watch Now",
    },
    {
      image: bimg7,
      title: "Babygirl",
      year: 2011,
      duration: "2h 05m",
      rating: "U/A 13+",
      story: "A young girl discovers strength and courage in a new city.",
      watchText: "Watch Now",
    },
    {
      image: bimg8,
      title: "Thama",
      year: 2008,
      duration: "2h 20m",
      rating: "U/A 16+",
      story: "A mysterious figure shakes up a peaceful village with secrets.",
      watchText: "Watch Now",
    },
    {
      image: bimg9,
      title: "Madharasi",
      year: 2009,
      duration: "2h 18m",
      rating: "U/A 18+",
      story: "A cop takes down a notorious criminal empire in the city.",
      watchText: "Watch Now",
    },
    {
      image: bimg10,
      title: "B.A. Pass",
      year: 2010,
      duration: "1h 55m",
      rating: "U/A 18+",
      story: "A college student falls into a world of seduction and crime.",
      watchText: "Watch Now",
    },
    {
      image: bimg11,
      title: "Your Fault",
      year: 2012,
      duration: "2h 10m",
      rating: "U/A 16+",
      story: "Two strangers' choices collide, changing their lives forever.",
      watchText: "Watch Now",
    },
    {
      image: bimg12,
      title: "Coolie",
      year: 2007,
      duration: "2h 22m",
      rating: "U/A 13+",
      story: "A railway worker fights injustice to protect his family.",
      watchText: "Watch Now",
    },
    {
      image: bimg13,
      title: "A Working Man",
      year: 2013,
      duration: "2h 05m",
      rating: "U/A 16+",
      story:
        "A hardworking man battles corporate corruption to save his livelihood.",
      watchText: "Watch Now",
    },
    {
      image: bimg14,
      title: "B.A. Pass2",
      year: 2014,
      duration: "2h 00m",
      rating: "U/A 18+",
      story: "A sequel revealing deeper secrets of betrayal and ambition.",
      watchText: "Watch Now",
    },
    {
      image: bimg15,
      title: "Bhool Chuk Maaf",
      year: 2015,
      duration: "2h 15m",
      rating: "U/A 13+",
      story: "Old mistakes resurface, challenging love and trust.",
      watchText: "Watch Now",
    },
    {
      image: bimg16,
      title: "Our Fault",
      year: 2016,
      duration: "2h 12m",
      rating: "U/A 16+",
      story: "A couple confronts the consequences of their choices.",
      watchText: "Watch Now",
    },
    {
      image: bimg17,
      title: "Baagi 4",
      year: 2023,
      duration: "2h 40m",
      rating: "U/A 18+",
      story: "An action hero returns to face a new deadly threat.",
      watchText: "Watch Now",
    },
    {
      image: bimg18,
      title: "Param Sudari",
      year: 2007,
      duration: "2h 05m",
      rating: "U/A 13+",
      story: "A woman defies traditions to claim her destiny.",
      watchText: "Watch Now",
    },
    {
      image: bimg19,
      title: "Housefull 5A",
      year: 2022,
      duration: "2h 30m",
      rating: "U/A 13+",
      story: "Comedy ensues when a family reunion goes hilariously wrong.",
      watchText: "Watch Now",
    },
    {
      image: bimg20,
      title: "Kantara A legend chapter-1",
      year: 2021,
      duration: "2h 28m",
      rating: "U/A 16+",
      story: "The legend of a warrior begins with courage and honor.",
      watchText: "Watch Now",
    },
    {
      image: bimg21,
      title: "Brat",
      year: 2010,
      duration: "2h 05m",
      rating: "U/A 13+",
      story: "A rebellious teenager learns life lessons the hard way.",
      watchText: "Watch Now",
    },
    {
      image: bimg22,
      title: "Singham Returns",
      year: 2014,
      duration: "2h 35m",
      rating: "U/A 16+",
      story: "A fearless cop battles corruption to bring justice back.",
      watchText: "Watch Now",
    },
    {
      image: bimg23,
      title: "Maalik",
      year: 2015,
      duration: "2h 20m",
      rating: "U/A 18+",
      story: "A politician fights for the rights of the oppressed.",
      watchText: "Watch Now",
    },
    {
      image: bimg24,
      title: "Coolie",
      year: 2017,
      duration: "2h 22m",
      rating: "U/A 16+",
      story: "A railway worker uncovers a conspiracy threatening his city.",
      watchText: "Watch Now",
    },
    {
      image: bimg25,
      title: "Stree 2",
      year: 2018,
      duration: "2h 10m",
      rating: "U/A 13+",
      story: "A supernatural tale of love, mystery, and revenge continues.",
      watchText: "Watch Now",
    },
  ];

  {
    /* ROW DATA-c order change */
  }

  const Row3 = [
    {
      image: bimg23,
      title: "Maalik",
      year: 2015,
      duration: "2h 20m",
      rating: "U/A 18+",
      story: "A politician fights for the rights of the oppressed.",
      watchText: "Watch Now",
    },
    {
      image: bimg22,
      title: "Singham Returns",
      year: 2014,
      duration: "2h 35m",
      rating: "U/A 16+",
      story: "A fearless cop battles corruption to bring justice back.",
      watchText: "Watch Now",
    },
    {
      image: bimg5,
      title: "KGF Chapter 2",
      year: 2022,
      duration: "2h 50m",
      rating: "U/A 16+",
      story: "A gangster rises to power amidst violence and betrayal.",
      watchText: "Watch Now",
    },
    {
      image: bimg4,
      title: "Kantara",
      year: 2021,
      duration: "2h 25m",
      rating: "U/A 13+",
      story: "A villager discovers ancient powers while defending his land.",
      watchText: "Watch Now",
    },
    {
      image: bimg20,
      title: "Kantara A legend chapter-1",
      year: 2021,
      duration: "2h 28m",
      rating: "U/A 16+",
      story: "The legend of a warrior begins with courage and honor.",
      watchText: "Watch Now",
    },
    {
      image: bimg17,
      title: "Baagi 4",
      year: 2023,
      duration: "2h 40m",
      rating: "U/A 18+",
      story: "An action hero returns to face a new deadly threat.",
      watchText: "Watch Now",
    },
    {
      image: bimg6,
      title: "Gladitor",
      year: 2007,
      duration: "2h 30m",
      rating: "U/A 16+",
      story: "A fallen soldier fights for freedom in the gladiator arena.",
      watchText: "Watch Now",
    },
    {
      image: bimg9,
      title: "Madharasi",
      year: 2009,
      duration: "2h 18m",
      rating: "U/A 18+",
      story: "A cop takes down a notorious criminal empire in the city.",
      watchText: "Watch Now",
    },
    {
      image: bimg12,
      title: "Coolie",
      year: 2007,
      duration: "2h 22m",
      rating: "U/A 13+",
      story: "A railway worker fights injustice to protect his family.",
      watchText: "Watch Now",
    },
    {
      image: bimg24,
      title: "Coolie",
      year: 2017,
      duration: "2h 22m",
      rating: "U/A 16+",
      story: "A railway worker uncovers a conspiracy threatening his city.",
      watchText: "Watch Now",
    },
    {
      image: bimg19,
      title: "Housefull 5A",
      year: 2022,
      duration: "2h 30m",
      rating: "U/A 13+",
      story: "Comedy ensues when a family reunion goes hilariously wrong.",
      watchText: "Watch Now",
    },
    {
      image: bimg25,
      title: "Stree 2",
      year: 2018,
      duration: "2h 10m",
      rating: "U/A 13+",
      story: "A supernatural tale of love, mystery, and revenge continues.",
      watchText: "Watch Now",
    },
    {
      image: bimg3,
      title: "Nuremburg",
      year: 2010,
      duration: "2h 40m",
      rating: "U/A 18+",
      story: "The trial of war criminals exposes dark secrets of humanity.",
      watchText: "Watch Now",
    },
    {
      image: bimg10,
      title: "B.A. Pass",
      year: 2010,
      duration: "1h 55m",
      rating: "U/A 18+",
      story: "A college student falls into a world of seduction and crime.",
      watchText: "Watch Now",
    },
    {
      image: bimg14,
      title: "B.A. Pass2",
      year: 2014,
      duration: "2h 00m",
      rating: "U/A 18+",
      story: "A sequel revealing deeper secrets of betrayal and ambition.",
      watchText: "Watch Now",
    },
    {
      image: bimg15,
      title: "Bhool Chuk Maaf",
      year: 2015,
      duration: "2h 15m",
      rating: "U/A 13+",
      story: "Old mistakes resurface, challenging love and trust.",
      watchText: "Watch Now",
    },
    {
      image: bimg16,
      title: "Our Fault",
      year: 2016,
      duration: "2h 12m",
      rating: "U/A 16+",
      story: "A couple confronts the consequences of their choices.",
      watchText: "Watch Now",
    },
    {
      image: bimg11,
      title: "Your Fault",
      year: 2012,
      duration: "2h 10m",
      rating: "U/A 16+",
      story: "Two strangers' choices collide, changing their lives forever.",
      watchText: "Watch Now",
    },
    {
      image: bimg7,
      title: "Babygirl",
      year: 2011,
      duration: "2h 05m",
      rating: "U/A 13+",
      story: "A young girl discovers strength and courage in a new city.",
      watchText: "Watch Now",
    },
    {
      image: bimg8,
      title: "Thama",
      year: 2008,
      duration: "2h 20m",
      rating: "U/A 16+",
      story: "A mysterious figure shakes up a peaceful village with secrets.",
      watchText: "Watch Now",
    },
    {
      image: bimg18,
      title: "Param Sudari",
      year: 2007,
      duration: "2h 05m",
      rating: "U/A 13+",
      story: "A woman defies traditions to claim her destiny.",
      watchText: "Watch Now",
    },
    {
      image: bimg21,
      title: "Brat",
      year: 2010,
      duration: "2h 05m",
      rating: "U/A 13+",
      story: "A rebellious teenager learns life lessons the hard way.",
      watchText: "Watch Now",
    },
    {
      image: bimg2,
      title: "If you can catch me",
      year: 2009,
      duration: "2h 15m",
      rating: "U/A 16+",
      story:
        "A master thief challenges a detective in a thrilling city-wide chase.",
      watchText: "Watch Now",
    },
    {
      image: bimg13,
      title: "A Working Man",
      year: 2013,
      duration: "2h 05m",
      rating: "U/A 16+",
      story:
        "A hardworking man battles corporate corruption to save his livelihood.",
      watchText: "Watch Now",
    },
    {
      image: bimg1,
      title: "Dark Knight",
      year: 2008,
      duration: "2h 32m",
      rating: "U/A 13+",
      story:
        "A vigilante battles his inner demons while saving Gotham from chaos.",
      watchText: "Watch Now",
    },
  ];

  {
    /* ROW DATA-d */
  }
  const Row4 = [
    {
      image: cimg1,
      title: "Flow",
      year: 2015,
      duration: "2h 20m",
      rating: "U/A 18+",
      story: "A politician fights for the rights of the oppressed.",
      watchText: "Watch Now",
    },
    {
      image: cimg2,
      title: "The Godfather",
      year: 2014,
      duration: "2h 35m",
      rating: "U/A 16+",
      story: "A fearless cop battles corruption to bring justice back.",
      watchText: "Watch Now",
    },
    {
      image: cimg3,
      title: "Inception",
      year: 2022,
      duration: "2h 50m",
      rating: "U/A 16+",
      story: "A gangster rises to power amidst violence and betrayal.",
      watchText: "Watch Now",
    },
    {
      image: cimg4,
      title: "Scarface",
      year: 2021,
      duration: "2h 25m",
      rating: "U/A 13+",
      story: "A villager discovers ancient powers while defending his land.",
      watchText: "Watch Now",
    },
    {
      image: cimg5,
      title: "Jurassic Park",
      year: 2021,
      duration: "2h 28m",
      rating: "U/A 16+",
      story: "The legend of a warrior begins with courage and honor.",
      watchText: "Watch Now",
    },
    {
      image: cimg6,
      title: "Batman Begins",
      year: 2023,
      duration: "2h 40m",
      rating: "U/A 18+",
      story: "An action hero returns to face a new deadly threat.",
      watchText: "Watch Now",
    },
    {
      image: cimg7,
      title: "The Dark Knight",
      year: 2007,
      duration: "2h 30m",
      rating: "U/A 16+",
      story: "A fallen soldier fights for freedom in the gladiator arena.",
      watchText: "Watch Now",
    },
    {
      image: cimg8,
      title: "Black Phone 2",
      year: 2009,
      duration: "2h 18m",
      rating: "U/A 18+",
      story: "A cop takes down a notorious criminal empire in the city.",
      watchText: "Watch Now",
    },
    {
      image: cimg9,
      title: "SISU",
      year: 2007,
      duration: "2h 22m",
      rating: "U/A 13+",
      story: "A railway worker fights injustice to protect his family.",
      watchText: "Watch Now",
    },
    {
      image: cimg10,
      title: "ChainSaw Man",
      year: 2022,
      duration: "2h 30m",
      rating: "U/A 13+",
      story: "Comedy ensues when a family reunion goes hilariously wrong.",
      watchText: "Watch Now",
    },
    {
      image: cimg11,
      title: "The Age of Disclosure",
      year: 2018,
      duration: "2h 10m",
      rating: "U/A 13+",
      story: "A supernatural tale of love, mystery, and revenge continues.",
      watchText: "Watch Now",
    },
    {
      image: bimg3,
      title: "Nuremburg",
      year: 2010,
      duration: "2h 40m",
      rating: "U/A 18+",
      story: "The trial of war criminals exposes dark secrets of humanity.",
      watchText: "Watch Now",
    },
    {
      image: bimg10,
      title: "B.A. Pass",
      year: 2010,
      duration: "1h 55m",
      rating: "U/A 18+",
      story: "A college student falls into a world of seduction and crime.",
      watchText: "Watch Now",
    },
    {
      image: bimg14,
      title: "B.A. Pass2",
      year: 2014,
      duration: "2h 00m",
      rating: "U/A 18+",
      story: "A sequel revealing deeper secrets of betrayal and ambition.",
      watchText: "Watch Now",
    },
    {
      image: bimg15,
      title: "Bhool Chuk Maaf",
      year: 2015,
      duration: "2h 15m",
      rating: "U/A 13+",
      story: "Old mistakes resurface, challenging love and trust.",
      watchText: "Watch Now",
    },
    {
      image: bimg16,
      title: "Our Fault",
      year: 2016,
      duration: "2h 12m",
      rating: "U/A 16+",
      story: "A couple confronts the consequences of their choices.",
      watchText: "Watch Now",
    },
    {
      image: bimg11,
      title: "Your Fault",
      year: 2012,
      duration: "2h 10m",
      rating: "U/A 16+",
      story: "Two strangers' choices collide, changing their lives forever.",
      watchText: "Watch Now",
    },
    {
      image: bimg7,
      title: "Babygirl",
      year: 2011,
      duration: "2h 05m",
      rating: "U/A 13+",
      story: "A young girl discovers strength and courage in a new city.",
      watchText: "Watch Now",
    },
    {
      image: bimg8,
      title: "Thama",
      year: 2008,
      duration: "2h 20m",
      rating: "U/A 16+",
      story: "A mysterious figure shakes up a peaceful village with secrets.",
      watchText: "Watch Now",
    },
    {
      image: bimg18,
      title: "Param Sudari",
      year: 2007,
      duration: "2h 05m",
      rating: "U/A 13+",
      story: "A woman defies traditions to claim her destiny.",
      watchText: "Watch Now",
    },
    {
      image: bimg21,
      title: "Brat",
      year: 2010,
      duration: "2h 05m",
      rating: "U/A 13+",
      story: "A rebellious teenager learns life lessons the hard way.",
      watchText: "Watch Now",
    },
    {
      image: bimg2,
      title: "If you can catch me",
      year: 2009,
      duration: "2h 15m",
      rating: "U/A 16+",
      story:
        "A master thief challenges a detective in a thrilling city-wide chase.",
      watchText: "Watch Now",
    },
    {
      image: bimg13,
      title: "A Working Man",
      year: 2013,
      duration: "2h 05m",
      rating: "U/A 16+",
      story:
        "A hardworking man battles corporate corruption to save his livelihood.",
      watchText: "Watch Now",
    },
    {
      image: bimg1,
      title: "Dark Knight",
      year: 2008,
      duration: "2h 32m",
      rating: "U/A 13+",
      story:
        "A vigilante battles his inner demons while saving Gotham from chaos.",
      watchText: "Watch Now",
    },
  ];

  {
    /* ROW DATA-e */
  }
  const Row5 = [
    {
      image: aimg1,
      title: "John Wick",
      year: 2014,
      duration: "1h 41m",
      rating: "A",
      story: "A retired assassin unleashes brutal revenge.",
      watchText: "Watch Now",
    },
    {
      image: bimg2,
      title: "Mad Max Fury Road",
      year: 2015,
      duration: "2h 00m",
      rating: "U/A 16+",
      story: "Survivors rebel in a high-speed desert war.",
      watchText: "Watch Now",
    },
    {
      image: aimg3,
      title: "Extraction",
      year: 2020,
      duration: "1h 56m",
      rating: "A",
      story: "A mercenary rescues a kidnapped boy.",
      watchText: "Watch Now",
    },
    {
      image: aimg13,
      title: "The Raid",
      year: 2011,
      duration: "1h 41m",
      rating: "A",
      story: "Elite cops fight through a crime tower.",
      watchText: "Watch Now",
    },
    {
      image: bimg5,
      title: "Mission Impossible Fallout",
      year: 2018,
      duration: "2h 27m",
      rating: "U/A 13+",
      story: "Ethan Hunt races to stop global disaster.",
      watchText: "Watch Now",
    },
    {
      image: aimg6,
      title: "Fast Five",
      year: 2011,
      duration: "2h 10m",
      rating: "U/A 13+",
      story: "A crew plans a massive heist in Brazil.",
      watchText: "Watch Now",
    },
    {
      image: cimg7,
      title: "Gladiator",
      year: 2000,
      duration: "2h 35m",
      rating: "U/A 16+",
      story: "A general rises as a warrior of vengeance.",
      watchText: "Watch Now",
    },
    {
      image: cimg8,
      title: "Casino Royale",
      year: 2006,
      duration: "2h 24m",
      rating: "U/A 13+",
      story: "James Bond earns his 007 status.",
      watchText: "Watch Now",
    },
    {
      image: cimg9,
      title: "Sicario",
      year: 2015,
      duration: "2h 01m",
      rating: "A",
      story: "An FBI agent enters cartel warfare.",
      watchText: "Watch Now",
    },
    {
      image: cimg10,
      title: "Taken",
      year: 2008,
      duration: "1h 33m",
      rating: "U/A 16+",
      story: "A father hunts traffickers relentlessly.",
      watchText: "Watch Now",
    },
    {
      image: cimg11,
      title: "Edge of Tomorrow",
      year: 2014,
      duration: "1h 53m",
      rating: "U/A 13+",
      story: "A soldier relives battle to win a war.",
      watchText: "Watch Now",
    },

    /* ---- FILL USING B-IMAGES ---- */

    {
      image: bimg5,
      title: "KGF Chapter 2",
      year: 2022,
      duration: "2h 50m",
      rating: "U/A 16+",
      story: "Rocky rules the gold empire with violence.",
      watchText: "Watch Now",
    },
    {
      image: bimg22,
      title: "Singham Returns",
      year: 2014,
      duration: "2h 35m",
      rating: "U/A 16+",
      story: "A cop destroys corruption with force.",
      watchText: "Watch Now",
    },
    {
      image: bimg17,
      title: "Baagi 4",
      year: 2023,
      duration: "2h 40m",
      rating: "U/A 18+",
      story: "A rebel fighter faces deadly enemies.",
      watchText: "Watch Now",
    },
    {
      image: bimg23,
      title: "Maalik",
      year: 2015,
      duration: "2h 20m",
      rating: "U/A 18+",
      story: "A leader rises against injustice.",
      watchText: "Watch Now",
    },
    {
      image: bimg4,
      title: "Kantara",
      year: 2021,
      duration: "2h 25m",
      rating: "U/A 13+",
      story: "Tradition and power collide violently.",
      watchText: "Watch Now",
    },
    {
      image: bimg20,
      title: "Kantara A legend chapter-1",
      year: 2021,
      duration: "2h 28m",
      rating: "U/A 16+",
      story: "A warrior legend begins.",
      watchText: "Watch Now",
    },
    {
      image: bimg9,
      title: "Madharasi",
      year: 2009,
      duration: "2h 18m",
      rating: "U/A 18+",
      story: "A cop destroys a crime syndicate.",
      watchText: "Watch Now",
    },
    {
      image: bimg6,
      title: "Gladitor",
      year: 2007,
      duration: "2h 30m",
      rating: "U/A 16+",
      story: "A warrior fights for honor and freedom.",
      watchText: "Watch Now",
    },
    {
      image: bimg1,
      title: "Dark Knight",
      year: 2008,
      duration: "2h 32m",
      rating: "U/A 13+",
      story: "Batman battles chaos in Gotham.",
      watchText: "Watch Now",
    },
    {
      image: bimg2,
      title: "If you can catch me",
      year: 2009,
      duration: "2h 15m",
      rating: "U/A 16+",
      story: "A criminal mastermind evades the law.",
      watchText: "Watch Now",
    },
    {
      image: bimg12,
      title: "Coolie",
      year: 2007,
      duration: "2h 22m",
      rating: "U/A 13+",
      story: "A laborer fights powerful enemies.",
      watchText: "Watch Now",
    },
    {
      image: bimg24,
      title: "Coolie",
      year: 2017,
      duration: "2h 22m",
      rating: "U/A 16+",
      story: "A man uncovers a dangerous conspiracy.",
      watchText: "Watch Now",
    },
    {
      image: bimg3,
      title: "Nuremburg",
      year: 2010,
      duration: "2h 40m",
      rating: "U/A 18+",
      story: "Justice unfolds after a brutal war.",
      watchText: "Watch Now",
    },
  ];

  const [sliderRef, setSliderRef] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (slides[0]?.video) {
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 12000,
    arrows: false,
    afterChange: (current) => {
      setCurrentSlide(current);
      setShowVideo(false);

      if (slides[current]?.video) {
        setTimeout(() => setShowVideo(true), 1500);
      }
    },
  };

  return (
    <div className="bg-black min-h-screen text-white relative">
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50 pt-20 bg-gradient-to-b from-black/75 to-transparent">
        <Navbar />
      </div>

      {/* HERO SLIDER */}
      <div className="relative w-full h-[86vh]">
        <Slider {...settings} ref={setSliderRef}>
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
                  <>
                    <video
                      src={slide.video}
                      autoPlay
                      muted={muted}
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <button
                      onClick={() => setMuted(!muted)}
                      className="absolute bottom-10 right-6 z-30 bg-black/70 p-3 rounded-full text-white"
                    >
                      {muted ? <FaMicrophoneSlash/> : <FaMicrophone/>}
                    </button>
                  </>
                )}
              </div>

              <div className="absolute top-44 left-20 z-10">
                <img src={slide.stamp} className="w-24" alt="Stamp" />
              </div>

              <div className="absolute left-20 top-60 z-10 max-w-xl">
                <img
                  src={slide.titleImg}
                  alt="Movie Title"
                  className="w-[400px]"
                />

                <p className="text-green-400 font-bold mt-2">{slide.rank}</p>

                <p className="mt-4 text-lg font-semibold whitespace-pre-line">
                  {slide.description}
                </p>

                <div className="flex gap-4 mt-4">
                  <NavLink className="bg-[#3E4248] px-7 py-2 rounded-md font-bold hover:bg-white hover:text-black transition duration-300 text-xl">
                    Join Prime <br /> Watch now
                  </NavLink>

                  <button className="bg-[#3E4248] hover:scale-105 p-5 cursor-pointer rounded-full hover:bg-white hover:text-black transition">
                    <IoMdAdd className="text-3xl" />
                  </button>

                  <button className="bg-[#3E4248] p-5 hover:scale-105 cursor-pointer rounded-full hover:bg-white hover:text-black transition">
                    <MdInfoOutline className="text-3xl" />
                  </button>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <FaShoppingBag className="text-yellow-400" />
                  <span className="font-bold">{slide.membershipText}</span>
                </div>

                <div className="absolute left-[1320px] bottom-10 w-20 text-center rounded-md bg-[#33373D] z-10">
                  <span className="font-bold">{slide.rating}</span>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent" />
            </div>
          ))}
        </Slider>

        {/* SLIDER TRACKER */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-6 bg-white" : "w-3 bg-gray-500"
              }`}
              onClick={() => sliderRef?.slickGoTo(index)}
            />
          ))}
        </div>

        {/* SLIDER ARROWS */}
        <button
          onClick={() => sliderRef?.slickPrev()}
          className="absolute left-5 top-1/2 -translate-y-1/2"
        >
          <FaChevronLeft size={30} />
        </button>

        <button
          onClick={() => sliderRef?.slickNext()}
          className="absolute right-5 top-1/2 -translate-y-1/2"
        >
          <FaChevronRight size={30} />
        </button>
      </div>

      {/* MOVIE ROWS */}

      <MoviesRow
        title="Movies in English"
        movies={Row1}
        linkText="See More"
        linkTo="/"
      />

      <MoviesRow
        title="Top Movies"
        movies={Row2}
        linkText="See More"
        linkTo="/"
      />

      <MoviesRow
        title="Drama Movies"
        movies={Row3}
        linkText="See More"
        linkTo="/"
      />

      <MoviesRow
        title="Top-Rated movies on IMDB"
        movies={Row4}
        linkText="See More"
        linkTo="/"
      />

      <MoviesRow
        title="Action Movies"
        movies={Row5}
        linkText="See More"
        linkTo="/"
      />

      <SpotlightRow />
      <TopTenRow />

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

export default Movies;
