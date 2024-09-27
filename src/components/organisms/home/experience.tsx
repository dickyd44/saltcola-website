import React from "react";
import photo1 from "@/assets/images/home/experience-photo-1.jpg";
import photo2 from "@/assets/images/home/experience-photo-2.jpg";
import photo3 from "@/assets/images/home/experience-photo-3.jpg";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="container py-20">
      <div className="uppercase flex flex-col justify-center items-center mb-20">
        <h1 className="text-red/95 text-5xl font-extrabold">experience</h1>
        <p className="text-5xl font-extrabold">the salty cola</p>
      </div>

      {/* play with grid column */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-10">
        <div className="col-span-2">
          <iframe
            width="auto"
            height="auto"
            src="https://www.youtube.com/embed/qCHnvFrRwHg?si=Gmhtp5m2LSK7_sl9"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-sm w-full h-[443px] 2xl:h-[443px] lg:h-[390px]"
          ></iframe>
          <Image
            src={photo3}
            alt="photo-1"
            width={500}
            height={500}
            className="rounded-sm shadow-2xl mt-5 w-full h-[400px] 2xl:h-[443px] lg:h-[390px] object-cover"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-1 gap-5">
          <Image
            src={photo2}
            alt="photo-1"
            width={500}
            height={500}
            className="rounded-sm lg:h-full object-cover"
          />
          <Image
            src={photo1}
            alt="photo-1"
            width={500}
            height={500}
            className="rounded-sm shadow-2xl lg:h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
