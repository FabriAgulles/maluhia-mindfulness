import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Presentation from "@/components/Presentation";
import Services from "@/components/Services";
import Ebook from "@/components/Ebook";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Presentation />
        <Services />
        <Ebook />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
