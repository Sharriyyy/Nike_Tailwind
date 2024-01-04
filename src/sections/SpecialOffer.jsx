import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"
const SpecialOffer = () => {
  return (
 <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
  <div className="flex-1">
    <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
  </div>
  <div className="flex flex-1 flex-col">
          
           
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
      <span className="text-coral-red">Special </span>
        <span className="text-coral-red"> Offer </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Nike's special offer is a golden opportunity for sports enthusiasts and fashion lovers alike.
         With exclusive discounts on their cutting-edge athletic gear, iconic footwear, and stylish apparel, 
         it's the perfect time to upgrade your wardrobe. Whether you're a dedicated athlete or simply want to elevate your style, don't miss out on the chance to enjoy top-tier performance and savings with Nike's limited-time offer. 
        Step into the world of Nike and seize the moment!
        </p>
        <div className="mt-11 flex flex-wrap gap-4">

        <Button label="Shop Now "
         iconURL={arrowRight} />
         <button label='Learn more' backgroundColor='bg-white' borderColor='border-slate-gray text-slate-gray'></button>
        </div>



      </div>

 </section>
  )
}

export default SpecialOffer