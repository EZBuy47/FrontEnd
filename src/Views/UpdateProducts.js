import React from "react";
import { useState, useEffect } from 'react';
import Axios from 'axios';
import './UpdateProducts.css'
import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";

function UpdateProducts() {
  const history = useHistory();
  const { id } = useParams();
  console.log(id);
  const [name, setName] = useState("");
  const [reference, setReference] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [cuantity, setCuantity] = useState(0);
  const [soldby, setSoldby] = useState("");

  useEffect(() => {

    Axios.get(`http://localhost:3001/productbyid/${id}`, {

    }).then((response) => {
      console.log("Saludos");
      console.log(response.data);
      setName(response.data.name);
      setReference(response.data.reference);
      setPrice(response.data.price);
      setDescription(response.data.description);
      setCuantity(response.data.cuantity);
      setSoldby(response.data.soldby);
    });
  }, []);


  const Actualizar = () => {
    Axios.put(`http://localhost:3001/updateproduct/${id}`, {
      id: id,
      name: name,
      reference: reference,
      price: price,
      description: description,
      cuantity: cuantity,
      soldby: soldby
    }).then(() => {
      console.log("Update Exitoso");
      history.push('/AllProducts')
    }).catch(error => console.log("Algo Loco Pasó"))
  }

  const Regresar = () => {
    history.push('/AllProducts')
  }

  const Borrar = () => {
    Axios.delete(`http://localhost:3001/deleteproduct/${id}`, {

    }).then(() => {
      console.log("Borrado Exitoso");
      history.push('/AllProducts');
    }).catch(error => console.log("error"))
  }
  const verificarBorra = () =>{
    swal({
      title:"Eliminar",
      text:"¿Esta seguro de eliminar el producto?",
      icon:"warning",
      buttons:["No","Si"]
    }).then(respuesta=>{
      if(respuesta){
        swal({
          text:"Producto eliminado",
          icon:"success"
        })
        Borrar()
      }
    });
  };
  const verifcarUpdate = () =>{
    swal({
      title:"Actualizar",
      text:"¿Esta seguro de actualizar el producto?",
      icon:"warning",
      buttons:["No","Si"]
    }).then(respuesta=>{
      if(respuesta){
        swal({
          text:"Producto actualizado",
          icon:"success"
        })
        Actualizar()
      }
    })
  };

  return (

    <div className="Register">
      <hr></hr>
      <div className="card">
        <div className="card-body">
          <center>
            <h2 class="card-title">Actualiza tu producto</h2>
            <hr></hr>
            <h5 class="card-subtitle mb-2 text-muted">EzBuy</h5>
          </center>
          <div className="card-body2">
            <label>ID:</label>
            <input type="text" value={id}></input>
            <hr></hr>
            <label>Nombre:</label>
            <input type="text" value={name} onChange={(event) => { setName(event.target.value); }}></input>
            <hr></hr>
            <label>Referencia:</label>
            <input type="text" value={reference} onChange={(event) => { setReference(event.target.value); }}></input>
            <hr></hr>
            <label>Precio:</label>
            <input type="number" value={price} onChange={(event) => { setPrice(event.target.value); }}></input>
            <hr></hr>
            <label>Cantidad:</label>
            <input type="number" value={cuantity} onChange={(event) => { setCuantity(event.target.value); }}></input>
            <hr></hr>
            <label>Describe tu producto:</label>
            <textarea className="TextArea" value={description} onChange={(event) => { setDescription(event.target.value); }}></textarea>
            <hr></hr>
            <label>Vendido Por:</label>
            <input type="text" value={soldby} onChange={(event) => { setSoldby(event.target.value); }}></input>
            <hr></hr>
          </div>
          <div className="botonbody">
            <button className="updater" onClick={() => verifcarUpdate()}>Actualizar</button>
            <button className="deleter" onClick={() => verificarBorra()}>Borrar</button>
            <button className="return" onClick={() => Regresar()}>Regresa</button>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default UpdateProducts;