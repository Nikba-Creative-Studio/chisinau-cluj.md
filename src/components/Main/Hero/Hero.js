import { Container, Row, Col } from "react-bootstrap"
import ReactTypingEffect from 'react-typing-effect'
import style from './Hero.module.css'
//Assets
import hero from "../../../assets/images/hero.png"

export const Hero = () => {
    return (
        <section className={style.hero}>
            <Container className="py-5">
                <Row>
                    <Col xs={12} md={6} xs={{ order: 'last' }} md={{ order: 'first' }}>
                        <h1 className="display-5 fw-bold mt-5 text-navy">
                            Hai cu noi la
                        </h1>
                        <ReactTypingEffect
                            text={[
                                "Cluj-Napoca",
                                "Iași",
                                "Sovata",
                                "Târgu-Mureș",
                                "Turda"
                            ]}
                            className="display-5 fw-bold text-primary"
                            speed={100}
                            eraseSpeed={50}
                            typingDelay={1000}
                            eraseDelay={1000}
                        />
                        <p className="lead fs-lg my-5 text-navy">We are an award winning design agency that strongly believes in the power of creative ideas.</p>

                        <a className="btn btn-lg btn-warning text-white rounded-pill me-2 px-4">Rezervă un loc</a>

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