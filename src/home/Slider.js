import "./Slider.css"
import React from 'react';
import foto1 from '../assets/WORKER.jpg';
import foto2 from '../assets/DRONE.jpg';
import foto3 from '../assets/PROCESSOR.jpg';
import foto4 from '../assets/LAPTOP1.jpg';

function Slider(props) {
    return (
        <section className="slider">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={foto1} className="d-block w-100" alt="..."/>
                            <div id="c1" className="carousel-caption d-none d-md-block">
                                <h1>Estamos Trabajando</h1>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={foto2} className="d-block w-100" alt="..."/>
                            <div id="c2" className="carousel-caption d-none d-md-block">
                                <h1>¡Tecnología de Punta!</h1>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={foto3} className="d-block w-100" alt="..."/>
                            <div id="c3" className="carousel-caption d-none d-md-block">
                                <h1>Procesadores Increíbles</h1>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={foto4} className="d-block w-100" alt="..."/>
                            <div id="c4" className="carousel-caption d-none d-md-block">
                                <h1>Eficiencia de Trabajo</h1>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Slider;