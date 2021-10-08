import React from "react";
import {Link} from "react-router-dom";
import './HeaderNoLogin.css'

function HeaderNoLogin(){
    return(
        <body>
            
                <div className="HeaderNoLogin">
                <nav class="navbar navbar-expand justify-content-between">
                    <div className="UserNameSpace">
                        <p>Bienvenido "Username"</p>
                    </div>
                        <ul class="navbar-nav ">
                            <div className="LinkBox">
                        <Link to="/">Al Inicio</Link>
                        <Link to="/Login">Entra</Link>
                        <Link to="/Register">Registrate</Link>
                        <Link to="/AllUsers">Lista Usuarios</Link>
                        <Link to="/AddProducts">Añade Tu Producto</Link>
                        <Link to="/AllProducts">Lista Productos</Link>
                        <Link to="/AddSales">Registrar Ventas</Link>
                        <Link to="/AllSales">lista Ventas</Link>
                        </div>
                    </ul>
                    </nav>
                </div>
            
        </body>
            
    );
}

export default HeaderNoLogin;