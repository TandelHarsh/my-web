import React from "react";
import ReactDOM  from "react-dom";
import '../Css/SignUp.css'
function SignUp() {
    return ReactDOM.createPortal ( 
    <div>
            <div class="container">
            <div class="heading">
                <h1>SignUp</h1>
                <p id="icon"> Cross</p>
                
            </div>
            <form class="form-content">
                    <div class="row1">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div class="row2">
                        <input type="text" placeholder="Mobile Number Or Email Address" />
                        <input type="text" placeholder="Create New Password" />
                        <input type="text" placeholder="Confirm Password" />
                    </div>
                    <div class="row3">
                        <input type="button" value="Submit" />
                    </div>
            </form>
        </div>
    
    </div>
     ,document.getElementById('signup'));
}

export default SignUp;