import React from 'react';
import  { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { PiGoogleCardboardLogoFill } from "react-icons/pi";
import './Navbar.css';
const Navbar = () => {
const [toggleCount, setToggleCount] = useState()
const toggleFunction = (i) => {
  if(toggleCount != i) {
    return setToggleCount(i);
  } else {
    setToggleCount()
  };
};
  console.log(toggleCount)
  return (
  <div> 
    <div className="orange">
    <div className="name">
    <h5>Code</h5>
    <h7>Cademy</h7>
           </div>
    <div className="slowly"></div>
    <div className="seed">
  <li onClick={()=> toggleFunction(1)}>Catalog <div className="shizuka">{toggleCount === 1 ? `▲` : `▼`}</div></li>
  <li onClick={()=> toggleFunction(2)} >Resources <div className="shizuka">{toggleCount === 2 ? `▲` : `▼`}</div> </li>
  <li onClick={()=> toggleFunction(3)} >Community <div className="shizuka">{toggleCount === 3 ? `▲` : `▼`}</div></li>
  <li onClick={()=> toggleFunction(4)} >Pricing  <div className="shizuka">{toggleCount === 4 ? `▲` : `▼`}</div></li>
  <li onClick={()=> toggleFunction(5)} >Career Center <div className="shizuka">{toggleCount === 5 ? `▲` : `▼`}</div></li>
  <li onClick={()=> toggleFunction(6)} >For Teams <div className="shizuka">{toggleCount === 6 ? `▲` : `▼`}</div></li>
    </div>
    <div className="lastpart">
    <CiSearch /> 
    </div>
  <div className="don"> <h3>Log In</h3> </div>
   <div className="signup"><button>Sign Up</button></div>
   <div className="active"></div>
   </div>
   <div className={toggleCount === 1 ? `menu-open` : `menu-close`}>
   <div className="sumo">
  <div className="first"> <h1>Popular Course Topics</h1>
  <h2>Explore free or paid courses in topics that interest you</h2>
  <button>explore all courses</button>
  </div>
  <div className="second"></div>   
  <div className="third"></div>
   </div>
   </div>
  <div className={toggleCount === 2 ? `menu-open` : `menu-close`}>
   <div className="parrot">   </div>
     </div>
   </div>
    );
    };
  export default Navbar;
