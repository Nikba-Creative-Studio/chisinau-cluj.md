import classNames from 'classnames';
import { Container, Row, Col } from "react-bootstrap"
import style from "./Footer.module.css"

export const Footer = () => {
    return (
        <footer className={ classNames(style.footer, 'text-inverse') }>
            <Container className="py-5">
                <Row>
                    <Col xs={12} md={3}>
                        <p className="mb-4">© 2022 Licorser. <br className="d-none d-lg-block" />Toate drepturile sunt rezervate.</p>
                    </Col>
                    <Col xs={12} md={3}>
                        <h4 className="text-white mb-3">Pentru Rezervări</h4>
                        <address>şos. Hînceşti 145, Chișinău</address>
                        <a href="mailto:info@chisinau-cluj.md">info@chisinau-cluj.md</a>
                    </Col>
                    <Col xs={12} md={3}>
                        3
                    </Col>
                    <Col xs={12} md={3}>
                        4
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}