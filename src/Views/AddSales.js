import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import "./AddSales.css";

function AddSales() {
  const history = useHistory();

  const [date, setDate] = useState(new Date().toLocaleString() + "");
  const [sellerName, setSellerName] = useState("");
  const [IDCustomer, setIDCustomer] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [state, setState] = useState("En proceso");
  const [soldProducts, setSoldProducts] = useState("");
  const [total, setTotal] = useState(0);

  const registrarDatos = () => {
    Axios.post("http://localhost:3001/newsale", {
      date: date,
      sellerName: sellerName,
      IDCustomer: IDCustomer,
      customerName: customerName,
      state: state,
      soldProducts: soldProducts,
      total: total,
    })
      .then(() => {
        console.log("Creacion Exitosa");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="main-container">
      <div className="sales-container">
        <div className="second-container">
          <label className="title-add-products"> Datos de la venta </label>
          <input
            className="date"
            type="text"
            disabled
            value={new Date().toLocaleString() + ""}
            onChange={(event) => {
              setDate(event.target.value);
              console.log(event.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="Nombre del vendedor"
            onChange={(event) => {
              setSellerName(event.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="ID del Cliente"
            onChange={(event) => {
              setIDCustomer(event.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="Nombre del Cliente"
            onChange={(event) => {
              setCustomerName(event.target.value);
            }}
          ></input>
          <select
            onChange={(event) => {
              setState(event.target.value);
              console.log(event.target.value);
            }}
          >
            <option selected> En proceso </option>
            <option> Entregada </option>
            <option> Cancelada </option>
          </select>
          <label> Total: </label>
          <input
            type="text"
            disabled
            value="0"
            onChange={(event) => {
              setTotal(event.target.value);
              console.log(event.target.value);
            }}
          ></input>
        </div>
        <div className="products-container">
          <div className="add-products">
            <label className="title-add-products"> Agregar Producto </label>
            <input
              type="text"
              placeholder="Nombre Producto"
              onChange={(event) => {
                setSoldProducts([event.target.value, event.target.value]);
              }}
            ></input>
            <input type="number" placeholder="Cantidad"></input>
            <div className="add-buttons">
              <button> Borrar </button>
              <button> Agregar </button>
            </div>
          </div>
          <div className="list-products">
            <table class="table-products">
              <thead>
                <tr>
                  <th scope="col"> NOMBRE </th>
                  <th scope="col"> CANTIDAD </th>
                  <th scope="col"> PRECIO </th>
                  <th scope="col"> ELIMINAR </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> Articulo1 </td>
                  <td> Cantidad1 </td>
                  <td> Precio1 </td>
                  <td>
                    <button className="delete-button">-</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="register-buttons">
        <button> Borrar </button>
        <button onClick={registrarDatos}> Registrar </button>
      </div>
    </div>
  );
}

export default AddSales;
