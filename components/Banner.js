import Image from "next/image";
import Banner01 from "../public/images/Banner01.webp";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:[600px] xl:h-[700px]">
      <Image src={Banner01} layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flxible
        </button>
      </div>
    </div>
  );
}

export default Banner;
