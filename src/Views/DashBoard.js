import React from "react";
import {useState,useEffect} from 'react';
import Axios from 'axios';
import { useHistory ,useParams} from "react-router-dom";


function DashBoard(){
    const history = useHistory();
    const {id} = useParams();
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [identification,setIdentification]=useState(0);
    const [cellphone,setCellphone]=useState(0);
    const [password,setPassword]=useState("");
    const [addedDate,setAddedDate]=useState("");
    const [lastLoginDate,setLastLoginDate]=useState("");
    const [speciality,setSpeciality]=useState("");
    const [state,setStateVar]=useState("");
    const [role,setRole]=useState("");
    
    useEffect(() => {
      
        Axios.get(`http://localhost:3001/usersbyid/${id}`,{
        }).then((response)=>{
         setName(response.data.name);
         setIdentification(response.data.identification);
         setCellphone(response.data.cellphone);
         setAddedDate(response.data.addedDate);
         setSpeciality(response.data.speciality);
         setEmail(response.data.email);
         setRole(response.data.role);
         setStateVar(response.data.state);
         setLastLoginDate(response.data.state);
         setLastLoginDate(response.data.lastLoginDate);
        });
        
        Axios.get('http://localhost:3001/currentuserid',{}).then((response)=>{
            
            console.log("HEADER ANSWER:");
            console.log(response);
        })
        
      },[]);

    return(
        <div className="UserBoard">
           <h1>Bienvenido de nuevo {name}</h1>
           <hr></hr>
           <hr></hr>
           <h2>¿Que Deseas hacer hoy?</h2>
           <hr></hr>
           <hr></hr>
           <button>Vender Algo</button>
           <button>Comprar Algo</button>
           <button>Ver Tu Carrito</button>
           <button>Revisa Tus Productos</button>
           <button>Cambiar Tu Informacion Persional</button>
        </div>
    );
}

export default DashBoard;