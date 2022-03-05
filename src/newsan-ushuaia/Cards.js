import React, { Component } from 'react';
import "./Cards.css";
import Informacion from "./Info.js";
import Paisajes from './Paisajes';

class Cards extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cardsTrabajadores: [],
        }
    }

    componentDidMount() {
        const rutaServicio = "https://servicios.campus.pe/servicioclientes.php";
        fetch(rutaServicio)
            .then(
                res => res.json()
            )
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        cardsTrabajadores: result
                    })
                }
            )
    }

    dibujarCards(datosCards) {
        return (
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {datosCards.map(itemTrabajador =>
                <div className="col" key={itemTrabajador.idcliente}>
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">{itemTrabajador.nombres}</h5>
                            <span>{itemTrabajador.idcliente}</span>
                            <p className="card-text">{itemTrabajador.cargo} {itemTrabajador.pais}</p>
                            <p className="card-text"><small class="text-muted">{itemTrabajador.telefono}</small></p>
                        </div>
                    </div>
                </div>
                )}
            </div>
        )
    }

    render() {
        let contenidoCards = this.dibujarCards(this.state.cardsTrabajadores);
        let contenidoInfo = <Informacion/>
        let contenidoPaisajes = <Paisajes/>
        return (
            <div>
                <section className="border-top">
                    <div className="container content">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 mx-auto">
                                <div id="trabajadores" className="text-center">
                                    <h3>Nuestros Trabajadores</h3>
                                </div>
                                {contenidoCards}                            
                            </div>
                        </div>
                    </div>
                </section>
                {contenidoInfo}
                {contenidoPaisajes}
            </div>
        );
    }
}

export default Cards;