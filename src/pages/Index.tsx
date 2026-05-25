import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/layout/Footer";
import BentoHero from "@/components/home/BentoHero";
import BentoSocial from "@/components/home/BentoSocial";
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
      <BentoSocial />
      <BentoFun />
      <BentoContact />

      <Footer />
    </div>
  );
};

export default Index;
