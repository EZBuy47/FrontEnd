import React from "react";
import {useState} from 'react';
import Axios from 'axios';
import './Register.css'

import { useHistory } from "react-router-dom";

function AddProducts(){
  
  const history = useHistory();
  /*  name: req.body.name,
        reference:req.body.reference,
        serial:req.body.serial,
        description:req.body.description,
        cuantity:req.body.cuantity,
        soldby:req.body.soldby,
        boughtby:req.body.boughtby,
        image:req.body.image,*/ 
  
  
    const [name,setName]=useState("");
    const [reference,setReference]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");
    const [cuantity,setCuantity]=useState(0);
    const [soldby,setSoldby]=useState("");
    const [boughtby,setBoughtby]=useState("");
    
    
    const mostrarDatos = () =>{
      
      Axios.post('http://localhost:3001/newproduct',{
        name:name, 
        reference:reference,
        price:price,
        description:description,
        cuantity:cuantity,
        soldby:soldby,
        boughtby:boughtby
      }).then(()=>{
        console.log("Creacion Exitosa");
        history.push('../')
      }).catch(error =>console.log(error))
        
        
    };
    
    return (
      
      <div className="Register">
        <body>
       <p>Añade tu producto</p>
       <div className="Entradas">
       
       <label>Nombre:</label>
       <input type="text" 
       onChange={(event) =>{setName(event.target.value);}}
       ></input>
       
       <label>Referencia:</label>
       <input type="text"
       onChange={(event) =>{setReference(event.target.value);}}
       ></input>
       
       <label>Precio:</label>
       <input type="number"
       onChange={(event) =>{setPrice(event.target.value);}}
       ></input>

       <label>Cantidad:</label>
       <input type="number"
       onChange={(event) =>{setCuantity(event.target.value);}}
       ></input>
       
       <label>Describe tu producto:</label>
       <textarea
       onChange={(event) =>{setDescription(event.target.value);}}
       ></textarea>
       
       <label>Vendido Por:</label>
       <input  type="text" disabled placeholder="Implementar Login"
       onChange={(event) =>{setSoldby(event.target.value);}}
       ></input>

      <label>Comprado por:</label>
       <input type="text" disabled value="Nadie"
       onChange={(event) =>{setBoughtby(event.target.value);}}
       ></input>

       

       <button onClick={mostrarDatos}>Añade el producto
       </button>
      </div>
      </body>
      </div>
      
    );
    
  }

export default AddProducts;