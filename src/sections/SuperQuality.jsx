import { Button } from "../components"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section 
    id='about-us'
    className='flex items-center justify-between w-full gap-10 max-lg:flex-col max-container'>
      <div className='flex flex-col flex-1'>
        <h2 className='text-4xl font-bold font-palanquin lg:max-w-lg'>We Provide You 
          <span className="text-coral-red"> Super Quality</span> Shoes
        </h2>
        <p className="mt-4 font-montserrat lg:max-w-lg">
        Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate 
        your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-4 font-montserrat lg:max-w-lg">
        Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className="mt-11">
          <Button label="View Details"/>
        </div>
      </div>

      <div>
        <img 
        src={shoe8} 
        alt="product detail" 
        width={570}
        height={522}
        className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality