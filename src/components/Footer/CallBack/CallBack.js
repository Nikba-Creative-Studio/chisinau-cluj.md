import { useState } from 'react';

import { Form, InputGroup, FormControl, Button } from "react-bootstrap"
import { AiOutlinePhone } from "react-icons/ai";

export const CallBack = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="dark-fields">
            <InputGroup className="mb-3">
                <InputGroup.Text>+</InputGroup.Text>
                <FormControl
                    placeholder="Telefon de contact"
                    aria-label="Telefon de contact"
                    required
                    minLength="11"
                />
                <Button type="submit" variant="primary">
                    <AiOutlinePhone />
                </Button>
                <Form.Control.Feedback type="invalid">
                    Vă rugăm să introduceți un număr de telefon.
                </Form.Control.Feedback>
            </InputGroup>
        </Form>
    )
}