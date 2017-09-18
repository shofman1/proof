import React, { Component } from 'react';
import {Row, Col, FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap';
import Validation from '../libraries/validation';

import '../App.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {searchValue: ''};
    }
    handleChange(event) {
        this.setState({searchValue: event.target.value.trim() });
    }
    onFormSubmit(event) {
        //zwaliduj numer nip itp.
        let v = new Validation();
        let num = this.state.searchValue;
        if(v.isNIPValid(num) || v.isREGONValid(num) || v.isKRSValid(num) ) {
            this.props.newSearch(num);
        } else {
            alert("Numer nieprawidłowy");
        }   
        event.preventDefault();
    }

    render() {
        //let x = <span className="glyphicon glyphicon-remove form-control-feedback"></span>  
        // has-error wstaw do form-group has-feedback
        return (
            <Row className="searchblock">
                <Col sm={12} md={8} lg={8}>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <FormGroup>
                    <Row>
                        
                        <Col lg={8} md={8} sm={8}>
                        <InputGroup>
                        <InputGroup.Addon>Szukaj wg</InputGroup.Addon>
                        <FormControl type="text" value={this.state.searchValue} placeholder="nip, regon, krs" onChange={this.handleChange.bind(this)} name="search" id="search" />
                        </InputGroup>
                        </Col>

                        <Col lg={4} md={4} sm={4}>
                        <Button bsStyle="primary" type="submit">Szukaj</Button>
                        </Col>   
                        
                    </Row>
                    </FormGroup>
                </form>
                </Col>
            </Row>
        );
    }
}

export default Search;