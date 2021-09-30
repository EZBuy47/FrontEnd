import React from "react";
import {useState,useEffect} from 'react';
import Axios from 'axios';
import './Register.css'
import { useHistory,useParams } from "react-router-dom";

function UpdateUsers(){
    const history = useHistory();
    const {email} = useParams();
    console.log(email);
    const [name,setName]=useState("");
    const [identification,setIdentification]=useState(0);
    const [cellphone,setCellphone]=useState(0);
    const [password,setPassword]=useState("");
    const [addedDate,setAddedDate]=useState("");
    const [lastLoginDate,setLastLoginDate]=useState("");
    const [speciality,setSpeciality]=useState("");
    const [role,setRole]=useState("");
    
    useEffect(() => {
      
      Axios.get(`http://localhost:3001/usersbyemail/${email}`,{
            
      }).then((response)=>{
       console.log("Saludos");
       console.log(response.data);
       setName(response.data.name);
       setIdentification(response.data.identification);
       setCellphone(response.data.cellphone);
       setPassword(response.data.password);
       setAddedDate(response.data.addedDate);
       setSpeciality(response.data.speciality);
       setRole(response.data.role);
       setLastLoginDate(response.data.lastLoginDate);
      });
    },[]);
    

    

    const Actualizar=()=>{
      Axios.put('http://localhost:3001/updateuser',{
          email:email,
          name:name,
          identification:identification,
          password:password,
          addedDate:addedDate,
          role:role,
          lastLoginDate:lastLoginDate,
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
         ></input> 
        
        <label>Nombre:</label>
       <input type="text" value={name}
       onChange={(event) =>{setName(event.target.value);}}
       ></input>
       
       <label>Cedula:</label>
       <input type="number" value={identification}
       onChange={(event) =>{setIdentification(event.target.value);}}
       ></input>
       
       <label>Contraseña:</label>
       <input type="text" disabled value={password}
       onChange={(event) =>{setPassword(event.target.value);}}
       ></input>
       
       
       <label>Numero De Celular:</label>
       <input type="number" value={cellphone}
       onChange={(event) =>{setCellphone(event.target.value);}}
       ></input>

       <label>Fecha de registro:</label>
       <input  type="text" disabled value={addedDate}
       onChange={(event) =>{setAddedDate(event.target.value);}}
       ></input>

      <label>Ultimo Login:</label>
       <input  type="text" disabled value={lastLoginDate}
       onChange={(event) =>{setLastLoginDate(event.target.value);}}
       ></input>

    
          <label>Rol Asignado:</label>
       <input type="text" value = {role}
       onChange={(event) =>{setRole(event.target.value);}}
       ></input>
         
      
      <label>Especialidad:</label>
       <input type="text" value={speciality}
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