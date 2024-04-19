import React from 'react'
import img from '../../public/download.jpg'
function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-10 px-5 flex flex-col md:flex-row my-10'>
        <div className='w-full order-2 md:order-1 md:w-1/2  mt-10 md:mt-28'>
            <div className='space-y-12'>
            <h1 className='text-4xl font-bold ' >
                Hello, welcome here to learn something {" "}
                 <span className='text-blue-500'>new everyday!!!</span>
            </h1>
            <p className='text-xl font-normal'>
            virtual reading within the website where users can reads the books, offers a wide
            range of free book collection you can read and recommended with their friends and followers.
            </p>
            <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="text" className="grow" placeholder="Email" />
            </label>

            </div>
            <button className="btn mt-6 btn-secondary">Verify</button>
        </div>
        {/* <div className='w-full  md:w-1/2 mt-12'>
            <img src={img} alt='book' className='w-92 h-96 rounded-2xl'/>
        </div> */}
         <div className='order-1  w-full md:w-1/2  mt-12 flex justify-center items-center'>
          <img
            src="https://github.com/akhil2k-lc/bookStoreApp/blob/master/Frontend/public/Banner.png?raw=true"
            alt='book'
            className='max-w-full max-h-full md:max-h-screen rounded-2xl object-contain'
          />
        </div>
    </div>
    </>
  )
}

export default Banner
