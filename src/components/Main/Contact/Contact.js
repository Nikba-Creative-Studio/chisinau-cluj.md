import { Container, Card, Row, Col } from "react-bootstrap"
import style from './Contact.module.css'
import { ContactForm } from './ContactForm/ContactForm'

// Assets
import { IoTicketOutline } from "react-icons/io5";

export const Contact = ({ data }) => {
    return (
        <section id="contact">
            <Container className="my-5 py-5">
                <Card className="bg-navy text-white shadow-lg">
                    <Card.Body className="p-4 p-md-5">
                        <Row className="m-0 m-md-3">
                            <Col xs={12} md={6}>
                                <IoTicketOutline className={style.icon} />
                                <Card.Title className="display-5 mt-3 fw-bold">
                                    Doriți să rezervați un loc?
                                </Card.Title>
                                <Card.Text className="lead fs-lg mt-3">
                                    Pentru a rezerva un bilet la autocar vă rugăm să completați formularul dat. <br /> După procesarea solicitării veți recepționa un mesaj la numărul de telefon indicat.
                                </Card.Text>
                            </Col>
                            <Col xs={12} md={6}>
                                <ContactForm data={data} />
                            </Col>                                
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    )
}