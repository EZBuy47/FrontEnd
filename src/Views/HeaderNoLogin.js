import React from "react";
import {Link} from "react-router-dom";
import './HeaderNoLogin.css'

function HeaderNoLogin(){
    return(
       <div className="HeaderNoLogin">
           <div className="UserNameSpace">
               <p>Bienvenido "Username"</p>
           </div>
           <div className="LinkBox">
           <Link to="/">Al Inicio</Link>
           <Link to="/Login">Entra</Link>
           <Link to="/Register">Registrate</Link>
           </div>
        </div>
    );
}

export default HeaderNoLogin;