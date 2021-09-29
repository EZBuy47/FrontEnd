import React from "react";
import {useState} from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import './Login.css'
import axios from "axios";
function Login(){
    const history = useHistory();
    const [email,setEmail]=useState("");
   
    const [password,setPassword]=useState("");
   
    const Entrada = () =>{
        console.log("Login Exitoso");
        history.push('../')
    
    };
    const devolverUsuario = () =>{
        Axios.get('http://localhost:3001/usuario', {}).then((response)=>
        {console.log(response.data);})
    };
    
    return (
      
        <div className="Login">
          <body>
         <p>Bienvenido de nuevo</p>
         <div className="Entradas">
         
         <label>Correo:</label>
         <input type="text" 
         onChange={(event) =>{setEmail(event.target.value);}}
         ></input>
         
         
         
         <label>Contraseña:</label>
         <input type="text"
         onChange={(event) =>{setPassword(event.target.value);}}
         ></input>
         
         
         <button onClick={Entrada,devolverUsuario}>Entra
         </button>
        </div>
        </body>
        </div>
        
      );
}

export default Login;