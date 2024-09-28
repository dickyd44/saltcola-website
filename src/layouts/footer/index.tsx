import {
  InstagramIcon,
  TiktokIcon,
  FacebookIcon,
  YouTubeIcon,
} from "@/assets/images/icon";
import Link from "next/link";

const SOSMED = [
  {
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/saltcolaidn?igsh=MTluYTk3Ync2eDBmeQ==",
  },
  {
    icon: <TiktokIcon />,
    link: "https://www.tiktok.com/@saltcolaidn?_t=8q5l316P9HQ&_r=1",
  },
  {
    icon: <FacebookIcon />,
    link: "#",
  },
  {
    icon: <YouTubeIcon />,
    link: "#",
  },
];

export default function Footer() {
  return (
    <section className="bg-[#dc2626] py-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-around items-center">
          <div className="flex gap-5">
            {SOSMED.map((sosmed, idx) => (
              <Link
                href={sosmed.link}
                target="_blank"
                key={idx}
                className="bg-white hover:bg-light p-2.5 rounded-full text-[#dc2626]"
              >
                {sosmed.icon}
              </Link>
            ))}
          </div>
          <p className="text-white mt-5 lg:mt-0">
            Copyright ©2024 SaltCola® | SaltCola by KrõBe. All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}
