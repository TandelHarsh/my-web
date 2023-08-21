import React from "react";
import '../Css/Nav.css';
import { useNavigate } from "react-router-dom";

function Nav() {

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/home");
      };
    
    const handleAboutClick = () => {
      navigate("/about");
    };
  
    const handleContactClick = () => {
      navigate("/contact");
    };
  
    return ( 
  <nav>
      <div class="logo">
        <h1>MagicPizza</h1>
      </div>
      <div class="menu">
          <ul>
              <li onClick={handleHomeClick}>Home</li>
              <li onClick={handleAboutClick}>About</li>
              <li onClick={handleContactClick}>Contact US</li>
          </ul>
            <div class="user">
                <button>OO SignIn</button>
                <button>OO SignUp</button>
            </div>

        </div>
    </nav> 
    );
}

export default Nav;

