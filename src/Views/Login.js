import React from "react";
import {useState} from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import './Login.css'
function Login(){
    const history = useHistory();
    const [email,setEmail]=useState("");
   
    const [password,setPassword]=useState("");
   
    const Entrada = () =>{
        console.log("Login Exitoso");
        history.push('../')
    };
    
    return (
      
        <div className="Login">
          <body>
         <p>Bienvenido de nuevo</p>
         <div className="Entradas">
         
         <label>Nombre:</label>
         <input type="text" 
         onChange={(event) =>{setEmail(event.target.value);}}
         ></input>
         
         
         
         <label>Contraseña:</label>
         <input type="text"
         onChange={(event) =>{setPassword(event.target.value);}}
         ></input>
         
         
         
         <button onClick={Entrada}>Entra
         </button>
        </div>
        </body>
        </div>
        
      );
}

export default Login;