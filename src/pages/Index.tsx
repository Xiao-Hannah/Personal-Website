import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/layout/Footer";
import BentoHero from "@/components/home/BentoHero";
import BentoAbout from "@/components/home/BentoAbout";
import BentoExperience from "@/components/home/BentoExperience";
import BentoWork from "@/components/home/BentoWork";
import BentoFun from "@/components/home/BentoFun";
import BentoContact from "@/components/home/BentoContact";
import './Index.less';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="index-page">
      <Navigation />

      <BentoHero
        onScrollToWork={() => scrollToSection("work")}
        onScrollToAbout={() => scrollToSection("about")}
        onScrollToContact={() => scrollToSection("contact")}
      />
      <BentoAbout />
      <BentoExperience />
      <BentoWork />
      <BentoFun />
      <BentoContact />

      <Footer />
    </div>
  );
};

export default Index;
