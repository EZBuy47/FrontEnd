import React from "react";
import { useState, useEffect } from 'react';
import Axios from 'axios';
import './Register.css'

import { useHistory, useParams } from "react-router-dom";

function Register() {

  const history = useHistory();
  const { id } = useParams();
  console.log(id);
  const [name, setName] = useState("");
  const [identification, setIdentification] = useState(0);
  const [cellphone, setCellphone] = useState(0);
  const [email, setEmail] = useState("");
  const [addedDate, setAddedDate] = useState(new Date().toLocaleString() + "");
  const [speciality, setSpeciality] = useState("");
  const [role, setRole] = useState("Usuario");
  const [state, setState] = useState("Activo");
  const mostrarDatos = () => {

    Axios.put(`http://localhost:3001/register/${id}`, {
      name: name,
      identification: identification,
      cellphone: cellphone,
      email: email,
      addedDate: addedDate,
      lastLoginDate: addedDate,
      role: role,
      state: state,
      speciality: speciality
    }).then(() => {
      console.log("Creacion Exitosa");
      history.replace('');
      history.replace('./DashBoard/' + id);
    }).catch(error => console.log("El correo ya existe"))


  };

  return (
    <div class="container">
      <hr></hr>
      <div className="card">
        <div className="card-body">
          <center>
            <h2 class="card-title">Añade tus datos</h2>
            <h5 class="card-subtitle mb-2 text-muted">EzBuy</h5>
          </center>
          <div className="card-body2">
            <label>Nombre:</label>
            <input type="text"
              onChange={(event) => { setName(event.target.value); }}
            ></input>
            <hr></hr>
            <label>Cedula:</label>
            <input type="number"
              onChange={(event) => { setIdentification(event.target.value); }}
            ></input>
            <hr></hr>
            <label>Correo:</label>
            <input type="text"
              onChange={(event) => { setEmail(event.target.value); }}
            ></input>
            <hr></hr>
            <label>Numero De Celular:</label>
            <input type="number"
              onChange={(event) => { setCellphone(event.target.value); }}
            ></input>
            <hr></hr>
            <label>Fecha de registro:</label>
            <input type="text" disabled value={new Date().toLocaleString() + ""}
              onChange={(event) => { setAddedDate(event.target.value); }}
            ></input>
            <hr></hr>
            <label>Rol Asignado:</label>
            <input type="text" disabled value="Usuario"
              onChange={(event) => { setRole(event.target.value); }}
            ></input>
            <hr></hr>
            <label>Estado Asignado:</label>
            <input type="text" disabled value="Activo"
              onChange={(event) => { setState(event.target.value); }}
            ></input>
            <hr></hr>
            <label>Especialidad:</label>
            <input type="text"
              onChange={(event) => { setSpeciality(event.target.value); }}
            ></input>
            <hr></hr>
          </div>
          <button onClick={mostrarDatos}>Registrate
          </button>
        </div>
      </div>
    </div>
  );

}

export default Register;