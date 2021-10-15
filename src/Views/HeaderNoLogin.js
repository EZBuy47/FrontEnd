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
                        <p>Bienvenido&nbsp;&nbsp;{name}</p>
                    </div>
                </nav>
                <nav class="navbar navbar-expand ">
                    {showProfileButton &&
                        <div className="container">
                            <div className="container">
                            <a style={{ textDecoration: 'none' }} onClick={() => toDash(id)}><button className="botonHeader">Perfil</button></a>
                            </div>
                            <div className="container">
                            <a style={{ textDecoration: 'none' }} onClick={() => logOut()}><button className="botonHeader">Salir</button></a>
                            </div>
                        </div>}
                    {showRegisterAndLogin &&
                        <div className="container">
                            <div className="container">
                            <Link to="/" style={{ textDecoration: 'none' }}><button className="botonHeader">Al&nbsp;Inicio</button></Link>
                            </div>
                            <div className="container">
                            <Link to="/Login" style={{ textDecoration: 'none' }}><button className="botonHeader">Entra</button></Link>
                            </div>
                        </div>
                    }
                    {showAdminStuff &&
                        <div className="container">
                            <div className="container">
                            <Link to="/AllUsers" style={{ textDecoration: 'none' }}><button className="botonHeader">Lista&nbsp;Usuarios</button></Link>
                            </div>
                            <div className="container">
                            <Link to="/AllProducts" style={{ textDecoration: 'none' }}><button className="botonHeader">Lista&nbsp;Productos</button></Link>
                            </div>
                            <div className="container">
                            <Link to="/AllSales" style={{ textDecoration: 'none' }}><button className="botonHeader">Lista&nbsp;Ventas</button></Link>
                            </div>
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