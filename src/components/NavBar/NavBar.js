import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CardWidget';


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to='/'>Inicio</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link active" aria-current="page" to='/Smartphone'>Celulares</NavLink>
                        <NavLink className="nav-link" to='/NTB'>Notebooks</NavLink>
                        <NavLink className="nav-link" to='/PCs'>Pcs</NavLink>
                        <NavLink className="nav-link" to='/cart'><CartWidget /></NavLink>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar