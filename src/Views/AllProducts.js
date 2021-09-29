import React from "react";
import {useState,useEffect} from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import './AllUsers.css'
function AllProducts(){
    const history = useHistory();
    const [listaProductos,setListaProductos] = useState([]);
    const useMountEffect = (fun) => useEffect(fun, []);
    


    useEffect(() => {
      
      Axios.get('http://localhost:3001/allproducts',{
            
      }).then((response)=>{
        console.log("Saludos");
        console.log(response.data);
        setListaProductos(response.data);
      });
    },[]);
  


    const toUpdate= (id) =>{
     history.push('./UpdateProducts/'+id);
     console.log("Hola");
    }
    
    return (
      
        <div className="AllUsers">
          <body>
         
         <div  className="Lista Users" >
        
          
         {listaProductos.map((val,key)=>{
            
            return (
                <div onClick={() => toUpdate(val._id)}>
                 <table  class="table table-hover">
                 <thead>
                 <tr>
              <th scope="col">ID</th>  
              <th scope="col">NOMBRE</th>
              <th scope="col">REFERENCIA</th>
              <th scope="col">PRECIO</th>
              <th scope="col">CANTIDAD</th>
              <th scope="col">DESCRIPCION</th>
              <th scope="col">VENDIDO POR</th>
              <th scope="col">COMPRADO POR</th>
              
            </tr>
          </thead>
               
          <tbody>
           
            <tr >
              <td scope="row">{ val._id }</td>
              <td>{ val.name }</td>
              <td>{ val.reference }</td>
              <td>{ val.price }</td>
              <td>{ val.cuantity }</td>
              <td>{ val.description }</td>
              <td>{ val.boughtby }</td>
              <td>{ val.soldby }</td>
              
            </tr>
          </tbody>
        </table>
                </div>
                
                
                )

         })}
         
         </div>
        </body>
        </div>
        
      );
}

export default AllProducts;