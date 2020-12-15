import React from "react";
import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="rodape">
        <section>
          <span>
            Copyright &copy; 2020 <strong>Iguassu Experience</strong>
            <br /> Todos os direitos reservados
            <br />
            Av. das Cataratas, 1118, Sala SuperNova – Vila Yolanda, Foz do Iguaçu – PR,
            85853-000
          </span>
        </section>
      </div>
    );
  }
}

export default Footer;
