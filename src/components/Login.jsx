import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'



function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        const userinfo = {
          email:data.email,
          password:data.password,
        }
        await axios.post(`https://bookstore-dl13.onrender.com/user/login` , userinfo)
        .then((res) => {
          console.log(res.data)
          if(res.data){
            // alert("Login successfully")
            toast.success("login Successfully");
            document.getElementById("my_modal_3").close();
            setTimeout(() => {
              
              window.location.reload();
              localStorage.setItem("users" , JSON.stringify(res.data.user));
            },1000)
            
          }
        
        }).catch((err) => {
           if(err.response){
            console.log(err);
            toast.error("Error: "+ "user not exists")
            setTimeout(() => {
              
            }, 2000);
           }
        })
      }

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-4 md:p-8">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>
          
          <h3 className="font-bold text-lg text-center">Login</h3>
          
          <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br />
            <input type='email' placeholder='Enter your Email' {...register("email", { required: true })} className='w-full md:w-80 px-3 py-2 border rounded-md outline-none mt-2' />
          </div>
          {errors.email && <span className='text-red-500'>This field is required</span>}
          
          <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br />
            <input {...register("password", { required: true })} type='password' placeholder='Enter your Password' className='w-full md:w-80 px-3 py-2 border rounded-md outline-none mt-2' />
          </div>
          {errors.password && <span className='text-red-500'>This field is required</span>}

          {/* button */}
          <div className='mt-4 flex flex-col md:flex-row md:items-center md:justify-between'>
            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 w-full md:w-auto'>Login</button>
            <p className="mt-2 md:mt-0">New User! <Link to='/signup' className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login

