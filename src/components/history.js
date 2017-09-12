import React, { Component } from 'react';

class History extends Component {
    render() {

        if (this.props.searchHistory[0] !== undefined) {
            console.log("Jest jakas Historia Wyszukiwań");
        }

        let historyDay = this.props.searchHistory.map( function(day) {
            
            let searchItems = day.searches.map( function(oneSearch, index) {
                console.log(oneSearch);
                return <li key={index} className="list-group-item">{oneSearch.nazwa +", " + oneSearch.ulica + " " + oneSearch.numer + ", " + oneSearch.kod + " " + oneSearch.miasto}<span className="badge">{oneSearch.regon}</span></li>
            })

            return <div className="panel panel-default" key={day.timestamp}>
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Wyszukiwania z dnia {day.timestamp}</a>
                        </h4>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse in">
                        <ul className="list-group">
                            {searchItems}
                        </ul>
                    </div>
            </div>
        });
        
        



        return (
            <section className="row">
                <div className="panel-group" id="historyAccordion">
                    {historyDay}
                </div>
            </section>
        );
    }
}

export default History;