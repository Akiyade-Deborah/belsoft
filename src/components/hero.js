
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
  <div>
  <div className="fixed top-0 z-50 w-full">
    <Image
      src="/frame 7.png"
      alt="Header"
      width={1728}
      height={125}
      className="w-full h-auto object-cover border-[0.5px] border-[#75687e] opacity-100"
    />
  </div>

  {/* Hero Content Section */}
  <div className="pt-32 px-6 md:px-12 max-w-full mx-auto">
    {/* Right Section Images */}
    <div className="relative mt-10 md:mt-0">

      {/* Large Frame Image */}
        <Image
          src="/frame 25.png"
          alt="Event Preview"
          width={822}
          height={681}
        />

      {/* Vector Image */}
      <div className="absolute top-[103px] left-[50px] sm:left-[50px] sm:w-[997px] w-[90%] h-auto sm:h-[1125.5px] overflow-hidden">
        <Image
          src="/vector 1.svg"
          alt="Decorative Vector"
          width={997}
          height={1125.5}
          className="w-full h-full"
        />
      </div>
    
      {/* Group Image */}
      <div className="absolute top-[237.65px] left-[50px] sm:left-[946.38px] sm:w-[700.03px] w-[90%] sm:h-[746.96px] h-auto bg-transparent border-[1px] border-[#dcb6ff] rounded-[20px] overflow-hidden">
        <Image
          src="/group 3.png"
          alt="Event Gallery"
          width={700.03}
          height={746.96}
          className="w-full h-full object-cover"
        />
      </div>
      
    </div>
  </div>
</div>

  );
};

export default Hero;
