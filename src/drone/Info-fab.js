import React from 'react';
import foto1 from '../assets/FABRICA.jpeg'

function Infofab(props) {
    return (
        <section class="border-top">
            <div class="container">
                <div class="row">
                    <div class="padd col-sm-8">
                        <h4>¿Como trabajan nuestros Proveedores</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non urna aliquam, tincidunt eros at, volutpat nibh. Praesent eros neque, ornare nec tristique nec, vestibulum id massa. Mauris tortor lorem, sagittis sit amet lorem quis, ullamcorper porta tortor. Cras ligula sem, viverra ac elit in, gravida interdum nisl. Donec tristique molestie.</p>
                        <div class="bg-cover" style={{background: `url(${foto1}) no-repeat center`}}></div>
                    </div>
                    <div class="padd col-sm-4">
                        <h2>Newsan Ushuaia</h2>
                        <p>Vivamus lacus neque, euismod at iaculis vitae, dapibus quis erat. Nam cursus bibendum hendrerit. Sed quis dolor volutpat, maximus leo vitae, tristique est. Vestibulum ac tempus nisi. Aenean massa ipsum, lobortis vel pellentesque viverra, finibus ac tortor. Etiam pretium sem id egestas consectetur. Donec feugiat nulla eu est imperdiet, a scelerisque massa fermentum.</p>
                        <br/>
                        <p>Aliquam hendrerit lorem velit, eget porta nibh mollis a. Donec at ligula vitae mauris luctus efficitur id id mauris. Quisque imperdiet hendrerit tortor sit amet cursus. Ut maximus, ante quis placerat malesuada, justo ligula iaculis massa, non lobortis nulla metus non lectus. Donec vel tortor at erat vulputate tristique. Maecenas quis mauris dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus elementum mi iaculis lobortis, cursus risus ac, luctus nunc. Mauris laoreet arcu eget lectus auctor tristique. Morbi mauris.</p>
                        <br/>
                        <p>Quisque imperdiet hendrerit tortor sit amet cursus. Aliquam hendrerit lorem velit, eget porta nibh mollis a. Ante quis placerat malesuada, justo ligula iaculis massa, non lobortis nulla metus non lectus. Donec vel tortor at erat vulputate tristique. Maecenas quis mauris dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus elementum mauris.</p>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default Infofab;