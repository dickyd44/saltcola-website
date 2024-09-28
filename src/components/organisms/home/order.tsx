import {
  tokopedia,
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
    <section className="container h-full flex flex-col items-center my-20">
      {/* Buy Now Section */}
      <div className="flex flex-col items-center mb-40 lg:mb-44">
        <h1 className="uppercase mb-5 text-center text-[#dc2626] text-3xl xl:text-4xl 2xl:text-5xl font-extrabold">
          buy now at
        </h1>
        <div className="w-32 mb-10 border border-[#dc2626] rounded-sm">
          <p className="uppercase text-center text-[#dc2626] text-sm 2xl:text-base font-normal">
            order now
          </p>
        </div>
        <div className="flex items-center gap-8">
          <Link href="#" target="_blank">
            <Image
              src={tokopedia}
              alt="logo"
              width={250}
              height={250}
              className="object-contain mt-3"
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
        <h1 className="uppercase mb-7 xl:mb-12 text-center text-[#dc2626] text-3xl xl:text-4xl 2xl:text-5xl font-extrabold">
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
              className="w-[120px] h-[120px] xl:w-[125px] xl:h-[125px] 2xl:w-[150px] 2xl:h-[150px] object-contain"
            />
          ))}
        </div>
        <Image
          src={nutri_grade}
          alt="logo"
          width={1000}
          height={1000}
          className="2xl:w-full w-[200px] h-[130px] object-contain mt-5 2xl:mt-10"
        />

        <p className="mt-10 text-center text-base lg:text-xl">
          25% lower in sugar as compared to regular carbonated drinks. <br />
          Eat All Food In Moderation
        </p>
      </div>
    </section>
  );
}
