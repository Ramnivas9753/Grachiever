import slidelogo1 from '../images/2/cisco-logo.png';
import slidelogo2 from '../images/2/futurelearn-logo.png';
import slidelogo3 from '../images/2/google-logo-2.png';
import slidelogo4 from '../images/2/MIT_logo.png';
import slidelogo5 from '../images/2/nvidia-logo-16.png';
import slidelogo6 from '../images/2/oxford.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Trusted_section() {
  const settings = {
    infinite: true,
    autoplay:true,
    // autoplayTimeout:1000,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <section className="p-10 mt-10">
    
    <h1 className=" text-center text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold">Trusted By World Best</h1>
    
<Slider {...settings} className="m-5 ">
<div className=" m-5 md:m-5 lg:m-5 h-72 md:h-24 lg:h-24 ">
    <p className='font-bold text-xl mt-10'>Lalit isko Dekho Yrr Mere Se To Nhi Ho Raha</p>
</div>


    {/* Card 1 */}

    

    <div className=" w-24 h-5  "><h1 className="mt-2 p-10">
          <img src={slidelogo1} />
            </h1></div>

    {/* Card 2 */}

    <div className=" w-24 h-5 "><h1 className="mt-2 p-10">
          <img src={slidelogo2} />
            </h1></div>

    {/* Card 3 */}

    <div className=" w-24 h-5 "><h1 className="mt-8 p-10">
          <img src={slidelogo3} />
            </h1></div>

    {/* Card 4 */}
    <div className=" w-24 h-5 "><h1 className="mt-8 p-10">
          <img src={slidelogo4} />
            </h1></div>

    {/* Card 5 */}

    <div className=" w-24 h-5 "><h1 className="mt-8 p-10">
          <img src={slidelogo5} />
            </h1></div>


    {/* Card 6 */}

    <div className=" w-24 h-5 "><h1 className="mt-6 p-10">
          <img src={slidelogo6} />
            </h1></div>


  </Slider>
 
    </section>
  </>
  );
}

export default Trusted_section;