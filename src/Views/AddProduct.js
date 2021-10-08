import React from "react";
import {useState} from 'react';
import Axios from 'axios';
import './Register.css'

import { useHistory,useParams } from "react-router-dom";

function AddProducts(){
  const {id} = useParams();
  
  const history = useHistory();
    const [name,setName]=useState("");
    const [reference,setReference]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");
    const [cuantity,setCuantity]=useState(0);
    var soldby= id;
    
    
    const mostrarDatos = () =>{
      
      Axios.post('http://localhost:3001/newproduct',{
        name:name, 
        reference:reference,
        price:price,
        description:description,
        cuantity:cuantity,
        soldby:soldby
      }).then(()=>{
        history.replace('');
        history.replace('./DashBoard/'+id); 
      }).catch(error =>console.log(error))
        
        
    };
    
    return (
      <div class="container">
      
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
       <textarea className="TextArea"
       onChange={(event) =>{setDescription(event.target.value);}}
       ></textarea>
       
       <label>Vendido Por:</label>
       <input  type="text" disabled value={id}
       ></input>

       <button onClick={mostrarDatos}>Añade el producto
       </button>
      </div>
      </body>
      </div>
      </div>
      
    );
    
  }

export default AddProducts;