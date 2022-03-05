import './Footer.css'
import React from 'react';
import { BsTwitter, BsInstagram, BsPinterest, BsGithub, BsFacebook } from 'react-icons/bs';

function Footer(props) {
    return (
        <footer className="footer">
            <div className="container content">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <p>P (+51) 974 932 382</p>
                        <p>M StainMRS@gmail.com</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <p>Dirección Calle Diseño 137,</p>
                        <p>Lima, Perú 12345</p>
                        <p>LM, San Isidro</p>
                    </div>
                    <div className="col-md-3 col-lg-6 order-md-last">
                        <div className="row justify-content-end">
                            <div className="col-md-12 col-lg-9 text-md-right mb-md-0 mb-4 text-end">
                                <ul>
                                    <li>
                                        <BsFacebook className='icons'/>
                                        <BsTwitter className='icons'/>
                                        <BsInstagram className='icons'/>
                                        <BsPinterest className='icons'/>
                                        <BsGithub className='icons'/>
                                    </li>
                                </ul>
                                <p className="copyright">
                                    Copyright © 2022 All rights reserved | NANOTECHWORLD
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;