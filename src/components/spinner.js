import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import '../App.css';

class Spinner extends Component {
        render() {
        let divStyle = {};
        if(this.props.run) {
            divStyle = {visibility: 'visible', height: '25px'};
        } else {
            divStyle = {visibility: 'hidden', height: '0px'};
        }
        return (
            <Row>
                <Col sm={12}>
                    <div style={divStyle}>Trwa wyszukiwanie... <img src='images/spinner.png' className="Spinner" alt="@"/></div>
                </Col>
            </Row>
        );
    }
}

export default Spinner;