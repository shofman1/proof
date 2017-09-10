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
        historia: 2
      },
      searchNumber: '',
      searchResult: {
        sukces: true,         
        nazwa: '',
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

  setSearchResult(companyInfo) {  
    if(companyInfo !== null) {
      this.setState({
          searchResult: {
              sukces: true,
              nazwa: companyInfo.Name,
              ulica: companyInfo.Street,
              numer: companyInfo.HouseNumber,
              kod: companyInfo.PostalCode,
              miasto: companyInfo.Place
          }
        }); 
    } else {
      this.setState({
          searchResult: {
              sukces: false,
              nazwa: '',
              ulica: '',
              numer: '',
              kod: '',
              miasto: ''
          }
        }); 
      }
  }       
          
  handleNewSearch(search_number) {
    this.setState({searchNumber: search_number});
    let that = this;
    axios.get('http://ihaveanidea.aveneo.pl/NIPAPI/api/Company?CompanyId=' + search_number)
      .then(function(response) {
        console.log(response.data);
        let companyInfo = response.data.CompanyInformation;
        that.setSearchResult(companyInfo);  //axios "psuje" this?
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    if(this.state.configuration.historia !== -1) {
      console.log("Historia dni: ", this.state.configuration.historia);
    }

    

    return (
      <div className="App">
        
        <Header />
        <div className="container">
          
          <Search newSearch={this.handleNewSearch.bind(this)} />
          
          <h3>Wynik szukania</h3>
          <div className="row">
            <div className="col-sm-6">

              <Result searchResult={this.state.searchResult} />

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
