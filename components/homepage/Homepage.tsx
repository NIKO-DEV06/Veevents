import EventsSection from "./EventsSection";
import Hero from "./Hero";
import HeroMarquee from "./HeroMarquee";

const Homepage = () => {
  return (
    <section className="">
      <section className="pt-[11rem] md:pt-[10rem] px-[2rem] md:px-[6rem]">
        <Hero />
        <EventsSection />
      </section>
      <HeroMarquee />
    </section>
  );
};

export default Homepage;
