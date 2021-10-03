import React from "react";
import { useState } from 'react';
import Axios from 'axios';
import './AllSales.css'

function AllSales() {
    return (
        <div className="list-sales">
            <table class="table table-hover">
                <thead >
                    <tr >
                        <th scope="col" > ID VENTA </th>
                        <th scope="col" > FECHA </th>
                        <th scope="col" > NOMBRE VENDEDOR </th>
                        <th scope="col" > NOMBRE CLIENTE </th>
                        <th scope="col" > ID CLIENTE </th>
                        <th scope="col" > ESTADO VENTA </th>
                        <th scope="col" > TOTAL </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> ID_VENTA1 </td>
                        <td> FECHA1 </td>
                        <td> NOMBRE_VENDEDOR1 </td>
                        <td> NOMBRE_CLIENTE1 </td>
                        <td> ID_CLIENTE1 </td>
                        <td> ESTADO_VENTA1 </td>
                        <td> TOTAL1 </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AllSales;