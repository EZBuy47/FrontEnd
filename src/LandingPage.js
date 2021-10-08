import React from 'react';
import './Views/LandingPage.css'
import background from './Views/Resources/BackGroundLandingPage.jpg'
function LandingPage(){
    return(
        <div class="body" >
         <div style={{  backgroundImage: `url(${background})`}}></div>
          <img  src={background} className="background" />
        <div className="container1">
        <div class="container">
          <div class="row justify-content-center">
            <h1>¡La mejor experiencia al mejor precio!</h1>
          </div>
        </div>
        </div>
        <div className="container2">
        <div class="container">
          <div class="row justify-content-center">
            <h3>¡Para probar toda la experiencia sigue a Iniciar Sesion!</h3>
          </div>
          </div>
        </div>
        
        <div className="container3">
        <div class="container">
          <div class="cajas">
            <div class="row justify-content-center">
              
              <div class="col-lg">
                <h3>Iniciar sesión</h3>
                <center>
                  Ingrese sus datos de acceso para vivir toda una experiencia ecológica
                </center>
                <a
                  className="btn"
                  href="/Login"
                  role="button"
                >Iniciar</a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
}

export default  LandingPage;