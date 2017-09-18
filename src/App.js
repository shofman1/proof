import React, { Component } from 'react';
import axios from 'axios';
import {Grid, Row, Col} from 'react-bootstrap';
import './App.css';

import Header from './components/header';
import Search from './components/search';
import Result from './components/result';
import History from './components/history';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
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
        miasto: '',
        regon: ''
      },
      searchHistory: []
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
      //sprawdzam, czy historia jest w cache przegladarki
      let localSavedHistory =  JSON.parse(localStorage.getItem("proof_app_search_history"));
      //console.log(localSavedHistory);
      if(localSavedHistory) {
        this.setState({searchHistory:localSavedHistory});
      }
  }
  
  shortenHistoryToConfigDays() {
    let elemsToRemove = this.state.searchHistory.length - this.state.configuration.historia;
    let x = 1;
    while(x <= elemsToRemove) {
      this.state.searchHistory.pop();  
      x++;
    }
  }

  saveHistoryToLocalStorage() {
    //console.log("ZAPIS DO LOCALSTORAGE");
    localStorage.setItem("proof_app_search_history", JSON.stringify(this.state.searchHistory));
  }

  //zapisz trafne wyszukiwanie do historii
  saveToHistory(objCompany) {
    console.log("Zapisuje do historii firme: " + objCompany.searchResult.nazwa);
    let timestamp = new Date().toDateString();
    //przejrzyj w pętli historię, jeśli jest juz bieżąca data, to ushiftnij element, jesli nie ma, dostaw nowy obiekt
    let arrHistory = this.state.searchHistory;
    if(arrHistory.length === 0) {
      arrHistory.push({timestamp: timestamp, searches: [objCompany.searchResult]});
    } else {
      let jestTenDzien = false;
      for (const objDay of arrHistory) { //szukaj daty
        if(objDay.timestamp === timestamp){
          objDay.searches.unshift(objCompany.searchResult);
          jestTenDzien = true;
          break;
        }
      }
      if(jestTenDzien===false) { //dostaw nowy obiekt dnia
        arrHistory.unshift({timestamp: timestamp, searches: [objCompany.searchResult]});
      }
    }
    this.shortenHistoryToConfigDays();
    //tu zapisz historię do LOCALSTORAGE
    this.saveHistoryToLocalStorage();
    this.forceUpdate(); //zamienić na poprawny update state
  }

  setSearchResult(companyInfo) {  
    if(companyInfo !== null) {
      let objCompany = {
          searchResult: {
              sukces: true,
              tresc: this.state.searchNumber,
              nazwa: companyInfo.Name,
              ulica: companyInfo.Street,
              numer: companyInfo.HouseNumber,
              kod: companyInfo.PostalCode,
              miasto: companyInfo.Place,
              regon: companyInfo.Regon
            }
            
      }
      this.setState(objCompany); 
      this.saveToHistory(objCompany);//zapisuj do historii tylko sensowne rezultaty, które dały wynik
    } else {
      this.setState({
          searchResult: {
              sukces: false,
              tresc: '',
              nazwa: '',
              ulica: '',
              numer: '',
              kod: '',
              miasto: '',
              regon: ''
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
        <Grid>
          <Search newSearch={this.handleNewSearch.bind(this)} />
          <Row>
            <Col sm={6}>
              <h3>Wynik szukania</h3>
              <Result searchResult={this.state.searchResult} />
            </Col>
            <Col sm={6}>
              <h3>Historia szukania</h3>
              <History searchNum={this.state.searchNumber} searchHistory={this.state.searchHistory} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

}

export default App;