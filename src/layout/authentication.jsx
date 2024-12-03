import { useState } from "react";
import { Link } from "react-router-dom";
import Benefit from "../components/benefit";
import Register from "../components/register";
import Login from "../components/login";
import { IoCloseCircleSharp } from "react-icons/io5";



export default function SignIn() {

  const [show, setShow] = useState(true);

 

  return (
  <div className="relative flex flex-col justify-center">
  
  <Link to="/" className="absolute lg:right-20 right-6 top-12  w-full z-50 flex justify-end">
    <IoCloseCircleSharp color="black" size={35}/>
  </Link>
    
  <div className="flex flex-col lg:grid lg:grid-cols-2 items-center justify-center min-h-screen xl:h-screen  bg-gray-50 px-4 lg:px-40 relative">

      <Benefit/>
      {show ?
      <Register setShow = {setShow}/>
      :
      <Login setShow = {setShow}/>
      }
  </div>
  </div>
  
  )
}