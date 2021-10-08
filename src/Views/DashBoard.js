import React from "react";
import {useState,useEffect} from 'react';
import Axios from 'axios';
import { useHistory ,useParams} from "react-router-dom";


function DashBoard(){
    const history = useHistory();
    const {id} = useParams();
    const [name,setName]=useState("");
    
    const toMyProducts = (id) =>{
        history.replace('');
        history.replace('./MyProducts/'+id);   
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

       const toMySales=(id) =>{
        history.replace('');
        history.replace('./MySales/'+id); 
       }

    useEffect(() => {
      
        Axios.get(`http://localhost:3001/usersbyid/${id}`,{
        }).then((response)=>{
         setName(response.data.name);
         var currUserState=response.data.alreadyRegistered;
                    if(!currUserState){
                        history.replace('')
                        history.replace('./Register/'+id);
                    }
        });
        
        Axios.get('http://localhost:3001/currentuserid',{}).then((response)=>{
            
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
           <button onClick={() => toSell(id)}>Vender Algo</button>
           <button onClick={() => toBuy(id)}>Comprar Algo</button>
           <button onClick={() => toShopKart(id)}>Ver Tu Carrito</button>
           <button onClick={() => toMyProducts(id)}>Revisa Tus Productos</button>
           <button onClick={() => toMySales(id)}>Revisa Tus Ventas</button>
           <button>Cambiar Tu Informacion Persional</button>
        </div>
    );
}

export default DashBoard;