import React from 'react';
import './Views/LandingPage.css'
import background from './Views/Resources/BackGroundLandingPage.jpg'
function LandingPage(){
    return(
        <div class="body" >
         <div style={{  backgroundImage: `url(${background})`}}></div>
          <img  src={background} className="background" />
        
        <div class="container">
          <div class="row justify-content-center">
            <h1>¡La mejor experiencia al mejor precio!</h1>
          </div>
        </div>
    
        <div class="container">
          <div class="row justify-content-center">
            <h3>¡Para probar toda la experiencia sigue a registro!</h3>
          </div>
        </div>
    
       
    
        
        <div class="container">
          <div class="cajas">
            <div class="row justify-content-center">
              <div class="col-lg">
                <h3>Registrarme</h3>
                <center>
                  Haga parte de nuestro emprendimiento llenado un pequeño formulario
                </center>
                <a class="btn btn-outline-success" href="/Register" role="button"
                >Registro</a>
              </div>
              <div class="col-lg">
                <h3>Iniciar sesión</h3>
                <center>
                  Ingrese sus datos de acceso para vivir toda una experiencia ecológica
                </center>
                <a
                  class="btn btn-outline-success"
                  href="/Login"
                  role="button"
                >Iniciar</a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
}

export default  LandingPage;