import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
    id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >

      <div className="flex flex-1 flex-col">
          
           
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
         We Provide You <span className="text-coral-red">Super </span>
        <span className="text-coral-red"> Quality </span>Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Nike shoes are celebrated not only for their stylish designs but also for their exceptional comfort. The brand incorporates advanced cushioning technologies like Air Max and responsive foams, ensuring a plush and supportive experience with every step. Whether you're hitting the gym or navigating the city streets, Nike's commitment to comfort shines through, making 
        their shoes a top choice for those seeking both style and ease throughout their daily activities.
        </p>
        <div className="mt-11">

        <Button label="View Details" />
        </div>



      </div>
    
    
    
        <div className="flex-1 flex justify-center items-center">
          <img src={shoe8} alt="shoes8" width={570} height={522} className="object-contain" />
           


        </div>
    </section>
    
  )
}

export default SuperQuality