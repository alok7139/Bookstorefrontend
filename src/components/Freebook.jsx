import React ,{useState,useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import Slider from 'react-slick';
import Cards from './Cards';



function Freebook() {


  const [book, setbook] = useState([]);
  useEffect(() => {
     const getbook = async() => {
      try {
        const res = await axios.get(`https://bookstore-dl13.onrender.com/book`);
        // console.log(res.data)
        setbook(res.data.filter((data) => data.category === "Free"));
      } catch (error) {
         console.log(error);
      }
     }
     getbook();
  } , [])
     
    // const filterdata = list.filter((data) => data.category === "Free");
    // console.log(filterdata)

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-10 px-5'>
      <div>
      <h1 className='font-bold text-xl pb-2'>Free Reading Books</h1>
    <p>Welcome to your friendly neighborhood library, We have more than 10+ free ebooks waiting to be discovered...</p>
      </div>
    
    
    <div>
    <Slider {...settings}>
        {book.map((item) => (
            <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
     </div>

    </>
  )
}

export default Freebook
