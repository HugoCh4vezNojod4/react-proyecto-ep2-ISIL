import "./Galeria.css";
import React from 'react';
import foto1 from '../assets/LAPTOP.jpeg';
import foto2 from '../assets/KEYBOARD.jpeg';
import foto3 from '../assets/WORLD.jpeg';
import foto4 from '../assets/PCB.jpeg';
import foto5 from '../assets/WORKER1.jpeg';
import foto6 from '../assets/DJI-PICTURE.jpeg';
import foto7 from '../assets/LAPTOP1.jpeg';

function Galeria(props) {
    return (
        <section className="border-top">
            <div className="container">
                <div className="row">
                    <div id="Fotos" className="text-center">
                        <h3>Fotos Interesantes</h3>
                    </div>
                    <div className="padd col-sm-8">
                        <div className="bg-cover" style={{background: `url(${foto1}) no-repeat center`}}></div>
                    </div>
                    <div className="padd col-sm-4">
                        <div className="bg-cover" style={{background: `url(${foto2}) no-repeat center`}}></div>
                    </div>
                </div>
                <div className="row">
                    <div className="padd col-sm">
                        <div className="bg-cover" style={{background: `url(${foto3}) no-repeat center`}}></div>
                    </div>
                    <div className="padd col-sm">
                        <div className="bg-cover" style={{background: `url(${foto4}) no-repeat center`}}></div>
                    </div>
                    <div className="padd col-sm">
                        <div className="bg-cover" style={{background: `url(${foto5}) no-repeat center`}}></div>
                    </div>
                </div>
                <div className="row">
                    <div className="padd col-sm-4">
                        <div className="bg-cover" style={{background: `url(${foto6}) no-repeat center`}}></div>
                    </div>
                    <div className="padd col-sm-8">
                        <div className="bg-cover" style={{background: `url(${foto7}) no-repeat center`}}></div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Galeria;