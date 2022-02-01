import LazyLoad from 'react-lazyload';

import { Card } from "react-bootstrap";
import classNames from 'classnames';

import style  from "./Destination.module.css";

export const Destination = ({ title, data }) => {

    const { image, station, from, to } = data;

    return (
        <Card className="shadow-lg border-0">
            <Card.Body>
                <LazyLoad height={112}>
                    <img src={image} alt={title} className={classNames(style.image, 'img-fluid', 'rounded-circle', 'mb-3', 'mt-2')} />
                </LazyLoad>
                <Card.Title>{title}</Card.Title>
                <ul className="list-unstyled">
                    <li className="mb-3 text-muted">{station}</li>
                    <li>Ora de plecare: {from}</li>
                    <li>Ora de sosire: {to}</li>
                </ul>
            </Card.Body>
        </Card>
    )
}