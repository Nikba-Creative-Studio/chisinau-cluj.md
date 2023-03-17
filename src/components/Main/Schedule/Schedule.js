import { Container, Row, Col } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

import { AiFillClockCircle } from "react-icons/ai";

export const Schedule = ({ data }) => {

    const { routes } = data;

    return (
        <section id="schedule">
            <Container className="my-5 py-5">
                <Row>
                    <Col>
                        <p className="text-uppercase text-muted mt-5 mb-0 text-center">Orarul rutei Chișinău - Cluj Napoca</p>
                        <h3 className="display-5 fw-bold text-navy text-center mb-5">Destinații și Orașe</h3>
                    </Col>
                </Row>

                <Row className="text-center">
                    <Col>
                        <ListGroup as="ol" numbered>
                            <ListGroup.Item 
                                active
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold text-start">
                                        Tur - Oraș de plecare    
                                    </div>
                                </div>
                                Ora de plecare
                            </ListGroup.Item>
                        {Object.keys(routes.from).map((route, index) => (
                            <ListGroup.Item 
                                key={index} 
                                as="li"
                                action
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold text-start">
                                        {route}
                                    </div>
                                    {routes.from[route].station}
                                </div>
                                <Badge bg="primary" pill>
                                    <AiFillClockCircle className="mx-1" />
                                    {routes.from[route].from}
                                </Badge>
                                
                            </ListGroup.Item>
                        ))}
                        </ListGroup>
                    </Col>
                    <Col>
                    <ListGroup as="ol" numbered>
                        <ListGroup.Item 
                            active
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold text-start">
                                    Retur - Oraș de plecare    
                                </div>
                            </div>
                            Ora de plecare
                        </ListGroup.Item>
                        {Object.keys(routes.to).map((route, index) => (
                            <ListGroup.Item 
                                key={index} 
                                as="li"
                                action
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold text-start">
                                        {route}
                                    </div>
                                    {routes.to[route].station}
                                </div>
                                <Badge bg="primary" pill>
                                    <AiFillClockCircle className="mx-1" />
                                    {routes.to[route].from}
                                </Badge>
                                
                            </ListGroup.Item>
                        ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}