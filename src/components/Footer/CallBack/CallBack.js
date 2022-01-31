import { useState } from 'react';

import { useForm } from "react-hook-form";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap"
import { AiOutlinePhone } from "react-icons/ai";

export const CallBack = () => {

    const [show, setShow] = useState(false);

    const { register, reset, formState: { errors }, handleSubmit } = useForm();
   
    const onSubmit = async (data) => {
        console.log(data);

        const body = {
            type: "callBack",
            phone: data.phone
        }

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
        setShow(true);
    }

    return (
        <Form noValidate onSubmit={handleSubmit(onSubmit)} className="dark-fields">
            <InputGroup className="mb-3">
                <InputGroup.Text>+</InputGroup.Text>
                <FormControl
                    placeholder="Telefon de contact"
                    aria-label="Telefon de contact"
                    type="tel"
                    {...register("phone", { required: true, minLength: 8 })}
                />
                <Button type="submit" variant="warning">
                    <AiOutlinePhone />
                </Button>
                {errors.phone?.type === 'required' && "Introduceți numărul de telefon"}
            </InputGroup>
            {show &&
                <p className="mt-3 mt-md-2 text-warning" onClose={() => setShow(false)}>
                    Solicitarea dumneavoastră a fost trimisă.
                </p>
            }
        </Form>
    )
}