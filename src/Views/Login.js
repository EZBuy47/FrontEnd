import React from "react";
import {useState} from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import './Login.css'
import botonGoogle from './Resources/LoginGoogle.png'
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
          <center>
         <p>Bienvenido de nuevo</p>
         </center>
         <div className="Entradas">
         
         <label>Correo:</label>
         <input type="text" 
         onChange={(event) =>{setEmail(event.target.value);}}
         ></input>
         
         
         
         <label>Contraseña:</label>
         <input type="text"
         onChange={(event) =>{setPassword(event.target.value);}}
         ></input>
         
         
         
         <button onClick={Entrada}>Entra
         </button>
         
         
         <div>
          <a className="GoogleLogin" href="https://accounts.google.com/signin/v2/identifier">
          <img src={botonGoogle} alt="Boton google"/></a>
          </div>
        </div>
        </body>
        </div>
        
      );
}

export default Login;