import React from "react";
import { useState, useEffect, useRef } from "react";
import img1 from "../photo/city.jpg";
import img2 from "../photo/architect.jpg";
import img3 from "../photo/civil.jpg";
import img4 from "../photo/pj.jpg";
import img5 from "../photo/construction.jpg";
import img6 from "../photo/pin.png";
import vdo from "../photo/top_side.mov";
import vdo1 from "../photo/video.mp4";

const images = [img1];

function Hero() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const startX = useRef(0);
  const endX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = startX.current - endX.current;

    if (diff > 50) nextSlide(); // Swipe LEFT → Next
    if (diff < -50) prevSlide(); // Swipe RIGHT → Prev
  };

  return (
    <div>
      <div
        className="relative w-full h-[200px] sm:h-[330px] md:h-[550px] overflow-hidden shadow-2xl shadow-black mt-8 md:mt-14"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* IMAGE SLIDER */}
        <div
          className="flex h-full transition-transform duration-1000 "
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="w-full h-full shrink-0 bg-center bg-no-repeat bg-contain"
            >
              <img
                src={img}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover" // or object-contain
              />
            </div>
          ))}
          <div className="w-full absolute top-1/2 -translate-y-1/2 text-white">
            <h1 className="text-2xl md:text-6xl font-bold drop-shadow-lg bg-black/30 pl-9 md:pl-18 pt-45 pb-50">
              We Don't Just
              <br />
              Build Structures
              <br /> <p className="font-style: italic">We Build Trust</p>
            </h1>
            {/* <p className="text-lg md:text-2xl mt-4 drop-shadow-lg">
                Some subtitle or description here
              </p> */}
          </div>
        </div>

        {/* LEFT BUTTON */}
        {/* <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 sm:left-5 -translate-y-1/2 hidden sm:block
            p-2 sm:p-3 md:p-4 rounded-full bg-gray-600/30 backdrop-blur-sm 
            text-black hover:bg-gray-600/50 transition"
        >
          ❮
        </button> */}
        {/* <button
          onClick={prevSlide}
          className="hidden  absolute top-1/2 left-4 -translate-y-1/2 sm:hidden
                   bg-gray-400/40 rounded-full text-black px-4 py-6 border-2 border-gray-400"
        >
          ❮
        </button> */}

        {/* RIGHT BUTTON */}
        {/* <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 sm:right-5 -translate-y-1/2 hidden sm:block
            p-2 sm:p-3 md:p-4 rounded-full bg-gray-600/30 backdrop-blur-sm 
            text-black hover:bg-gray-600/50 transition"
        >
          ❯
        </button> */}

        {/* <button
          onClick={nextSlide}
          className="hidden  absolute top-1/2 right-4 -translate-y-1/2 sm:hidden
                   bg-gray-400/40 rounded-full text-black px-4 py-6 border-2 border-gray-400"
        >
          ❯
        </button> */}

        {/* DOTS */}
        {/* <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-4 sm:w-6 h-1.5 rounded-full transition 
              ${index === i ? "bg-white" : "bg-black"}`}
            ></button>
          ))}
        </div> */}
      </div>
      <div className="justify-center grid grid-cols-2 pl-5 pr-5 gap-2">
        <div className="rounded-xl shadow-xl mt-9 flex flex-col items-center justify-center">
          <div className=" flex justify-center">
            <video
              className="w-54 h-54 "
              src={vdo}
              autoPlay
              loop
              preload="metadata"
              muted
              playsInline
            />
          </div>
        </div>
        <div>
          <div className=" flex justify-center rounded-xl shadow-xl">
            <video
              className="w-54 h-54 "
              src={vdo}
              autoPlay
              loop
              preload="metadata"
              muted
              playsInline
            />
          </div>
        </div>
      </div>
      <div className="mt-5 bg-white">
        {/* <h1 className="text-xl font-semibold pl-5 text-center">Our Services</h1> */}
        <h1 className="shadow-2xl shadow-black ml-9 font-bold text-lg mt-15 font-serif mb-3">
          <strong className="text-2xl">A</strong> Group of_
        </h1>
        <h1 className="font-bold text-lg font-serif text-center">
          <strong className="text-2xl">A</strong>rchitects and{" "}
          <strong className="text-2xl">E</strong>ngineers
        </h1>
        <p className="font-serif text-sm text-center">
          are here to build your dreams
        </p>
        <div className="grid grid-cols-2 font-bold font-serif mt-3">
          <div className="p-5">
            <img
              src={img2}
              alt=""
              className="object-cover rounded-2xl shadow-2xl shadow-amber-300"
            />
            <h1 className="text-center">Architects</h1>
          </div>
          <div className="p-5 mt-9">
            <h1 className="text-center">Engineers</h1>
            <img
              src={img3}
              alt=""
              className="object-cover rounded-2xl shadow-2xl shadow-amber-300"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 bg-white shadow-2xl">
        <h1 className="shadow-2xl shadow-black ml-9 font-bold text-lg mt-15 font-serif mb-3">
          <strong className="text-2xl">W</strong>e Provide_
        </h1>
        <h1 className="font-bold text-lg font-serif text-center">
          <strong className="text-2xl">W</strong>ide range of{" "}
          <strong className="text-2xl">S</strong>ervices
        </h1>
        <p className="font-serif text-sm text-center">some of are_</p>
        <div className="grid grid-cols-2 font-bold font-serif mt-3">
          <div className="p-5 mt-28 items-center justify-center flex flex-col">
            <img
              src={img4}
              alt=""
              className="w-32 h-32 object-cover rounded-full shadow-2xl shadow-amber-300"
            />
            <h1 className="text-center">
              Project <br /> Management
            </h1>
          </div>
          <div className="p-5 ">
            <h1 className="text-center">Constructions</h1>
            <img
              src={img5}
              alt=""
              className="w-43 h-43 object-cover rounded-full shadow-2xl shadow-amber-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
