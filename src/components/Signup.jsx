import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
// import Login from './Login'


function Signup() {

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit =async (data) => {
        const userinfo = {
          fullname: data.fullname,
          email:data.email,
          password:data.password,
        }
        await axios.post(`https://bookstore-dl13.onrender.com/user/signup` , userinfo)
        .then((res) => {
          console.log(res.data)
          if(res.data){
            // alert("signup successfully")
            toast.success("signup successfully");
            // <Navigate to={'/'}/>
            navigate(from , {replace:true});
          }
        localStorage.setItem("users" , JSON.stringify(res.data.user));
        }).catch((err) => {
           if(err.response){
            console.log(err);
            // alert("Error: " +  err.response.data.message );
            toast.error("Error: "+ err.response.data.message);
           }
        })
      }


  return (
    <>
      <div className='flex  h-screen items-center justify-center  ml-4'>
        <div className="w-full max-w-md px-2">
          <div className="modal-box p-5 md:p-8">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link to={'/'}><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>
            
            <h3 className="font-bold text-lg text-center">Signup</h3>
            <div className='mt-4 space-y-2'>
              <span>NAME</span>
              <br />
              <input type='name' {...register("fullname", { required: true })} placeholder='Enter your FULL NAME' className='w-full px-3 py-2 border rounded-md outline-none mt-2' />
            </div>
            {errors.fullname && <span className='text-red-500'>This field is required</span>}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input type='email' {...register("email", { required: true })} placeholder='Enter your Email' className='w-full px-3 py-2 border rounded-md outline-none mt-2' />
            </div>
            {errors.email && <span className='text-red-500'>This field is required</span>}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input type='password' {...register("password", { required: true })} placeholder='Enter your Password' className='w-full px-3 py-2 border rounded-md outline-none mt-2' />
            </div>
            {errors.password && <span className='text-red-500'>This field is required</span>}

            {/* button */}
            <div className='mt-4 flex justify-center'>
              <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700'>Register</button>
              {/* <p className='text-xl'>already a user?{" "}
               <button className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()}>Login</button>{" "}
                      <Login/>
              </p> */}
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup

