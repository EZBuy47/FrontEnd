import React from "react";
import {useState} from 'react';
import Axios from 'axios';
import './Register.css'
import { useHistory,useParams } from "react-router-dom";

function UpdateUsers(){
    const history = useHistory();
    const {email} = useParams();
    console.log(email);
    const [cellphone,setCellphone]=useState(0);
    const [speciality,setSpeciality]=useState("");
    

    

    const Actualizar=()=>{
      Axios.put('http://localhost:3001/updateuser',{
          email:email,
          cellphone:cellphone,
          speciality:speciality
      }).then(()=>{
        console.log("Update Exitoso");
        history.push('/AllUsers')
      }).catch(error =>console.log("Algo Loco Pasó"))
    }

     const Regresar= () =>{
         history.push('/AllUsers')
     }

    const Borrar=()=>{
      Axios.delete(`http://localhost:3001/deleteuser/${email}`,{
          
      }).then(()=>{
          console.log("Borrado Exitoso");
          history.push('/AllUsers');
      }).catch(error =>console.log("error"))
    }

    return (
      
        <div className="Register">
          <body>
         <p>Cambia Tu informacion aqui</p>
         <div className="Entradas">

         <label>Correo:</label>
         <input type="text" value={email} 
         onChange={(event) =>{setCellphone(event.target.value);}}
         ></input> 
        
         <label>Numero De Celular:</label>
         <input type="number"
         onChange={(event) =>{setCellphone(event.target.value);}}
         ></input>
  
         <label>Especialidad:</label>
         <input type="text"
         onChange={(event) =>{setSpeciality(event.target.value);}}
         ></input>
  
         <button className="updater" onClick={() => Actualizar()}>Actualizar
         </button>

         <button className="deleter"  onClick={() => Borrar()}>Borrar
         </button>

         <button className="return"  onClick={() => Regresar()}>Regresa
         </button>

         
        </div>
        </body>
        </div>
        );
}

export default UpdateUsers;