import React from 'react';
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import './home.css';
import Visitantes from "../JSON/visitantes.json"


function home(){
    return(
    <div id="home">
        <div className="navbar">
            <Navbar/>
        </div>

        <div className="texto">
            <p> Conheça uma das 7 maravilhas da natureza da melhor forma possivel </p>
        </div>

        <div className="tabela">
            <h2>Visitantes em Foz do Iguaçu</h2>
            <table className="numeros">
                {Visitantes.visitantes.map((dados)=>(
                    <tr className="trtabela" key={dados.id}>
                        <td>{dados.ano}</td>
                        <td>{dados.numero}</td>
                    </tr>
                ))}
            </table>
        </div>


        <div className="footer">
            <Footer/>
        </div>
    </div>
    );

}





export default home;