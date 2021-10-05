import React from "react";
import {useState,useEffect} from 'react';
import Axios from 'axios';
import './Register.css'

import { useHistory,useParams } from "react-router-dom";

function Register(){
  
  const history = useHistory();
    const {id} = useParams();
    console.log(id);  
    const [name,setName]=useState("");
    const [identification,setIdentification]=useState(0);
    const [cellphone,setCellphone]=useState(0);
    const [email,setEmail]=useState("");
    const [addedDate,setAddedDate]=useState(new Date().toLocaleString() + "");
    const [speciality,setSpeciality]=useState("");
    const [role,setRole]=useState("Usuario");
    const [state,setState]=useState("Activo");
    const mostrarDatos = () =>{
      
      Axios.put(`http://localhost:3001/register/${id}`,{
        name:name, 
        identification:identification,
        cellphone:cellphone,
        email:email,
        addedDate:addedDate,
        lastLoginDate:addedDate,
        role:role,
        state:state,
        speciality:speciality
      }).then(()=>{
        console.log("Creacion Exitosa");
        history.push('../')
      }).catch(error =>console.log("El correo ya existe"))
        
        
    };
    
    return (
      <div class="container">
      
      <div className="Register">
        <body>
          <center>
            
       <p>Ingresa Tu Informacion Para Comenzar A Disfrutar Los Beneficios</p>
       </center>
       <div className="Entradas">
         
       
       <label>Nombre:</label>
       <input type="text" 
       onChange={(event) =>{setName(event.target.value);}}
       ></input>
       
       <label>Cedula:</label>
       <input type="number"
       onChange={(event) =>{setIdentification(event.target.value);}}
       ></input>
       
       <label>Correo:</label>
       <input type="text"
       onChange={(event) =>{setEmail(event.target.value);}}
       ></input>
       
       <label>Numero De Celular:</label>
       <input type="number"
       onChange={(event) =>{setCellphone(event.target.value);}}
       ></input>

       <label>Fecha de registro:</label>
       <input  type="text" disabled value={new Date().toLocaleString() + ""}
       onChange={(event) =>{setAddedDate(event.target.value);}}
       ></input>

    
          <label>Rol Asignado:</label>
       <input type="text" disabled value = "Usuario"
       onChange={(event) =>{setRole(event.target.value);}}
       ></input>
         
         <label>Estado Asignado:</label>
       <input type="text" disabled value = "Activo"
       onChange={(event) =>{setState(event.target.value);}}
       ></input>
      
         

       <label>Especialidad:</label>
       <input type="text"
       onChange={(event) =>{setSpeciality(event.target.value);}}
       ></input>
       <button onClick={mostrarDatos}>Registrate
       </button>
      </div>
      </body>
      </div>
      </div>
    );
    
  }

export default Register;