import React from 'react'
import { MdHealthAndSafety } from "react-icons/md";
import Typography from '@mui/material/Typography'
import "./style.css"
import {
  Link
} from "react-router-dom";


const Navbar = () => {
  return (
   <nav className='navbar'>
    <div className='logo' >
<MdHealthAndSafety className='icon'  />
<Typography variant="h4" className='text' >Melody</Typography>
    </div>
    <div className='list'>
      <ul className='list-ul'>
        < Link to={"/search"} style={{textDecoration:"none" , color:"inherit"}} ><Typography  className='list-size' variant="h6">Find Doctor</Typography></Link>
        <li><Typography  className='list-size' variant="h6">Hospital</Typography></li>
        <li><Typography  className='list-size' variant="h6">Medicine</Typography></li>
        <li><Typography   className='list-size' variant="h6">Surgeries</Typography></li>
        <li><Typography  className='list-size'  variant="h6">Software for provider</Typography></li>
        <li><Typography  className='list-size' variant="h6">Facilities</Typography></li>

        <li><button className='list-button'>
          My Booking
          </button></li>

      </ul>
    </div>
   </nav>
  )
}

export default Navbar