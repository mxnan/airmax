import Image from "next/image"


const TestimonialCard = ({imgURL , clientName , rating , feedback}) => {
  return (
    
      <div className="flex justify-center items-center flex-col">
        <Image
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px]"
        />
        <p className="mt-2 max-w-sm text-center ">
          {feedback}
        </p>
      </div>
    
  )
}

export default TestimonialCard