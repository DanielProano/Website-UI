import { useState } from 'react';

import SigninSvg from '../assets/signin_person.svg';

function TopBar() {
   const [projectsIsOpen, setProjectsIsOpen] = useState(false);
   const [researchIsOpen, setResearchIsOpen] = useState(false);
   const [linksIsOpen, setLinksIsOpen] = useState(false);
   const [signinIsOpen, setSigninIsOpen] = useState(false);

	return (
		<header className="topbar">
         <a href="https://dannyproano.com/" className="topbar-link">Home</a>
         <div className="dropdown" onMouseEnter={() => setProjectsIsOpen(true)} onMouseLeave={() => setProjectsIsOpen(false)}>
            <button onClick={() => setProjectsIsOpen(o => !o)} className="topbar-link">
               Projects  ▾
            </button>
            
            {projectsIsOpen && (
               <div className="dropdown-menu">
                  <a href="https://dannyproano.com/pass/login" className="dropdown-item">
                     Password Manager
                  </a>
                  <a href="https://dannyproano.com/Chess" className="dropdown-item">
                     Chess
                  </a> 
               </div>  
            )}
         </div>

         <div className="dropdown" onMouseEnter={() => setResearchIsOpen(true)} onMouseLeave={() => setResearchIsOpen(false)}>
            <button onClick={() => setResearchIsOpen(o => !o)} className="topbar-link">
               Research  ▾
            </button>

            {researchIsOpen && (
               <div className="dropdown-menu">
                  <a href="https://dannyproano.com/HardwareHacking" className="dropdown-item">
                     Hardware Hacking
                  </a> 
                  <a href="https://dannyproano.com/Purt" className="dropdown-item">
                     Purt
                  </a> 
               </div>
            )}
         </div>  

         <div className="dropdown" onMouseEnter={() => setLinksIsOpen(true)} onMouseLeave={() => setLinksIsOpen(false)}>
            <button onClick={() => setLinksIsOpen(o => !o)} className="topbar-link">
               Links ▾
            </button>

            {linksIsOpen && (
               <div className="dropdown-menu">
                  <a
                     href="https://www.linkedin.com/in/daniel-proano-20976b32a/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="dropdown-item"
                  >
                     Linkedin
                  </a>
                  <a 
                     href="https://github.com/DanielProano/DanielProano"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="dropdown-item"
                  >
                     Github
                  </a>
               </div>
            )}
         </div>
         
         <img 
            className="signin-svg" 
            src={SigninSvg} 
            onMouseEnter={() => setSigninIsOpen(true)}
            onMouseLeave={() => setSigninIsOpen(false)}
            onClick={() => setSigninIsOpen(o => !o)}
         />
         {signinIsOpen && (
            <div className="app">
               <div className="signin-dropdown">
                  <div className="signin-exit"> X </div>
                  <img className="signin-img" src={SigninSvg}/>
                  <button className="signin-Button" onClick={() => window.location.href = 'https://dannyproano/website/login'}> 
                     Login 
                  </button>
               </div>
            </div>
         )}
      </header>
	);
}

export default TopBar;
