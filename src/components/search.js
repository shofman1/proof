import React, { Component } from 'react';
import {Row, Col, FormGroup, InputGroup, FormControl, Button, Alert} from 'react-bootstrap';
import Validation from '../libraries/validation';

import '../App.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
                searchValue: '',
                isSearchValueCorrect: true
            };
    }
    handleChange(event) {
        this.setState({searchValue: event.target.value.trim() });
        this.setState({isSearchValueCorrect: true}); //ukryj komunikat o bledzie
        
        
    }
    
    getValidationState() {
        const length = this.state.searchValue.length;
        if (length > 8) return 'success';
        else if (length > 0) return 'error';
    }

    onFormSubmit(event) {
        //zwaliduj numer nip itp.
        let v = new Validation();
        let num = this.state.searchValue;
        if(v.isNIPValid(num) || v.isREGONValid(num) || v.isKRSValid(num) ) {
            this.props.newSearch(num);
        } else {
            this.setState({isSearchValueCorrect: false});
        }   
        event.preventDefault();
    }

    render() {
        //let x = <span className="glyphicon glyphicon-remove form-control-feedback"></span>  
        // has-error wstaw do form-group has-feedback
        let errorInfo = "";
        if(this.state.isSearchValueCorrect) {
            errorInfo = "";    
        } else {
            errorInfo =  <Alert bsStyle="danger">
                            <strong>Błędny numer</strong> Sprawdź format i ponów wyszukiwanie:
                            <ul>
                                <li>NIP: 10 cyfr, możliwe myślniki i przedrostek "PL", np. 613-721-33-67</li>
                                <li>REGON: 9 lub 14 cyfr, np. 730215244</li>
                                <li>KRS: 10 cyfr z przedrostkiem "KRS", np. KRS0000318602</li>
                            </ul>
                          </Alert>
        }

        return (
            <div>
                <Row className="searchblock">
                    <Col sm={12} md={8} lg={8}>
                    <form onSubmit={this.onFormSubmit.bind(this)}>
                        <FormGroup validationState={this.getValidationState()}>
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
                <Row>
                    <Col sm={12} md={8} lg={8}>
                        {errorInfo}
                    </Col> 
                </Row>
            </div>
        );
    }
}

export default Search;