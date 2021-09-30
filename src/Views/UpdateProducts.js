import React from "react";
import {useState,useEffect} from 'react';
import Axios from 'axios';
import './Register.css'
import { useHistory,useParams } from "react-router-dom";

function UpdateProducts(){
    const history = useHistory();
    const {id} = useParams();
    console.log(id);
    const [name,setName]=useState("");
    const [reference,setReference]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");
    const [cuantity,setCuantity]=useState(0);
    const [soldby,setSoldby]=useState("");
    const [boughtby,setBoughtby]=useState("");
    
    useEffect(() => {
      
        Axios.get(`http://localhost:3001/productbyid/${id}`,{
              
        }).then((response)=>{
          console.log("Saludos");
          console.log(response.data);
          setName(response.data.name);
          setReference(response.data.reference);
          setPrice(response.data.price);
          setDescription(response.data.description);
          setCuantity(response.data.cuantity);
          setSoldby(response.data.soldby);
          setBoughtby(response.data.boughtby);
        });
      },[]);
    

    const Actualizar=()=>{
      Axios.put(`http://localhost:3001/updateproduct/${id}`,{
        id:id,
        name:name, 
        reference:reference,
        price:price,
        description:description,
        cuantity:cuantity,
        soldby:soldby,
        boughtby:boughtby
      }).then(()=>{
        console.log("Update Exitoso");
        history.push('/AllProducts')
      }).catch(error =>console.log("Algo Loco Pasó"))
    }

     const Regresar= () =>{
         history.push('/AllProducts')
     }

    const Borrar=()=>{
      Axios.delete(`http://localhost:3001/deleteproduct/${id}`,{
          
      }).then(()=>{
          console.log("Borrado Exitoso");
          history.push('/AllProducts');
      }).catch(error =>console.log("error"))
    }

    return (
      
        <div className="Register">
          <body>
         <p>Cambia Tu informacion aqui</p>
         <div className="Entradas">


       <label>ID:</label>
       <input type="text" value={id}
       ></input>

       <label>Nombre:</label>
       <input type="text" value={name}
       onChange={(event) =>{setName(event.target.value);}}
       ></input>
       
       <label>Referencia:</label>
       <input type="text" value={reference}
       onChange={(event) =>{setReference(event.target.value);}}
       ></input>
       
       <label>Precio:</label>
       <input type="number" value={price}
       onChange={(event) =>{setPrice(event.target.value);}}
       ></input>

       <label>Cantidad:</label>
       <input type="number" value={cuantity}
       onChange={(event) =>{setCuantity(event.target.value);}}
       ></input>
       
       <label>Describe tu producto:</label>
       <textarea   className="TextArea"  value={description}
       onChange={(event) =>{setDescription(event.target.value);}}
       ></textarea>
       
       <label>Vendido Por:</label>
       <input  type="text"  value={soldby}
       onChange={(event) =>{setSoldby(event.target.value);}}
       ></input>

      <label>Comprado por:</label>
       <input type="text"  value={boughtby}
       onChange={(event) =>{setBoughtby(event.target.value);}}
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

export default UpdateProducts;