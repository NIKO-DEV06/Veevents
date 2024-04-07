import Marquee from "react-fast-marquee";

const HeroMarquee = () => {
  return (
    <>
      <div className="absolute top-[8rem] z-[-10] opacity-[0.1] w-[100vw] 2xl:max-w-[1470px]">
        <Marquee gradient={false} direction="right" speed={25}>
          {Array.from({ length: 15 }, (_, index) => (
            <p
              key={index}
              className="text-[10rem] font-made-outline-alt-black pr-[2rem] uppercase trackin"
            >
              Veevents
            </p>
          ))}
        </Marquee>
      </div>
      <div className="absolute top-[31rem] z-[-10] opacity-[0.1] w-[100vw] 2xl:max-w-[1470px]">
        <Marquee gradient={false} direction="left" speed={25}>
          {Array.from({ length: 15 }, (_, index) => (
            <p
              key={index}
              className="text-[10rem] font-made-outline-alt-black pr-[2rem] uppercase trackin"
            >
              Veevents
            </p>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default HeroMarquee;
