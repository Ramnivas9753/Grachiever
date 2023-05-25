import slidelogo1 from '../images/2/microsoft.png';
import slidelogo2 from '../images/2/futurelearn-logo.png';
import slidelogo3 from '../images/2/google-logo-2.png';
import slidelogo4 from '../images/2/MIT_logo.png';
import slidelogo5 from '../images/2/nvidia-logo-16.png';
import slidelogo6 from '../images/2/oxford.png';
import slidelogo7 from '../images/2/amazon.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Trusted_section() {
  const settings = {
    infinite: true,
    autoplay:true,
    arrows: false, // Hide the navigation arrows

    autoplaySpeed: 1000,
    speed: 1000,
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
    <section className="mt-10 max-md:mt-10 bg-[#f6f9ff] container mx-auto">
    
    <h1 className=" text-center text-xl sm:text-3xl font-bold">Trusted By World Best</h1>
    
<Slider {...settings} className="m-5 ">
<div className=" ">
<img src={slidelogo3} className=''/>
</div>

    {/* Card 1 */}
    <div className="   ">
          <img src={slidelogo5} />
            </div>

    {/* Card 2 */}
    <div className="  ">
          <img src={slidelogo3} className=''/>
            </div>

    {/* Card 3 */}
    <div className="  ">
          <img src={slidelogo4} />
            </div>

    {/* Card 4 */}
    <div className="  ">
          <img src={slidelogo5} />
            </div>

    {/* Card 5 */}

    <div className="  ">
          <img src={slidelogo6} />
           </div>
            
    {/* Card 6 */}

    <div className="  ">
        <img src={slidelogo4} />
            </div>


  </Slider>
 
    </section>
  </>
  );
}

export default Trusted_section;
