import React from "react";
import { useState } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddProduct.css'
import swal from 'sweetalert';

import { useHistory, useParams } from "react-router-dom";

function AddProducts() {
  const { id } = useParams();

  const history = useHistory();
  const [name, setName] = useState("");
  const [reference, setReference] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [cuantity, setCuantity] = useState(0);
  var soldby = id;


  const mostrarDatos = () => {

    Axios.post('http://localhost:3001/newproduct', {
      name: name,
      reference: reference,
      price: price,
      description: description,
      cuantity: cuantity,
      soldby: soldby
    }).then(() => {
      history.replace('');
      history.replace('./DashBoard/' + id);
    }).catch(error => console.log(error))
  };
  const comprobar = () => {
    const error = [];
    if (!description) {
      error.push({ text: "Por favor ingrese descripcion" });
    }
    if (!cuantity) {
      error.push({ text: "Por favor ingrese cantidad" });
    }
    if (price == 0) {
      error.push({ text: "Por favor ingrese precio" });
    }

    if (!reference) {
      error.push({ text: "Por favor ingrese referencia" });
    }
    if (!name) {
      error.push({ text: "Por favor ingrese el nombre del producto" });
    }
    if (error.length > 0) {
      error.map((texto, index) => {
        var unir = texto.text;
        swal({
          title: "Error",
          text: unir,
          icon: "error",
          button: "Aceptar"
        })
      });
    }
    else {
      swal({
        text:"Desea añadir el producto",
        icon:"warning",
        buttons:["No","Si"]
      }).then(respuesta=>{
        if(respuesta){
          swal({
            text:"Producto añadido",
            icon:"success"
          })
          mostrarDatos();
        }
      });
    }
  };

  return (
    <div className="container">
      <hr></hr>
      <div className="card">
        <div className="card-body">
          <h2 class="card-title">Añade tu producto</h2>
          <h5 class="card-subtitle mb-2 text-muted">EzBuy</h5>
          <input className="inputProduct" type="text" placeholder="Nombre" onChange={(event) => { setName(event.target.value); }} />
          <hr></hr>
          <input className="inputProduct" type="text" placeholder="Referencia" onChange={(event) => { setReference(event.target.value); }} />
          <hr></hr>
          <input className="inputProduct" type="number" placeholder="Precio" onChange={(event) => { setPrice(event.target.value); }} />
          <hr></hr>
          <input className="inputProduct" type="number" placeholder="Cantidad" onChange={(event) => { setCuantity(event.target.value); }} />
          <hr></hr>
          <textarea className="TextArea" placeholder="Describe tu Producto" onChange={(event) => { setDescription(event.target.value); }} />
          <hr></hr>
          <p>Vendido por:</p>
          <input className="inputProduct" type="text" disabled value={id}></input>
          <hr></hr>
          <a onClick={comprobar}><button className="botonAñadir">Añade el producto</button></a>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;