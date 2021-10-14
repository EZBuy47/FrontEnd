import React from "react";
import { Link } from "react-router-dom";
import './HeaderNoLogin.css'
import Axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import logo from './logo2.png';

function HeaderNoLogin() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const history = useHistory();

    /*Aqui se Altera el comportamiento del header segun haya o no login*/
    var showProfileButton = false;
    var showRegisterAndLogin = true;
    var showAdminStuff = false;
    var showUserStuff = false;
    if (id != "") {
        showProfileButton = true;
        showRegisterAndLogin = false;
        if (role == "Admin") {
            showAdminStuff = true;
        }
        if (role == "Usuario") {
            showUserStuff = true;
        }
    }
    else {
        showProfileButton = false;
        showRegisterAndLogin = true;
    }
    const toDash = (id) => {
        if (id != "") {
            history.replace('');
            history.replace('./DashBoard/' + id);
        }
        else {
            history.replace('');
            history.replace('./DashBoard');
        }

    }
    const logOut = () => {
        Axios.get("http://localhost:3001/logout", {}).then((response) => {
        }).then((response) => {
            console.log(response);
            setId("");
            setName("");
            history.replace('');
            history.replace('./');
        })
    }
    const toSell = (id) => {
        history.replace('');
        history.replace('./AddProduct/' + id);
    }

    const toBuy = (id) => {
        history.replace('');
        history.replace('./BuyProducts/' + id);
    }

    const toShopKart = (id) => {
        history.replace('');
        history.replace('./ShopKart/' + id);
    }

    useEffect(() => {
        Axios.get('http://localhost:3001/currentuserid', {}).then((response) => {
            setId(response.data);
            console.log("IDENTIFICACION:" + response.data);
            var currid = response.data;
            if (currid != "") {
                Axios.get(`http://localhost:3001/usersbyid/${currid}`, {
                }).then((response) => {
                    setName(response.data.name);
                    setRole(response.data.role);

                });
            }
        })


    }, [])

    return (
        <body>
        <div className="container-fluid">
            <nav class="navbar navbar-expand justify-content-between">
                <nav class="navbar-nav">
                    <div className="container">
                        <img src={logo} className="App-logo" />
                    </div>
                    <div className="containerNombre" >
                        <p>Bienvenido {name}</p>
                    </div>
                </nav>
                <nav class="navbar-nav">
                    {showProfileButton &&
                        <div className="container">
                            <Link className="link" onClick={() => toDash(id)}>Perfil</Link>
                            <Link className="link" onClick={() => logOut()}>Salir</Link>
                        </div>}
                    {showRegisterAndLogin &&
                        <div className="container">
                            <Link className="link" to="/" style={{ textDecoration: 'none' }}>Al Inicio</Link>
                            <Link className="link" to="/Login" style={{ textDecoration: 'none' }}>Entra</Link>
                        </div>
                    }
                    {showAdminStuff &&
                        <div className="container">
                            <Link className="link" to="/AllUsers" style={{ textDecoration: 'none' }}>Lista Usuarios</Link>
                            <Link className="link" to="/AllProducts" style={{ textDecoration: 'none' }}>Lista Productos</Link>
                            <Link className="link" to="/AllSales" style={{ textDecoration: 'none' }}>Lista Ventas</Link>
                        </div>
                    }
                    {showUserStuff &&
                        <div className="container">
                            <Link className="link" onClick={() => toSell(id)}>Vende </Link>
                            <Link className="link" onClick={() => toBuy(id)}>Compra</Link>
                            <Link className="link" onClick={() => toShopKart(id)}>Tu Carrito</Link>
                        </div>}
                </nav>
            </nav>
        </div>
        </body>
    );
}

export default HeaderNoLogin;