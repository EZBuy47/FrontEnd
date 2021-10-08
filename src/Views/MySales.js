import React from "react";
import { useState,useEffect } from 'react';
import Axios from 'axios';
import { useHistory,useParams } from "react-router-dom";
import './AllSales.css'

function MySales() {
    const history = useHistory();
    const {id} = useParams();
    console.log(id);
    
    const [listaVentas,setListaVentas] = useState([]);
    useEffect(() => {
      
        Axios.get(`http://localhost:3001/mysales/${id}`,{
              
        }).then((response)=>{
          console.log("Saludos");
          console.log(response.data);
          setListaVentas(response.data);
        });
      },[]);

    return (
        <div class="container">
        <div className="AllProducts">
          <body>
         
         <div  className="Lista Products" >
         <div>
            <table  class="table table-hover">
              <thead>
              <tr>
              <th scope="col">ID VENTA</th> 
              <th scope="col">NOMBRE PRODUCTO</th>
              <th scope="col">REFERENCIA PRODUCTO</th>
              <th scope="col">TOTAL</th>
              <th scope="col">ID VENDEDOR</th>
              <th scope="col">ID CLIENTE</th>
              <th scope="col">FECHA VENTA</th>
              <th scope="col">ESTADO VENTA</th>
            </tr>
          </thead>
          <tbody>
          {listaVentas.map((val,key)=>{
              return(
              <tr >
           
            
            
              <td>{ val._id }</td>
              <td>{ val.productname }</td>
              <td>{ val.productreference }</td>
              <td>{ val.productprice }</td>
              <td>{ val.soldby }</td>
              <td>{ val.boughtby }</td>
              <td>{ val.solddate }</td>
              <td>{ val.state }</td>
              </tr>
               )
               })}
            
          </tbody>
        </table>
                </div>
         </div>
        </body>
        </div>
        </div>
    )
}

export default MySales;