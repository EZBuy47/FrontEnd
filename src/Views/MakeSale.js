import React from "react";
import {useState,useEffect} from 'react';
import Axios from 'axios';
import './Register.css'
import { useHistory,useParams } from "react-router-dom";

function MakeSale(){
    const history = useHistory();
    const {userid} = useParams(0);
    const {productid} = useParams();
    const [name,setName]=useState("");
    const [reference,setReference]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");
    const [cuantity,setCuantity]=useState(0);
    const [soldby,setSoldby]=useState("");
    const [soldDate,setAddedDate]=useState(new Date().toLocaleString() + "");

    useEffect(() => {
      
        Axios.get(`http://localhost:3001/productbyid/${productid}`,{
              
        }).then((response)=>{
          
          setName(response.data.name);
          setReference(response.data.reference);
          setPrice(response.data.price);
          setDescription(response.data.description);
          setCuantity(response.data.cuantity);
          setSoldby(response.data.soldby);
        });
      },[]);
    

    
     const buyProd =()=>{
        Axios.post('http://localhost:3001/newsale',{
        name:name, 
        reference:reference,
        price:price,
        description:description,
        cuantity:cuantity,
        soldby:soldby,
        boughtby:userid,
        soldDate:soldDate
        }).then(()=>{
            history.replace('');
            history.replace('./BuyProducts/'+userid); 
          }).catch(error =>console.log(error))
     }

     const Regresar= () =>{
        history.replace('');
         history.replace('/BuyProducts/'+userid);     }

    

    return (
      
        <div className="Register">
          <body>
         <p>Detalles de la compra</p>
         <div className="Entradas">


       <label>ID Producto:</label>
       <input type="text" value={productid}
       ></input>

       <label>Nombre Producto:</label>
       <input type="text" value={name}
       onChange={(event) =>{setName(event.target.value);}}
       ></input>
       
       <label>Referencia Producto:</label>
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
       
       <label>Descripcion producto:</label>
       <textarea   className="TextArea"  value={description}
       onChange={(event) =>{setDescription(event.target.value);}}
       ></textarea>
       
       <label>Vendido Por:</label>
       <input  type="text"  value={soldby}
       onChange={(event) =>{setSoldby(event.target.value);}}
       ></input>

       <label>Fecha de Venta:</label>
       <input  type="text"  value={soldDate}
       onChange={(event) =>{setSoldby(event.target.value);}}
       ></input>

         <button className="updater" onClick={() => buyProd()}>Comprar
         </button>

         <button className="deleter" >Añadir Al Carrito
         </button>

         <button className="return"  onClick={() => Regresar()}>Regresa
         </button>

         
        </div>
        </body>
        </div>
        );
}

export default MakeSale;