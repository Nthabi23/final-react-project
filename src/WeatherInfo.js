import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return(
        <div className="WeatherInfo">
            <Row>
                <Col>
                <h1>{props.data.city}</h1>
                <ul>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
                </Col>
                <Col>
                <ul>
                    <li>
                        <FormattedDate date={props.data.date} />
                    </li>
                </ul>
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
<Col className="weather-description col-sm-6">
<div className="row">
    <div className="col-sm-4 justify-content-center icon-current">
        <img
        src={props.data.icon}
        alt={props.data.description}
        className="img-fluid weather-icon" />
    </div>
    <div clasNamme="col-sm-6">
        <WeatherTemperature celsius={props.data.temperature} />
    </div>
</div>
</Col>
<Col className="col-sm-6">
<ul>
    <li>
        Humidity:
        {props.data.humidity}%
    </li>
    <li>Wind: {Math.round(props.data.wind * 3.6)} km/h</li>
</ul>
</Col>
            </Row>
        </div>
    );
}