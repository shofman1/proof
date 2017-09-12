import React, { Component } from 'react';
import {Row, Col, Form, FormGroup, InputGroup, FormControl} from 'react-bootstrap';


class Result extends Component {
  render() {
    let searchResult = this.props.searchResult;
    console.log("W result.js");
    console.log(searchResult);
    let no_result=''    ;
    if(!searchResult.sukces) {
        no_result = <h3>Brak wyników!</h3>
    }
    return (
        <Row>
            <Col sm={12}>
                <Form horizontal>
                    <FormGroup>
                        <Col sm={12}>
                            <InputGroup>
                                <InputGroup.Addon>Nazwa</InputGroup.Addon>
                                <FormControl type="text" value={searchResult.nazwa} />
                            </InputGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={6}>
                            <InputGroup className="form_ulica">
                                <InputGroup.Addon>Ulica</InputGroup.Addon>
                                <FormControl type="text" value={searchResult.ulica} />
                            </InputGroup>
                        </Col>
                        <Col sm={6}>
                            <InputGroup>
                                <InputGroup.Addon>Numer</InputGroup.Addon>
                                <FormControl type="text" value={searchResult.numer} />
                            </InputGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={6}>
                            <InputGroup className="form_kod">
                                <InputGroup.Addon>Kod</InputGroup.Addon>
                                <FormControl type="text" value={searchResult.kod} />
                            </InputGroup>
                        </Col>
                        <Col sm={6}>
                            <InputGroup>
                                <InputGroup.Addon>Miasto</InputGroup.Addon>
                                <FormControl type="text" value={searchResult.miasto} />
                            </InputGroup>
                        </Col>
                    </FormGroup>
                </Form>
            </Col>
            {no_result}
        </Row>
        
    );
  }
}

export default Result;