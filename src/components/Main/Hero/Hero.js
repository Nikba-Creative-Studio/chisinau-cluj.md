import classNames from 'classnames';
import { Container, Row, Col } from "react-bootstrap"
import ReactTypingEffect from 'react-typing-effect'
import style from './Hero.module.css'
import { Link } from "react-scroll"

//Assets
import hero from "../../../assets/images/hero.png"

import { GiCroissant, GiCoffeeCup, GiTeapotLeaves } from "react-icons/gi";
import { MdWifi } from "react-icons/md";


export const Hero = ({ data }) => {

    const { destinations } = data;
    
    // Convert the object to an array
    const destination = Object.keys(destinations)
  

    return (
        <section className={style.hero} id="home">
            <Container className="py-5">
                <Row>
                    <Col xs={{ span: 12, order: 'last' }} md={{ span: 6, order: 'first' }}>
                        <h1 className="display-5 fw-bold mt-5 text-navy">
                            Hai cu noi la
                        </h1>
                        <ReactTypingEffect
                            text={destination}
                            className="display-5 fw-bold text-warning"
                            speed={100}
                            eraseSpeed={50}
                            typingDelay={1000}
                            eraseDelay={1000}
                        />
                        <p className="lead fs-lg mt-5 pe-5 text-navy">
                            <strong className="d-block mb-2">Rută zilnică din Chișinău, Gara de Sud : 21:30</strong> 
                            Asigurăm cele mai bune condiții de călătorie, un drum sigur și rapid!<br /> 
                            În Drum vă servim gratuit cu cafea, croissant și desigur acces nelimitat la WiFi.</p>
                        
                        <ul className={classNames(style.features, 'list-unstyled', 'list-inline', 'mb-5')}>
                            <li className="list-inline-item me-3"><GiCroissant /></li>
                            <li className="list-inline-item me-3"><GiCoffeeCup /></li>
                            <li className="list-inline-item me-3"><GiTeapotLeaves /></li>
                            <li className="list-inline-item"><MdWifi /></li>
                        </ul>

                        <Link className="btn btn-lg btn-warning" to="contact">Rezervă un loc</Link>

                    </Col>
                    <Col xs={12} md={6}>
                        <figure>
                            <img src={hero} alt="Cluj-Napoca" className="img-fluid" />
                        </figure>
                    </Col>
                </Row>
                
            </Container>
        </section>
    )
}