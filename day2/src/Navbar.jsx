import React from 'react';
import './NavBar.css'; // Import your CSS file for styles
import { Link, NavLink } from 'react-router-dom';
// import { FaHome, FaInfo, FaCog, FaEnvelope, FaSignOutAlt } from 'react-icons/fa'; // Import icons

const CustomNavBar = () => {
  return (
    <nav className="main-navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <div className="nav-link">
           <NavLink to="/home">Home</NavLink>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">
           <NavLink to="/about">About</NavLink> 
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">
           <NavLink to="/plan">Plans</NavLink>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">
          Fiber  
          </div>
        </li>
        <li className="nav-item nav-item-right">
          
          <div className="sidebar">
            
      
      <div className="dropdown">
      
        <div className="dropbtn">User</div>
        <div className="dropdown-content">
          <Link to="/profile">Profile</Link>
          <Link to="/">Logout</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
    </div>
        </li>
      </ul>
    </nav>
  );
}

export default CustomNavBar;