import React from "react";
import '../Css/Login.css'
function Login() {
    let showModel=false;
  
    const OpenModel=()=>{
        showModel=true;
    }
return ( 
    
<div>
    <div className="container">
        <div className="heading">
                <h1>My-web</h1>
                 <p>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, tempora. Quasi harum iure a velit enim natus incidunt beatae dignissimos.
                </p>
        </div>
        <div className="box">
            <form className="Login-Form">
                <div className="field">
                    <input type="text" placeholder="Enter E-Mail Address" id="email" />
                    <input type="password" placeholder="Enter Password" id="pass" />
                    <input type="button" value="Login" id="Submit" />
                </div>
                <p><a href="#"> Forget Password</a></p>
                <button id="create" onClick={OpenModel}> Create New Account</button>
            </form>
        </div>
    </div>
</div>
     );
}
export default Login;