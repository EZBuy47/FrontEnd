import React from "react";
import { useState, useEffect } from 'react';
import Axios from 'axios';
import './MakeSale.css'
import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";

function MakeSale() {
  const history = useHistory();
  const { userid } = useParams(0);
  const { productid } = useParams();
  const [name, setName] = useState("");
  const [reference, setReference] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [cuantity, setCuantity] = useState(0);
  const [soldby, setSoldby] = useState("");
  const [state, setState] = useState("ESPERANDO PAGO");
  const [soldDate, setSoldDate] = useState(new Date().toLocaleString() + "");

  useEffect(() => {

    Axios.get(`http://localhost:3001/productbyid/${productid}`, {

    }).then((response) => {

      setName(response.data.name);
      setReference(response.data.reference);
      setPrice(response.data.price);
      setDescription(response.data.description);
      setCuantity(response.data.cuantity);
      setSoldby(response.data.soldby);
    });
  }, []);



  const buyProd = () => {
    Axios.post('http://localhost:3001/newsale', {
      name: name,
      reference: reference,
      price: price,
      description: description,
      cuantity: cuantity,
      soldby: soldby,
      boughtby: userid,
      soldDate: soldDate,
      state: state
    }).then(() => {
      history.replace('');
      history.replace('./BuyProducts/' + userid);
    }).catch(error => console.log(error))
  }

  const Regresar = () => {
    history.replace('');
    history.replace('/BuyProducts/' + userid);
  }
  const verificarCompra = () =>{
    swal({
      title:"Compra",
      text:"¿Desea realizar la compra?",
      icon:"warning",
      buttons:["No","Si"]
    }).then(respuesta=>{
      if(respuesta){
        swal({
          text:"La compra ha sido realizada",
          icon:"success"
        })
        buyProd()
      }
    })
  };



  return (

    <div className="Register">
      <hr></hr>
      <div className="card">
        <div className="card-body">
          <center>
            <h2 class="card-title">Detalles de la compra</h2>
            <hr></hr>
            <h5 class="card-subtitle mb-2 text-muted">EzBuy</h5>
          </center>
          <div className="card-body2">
            <label>ID Producto:</label>
            <input type="text" value={productid}></input>
            <hr></hr>
            <label>Nombre Producto:</label>
            <input type="text" value={name} onChange={(event) => { setName(event.target.value); }}></input>
            <hr></hr>
            <label>Referencia Producto:</label>
            <input type="text" value={reference} onChange={(event) => { setReference(event.target.value); }}></input>
            <hr></hr>
            <label>Precio:</label>
            <input type="number" value={price} onChange={(event) => { setPrice(event.target.value); }}></input>
            <hr></hr>
            <label>Cantidad:</label>
            <input type="number" value={cuantity} onChange={(event) => { setCuantity(event.target.value); }}></input>
            <hr></hr>
            <label>Descripcion producto:</label>
            <textarea className="TextArea" value={description} onChange={(event) => { setDescription(event.target.value); }}></textarea>
            <hr></hr>
            <label>Vendido Por:</label>
            <input type="text" value={soldby} onChange={(event) => { setSoldby(event.target.value); }}></input>
            <hr></hr>
            <label>Fecha de registro:</label>
            <input type="text" disabled value={new Date().toLocaleString() + ""} onChange={(event) => { setSoldDate(event.target.value); }}></input>
            <hr></hr>
          </div>
          <div className="botonbody">
            <button className="updater" onClick={() => verificarCompra()}>Comprar</button>
            <button className="deleter" >Añadir Al Carrito</button>
            <button className="return" onClick={() => Regresar()}>Regresa</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakeSale;