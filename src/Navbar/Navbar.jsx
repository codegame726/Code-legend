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
    <div className="seed">
  <li onClick={()=> toggleFunction(1)}>Catalog <div className="shizuka">{toggleCount === 1 ? `▲` : `▼`}</div></li>
  <li onClick={()=> toggleFunction(2)} >Resources <div className="shizuka">{toggleCount === 2 ? `▲` : `▼`}</div> </li>
  <li  onClick={()=> toggleFunction(3)} >Community <div className="shizuka">{toggleCount === 3 ? `▲` : `▼`}</div></li>
  <li onClick={()=> toggleFunction(4)} >Pricing  <div className="shizuka">{toggleCount === 4 ? `▲` : `▼`}</div></li>
   <li onClick={()=> toggleFunction(5)} >Career Center <div className="shizuka">{toggleCount === 5 ? `` : ``}</div></li>
  <li onClick={()=> toggleFunction(6)} >For Teams <div className="shizuka">{toggleCount === 6 ? `` : ``}</div></li>
    </div> 
   <div className="active">
    <div className="lastpart">
    <CiSearch /> 
    </div>
  <div className="don"> <h3>Log In</h3> </div>
   <div className="signup"><button>Sign Up</button></div>

   </div>
   </div>
  <div className={toggleCount === 1 ? `Catalog-open` : `Catalog-close`}>
  <div className="container">
    <div className="first">
      <karan>Popular Course Topics</karan>
      <span>Explore free or paid courses in topics that interested you</span>
     <button>Explore all Courses</button>
    </div>
    <div className="second">
      <ol><li>Python</li>
      <li>JavaScript</li>
      <li>HTML&CSS</li>
      <li>SQL</li>
      <li>Java</li>
      <li>C++</li>
      </ol>
    </div>
    <div className="third">
    <ol><li>C#</li>
      <li>Bash</li>
      <li>C</li>
      <li>PHP</li>
      <li>R</li>
      <li>Swift</li>
      </ol>
    </div>
    <div className="forth">
    <ol><li>Cloud Computing</li>
      <li>AI</li>
      <li>Web Development</li>
      <li>Data Science</li>
      <li>Web Design</li>
      <li>CyberSecurity</li>
      </ol>
    </div>
  <div className="fifth">
    <h1>Top Career Paths</h1>
    <king>Choose your career. We'll teach you the skills to get job-ready.</king>
    </div>  
  <div className="sixth">
    <span1> Full-Stack Engineer</span1>
    <span2> Fron-End Engineer</span2>
    </div>  
  <div className="seven">
  <span3> Back-End Engineer</span3>
  <span4> Computer Science</span4>
    </div>  
    <div className="eight">
      <span5>
        iOS Developer
      </span5>
     <span6>
      Data Scientist
     </span6>
    </div>
   <div className="nine">
    <graph>Not Sure Where To Begin ?</graph>
    <a href="#">Take Our Quiz</a>
    </div>   
    </div>
    </div>
  
  <div className={toggleCount === 2 ? `Resources-open` : `Resoures-close`}>
  <div className="main">
  <div className="current">
  <h4>Docs</h4>
  <span5>Find definitions, code syntax, and more -- or contribute your own code documentation.</span5>
  <div className="links">    
    <a href="#">👉 View all Docs</a>
    <a href="#">👉 Contribute to all Docs</a>
         </div>
    </div>
  <div className="ball">
    <ol><li>
     C </li>
     <li>C++</li>
     <li>CSS</li>
     <li>Git</li>
      </ol>
  </div>
  <div className="resources-3">
    <ol><li>
     HTML</li>
     <li>Java</li>
     <li>Java Script</li>
     <li>PHP</li>
      </ol>
  </div> 
  <div className="resources-4">
    <ol><li>
     Python</li>
     <li>React</li>
     <li>SQL</li>
     <li>UI/UX</li>
      </ol>
  </div> 
  <div className="learning">
    <li>Learning & Practice Tools</li>
  </div>
  <div className="learning-2">
   
   <h9>Articles</h9>
   <learn>Learn about technical concepts.</learn>
   <projects>
  Projects
   </projects>
   <practice> Practice and build your portfolio</practice>
  </div> 
  <div className="learning-3">
   
   <h9>Cheatsheets</h9>
   <learn>Review concepts from your courses</learn>
   <videos>
  Videos
   </videos>
   <watch> Watch tutorials , projects and more.</watch>
  </div> 
  <div className="learning-4">
   
   <h9>Code Challenges</h9>
   <test>Test your knowledge and Prep for Intervies</test>
   <workspace>
  Workspace
  </workspace>
   <build>Build and Share projects in your browser.</build>
  </div> 
  </div>
   
   </div>
   <div className={toggleCount === 3 ? `Community-open` : `Community-close`}>
   
    <div className="community1">
      <ol><li>
       Forums
        </li>
        <li>
          Discord
                  </li>
       <li>Chapters</li>
       <li>Events</li>
       <li>Learn Stories</li>
       <li>Code Crew</li>
        </ol>
    </div>
   </div>
   <div className={toggleCount === 4 ? `Pricing-open` : `Pricing-close`}>
     <div className="Pricing">
      <ol><li>
       For Individuals </li>
       <li>For Students</li>
       <li>For Teams</li>
        </ol>
     </div>
     </div>
     </div>
     
    );
    };
  export default Navbar;
