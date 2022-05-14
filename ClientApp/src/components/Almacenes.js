import React, { Component } from 'react';
import $ from 'jquery';
import DataTable from 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';
import './styles/index.css';
import './styles/Almacenes.css';
$.DataTable = require('datatables.net');

function mostrarModal() {
    var myModal = new bootstrap.Modal(document.getElementById('modal'), {
        keyboard: false
    });
    myModal.toggle();
}

export class Almacenes extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };

    }

    componentDidMount() {
        $(document).ready(function () {
            //DataTable no funciona aún
            //$('#tabla_1').DataTable({});

        });

        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };

        fetch('api/products', options).then(response => {
            return response.json();
        }).then(
            (dataApi) => {
                this.setState({ data: dataApi });
                console.log(dataApi);
                console.log(this.state.data);
            }
        );
    }

    render() {
        return (

            <div className='container'>
                <div class="tab sticky-top">
                    <button class="tablinks" onclick="openAlmacen(event, 'Almacen1')" id="defaultOpen">Stock Total</button>
                    <button class="tablinks" onclick="openAlmacen2(event, 'Almacen2')" id="dosOpen">Almacen #</button>
                </div>
                <table id="tabla_1" className="table table-dark table-striped w-100">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Producto</th>
                            <th>Categoria</th>
                            <th>Precio</th>
                            <th>Info</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>


                        </tr>
                        {
                            this.state.data.map(producto =>
                                <tr>
                                    <th scope='row'>{producto.productId}</th>
                                    <td>{producto.productName}</td>
                                    <td>{producto.categoryId}</td>
                                    <td>{producto.unitPrice}</td>
                                    <td>{producto.quantityPerUnit}</td>
                                    <td>
                                        <button className="btn" onClick={() => mostrarModal()}>Editar</button>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>

                <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content bg-dark">
                            <div class="modal-header">
                                <h3 class="modal-title" id="exampleModalLabel">"Nombre del producto"
                                </h3>
                                <button type="button" class="btn-close bg-light" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form action="">
                                    <select class="form-select bg-dark text-white" aria-label="Default select example">
                                        <option selected>Selecciona la operación</option>
                                        <option value="1">Entrada de compra</option>
                                        <option value="2">Salida por venta</option>
                                        <option value="3">Traspaso entre almacenes</option>
                                        <option value="3">Ajuste</option>
                                    </select>
                                    <label for="" class="form-label">Número de productos</label>
                                    <input type="number" class="form-control bg-dark text-white" placeholder="0" />
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn">Guardar cambios</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        );
    }

}