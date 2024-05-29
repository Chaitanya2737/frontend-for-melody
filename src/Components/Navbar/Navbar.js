import React, { useState } from 'react';
import { MdHealthAndSafety } from "react-icons/md";
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className='navbar'>
      <div className='logo'>
        <MdHealthAndSafety className='icon' />
        <Typography variant="h4" className='text'>Medify</Typography>
      </div>
      <div className='list'>
        <ul  className={menu ? 'open' : ''}>
          <li key="find-doctor">
            <Link to="/search" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography className='list-size' variant="h6">Find Doctor</Typography>
            </Link>
          </li>
          <li key="hospital">
            <Typography className='list-size' variant="h6">Hospital</Typography>
          </li>
          <li key="medicine">
            <Typography className='list-size' variant="h6">Medicine</Typography>
          </li>
          <li key="surgeries">
            <Typography className='list-size' variant="h6">Surgeries</Typography>
          </li>
          <li key="software">
            <Typography className='list-size' variant="h6">Software for Provider</Typography>
          </li>
          <li key="facilities">
            <Typography className='list-size' variant="h6">Facilities</Typography>
          </li>
          <li key="my-booking">
            <button className='list-button'>My Booking</button>
          </li>
        </ul>
      </div>
      <div className='menu' onClick={() => setMenu(!menu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
