import React from "react";
import {Link} from "react-router-dom";
import './HeaderNoLogin.css'
import Axios from 'axios';
import { useHistory ,useParams} from "react-router-dom";
import {useState,useEffect} from 'react';

function HeaderNoLogin (){
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [role,setRole]=useState("");
    const history = useHistory();
     
    /*Aqui se Altera el comportamiento del header segun haya o no login*/
    var showProfileButton=false;
    var showRegisterAndLogin=true;
    var showAdminStuff=false;
    var showUserStuff=false;
    if(id!=""){
        showProfileButton=true;
        showRegisterAndLogin=false;
         if(role=="Admin"){
            showAdminStuff=true;
         }
         if(role=="Usuario"){
             showUserStuff=true;
         }   
        }
    else {
        showProfileButton=false;
        showRegisterAndLogin=true;
    }
       

    const toDash = (id) =>{
       if(id!=""){
        history.replace('');
        history.replace('./DashBoard/'+id);   }
        else {
            history.replace('');
            history.replace('./DashBoard');}
        
       }

    

    const logOut =()=>{
       Axios.get("http://localhost:3001/logout",{}).then((response)=>{
        }).then((response)=>{
            console.log(response);    
            setId("");
            setName("");
            history.replace('');
             history.replace('./');
        })
    }
       
   const toSell = (id) =>{
    history.replace('');
    history.replace('./AddProduct/'+id);   
   }
   
   const toBuy=(id) =>{
    history.replace('');
    history.replace('./BuyProducts/'+id); 
   }
  
   const toShopKart=(id) =>{
    history.replace('');
    history.replace('./ShopKart/'+id); 
   }

    useEffect(() => {

        
        Axios.get('http://localhost:3001/currentuserid',{}).then((response)=>{
            setId(response.data);
            console.log("IDENTIFICACION:" + response.data);
            var currid=response.data;
                if(currid!=""){
                Axios.get(`http://localhost:3001/usersbyid/${currid}`,{
                }).then((response)=>{
                    setName(response.data.name);
                    setRole(response.data.role);
                    
                });}
        })
       
       
    },[])
  
    return(
        <body>
            
                <div className="HeaderNoLogin">
                <nav class="navbar navbar-expand justify-content-between">
                    <div className="UserNameSpace">
                        <p>Bienvenido {name}</p>
                        
                      
                    </div>
                        <ul class="navbar-nav ">
                            <div className="LinkBox">
                            {showProfileButton && 
                            <div>
                             <button onClick={() => toDash(id)}>Perfil</button>
                             <button onClick={() => logOut()}>Salir</button>
                             </div>}
                         {showRegisterAndLogin &&
                         <div>
                        <Link to="/">Al Inicio</Link>
                        <Link to="/Login">Entra</Link>
                        </div>
                         }
                         {showAdminStuff &&
                        <div>
                        <Link to="/AllUsers">Lista Usuarios</Link>
                        <Link to="/AllProducts">Lista Productos</Link>
                        <Link to="/AllSales">Lista Ventas</Link>
                        </div>
                        }

                        {showUserStuff &&
                            <div>
                            <button onClick={() => toSell(id)}>Vende </button>
                            <button  onClick={() => toBuy(id)}>Compra</button>
                            <button onClick={() => toShopKart(id)}>Tu Carrito</button>    
                        </div>}
                            
                        </div>
                    </ul>
                    </nav>
                </div>
            
        </body>
            
    );
}

export default HeaderNoLogin;