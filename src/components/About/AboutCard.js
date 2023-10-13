import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Ola pessoal, eu sou <span className="purple">Igor Castro </span>
            do <span className="purple"> Rio de Janeiro, Brasil.</span>
            <br /> Eu sou estudante no último ano na graduação de sistemas de  
            informação na faculdade federal fluminense(UFF).
            <br />
            Além disso, já tive participação em empresas na parte de desenvolvimento de sistemas como a 
            3CON Consultoria e Sistemas e a Petros - Fundação Petrobras de Seguridade Social.
            <br />
            <br />
            Além da codificação, algumas outras atividades que adoro fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Estudar
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Esforce-se para construir coisas que façam a diferença!"{" "}
          </p>
          <footer className="blockquote-footer">Igor Castro</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
