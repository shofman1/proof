import React, { Component } from 'react';
import {Row, ListGroup, Badge, ListGroupItem, Panel} from 'react-bootstrap';

class History extends Component {
    render() {
        if ( (this.props.searchHistory === null) || (this.props.searchHistory.length<=0)) {
            return (
                <Row>Brak historii</Row>
            );
        } else {
            let historyDay = this.props.searchHistory.map( function(day, index ) {
                let searchItems = day.searches.map( function(oneSearch, idx) {
                    let daneAdresowe = oneSearch.nazwa +", " + oneSearch.ulica + " " + oneSearch.numer + ", " + oneSearch.kod + " " + oneSearch.miasto;
                    return <ListGroupItem key={idx}><span>Treść zapytania:{oneSearch.tresc}<br/></span>{daneAdresowe}<Badge>REGON: {oneSearch.regon}</Badge></ListGroupItem>
                })
                return <Panel key={index} header={'Wyszukiwania z dnia: ' + day.timestamp} >
                        <ListGroup>
                            {searchItems}
                        </ListGroup>
                        </Panel>
            });
            return (
                <Row>{historyDay}</Row>
            );
        }
    }
}

export default History;