import React from "react";
import Image from "next/image";

const Main = () => {
  const locations = ["Kaduna", "Kano", "Abuja"];
  return (
    <>
    <div
      className="absolute top-[2597px] left-[-58px] flex justify-center items-center w-full sm:w-[1910px] sm:h-[1432.5px] opacity-100"
    >
      <Image
        src="/vector 3.svg"
        alt="blank"
        width={1910}
        height={1432.5}
        className="stroke-[#8300ff] stroke-[20] object-cover"
      />
    </div>
  
  
    <div
      className="absolute top-[3134px] left-[80px] flex justify-start w-full sm:w-[1531px] sm:h-[678px] opacity-100"
    >
      <Image
        src="/frame 715.png"
        alt="blank"
        width={1531}
        height={678}
        className="object-cover"
      />
    </div>
  
    
    <div
      className="absolute top-[3992px] left-[80px] flex flex-col items-center w-full sm:w-[1568px] sm:h-[855px] space-y-[68px] opacity-100 overflow-hidden"
    >
      <Image
        src="/frame 716.png"
        alt="sponsors"
        width={1568}
        height={855}
        className="object-cover"
      />
    </div>
  
    
    <div
      className="absolute top-[5027px] left-0 w-full sm:w-[1728px] sm:h-[808px] bg-cover bg-center bg-no-repeat opacity-100 overflow-hidden"
      style={{
        backgroundImage: `url('/image-mic.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        scrollBehavior: "smooth",
      }}
    >
      <Image
        src="/frame 718.png"
        alt="location"
        width={1627}
        height={554}
        className="absolute bottom-0 left-[80px] w-full sm:w-[1627px] sm:h-[554px] opacity-100 object-cover"
        style={{
          scrollBehavior: "smooth",
        }}
      />
    </div>
  
   
    <div
      className="absolute top-[6015px] left-[-5px] flex justify-center items-center w-full sm:w-[1743.5px] sm:h-[587px] opacity-100 overflow-hidden"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <Image
        src="/frame 720.png"
        alt="blank"
        width={1743.5}
        height={587}
        className="object-cover"
      />
    </div>
  
    
    <div
      className="absolute top-[6782px] left-[80px] flex justify-center items-center w-full sm:w-[1568px] sm:h-[564px] opacity-100 overflow-hidden"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <Image
        src="/frame 613.png"
        alt="location"
        width={1568}
        height={564}
        className="object-cover"
      />
    </div>
  
 
    <div
      className="absolute top-[7526px] left-[114px] flex justify-center items-center w-full sm:w-[1500px] sm:h-[565.54px] opacity-100 overflow-hidden"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <Image
        src="/frame 637.png"
        alt="location"
        width={1500}
        height={565.54}
        className="object-cover"
      />
    </div>
  
    <div
      className="absolute top-[8271.54px] left-[80px] w-auto h-auto opacity-100"
      style={{
        scrollBehavior: "smooth", // Enables smooth scrolling with the parent
      }}
    >
      <p className="text-[45px] font-bold leading-[125%] text-[#000000] font-montserrat">
        FAQs
      </p>
    </div>
  
    
    <div
      className="absolute top-[8406px] left-[174px] flex justify-center items-start w-full sm:w-[1380px] sm:h-[177px] opacity-100 overflow-hidden"
      style={{
        scrollBehavior: "smooth", // Ensures smooth scrolling with parent
      }}
    >
      <Image
        src="/frame 272.png"
        alt="location"
        width={1380}
        height={177}
        className="object-cover"
      />
    </div>
  
    {/* Image 9 */}
    <div
      className="absolute top-[8732px] left-0 w-full sm:w-[1728px] sm:h-[637px] opacity-100"
      style={{
        scrollBehavior: "smooth", // Ensures smooth scrolling with the parent
      }}
    >
      <Image
        src="/frame 307.png"
        alt="blank"
        width={1728}
        height={637}
        className="w-full h-full object-cover border-[#8300ff] border-[0.5px] border-solid"
      />
    </div>
  </>
  );
};
export default Main;
