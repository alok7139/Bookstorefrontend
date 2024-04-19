import Home from "./Home/Home"
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from "./courses/Courses"
import Signup from "./components/Signup"
import Contact from "./components/Contact"
import About from "./components/About"
import {Toaster} from 'react-hot-toast'
import { useAuth } from "./context/AuthProvider"



function App() {
  const [authuser,setauthuser] = useAuth();
  console.log(authuser);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={ authuser ? <Courses/> : <Navigate to={'/signup'}/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Toaster position="bottom-right"/>
      </div>
      
    </>
  )
}


export default App
