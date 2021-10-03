import React from "react";
import { useState } from 'react';
import Axios from 'axios';
import './AddSales.css'

function AddSales() {
    return (
        <div className="main-container">
            <div className="sales-container">
                <div className="second-container">
                    <label className="title-add-products"> Datos de la venta </label>
                    <input type="text" placeholder="ID de Venta"></input>
                    <input type="text" disabled value={new Date().toLocaleString() + ""}></input>
                    <input type="text" placeholder="Nombre del vendedor"></input>
                    <input type="text" placeholder="ID del Cliente"></input>
                    <input type="text" placeholder="Nombre del Cliente"></input>
                    <select>
                        <option selected> En proceso </option>
                        <option> Entregada </option>
                        <option> Cancelada </option>
                    </select>
                    <label> Total: </label> <input type="text" placeholder="Total"></input>
                </div>
                <div className="products-container">
                    <div className="add-products">
                        <label className="title-add-products"> Agregar Producto </label>
                        <input type="text" placeholder="Nombre Producto"></input>
                        <input type="number" placeholder="Cantidad"></input>
                        <div className="add-buttons">
                            <button> Borrar </button>
                            <button> Agregar </button>
                        </div>
                    </div>
                    <div className="list-products">
                        <table class="table-products">
                            <thead >
                                <tr >
                                    <th scope="col" > NOMBRE </th>
                                    <th scope="col" > CANTIDAD </th>
                                    <th scope="col" > PRECIO </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> Articulo1 </td>
                                    <td> Cantidad1 </td>
                                    <td> Precio1 </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="register-buttons" >
                <button > Borrar </button>
                <button > Registrar </button>
            </div>
        </div>
    )
}

export default AddSales;