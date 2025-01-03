import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center text-2xl px-4">
      {/* About Us Title */}
      <div className="text-3xl text-center font-bold text-[#5D300E] py-4">
        ABOUT US
      </div>

      {/* Welcome Title */}
      <h1 className="font-bold text-center mt-4">
        Welcome to <span className="font-black uppercase text-3xl text-[#5D300E]">Caffeine Blend!</span>
      </h1>

      {/* Image and Paragraph Container */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-8">
        {/* Image on the left */}
        <div className="flex justify-center md:mr-8">
          <Image src={"/coffee.png"} alt="coffee image" width={300} height={300} />
        </div>

        {/* Paragraph on the right */}
        <p className="font-bold text-xl text-left mt-8 md:mt-0 md:w-[500px]">
          Each cup is a masterpiece brewed with passion. We&apos;re not just a coffee shop; 
          we&apos;re a space where flavors meet comfort and each sip tells a story. From our rich, freshly ground beans to the cozy vibe 
          that invites you to unwind, every detail is crafted with you in mind. Whether you&apos;re stopping by for a quick boost 
          or settling in for a relaxed coffee break, Caffeine Blend promises a memorable experience in every cup. Come sip, savor, 
          and be part of our coffee journey.
        </p>
      </div>
    </div>
  );
}
