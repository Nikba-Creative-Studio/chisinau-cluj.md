import classNames from 'classnames';
import { Container, Row, Col } from "react-bootstrap"
import style from "./Footer.module.css"

// Assets
import { ReactComponent as Logo } from "../../assets/images/logo-light.svg"
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
import { SiViber } from "react-icons/si";

// Components
import { CallBack } from "./CallBack/CallBack"
import { Social } from "./Social/Social"

export const Footer = ({ isMobile, data }) => {

    const { address, phone_md, phone_ro, whatsapp, viber, email } = data;

    return (
        <>
            <div className="overflow-hidden">
                <div className="divider text-navy mx-n2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                        <path fill="var(--bs-navy)" d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"></path>
                    </svg>
                </div>
            </div>
            <footer className={classNames(style.footer, 'text-inverse')}>
                <Container className="pb-5">
                    <Row>

                        {!isMobile && (
                            <Col xs={12} md={3}>
                                <Logo className={classNames(style.logo, 'd-block', 'mb-4')} />
                                <p className="mb-4">© 2022 Licorser Travel Tur S.R.L. <br className="d-none d-lg-block" />Toate drepturile sunt rezervate.</p>
                                <Social data={data} />
                            </Col>
                        )}

                        {!isMobile && (
                            <Col xs={12} md={3}>
                                <h4 className="text-white mb-3">Contacte</h4>
                                <address className="me-4">{address}</address>
                                <a href={`mailto:${email}`} className="d-block">{email}</a>
                                <a href={`tel:${phone_md}`} className="d-block">MD: {phone_md}</a>
                                <a href={`tel:${phone_ro}`} className="d-block">RO: {phone_ro}</a>
                            </Col>
                        )}

                        <Col xs={12} md={3}>
                            <h4 className="text-white mb-3">Rezervări</h4>
                            <ul className="list-unstyled d-flex d-md-block justify-content-between align-items-start flex-wrap">
                                <li className="btn btn-outline-secondary mb-2 mb-md-1 text-nowrap flex-fill me-1 me-md-0">
                                    <a href={`tel:${phone_md}`} className="d-block">
                                        <AiOutlinePhone />  {phone_md}
                                    </a>
                                </li>

                                <li className="btn btn-outline-secondary mb-2 mb-md-1  text-nowrap flex-fill ms-1 ms-md-0">
                                    <a href={`tel:${phone_ro}`} className="d-block">
                                        <AiOutlinePhone />  {phone_ro}
                                    </a>
                                </li>

                                <li className="btn btn-outline-secondary mb-2 mb-md-1 text-nowrap flex-fill me-1 me-md-0">
                                    <a href={`whatsapp://send?phone=${phone_md}`} className="d-block">
                                        <AiOutlineWhatsApp />  {whatsapp}
                                    </a>
                                </li>

                                <li className="btn btn-outline-secondary text-nowrap flex-fill ms-1 ms-md-0">
                                    <a href={`viber://add?number=${phone_md}`} className="d-block">
                                        <SiViber />  {viber}
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={12} md={3}>
                            <div className="newsletter-wrapper">
                                <h4 className="text-white mb-3">Comandă un apel</h4>
                                <p className="mb-4">Introduceți numărul de telefon și revenim în cel mai scurt timp.<br /> Serviciul dat este gratuit.</p>
                                <CallBack />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}