import React, { Component } from 'react';
import '../App.css';

class History extends Component {
  render() {
      let foo;
      if(this.props.data) {
          foo = this.props.data.foo;
      }
    return (
        <section className="row">
            
            <div className="panel-group" id="historyAccordion">
                <div className="panel panel-default">
                    <div className="panel-heading">
                    <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Wyszukiwania, 27.05.2017</a>
                    </h4>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse in">
                        <ul className="list-group">
                            <li className="list-group-item">{foo}<span className="badge">PL576-222-33-33</span></li>
                            <li className="list-group-item">Firma, adres, kod, miasto<span className="badge">PL576-222-33-33</span></li>
                            <li className="list-group-item">Firma, adres, kod, miasto<span className="badge">PL576-222-33-33</span></li>
                            <li className="list-group-item">Firma, adres, kod, miasto<span className="badge">PL576-222-33-33</span></li>
                            <li className="list-group-item">Firma, adres, kod, miasto<span className="badge">PL576-222-33-33</span></li>
                        </ul>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                    <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Wyszukiwania, 27.05.2017</a>
                    </h4>
                    </div>
                    <div id="collapse2" className="panel-collapse collapse">
                        <ul className="list-group">
                            <li className="list-group-item">Firma, adres, kod, miasto<span className="badge">PL576-222-33-33</span></li>
                            <li className="list-group-item">Firma, adres, kod, miasto<span className="badge">PL576-222-33-33</span></li>
                            <li className="list-group-item">Firma, adres, kod, miasto<span className="badge">PL576-222-33-33</span></li>
                            <li className="list-group-item">Firma, adres, kod, miasto<span className="badge">PL576-222-33-33</span></li>
                            <li className="list-group-item">Firma, adres, kod, miasto<span className="badge">PL576-222-33-33</span></li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
  }
}

export default History;