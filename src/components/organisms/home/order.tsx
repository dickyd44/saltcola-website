import {
  lazada,
  shopee,
  halal,
  recycle,
  nutri_grade,
} from "@/assets/images/home";
import Image from "next/image";
import Link from "next/link";

const QUALITY = [{ logo: halal }, { logo: recycle }];

export default function OrderSection() {
  return (
    <section className="container min-h-screen flex flex-col items-center justify-between my-20">
      {/* Buy Now Section */}
      <div>
        <h1 className="uppercase mb-5 text-center text-[#dc2626] text-5xl font-extrabold">
          buy now at
        </h1>
        <p className="uppercase mb-5 text-center text-[#dc2626] text-base font-normal">
          click which one this logo for order now
        </p>
        <div className="flex items-center gap-10">
          <Link
            href="https://www.lazada.com.my/shop/saltcola-os/"
            target="_blank"
          >
            <Image
              src={lazada}
              alt="logo"
              width={250}
              height={250}
              className="object-contain mt-5"
            />
          </Link>
          <Link href="https://shopee.com.my/saltcola.os?v=7c7" target="_blank">
            <Image
              src={shopee}
              alt="logo"
              width={250}
              height={250}
              className="object-contain"
            />
          </Link>
        </div>
      </div>

      {/* Quality Section */}
      <div className="flex flex-col items-center">
        <h1 className="uppercase mb-14 text-center text-[#dc2626] text-5xl font-extrabold">
          product quality
        </h1>
        <div className="flex items-center justify-center gap-10">
          {QUALITY.map((quality, idx) => (
            <Image
              key={idx}
              src={quality.logo}
              alt="logo"
              width={150}
              height={150}
              className="w-[150px] h-[150px] object-contain"
            />
          ))}
        </div>
        <Image
          src={nutri_grade}
          alt="logo"
          width={1000}
          height={1000}
          className="w-full h-[130px] object-contain mt-10"
        />

        <p className="mt-10 text-center text-xl">
          25% lower in sugar as compared to regular carbonated drinks <br />
          Eat All Food In Moderation
        </p>
      </div>
    </section>
  );
}
