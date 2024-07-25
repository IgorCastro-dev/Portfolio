import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/igor_profissional.png";
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
                <b className="purple"> Java </b>
              </i>
              , 
              <i>
                <b className="purple"> Typescript </b>
              </i>
              , 
              <i>
                <b className="purple"> Python </b>
              </i>
               dentre outras.
              <br />
              <br />
              Minha área de interesse é construir &nbsp;
              <i>
                <b className="purple">Apis Rest </b> 
                e trabalhar com frameworks modernos. 
                Onde posso aplicar minhas habilidades tanto no{' '} 
                <b className="purple">
                  Frontend
                </b>{' '} 
                quanto no {' '} 
                <b className="purple">
                  Backend.
                </b>
              </i>
              <br />
              <br />
              Tenho experiência como desenvolvedor fullstack, em projetos com uso de <i>
                <b className="purple">Spring Boot</b> e <b className="purple">Angular</b>
              </i> 
                . Trabalho com diversas ferramentas e tecnologias, como 
                <b className="purple"> Intellij</b>, <b className="purple">Eclipse</b>, 
                <b className="purple">VS Code</b>, <b className="purple">RabbitMQ</b>, 
                <b className="purple"> JUnit</b>, <b className="purple">Mockito</b>, 
                <b className="purple"> GitLab</b>, <b className="purple">Azure DevOps</b>, 
                <b className="purple"> SQL Server</b>, 
                <b className="purple"> Oracle</b>, <b className="purple">DB2</b>, 
                <b className="purple"> MySQL</b>, <b className="purple">Redis</b>, 
                <b className="purple"> Git</b>, <b className="purple">Docker</b>, 
                <b className="purple"> AWS</b>, além de padrões de
                 projeto e <b className="purple">TDD</b>. Estou sempre aprendendo e 
                 aprimorando minhas habilidades para me manter atualizado com as melhores práticas
                  do mercado.
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
                  href="https://www.linkedin.com/in/igor-junqueira-castro/"
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
