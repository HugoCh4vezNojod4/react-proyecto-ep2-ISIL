import React, { Component } from 'react';
import Infofab from './Info-fab';
import './Table.css';

class table extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listaProveedores: []
        }
    }

    componentDidMount() {
        const rutaServicio = "https://servicios.campus.pe/servicioproveedores.php";
        fetch(rutaServicio)
            .then(
                res => res.json()
            )
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        listaProveedores: result
                    })
                }
            )
    }

    dibujarTabla(datosTabla) {
        return (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Empresa</th>
                        <th scope="col">Contacto</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">País</th>
                    </tr>
                </thead>
                <tbody>
                    {datosTabla.map(itemProveedor =>
                        <tr scope="row" key={itemProveedor.idproveedor}>
                            <td>{itemProveedor.idproveedor}</td>
                            <td>{itemProveedor.nombreempresa}</td>
                            <td>{itemProveedor.nombrecontacto}</td>
                            <td>{itemProveedor.telefono}</td>
                            <td>{itemProveedor.direccion}</td>
                            <td>{itemProveedor.ciudad}</td>
                            <td className='text-end'>{itemProveedor.pais}</td>                            
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    render() {
        let contenidoTabla = this.dibujarTabla(this.state.listaProveedores)
        let contenidoInfofab = <Infofab/> 
        return (
            <div>
            <section class="border-top">
                <div class="container contetent">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 mx-auto">
                            <div id="proveedores" class="text-center">
                                <h3>Proveedores</h3>
                            </div>
                            {contenidoTabla}
                        </div>
                    </div>
                </div>
            </section>
            {contenidoInfofab}
            </div>
        );
    }
}

export default table;