import React from "react";
import "./Paisajes.css";
import foto1 from "../assets/AEREA.jpeg";
import foto2 from "../assets/AERIA3.jpeg";
import foto3 from "../assets/MAP.jpeg";
import foto4 from "../assets/AERIA2.jpeg";
import foto5 from "../assets/AERIA1.jpeg";

function Paisajes(props) {
    return (
        <section class="border-top">
            <div class="container">
                <div id="Fotos" class="text-center">
                    <h3>Fotos de Newsan Ushuaia</h3>
                </div>
                <div class="row">            
                    <div class="padd col-sm-4">
                        <div class="bg-cover" style={{background: `url(${foto1}) no-repeat center`}}></div>
                    </div>
                    <div class="padd col-sm-8">
                        <div class="bg-cover" style={{background: `url(${foto2}) no-repeat center`}}></div>
                    </div>
                </div>
                <div class="row">
                    <div class="padd col-sm">
                        <div class="bg-cover" style={{background: `url(${foto3}) no-repeat center`}}></div>
                    </div>
                    <div class="padd col-sm">
                        <div class="bg-cover" style={{background: `url(${foto4}) no-repeat center`}}></div>
                    </div>
                    <div class="padd col-sm">
                        <div class="bg-cover" style={{background: `url(${foto5}) no-repeat center`}}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Paisajes;