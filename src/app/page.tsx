import BenefitsSection from "@/components/organisms/home/benefits";
import ExperienceSection from "@/components/organisms/home/experience";
import HomeSection from "@/components/organisms/home/home";
import OrderSection from "@/components/organisms/home/order";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <ExperienceSection />
      <BenefitsSection />
      <OrderSection />
    </main>
  );
}
