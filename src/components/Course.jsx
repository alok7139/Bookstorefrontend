import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'
import axios from 'axios'



 function Course() {
   
  const [book, setbook] = useState([]);
  useEffect(() => {
     const getbook = async() => {
      try {
        const res = await axios.get(`https://bookstore-dl13.onrender.com/book`);
        // console.log(res.data)
        setbook(res.data);
      } catch (error) {
         console.log(error);
      }
     }
     getbook();
  } , [])

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
          <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-pink-500 text=2xl font-semibold md:text-4xl'>We're delighted to have you here <span className='text-3xl'>😊 :)</span></h1>

            <p className='mt-12'>
                Not sure what to read next? Explore our catalog of public domains book with our 
                editors, Some real gems are hidden in our <span className="text-green-500">library</span>.
            </p>
            <Link to={'/'}><button className= ' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300'>Back</button></Link>
          </div>

          <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
             {
                book.map((item) => (
                    <Cards key={item.id} item={item} />
                ))
             }
          </div>
    </div>
    </>
  )
}

export default Course;
