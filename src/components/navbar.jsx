// import React from 'react';
// import './navbar.css';
// import logo from '../images/logo-amarelo.png';
// import {Link} from 'react-router-dom';

// function navbar(){
//     return(
//         <nav className="menu">
//             {/* <div className="imagem">
//                 <Link to='home' style={{textDecoration: 'none'}}>
//                     <img src = {logo} alt="logo"/>
//                 </Link>
//             </div> */}
//             <div className="containerMenu">
//                 <ul className="lista">
//                     <li>Cadastro</li>
//                     <li>Contato</li>
//                     <li>Parceiros</li>
//                 </ul>
//             </div>

//         </nav>
//     );
// }

// export default navbar;



import React from "react";
import "./navbar.css";
import Logo from "../images/logo-amarelo.png";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbarWrapper">
        <div className="logoWrapper">
          <Link to="/">
            <img src={Logo} alt="Iguassu Experience" />
          </Link>
        </div>
        <div className="buttonWrapper">
          <ul className="listWrapper">
            <li>
              <Link className="listItem" to="/Sobre">
                Sobre
              </Link>
            </li>

            <li>
              <Link className="listItem" to="/Parceiros">
                Parceiros
              </Link>
            </li>
            
            <li>
              <Link className="listItem" to="/Cadastro">
                Cadastro
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;