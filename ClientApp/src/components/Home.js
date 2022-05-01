import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './styles/index.css';
import factory from './img/factory.jpg';
import nahuel from './img/nahuel.jpeg';
import combinacion from './img/Combinacion-3-version-3.jpg';
import cajasManchadas from './img/cajas-manchadas.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className='bg-dark'>

        <div id="carouselExampleCaptions" class="carousel slide carousel-white mx-3 my-5" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner align-items-center justify-content-center text-center">
            <div class="carousel-item active " data-bs-interval="8000">
              <img src={combinacion} class=" img-fluid rounded-3" />
                <div class="carousel-caption d-none d-md-block">
                  <h2 class="stroke"
                    >
                    Almacena todo lo que necesites</h2>
                  <p class="stroke font-p"
                    >
                    Ofrecemos planes variados para que puedas escoger el que se adapte a tus necesidades</p>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="8000">
              <img src={nahuel} class="img-fluid rounded-3" />
                <div class="carousel-caption d-none d-md-block">
                  <h2 class="stroke"
                    >
                    Haz que NorthWind sea parte de tu vida</h2>
                  <p class="stroke font-p"
                    >
                    Somos una empresa líder en la industria, nuestra mayor prioridad es que tú estés satisfecho con
                    nuestro servicio</p>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="8000">
              <img src={cajasManchadas} class=" img-fluid rounded-3"/>
                <div class="carousel-caption d-none d-md-block">
                  <h2 class="stroke"
                    >
                    No te preocupes por el traslado</h2>
                  <p class="stroke font-p"
                    >
                    Ofrecemos servicio a domicilio para que puedas almacenar tus pertenencias desde la comodidad de
                    tu hogar o empresa</p>
                </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div data-aos="fade-right" data-aos-duration="3000" class="contenedor-medio" id="info">
          <div class="col mx-5">
            <h1 class="fs-1 my-3  fs-1 fw-bold rounded-3 text-center">¿Sin espacio para tus cosas?... Nosotros lo
              guardamos por tí</h1>
            <p class="text-justify">
              Deja de preocuparte por el espacio para tus cosas, tus pertenencias estarán a salvo gracias a nuestra
              organización profesional.
            </p>
            <p class="text-justify">
              NorthWind es una empresa de inventario dedicada al almacenamiento de los elementos de sus clientes.
              NorthWind se encarga de almacenar, empaquetar y transportar bienes de pequeñas dimensiones tanto para
              grandes empresas como para personas individuales
              que requieren un espacio libre para sus cosas.
            </p>
            <p>
              No importa la cantidad de espacio que necesites, comienza ahora mismo
              <a href="#precios" class=" text-orange">Aquí</a>
            </p>
          </div>
          <div class="col float-right">
            <img src={factory} class="img-fluid rounded-3 " />
          </div>
        </div>



        <div class="row mx-5 my-5 ali contenedor-info">

          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" class="col col-hover border-orange rounded-3 mx-5">
            <div class="">

              <h2 class="text-center fw-bold rounded-3 fs-1 mt-3"> CARACTERISTICAS </h2>
              <ul>
                <li>
                  <h3> El inventario en sus canales de ventas y ubicaciones </h3>
                </li>
                <p class="text-justify"> Sincronización de inventario totalmente automatizada, a medida que cambian
                  sus niveles de inventario, Veeqo lo equilibra en sus canales, ubicaciones de almacén y almacenes
                  de Amazon FBA.</p>
                <li>
                  <h3> Nunca más se agoten los productos </h3>
                </li>
                <p>Tenga un mejor control y visibilidad de sus niveles de stock en todos sus canales, en un solo
                  lugar.</p>
                <li>
                  <h3>Pronóstico para el futuro</h3>
                </li>
                <p>Pronóstico sobre períodos anteriores de altas ventas y productos / variantes más vendidos. Tenga
                  en cuenta el tiempo de entrega de los proveedores para que nunca más se agote o vuelva a tener
                  exceso de existencias.</p>

              </ul>
            </div>
          </div>

          <div data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" class="col col-hover border-orange rounded-3 mx-5">

            <h2 class="text-center fw-bold fs-1 rounded-3 mt-3">SEGUIMIENTO Y CONTROL</h2>
            <ul>
              <li>
                <h3> Saber cuándo los niveles de stock son bajos </h3>
              </li>
              <p>Supervise sus niveles de existencias en todos los canales con actualizaciones diarias fijas por
                correo electrónico. Reordene el stock desde Veeqo con solo hacer clic en un botón.</p>
              <li>
                <h3> Toma de inventario más fácil, rápida y mejor</h3>
              </li>
              <p>Realice tomas de stock flexibles basadas en su equipo y almacén, utilizando nuestra aplicación móvil.
                Evita tener que parar las operaciones y hazlo mucho más rápido y con mayor precisión.</p>

            </ul>

          </div>

        </div>

      </div>
    );
  }
}
