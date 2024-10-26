import React, { useContext } from 'react'
import Container from './Container'
import { ApiData } from './ContextApi'
import ArrivalComponent from './ArrivalComponent'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { GrNext, GrPrevious } from "react-icons/gr";

const NewArrivals = () => {
  let { info, loading } = useContext(ApiData)

  

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <GrNext />,
    prevArrow: <GrPrevious />
  };




  return (
    <section className='py-[128px]'>
      <Container>
        <h2 className='font-sans font-bold text-[39px] text-[#262626]'>New Arrivals</h2>
        {loading ? <h2>Loading.....</h2>
          :
          <Slider {...settings}>



            {info.map((item) => (
              <Link to='/shop'>
                <ArrivalComponent item={item} />
              </Link>
            ))

            }

          </Slider>

        }




      </Container>
    </section>
  )
}

export default NewArrivals