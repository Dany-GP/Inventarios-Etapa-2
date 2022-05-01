import React, { Component } from 'react';


export class Operaciones extends Component {
    render() {
        return (
            <div className='container'>
                <div class="row">
                    <div class="col">
                        <h2>Movimientos</h2>
                        <p>Esta tabla contiene todas las operaciones realizadas de los almacenes</p>
                    </div>
                    <div class="col text-end align-items-center">
                        <button class="btn" onclick="mostrarModal()">Registrar movimiento</button>
                    </div>
                </div>

                <table id="tabla_3" class="table table-dark table-striped w-100">
                    <thead>
                        <tr>
                            <th data-priority="1">Fecha</th>
                            <th data-priority="2">Tipo de movimiento</th>
                            <th data-priority="3">Almacén origen</th>
                            <th data-priority="4">Almacén Destino</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>22-03-2022</td>
                            <td>Entrada por compra</td>
                            <td>1</td>
                            <td>6787987656457687</td>
                        </tr>
                        <tr>
                            <td>22-03-2022</td>
                            <td>Salida por venta</td>
                            <td>3</td>
                            <td>6576879876756</td>
                        </tr>
                        <tr>
                            <td>22-03-2022</td>
                            <td>Ajuste</td>
                            <td>1</td>
                            <td>7899068790</td>
                        </tr>
                        <tr>
                            <td>22-03-2022</td>
                            <td>Traspaso</td>
                            <td>1</td>
                            <td>300000000000000000000000000000000000</td>
                        </tr>
                        <tr>
                            <td>22-03-2022</td>
                            <td>Entrada por compra</td>
                            <td>2</td>
                            <td>5679675768796767</td>
                        </tr>
                        <tr>
                            <td>22-03-2022</td>
                            <td>Entrada por compra</td>
                            <td>1</td>
                            <td>6578997656789</td>
                        </tr>

                    </tbody>
                </table>

            </div>
        );
    }
}