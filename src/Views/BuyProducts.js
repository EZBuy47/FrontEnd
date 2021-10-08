import React from "react";
import {useState,useEffect} from 'react';
import Axios from 'axios';
import { useHistory,useParams } from "react-router-dom";
import './AllProducts.css'
function BuyProducts(){
    const history = useHistory();
    const [listaProductos,setListaProductos] = useState([]);
    const useMountEffect = (fun) => useEffect(fun, []);
    const {id} = useParams();
    var userID=id;

    

    useEffect(() => {
      
      Axios.get(`http://localhost:3001/allotherproducts/${id}`,{
            
      }).then((response)=>{
        setListaProductos(response.data);
      });
    },[]);
  


    const makeSale= (productID) =>{
        history.replace('');
        history.replace('./MakeSale/'+userID+'/'+productID);
    }
    
    return (
      <div class="container">
        <div className="AllProducts">
          <body>
         
         <div  className="Lista Products" >
         <div>
            <table  class="table table-hover">
              <thead>
              <tr>
               
              <th scope="col">NOMBRE</th>
              <th scope="col">REFERENCIA</th>
              <th scope="col">PRECIO</th>
              <th scope="col">CANTIDAD</th>
              <th scope="col">DESCRIPCION</th>
              <th scope="col">VENDIDO POR</th>
            </tr>
          </thead>
          <tbody>
          {listaProductos.map((val,key)=>{
              return(
              <tr  onClick={() => makeSale(val._id)}>
              <td>{ val.name }</td>
              <td>{ val.reference }</td>
              <td>{ val.price }</td>
              <td>{ val.cuantity }</td>
              <td>{ val.description }</td>
              <td>{ val.soldby }</td>
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
      );
}

export default BuyProducts;