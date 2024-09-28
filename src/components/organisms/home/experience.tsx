import React from "react";
import {
  photo_experience_one,
  photo_experience_two,
  photo_experience_three,
  photo_experience_four,
  photo_experience_five,
  photo_experience_six,
  photo_experience_seven,
} from "@/assets/images/home";
import Image from "next/image";

// Separate photos array
const PHOTOS_SECTION_ONE = [
  { image: photo_experience_one },
  { image: photo_experience_two },
  { image: photo_experience_three },
  { image: photo_experience_four },
];

const PHOTOS_SECTION_TWO = [
  { image: photo_experience_six },
  { image: photo_experience_five },
];

export default function ExperienceSection() {
  return (
    <section className="container py-20">
      <div className="uppercase flex flex-col justify-center items-center mb-20">
        <h1 className="text-red/95 text-5xl font-extrabold">experience</h1>
        <p className="text-5xl font-extrabold">the salty cola</p>
      </div>

      {/* Play with grid column */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* YouTube iframe shown only once */}
        <div className="space-y-5 lg:col-span-2">
          <Image
            src={photo_experience_seven}
            alt="photo-five"
            width={500}
            height={500}
            className="rounded-sm shadow-2xl w-full h-[450px] object-cover object-bottom"
          />
        </div>

        {/* Image grid */}
        {PHOTOS_SECTION_ONE.map((exp, idx) => (
          <div key={idx} className="space-y-5">
            <Image
              src={exp.image}
              alt={`experience-${idx + 1}`}
              width={500}
              height={500}
              className="rounded-sm shadow-2xl w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 my-6">
        {/* Single photo outside the map */}
        <div className="space-y-5">
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/qCHnvFrRwHg?si=Gmhtp5m2LSK7_sl9"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-sm w-full h-[450px] object-cover"
          ></iframe>
        </div>

        {/* Image grid for section two */}
        <div className="grid xl:grid-cols-2 gap-6">
          {PHOTOS_SECTION_TWO.map((exp, idx) => (
            <div key={idx}>
              <Image
                src={exp.image}
                alt={`experience-${idx + 1}`}
                width={500}
                height={500}
                className="rounded-sm shadow-2xl w-full h-[430px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
