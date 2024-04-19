import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
    const [authuser,setauthuser] = useAuth();
    const handlelogout = () =>{
       try {
          setauthuser({
            ...authuser,
            user:null

          })
          localStorage.removeItem("users" );
          toast.success("Logout successfully");
        //   document.getElementById("my_modal_3").close();
        // window.location.reload();
            setTimeout(() => {
              
              window.location.reload();
              
            },1000)
        //   window.location.reload();
       } catch (error) {
           toast.error("Error: " + error.message);
           setTimeout(() => {

           },2000)
       }
    }
  return (
    <div>
      <button  className='bg-red-400 text-white px-3 py-2 rounded-md hover:bg-red-800 cursor-pointer'
       onClick={handlelogout}
      >Logout</button>
    </div>
  )
}

export default Logout
