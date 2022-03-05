import React from 'react';
import { BsBookmarksFill, BsBriefcaseFill, BsFillPatchExclamationFill, BsLightbulbFill } from 'react-icons/bs';

function Noticias(props) {
    return (
        <section className="border-top">
            <div className="container content text-center">
                <div className="row">
                    <div className="col-md-3">
                        <BsFillPatchExclamationFill className='fa-xl'/>
                        <h4>Nuevo</h4>
                        <p>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="col-md-3">
                        <BsBriefcaseFill className='fa-xl'/>
                        <h4>Trabajo</h4>
                        <p>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="col-md-3">
                        <BsBookmarksFill className='fa-xl'/>
                        <i className="fa fa-graduation-cap fa-lg"></i>
                        <h4>Logros</h4>
                        <p>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="col-md-3">
                        <BsLightbulbFill className='fa-xl'/>
                        <h4>Ideas</h4>
                        <p>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Noticias;