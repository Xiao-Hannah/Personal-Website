import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/layout/Footer";
import BentoHero from "@/components/home/BentoHero";
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

      <Footer />
    </div>
  );
};

export default Index;
