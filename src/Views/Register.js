import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./Register.css";

import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [identification, setIdentification] = useState(0);
  const [cellphone, setCellphone] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [addedDate, setAddedDate] = useState(new Date().toLocaleString() + "");
  const [speciality, setSpeciality] = useState("");
  const [role, setRole] = useState("Usuario");
  const [state, setState] = useState("Activo");
  const mostrarDatos = () => {
    Axios.post("http://localhost:3001/newuser", {
      name: name,
      identification: identification,
      cellphone: cellphone,
      email: email,
      password: password,
      addedDate: addedDate,
      lastLoginDate: addedDate,
      role: role,
      state: state,
      speciality: speciality,
    })
      .then(() => {
        console.log("Creacion Exitosa");
        history.push("../");
      })
      .catch((error) => console.log("El correo ya existe"));
  };

  return (
    <div class="container">
      <div className="Register">
        <body>
          <center>
            <p>Registrate Para disfrutar los beneficios</p>
          </center>
          <div className="Entradas">
            <label>Nombre:</label>
            <input
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
            ></input>

            <label>Cedula:</label>
            <input
              type="number"
              onChange={(event) => {
                setIdentification(event.target.value);
              }}
            ></input>

            <label>Contraseña:</label>
            <input
              type="text"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></input>

            <label>Correo:</label>
            <input
              type="text"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            ></input>

            <label>Numero De Celular:</label>
            <input
              type="number"
              onChange={(event) => {
                setCellphone(event.target.value);
              }}
            ></input>

            <label>Fecha de registro:</label>
            <input
              type="text"
              disabled
              value={new Date().toLocaleString() + ""}
              onChange={(event) => {
                setAddedDate(event.target.value);
              }}
            ></input>

            <label>Rol Asignado:</label>
            <input
              type="text"
              disabled
              value="Usuario"
              onChange={(event) => {
                setRole(event.target.value);
              }}
            ></input>

            <label>Estado Asignado:</label>
            <input
              type="text"
              disabled
              value="Activo"
              onChange={(event) => {
                setState(event.target.value);
              }}
            ></input>

            <label>Especialidad:</label>
            <input
              type="text"
              onChange={(event) => {
                setSpeciality(event.target.value);
              }}
            ></input>
            <button onClick={mostrarDatos}>Registrate</button>
          </div>
        </body>
      </div>
    </div>
  );
}

export default Register;
