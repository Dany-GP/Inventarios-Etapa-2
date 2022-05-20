import React, { Component } from 'react';
import {
    Modal, ModalBody,
    ModalHeader, ModalFooter, Form, FormGroup, Label, Input
} from 'reactstrap';


export class Movimientos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accion: 0, data: []
        };

    }

    componentDidMount() {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };

        fetch('api/movements', options).then(response => {
            return response.json();
        }).then(
            (dataApi) => {
                this.setState({ data: dataApi });

            }
        );
    };

    mitoogle = () => {
        this.setState({ accion: 0 });

    }


    mostrarModalAgregar = () => {
        this.setState({ accion: 1 });
        console.log("xd");
    }


    render() {
        return (
            <div className='container'>
                <div class="row">
                    <div class="col">
                        <h2>Movimientos</h2>
                        <p>Esta tabla contiene todas las operaciones realizadas de los almacenes</p>
                    </div>
                    <div class="col text-end align-items-center">
                        <button class="btn" onClick={() => this.mostrarModalAgregar()}>Registrar movimiento</button>
                    </div>
                </div>
                <div className='container-fluid'>
                <table className='table table-dark'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Fecha</th>
                                <th>Id Almacen</th>
                                <th>Tipo</th>
                                <th>Id Empresa</th>
                                <th>Id Empleado</th>
                                <th></th>
                            </tr>
                            
                        </thead>
                        <tbody>
                                {
                                    this.state.data.map(movimiento =>
                                        <tr key={movimiento.movementId}>
                                            <th scope='row'>{movimiento.movementId}</th>
                                            <td>{movimiento.date}</td>
                                            <td>{movimiento.originWarehouseId}</td>
                                            <td>{movimiento.type}</td>
                                            <td>{movimiento.companyId}</td>
                                            <td>{movimiento.employeeId}</td>
                                            <td>
                                                <button className="btn mx-3" onClick={() => this.mostrarModalUpdate()}>Editar</button>
                                                <button className="btn btn-danger" onClick={() => this.mostrarModalDelete(movimiento.productId)}>X</button>
                                            </td>
                                        </tr>
                                    
                                    )
                                }
                            </tbody>
                    </table>
                </div>

                <Modal
                    isOpen={this.state.accion == 1}
                    centered
                    size="lg"
                    toggle={this.mitoogle}

                >
                    <ModalHeader
                        toggle={this.mitoogle}
                        close={<button className="btn-lg" onClick={this.mitoogle}>x</button>}
                        className='bg-dark'
                    >
                        Agregar Movimiento
                    </ModalHeader>
                    <ModalBody className='bg-dark'>

                    </ModalBody>
                    <ModalFooter className='bg-dark'>
                        <button type="button" class="btn" onClick={this.mitoogle}>Cerrar</button>
                        <button type="button" onClick={() => this.agregarMovimiento() == true} class="btn">Agregar</button>
                    </ModalFooter>
                </Modal>


            </div>
        );
    }
}