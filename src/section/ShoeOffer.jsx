import { Button } from "@/assets/component"
import Image from "next/image"
import { offers } from "@/assets/images"


const ShoeOffer = () => {
  return (
    <section id="offers"
      className="flex justify-center items-center max-xl:flex-col-reverse 
      gap-10 max-conatiner mt-4"
    >
      <div className="flex flex-1 flex-col">

        <h2 className="text-4xl font-semibold">
          Best Shoes For
        </h2>

        <h2 className="text-5xl font-extrabold my-4 ">
          <span className="text-[#0077b6]">
            Best People
          </span>
        </h2>

        <p className="mt-4 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Rerum pariatur itaque ad mollitia quia iusto ex sunt voluptates
          dicta odio? Voluptatibus odio expedita cupiditate reprehenderit.
          Lorem ipsum dolor  Lorem ipsum dolor sit.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
           <Button 
             label="Explore"
             border="border-2"
             backgroundColor="bg-transparent"
           />
        </div>
      </div> 
      <div className="flex-1 justify-center items-center">
        <Image 
          src={offers}
          alt="Shoe Promotion"
          width={773}
          height={100}
          className="object-contain h-full w-full"
          />
      </div>
    </section>
  )
}

export default ShoeOffer