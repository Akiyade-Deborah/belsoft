import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
    <section className="relative bg-[#fdf7ff] py-12 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
  <div
    className="relative w-full sm:w-[90%] md:w-[1572px] h-[auto] sm:h-[400px] md:h-[564px] 
      opacity-100 overflow-hidden rounded-lg"
    style={{
      top: "1120px",
      left: "80px",
    }}
  >
    <Image
      src="/frame 317.png"
      alt="About Us"
      width={1572}
      height={564}
      className="w-full h-full object-cover"
    />
  </div>
</section> 

{/* <section className="relative bg-[#fdf7ff] py-12 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
    <div className="relative w-full sm:w-[90%] md:w-[1572px] h-[auto] sm:h-[400px] md:h-[564px] opacity-100 overflow-hidden rounded-lg" style={{ top: "1120px", left: "80px" }}>
      <Image
        src="/frame 317.png"
        alt="About Us"
        width={1572}
        height={564}
        className="w-full h-full object-cover"
      />
    </div>
  </section> */}


{/* <section className="relative bg-[#fdf7ff] py-12 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10  overflow-x-hidden">
    <div className="relative w-full sm:w-[90%] md:w-[1572px] h-auto sm:h-[400px] md:h-[564px] opacity-100 overflow-hidden rounded-lg" style={{ top: "1120px", left: "80px" }}>
      <Image
        src="/frame 317.png"
        alt="About Us"
        width={1572}
        height={564}
        className="w-full h-full object-cover"
      />
    </div>
  </section> */}

  </>
  );
};

export default AboutUs;
