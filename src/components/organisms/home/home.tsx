import Link from "next/link";
import React from "react";

const clipVideo = "/NEW TASTE 'SaltCola' by Krobe.mp4";

export default function HomeSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] "
      >
        <source src={clipVideo} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-dark opacity-50" />
      <div className="uppercase container absolute z-10 text-white bottom-40">
        <h1 className="text-4xl font-bold mb-6">introducing</h1>
        <Link
          href="#"
          className="text-lg p-3 px-8 border-2 font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-dark"
        >
          discover more
        </Link>
      </div>
    </section>
  );
}
