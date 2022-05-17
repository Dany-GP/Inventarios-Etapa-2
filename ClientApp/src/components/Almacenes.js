import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';
import './styles/index.css';
import './styles/Almacenes.css';
import {
    Container, Table, Button, Modal, ModalBody,
    ModalHeader, ModalFooter, Form, FormGroup, Label, Input
} from 'reactstrap';
import { refresh } from 'aos';
//jQuery libraries
 
import 'jquery/dist/jquery.min.js';
 
//Datatable Modules

import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
const $ = require('jquery');
$.DataTable = require('datatables.net');

export class Almacenes extends Component {


    constructor(props) {
        super(props);
        this.state = {
            accion: 0, data: [], categorias: [], suppliers: [], companies: [],
            name: "", proveedor: 0, categoria: 0, quantity: "", precio: 0,
            company: 0
        };

    }

    componentDidMount() {
        

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
                $(document).ready(function () {
                    
                    /*$('#tabla_1').DataTable({
                        data: dataApi,
                        columns:[
                            {title: "ID"},
                            {title: "Producto"},
                            {title: "Categoria"},
                            {title: "Precio"},
                            {title: "Info"},
                            {title: ""}
                        ]
                    });*/
                    
                });
            }
        );

        fetch('api/categories', options).then(response => {
            return response.json();
        }).then(
            (dataCategories) => {
                this.setState({ categorias: dataCategories });
            }
        );

        fetch('api/suppliers', options).then(response => {
            return response.json();
        }).then(
            (dataSuppliers) => {
                this.setState({ suppliers: dataSuppliers });
            }
        );

        fetch('api/companies', options).then(response => {
            return response.json();
        }).then(
            (dataCompanies) => {
                this.setState({ companies: dataCompanies });
            }
        );
    }

    nameChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });

    }

    agregarProducto() {
    
        const producto =    {
            
            productName: this.state.name,
            supplierId: parseInt( this.state.proveedor),
            categoryId: parseInt( this.state.categoria),
            quantityPerUnit: this.state.quantity,
            unitPrice: parseFloat(this.state.precio),
            photoPath: null,
            companyId: parseInt( this.state.company)
        }
        console.log(producto);

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        };

        console.log(options);
        
        fetch("api/Products", options).then(
            (response) => {
                return response.status;
            }
        ).then(
            (code) => {
                if (code == 201) {
                    alert("ya jaló");
                } else {
                    console.log(code);
                    
                }
            }
        )


    }

    mitoogle = () => {
        this.setState({ accion: 0 });
    }

    mostrarModalAgregar() {
        this.setState({ accion: 1 });
    }

    mostrarModalUpdate = () => {

    }

    render() {
        return (

            <div className='container'>
                <h1>Catálogo de Productos</h1>
                <button type='button' className='btn btn-orange my-3' onClick={() => this.mostrarModalAgregar()}>Agregar</button>
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
                        {
                            this.state.data.map(producto =>
                                <tr key={producto.productId}>
                                    <th scope='row'>{producto.productId}</th>
                                    <td>{producto.productName}</td>
                                    <td>{producto.categoryId}</td>
                                    <td>{producto.unitPrice}</td>
                                    <td>{producto.quantityPerUnit}</td>
                                    <td>
                                        <button className="btn mx-3" onClick={() => this.mostrarModalUpdate}>Editar</button>
                                        <button className="btn btn-danger" onClick={() => this.mostrarModalUpdate}>X</button>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>

                <Modal
                    isOpen={this.state.accion == 1 && true}
                    centered
                    size="lg"
                    toggle={this.mitoogle}

                >
                    <ModalHeader
                        toggle={this.mitoogle}  
                        close={<button className="btn-lg" onClick={this.mitoogle}>x</button>}
                        className='bg-dark'
                    >
                        Agregar producto
                    </ModalHeader>
                    <ModalBody className='bg-dark'>
                        <Form>
                            <FormGroup className='my-3'>
                                <Label for='name'>Nombre del producto</Label>
                                <Input className='bg-dark text-white' name='name' onChange={evt => this.nameChange(evt)} value={this.state.name}></Input>
                            </FormGroup>
                            <FormGroup className='my-3'>
                                <Input className='bg-dark text-white' type='select' name='proveedor' onChange={evt => this.nameChange(evt)} value={this.state.proveedor}>
                                    <option selected value="default">Selecciona un proveedor</option>
                                    {
                                        this.state.suppliers.map(supplier =>
                                            <option value={supplier.supplierId}>{supplier.companyName}</option>
                                        )

                                    }
                                </Input>
                            </FormGroup>
                            <FormGroup className='my-3'>
                                <Input className='bg-dark text-white' type='select' name='categoria' onChange={evt => this.nameChange(evt)} value={this.state.categoria}>
                                    <option selected value="default">Selecciona una categoria</option>
                                    {
                                        this.state.categorias.map(categoria =>
                                            <option value={categoria.categoryId}>{categoria.categoryName}</option>
                                        )

                                    }
                                </Input>
                            </FormGroup>
                            <FormGroup className='my-3'>
                                <label for="quantity" class="form-label">Cantidad por unidad</label>
                                <input name='quantity' onChange={evt => this.nameChange(evt)} value={this.state.quantity} type="text" class="form-control bg-dark text-white" />
                            </FormGroup>
                            <FormGroup className='my-3'>
                                <label for="precio" class="form-label">Precio unitario</label>
                                <input name='precio' value={this.state.precio} onChange={evt => this.nameChange(evt)} type="number" class="form-control bg-dark text-white" />
                            </FormGroup>
                            <FormGroup className='my-3'>
                                <Input className='bg-dark text-white' type='select' name='company' onChange={evt => this.nameChange(evt)} value={this.state.company}>
                                    <option selected value="default">Selecciona una compañía</option>
                                    {
                                        this.state.companies.map(companie =>
                                            <option value={companie.companyId}>{companie.companyName}</option>
                                        )

                                    }
                                </Input>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter className='bg-dark'>
                        <button type="button" class="btn" onClick={this.mitoogle}>Cerrar</button>
                        <button type="button" onClick={() => this.agregarProducto() == true} class="btn">Agregar</button>
                    </ModalFooter>
                </Modal>
            </div>

        );
    }

}