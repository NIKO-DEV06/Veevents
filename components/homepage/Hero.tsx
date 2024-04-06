const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-between lg:flex-row gap-[1rem] md:gap-0">
      <div className="">
        <h1 className="text-[2.3rem] lg:text-[3rem] xl:text-[4rem] font-made-black leading-[3rem] lg:leading-[4rem] xl:leading-[5rem]">
          Discover and Manage Events Hassle-Free with Veevents!
        </h1>
        <p className="my-[1.5rem] lg:text-[1.1rem]">
          Explore a world of possibilities, effortlessly organize, and
          seamlessly connect with your audience. Elevate your event experience
          today!
        </p>
        <button className="bg-[#5a3ee5] hover:bg-[#4630b0] duration-300 text-white px-[1.5rem] py-[0.5rem] rounded-md font-semibold">
          Explore Now
        </button>
      </div>
      <div>
        <video
          className="w-[22rem] lg:w-full xl:w-[90rem]"
          src="/hero-vid.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
    </section>
  );
};

export default Hero;
