
import {products} from "@/constants"
import { ArrivalCard } from "@/assets/component"

const NewArrivals = () => {
  return (
    <section className="max-container max-sm:mt-1" id="arrivals">

      <div className="flex justify-center items-center">
        <h2 className="text-5xl font-bold">New Arrivals</h2>
      </div>

      <div className="mt-6 flex flex-wrap justify-between gap-10">
        {
          products.map((product) => (
            <ArrivalCard key={product.name} {...product} />
          ))
        }
      </div>
    </section>
  )
}

export default NewArrivals