import React from "react";
import {Link} from "react-router-dom";
import './HeaderNoLogin.css'
import Axios from 'axios';
import { useHistory ,useParams} from "react-router-dom";
import {useState,useEffect} from 'react';

function HeaderNoLogin (){
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const history = useHistory();

       
    const toDash = (id) =>{
       if(id!=""){
        history.replace('');
        history.replace('./DashBoard/'+id);   }
        else {
            history.replace('');
            history.replace('./DashBoard');}
        
       }

    
    useEffect(() => {

        if(name!="NADIE" || name!=""){
        Axios.get('http://localhost:3001/currentuserid',{}).then((response)=>{
            setId(response.data);
        })
        Axios.get(`http://localhost:3001/usersbyid/${id}`,{
        }).then((response)=>{
            console.log(response.data);
            setName(response.data.name);
        });
       }
    },[])
    
    return(
        <body>
            
                <div className="HeaderNoLogin">
                <nav class="navbar navbar-expand justify-content-between">
                    <div className="UserNameSpace">
                        <p>Bienvenido {name}</p>
                        <button onClick={() => toDash(id)}>Perfil</button>
                    </div>
                        <ul class="navbar-nav ">
                            <div className="LinkBox">
                        
                        <Link to="/">Al Inicio</Link>
                        <Link to="/Login">Entra</Link>
                        <Link to="/Register">Registrate</Link>
                        <Link to="/AllUsers">Lista Usuarios</Link>
                        <Link to="/AddProducts">Añade Tu Producto</Link>
                        <Link to="/AllProducts">Lista Productos</Link>
                        <Link to="/AddSales">Registrar Ventas</Link>
                        <Link to="/AllSales">Lista Ventas</Link>
                        </div>
                    </ul>
                    </nav>
                </div>
            
        </body>
            
    );
}

export default HeaderNoLogin;