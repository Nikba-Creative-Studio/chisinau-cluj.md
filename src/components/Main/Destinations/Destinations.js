import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Pagination } from "swiper";
import "swiper/css/pagination";

import { Destination } from "./Destination/Destination";

export const Destinations = ({ data }) => {

    const { destinations } = data;

    return (
        <section id="destinations">
            <Container className="my-5 py-5">
                <Row>
                    <Col>
                        <p className="text-uppercase text-muted mt-5 mb-0 text-center">Transport Pasageri Chișinău - Cluj Napoca</p>
                        <h3 className="display-5 fw-bold text-navy text-center mb-5">Destinațiile noastre!</h3>
                    </Col>
                </Row>

                <Row className="text-center">
                    <Col>
                        <Swiper
                            pagination={{ 
                                clickable: true,
                                dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            "@0.75": {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            "@1.00": {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            "@1.50": {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                        }}
                        loop={true}   
                        loopFillGroupWithBlank={true} 
                        className="py-4 py-md-5"
                        >
                            {Object.keys(destinations).map((destination, index) => (
                                <SwiperSlide key={index} className="px-5 mb-5">
                                    <Destination title={destination} data={destinations[destination]} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}