import LazyLoad from 'react-lazyload';
import { Container, Row, Col } from "react-bootstrap"

export const Transport = ({ data }) => {

    const { transports } = data;

    return (
        <section id="transport">
            <Container className="my-5 py-5">
                <Row>
                    <Col>
                        <p className="text-uppercase text-muted mt-5 mb-0 text-center">Transport Pasageri Chișinău - Cluj Napoca</p>
                        <h3 className="display-5 fw-bold text-navy text-center mb-5">Cu ce călătorim?</h3>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-between align-items-start">

                    {Object.keys(transports).map((transport, index) => (
                        <Col key={index} className="align-self-start mb-5">
                            <LazyLoad height={400}>
                                <figure className="lift rounded mb-6">
                                    <img src={transports[transport].image} alt={transports[transport].model} className="img-fluid rounded" />
                                </figure>
                            </LazyLoad>
                            <div className="text-muted">{transports[transport].number}</div>
                            <h4 className="text-navy">{transports[transport].model}</h4>
                        </Col>
                    ))}

                </Row>
            </Container>
        </section>
    )
}