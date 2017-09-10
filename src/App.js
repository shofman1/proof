import React, { Component } from 'react';
import Header from './components/header';
import Search from './components/search';
import Result from './components/result';
import History from './components/history';

//import $ from 'jquery';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      configuration: {
        historia: -1
      },
      searchField: '',
      resultFields: {
        nazwaFirmy: '',
        ulica: '',
        numer: '',
        kod: '',
        miasto: ''
      }
    }
  }

  getCofiguration() {
      axios.get('http://localhost:3000/konfiguracja.json')
      .then(function (response) {
        this.setState({configuration: response.data}) 
      }.bind(this))
      .catch(function (error) {
        console.log(error);
        alert("Błąd odczytu pliku konfiguracyjnego. Ustawiam historię na 2 dni.");
        this.setState({
                        configuration: 
                          {
                            historia:2
                          }
                      }); 
      }.bind(this));
  }

  componentDidMount() {
      this.getCofiguration();
  }

  render() {
    
    if(this.state.configuration.historia !== -1) {
      console.log("Historia dni: ", this.state.configuration.historia);
    }

    return (
      <div className="App">
        
        <Header />
        <div className="container">
          
          <Search  props="s" />
          
          <h3>Wynik szukania</h3>
          <div className="row">
            <div className="col-sm-6">

              <Result />

            </div>
            <div className="col-sm-6">

              <History data={this.state} />

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
