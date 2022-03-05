import "./Navbar.css"
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/nanotechworld.svg';
import isologo from '../assets/world-nanotechworld.svg';
import { BsFacebook, BsGithub, BsInstagram, BsPinterest, BsTwitter } from "react-icons/bs";


function Navbar(props) {
    return (
       <nav id="navbar" className="navbar navbar-light fixed-top">
           <div className="container-fluid">
                <a className="navbar-brand">
                    <img id="isologo" src={isologo} alt="" />
                    <img id="logo" src={logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <FontAwesomeIcon icon={faBars} id="bars-menu-btn" className="fa-lg"/>
                </button>
                <div className="collapse navbar-collapse offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header position">
                        <button type="button" className="btn-close mx-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav mx-auto flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Newsan Ushuaia
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/trabajadores">Trabajadores</Link>
                                    </li>
                                    <li>
                                        <a href="#" className="dropdown-item">Paisaje</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Drones
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/proveedores">DJI</Link>
                                    </li>
                                    <li>
                                        <a href="drone-syma" className="dropdown-item">SYMA</a>
                                    </li>
                                    <li>
                                        <a href="drone-jrc" className="dropdown-item">JRC</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="copyright">2022 © NANOTECHWORLD All rights reserved.</div>
                        <ul className="container">
                            <li className="social row text-center">
                                        <BsFacebook className='icons col'/>
                                        <BsTwitter className='icons col'/>
                                        <BsInstagram className='icons col'/>
                                        <BsPinterest className='icons col'/>
                                        <BsGithub className='icons col'/>
                            </li>
                        </ul>
                </div>                
            </div>
       </nav>
    );
}

export default Navbar;