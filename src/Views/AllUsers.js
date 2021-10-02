import React from "react";
import {useState,useEffect} from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import './AllUsers.css'
function AllUsers(){
    const history = useHistory();
    const [listaUsuarios,setListaUsuarios] = useState([]);
    const useMountEffect = (fun) => useEffect(fun, []);
    


    useEffect(() => {
      
      Axios.get('http://localhost:3001/allusers',{
            
      }).then((response)=>{
        console.log("Saludos");
        console.log(response.data);
        setListaUsuarios(response.data);
      });
    },[]);
  


   /* const obtenerUsuarios  =() =>{
        Axios.get('http://localhost:3001/allusers',{
            
          }).then((response)=>{
            console.log("Saludos");
            console.log(response.data);
            setListaUsuarios(response.data);
          });
    }*/

    const toUpdate= (email) =>{
     history.push('./UpdateUsers/'+email);
     console.log("Hola");
    }
    
    return (
      <div class="container">
        <div className="AllUsers">
          <body>
         <div  className="Lista Users" >
          <div>
          <table  class="table table-hover">
                      <thead>
                      <tr>
                      <th scope="col">NOMBRE</th>
                      <th scope="col">IDENTIFICACION</th>
                      <th scope="col">CORREO</th>
                      <th scope="col">CELULAR</th>
                      <th scope="col">CONTRASEÑA</th>
                      <th scope="col">ESPECIALIDAD</th>
                      <th scope="col">ESTADO</th>
                      <th scope="col">ROL</th>
                      <th scope="col">FECHA INGRESO</th>
                      <th scope="col">ULTIMO INGRESO</th>
                    </tr>
                  </thead>
                  <tbody>
         {listaUsuarios.map((val,key)=>{
            
            return (
            <tr onClick={() => toUpdate(val._id)}>
              <td scope="row">{ val.name }</td>
              <td>{ val.identification }</td>
              <td>{ val.email }</td>
              <td>{ val.cellphone }</td>
              <td>{ val.password }</td>
              <td>{ val.speciality }</td>
              <td>{ val.state }</td>
              <td>{ val.role }</td>
              <td>{ val.addedDate }</td>
              <td>{ val.lastLoginDate }</td>
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

export default AllUsers;