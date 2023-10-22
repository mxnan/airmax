"use client";

import Button from "@/assets/component/Button";
import { airMaxMain } from "@/assets/images";
import Image from "next/image";

const Hero = () => {
  return (
  <section 
    id="home" 
    className="w-full flex max-sm:space-y-12 xl:flex-row flex-col justify-center min-h-screen gap-10 max-container max-sm:mb-10"
  >
    <div className="xl:w-[45%] flex flex-col justify-center items-start w-full pt-28"
        data-aos ="fade-up" 
        data-aos-duration="1000"
    >
       <div>
        <h1 className="mt-10 text-[120px] max-sm:text-[72px] font-extrabold tracking-[-5px] leading-none">
          NIKE AIR
          <br />
          <span className="text-[#0077b6]">MAX 270</span>
        </h1>
       </div>

         <p className="font-bold text-xl leading-8 my-8 sm:max-w-lg">
        Nike's first lifestyle Air max returns with a vibrant color gradient that's sure  to turn heads.
         </p>

         <div className="flex gap-6">
            <Button 
              label="Shop Shoes"
              backgroundColor="bg-transparent"
              border="border-2"
            />
             <Button 
              label="View Details"
              backgroundColor="bg-transparent"
              border="border-2"
            />
         </div>
    </div>
    <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-gradient-to-b
      from-[#f871c6] via-[#dde18a] to-[#12b1c1] bg-hero bg-cover bg-center"
      data-aos ="fade-up" 
      data-aos-duration="1000"
      >
      <Image 
        src={airMaxMain}
        alt="Hero Image"
        width={710}
        height={602}
        className="object-contain absolute left-[-100px] bottom-10 z-5 max-sm:left-0 max-sm:bottom-[-50px] max-sm:z-0"
      />
    </div>
  </section>
  )
}

export default Hero