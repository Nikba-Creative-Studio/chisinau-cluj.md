import classNames from 'classnames';
import style from "./Header.module.css"
import { Navbar, Nav, Container } from "react-bootstrap"


//Assets
import { ReactComponent as Logo } from "../../assets/images/logo.svg"
import { AiOutlineCalendar } from "react-icons/ai";

export const Header = () => {
    return (
        <header className="bg-gray">
            <Navbar bg="light" expand="lg">
                <Container className="">

                    <Navbar.Brand href="#home">
                        <Logo className={classNames(style.logo, 'img-fluid')} />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>

                        <Nav>
                            <Nav.Link className={style.link} href="#home">Principală</Nav.Link>
                            <Nav.Link className={style.link} href="#destinations">Destinații</Nav.Link>
                            <Nav.Link className={style.link} href="#services">Servicii</Nav.Link>
                            <Nav.Link className={style.link} href="#testimonials">Ce spun clienții</Nav.Link>
                            <Nav.Link className="d-none d-md-block btn btn-primary rounded-pill text-white px-4" href="#contact">
                                <AiOutlineCalendar className="me-2" />
                                Rezervă bilet
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}