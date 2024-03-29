import { useState } from 'react';

import { Row, Col, Form, InputGroup, FormControl, Button, Alert } from "react-bootstrap"

import { useForm } from "react-hook-form";

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ro from 'date-fns/locale/ro';
registerLocale('ro', ro)

export const ContactForm = ({ data }) => {

    const [show, setShow] = useState(false);
    const [showDirect, setShowDirect] = useState(false);

    const { routes } = data;

    const [startDate, setStartDate] = useState(new Date());

    const selectOneSelected = "Chișinău"
    const selectTwoSelected = "Cluj Napoca"

    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    
    const onSubmit = async (data) => {
        
        const body = {
            src: "chisinau-cluj.md",
            type: "reservation",
            name: data.name,
            phone: data.phone,
            from: data.from,
            to: data.to,
            passengers: data.passengers,
            date: startDate,
        }

        console.log(data);

        
        try {
            await fetch("https://api.chisinau-cluj.md/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
        } catch (error) {
            console.log(error);
        }
        reset();
        
        setShowDirect(data.from + " - " + data.to);
        setShow(true);
    }

     

    return (
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Oraș de plecare</Form.Label>
                        <Form.Select 
                            aria-label="Selectați orașul de plecare" 
                            defaultValue={selectOneSelected} 
                            placeholder="Selectați orașul de plecare" 
                            {...register("from", { required: true })}
                        >
                            {Object.keys(routes.from).map((route, index) => (
                                <option key={index} value={route}>{route}</option>
                            ))}
                        </Form.Select>
                        {errors.from && <span className="text-danger">Orașul de plecare este obligatoriu</span>}
                    </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Oraș de sosire</Form.Label>
                        <Form.Select 
                            aria-label="Selectați orașul de sosire" 
                            defaultValue={selectTwoSelected} 
                            placeholder="Selectați orașul de sosire"
                            {...register("to", { required: true })}
                        >
                            
                            {Object.keys(routes.to).map((route, index) => (
                                <option key={index} value={route}>{route}</option>
                            ))}
                        </Form.Select>
                        {errors.to && <span className="text-danger">Orașul de sosire este obligatoriu</span>}
                    </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Data de plecare</Form.Label>
                        <DatePicker
                            selected={startDate} 
                            dateFormat="dd/MM/yyyy"
                            locale="ro" 
                            className="form-control" 
                            onChange={(date) => setStartDate(date)}
                        />
                    </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassengers">
                        <Form.Label>Număr de locuri</Form.Label>
                        <FormControl
                            aria-label="Număr de locuri"
                            aria-describedby="basic-addon2"
                            placeholder="Număr de locuri"
                            className="form-control"
                            type="number"
                            defaultValue="1"
                            {...register("passengers", { required: true, minLength: 1, maxLength: 10 })}
                        />
                        {errors.passengers?.type === 'required' && "Numărul de locuri este obligatoriu"}
                    </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nume Prenume</Form.Label>
                        <FormControl
                            placeholder="Cojocari Ion"
                            aria-label="Cojocari Ion"
                            required
                            {...register("name", { required: true, minLength: 5 })}
                        />
                        {errors.name?.type === 'required' && "Introduceți numele dumneavoastră"}
                    </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Telefon de contact</Form.Label>

                        <InputGroup>
                            <InputGroup.Text>+</InputGroup.Text>
                            <FormControl
                                placeholder="37368600100"
                                aria-label="37368600100"
                                type="tel"
                                {...register("phone", { required: true, minLength: 8 })}
                            />
                            {errors.phone?.type === 'required' && "Introduceți numărul de telefon"}
                        </InputGroup>

                    </Form.Group>
                </Col>

                <Col xs={12} md={{ span: 6, offset: 6 }}>
                    <div className="d-grid gap-2 mt-2 mt-md-0">
                        <Button variant="warning" type="submit">
                            Trimite
                        </Button>
                    </div>
                </Col>
                
                {show &&
                    <Alert variant="warning" className="mt-4 mt-md-3" onClose={() => setShow(false)} dismissible>
                        Rezervare efectuată cu succes!.<br /> { showDirect }<br /> Vă mulțumim că ați ales călătorii noi!
                    </Alert>
                }

            </Row>
        </Form>
    )
}