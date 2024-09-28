import {
  photo_benefits_one,
  photo_benefits_two,
  photo_benefits_three,
  photo_benefits_four,
  photo_benefits_five,
  photo_benefits_six,
  photo_benefits_seven,
} from "@/assets/images/home";
import Image from "next/image";
import Link from "next/link";

const PHOTO_LINE_ONE = [
  {
    image: photo_benefits_one,
    title: "low sugar",
    subtitle: "only 4.9 g in 100ml",
  },
  {
    image: photo_benefits_two,
    title: "natural himalayan rock salt",
    subtitle: "use healthy & beneficial salt",
  },
  {
    image: photo_benefits_three,
    title: "complexity of flavor",
    subtitle: "taste of the salty mint sweet",
  },
  { image: photo_benefits_four, title: "zero colestrol", subtitle: "" },
];

const PHOTO_LINE_TWO = [
  {
    image: photo_benefits_five,
    title: "less carbon dioxide",
    subtitle: "easy to drink",
  },
  { image: photo_benefits_six, title: "reduce body heat", subtitle: "" },
  {
    image: photo_benefits_seven,
    title: "maintain body fluid balance",
    subtitle: "",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-gradient-to-b from-dark to-red py-20">
      <div className="uppercase flex flex-col justify-center items-center mb-20">
        <h1 className="text-white text-5xl font-extrabold mb-2">benefits of</h1>
        <p className="text-white text-xl">SaltCola® Indonesia</p>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6">
          {PHOTO_LINE_ONE.map((photo, idx) => (
            <div key={idx}>
              <Image
                src={photo.image}
                alt="benefits-photo"
                width={1000}
                height={1000}
                className="w-full h-auto rounded-sm"
              />
              <div className="uppercase text-center text-white mt-3">
                <h1 className="font-semibold text-2xl">{photo.title}</h1>
                <p className="text-sm mt-2">{photo.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-6 pt-28">
          {PHOTO_LINE_TWO.map((photo, idx) => (
            <div key={idx}>
              <Image
                src={photo.image}
                alt="benefits-photo"
                width={1000}
                height={1000}
                className="w-full h-auto rounded-sm"
              />
              <div className="uppercase text-center text-white mt-3">
                <h1 className="font-semibold text-2xl">{photo.title}</h1>
                <p className="text-sm mt-2">{photo.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-10 uppercase text-white">
          <Link
            href="#"
            className="text-lg p-3 px-8 border-2 font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-dark hover:border-white cursor-pointer"
          >
            discover more
          </Link>
        </div>
      </div>
    </section>
  );
}
