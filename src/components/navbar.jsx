import React from 'react';
import './navbar.css';
import logo from '../images/logo-amarelo.png';
import {Link} from 'react-router-dom';

function navbar(){
    return(
        <nav className="Menu">
            <Link to='home' style={{textDecoration: 'none'}}>
                <img src = {logo} alt="logo"/>
            </Link>

            <div className="containerMenu">
                <ul className="lista">
                    <li>Cadastro</li>
                    <li>Contato</li>
                    <li>Parceiros</li>
                </ul>
            </div>

        </nav>
    );
}

export default navbar;