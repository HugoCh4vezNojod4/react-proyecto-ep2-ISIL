import "./AboutUs.css";
import React from 'react';

function AboutUs(props) {
    return (
        <section id="about-us" className="border-top">
            <div className="container content">
                <div className="row">
                    <div id="block-center" className="col-md-8 col-md-offset-2 mx-auto">
                        <div className="title-block">
                            <h3>Acerca De</h3>
                            <h5>'NANOTECHWORLD' ES UNA EMPRESA CON GRANDES POSIBILIDADES</h5>
                        </div>
                        <p>Sed lacus augue, congue vel dapibus at, convallis semper lorem. Etiam volutpat, est eget feugiat tristique, erat leo ullamcorper turpis, vel auctor nunc diam vitae urna. Aliquam quis lacus et augue bibendum tincidunt. Duis id cursus ex. Sed cursus tortor id vehicula finibus. Nulla in pharetra lacus. Nulla nec elit nec sem feugiat eleifend sed sed neque. Mauris consequat in purus id cursus. Nunc suscipit lacinia ante, sit amet pulvinar orci venenatis a.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;