import { StarIcon } from "@heroicons/react/24/solid"
import Image from "next/image"


const TestimonialCard = ({imgURL , clientName , rating , feedback}) => {
  return (
    
      <div className="flex justify-center items-center flex-col">

        <Image
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px]"
        />
        
        <div className="mt-3 flex justify-center items-center gap-2.5">
          <h3 className="mt-1 text-3xl text font-bold">
            {clientName}
          </h3>
        
          <div className="flex gap-1 justify-center items-center">
          <StarIcon
            className="w-6 h-6 text-yellow-500"
          />
          <p className="text-lg text-slate-grey">({rating})</p>
          </div>
        </div>

        <p className="mt-2 max-w-sm text-center ">
          {feedback}
        </p>

      </div>
    
  )
}

export default TestimonialCard