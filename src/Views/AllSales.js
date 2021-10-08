import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import "./AllSales.css";

function AllSales() {
  const history = useHistory();
  const [listaVentas, setListaVentas] = useState([]);
  const useMountEffect = (fun) => useEffect(fun, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/allsales", {}).then((response) => {
      console.log("Saludos");
      console.log(response.data);
      setListaVentas(response.data);
    });
  }, []);

  const toUpdate = () => {
    history.push("/UpdateSales");
    console.log("Hola");
  };

  return (
    <div className="list-sales">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col"> ID VENTA </th>
            <th scope="col"> FECHA </th>
            <th scope="col"> NOMBRE VENDEDOR </th>
            <th scope="col"> NOMBRE CLIENTE </th>
            <th scope="col"> ID CLIENTE </th>
            <th scope="col"> ESTADO VENTA </th>
            <th scope="col"> TOTAL </th>
          </tr>
        </thead>
        <tbody>
          {listaVentas.map((val, key) => {
            return (
              <tr onClick={() => toUpdate(val._id)}>
                <td>{val._id}</td>
                <td>{val.date}</td>
                <td>{val.sellerName}</td>
                <td>{val.customerName}</td>
                <td>{val.IDCustomer}</td>
                <td>{val.state}</td>
                <td>{val.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AllSales;
