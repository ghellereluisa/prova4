//pagina de erro

import React from 'react';
import fundo from '../images/error.png';
import './parceiros.css'
import Navbar from '../components/navbar';
import Footer from "../components/footer";

function parceiros(){
    return(
        <div id="parceiros">
            <div className="navbar">
                <Navbar/>
            </div>

            <img alt="fundo" src={fundo}/>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
}

export default parceiros;
