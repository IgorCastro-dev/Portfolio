import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Deixa eu me <span className="purple"> apresentar </span>
            </h1>
            <p className="home-about-body">
             Eu sempre fui apaixonado por programação e por resolver problemas complexos 🤷‍♂️
              <br />
              <br />Tenho alguns projetos desenvolvidos em 
              <i>
                <b className="purple"> Java. </b>
              </i>
              <br />
              <br />
              Minha área de interesse é construir &nbsp;
              <i>
                <b className="purple">Apis Rest </b> e
                tudo relacionado ao {" "}
                <b className="purple">
                  Backend.
                </b>
              </i>
              <br />
              <br />
              Sempre que possível, Eu aplico minha paixão desenvolvendo produtos
              com <b className="purple">SpringBoot</b> e
              toda a sua stack
              &nbsp;como
              <i>
                <b className="purple"> SpringData, SpringWeb, SpringSecurity</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Me encontre</h1>
            <p>
              Sinta-se livre para se <span className="purple">conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/IgorCastro-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>       
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/igor-castro-93bbb81ba/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
