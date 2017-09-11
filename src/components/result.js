import React, { Component } from 'react';
import '../App.css';

class Result extends Component {
  render() {
    //let x = <span className="glyphicon glyphicon-remove form-control-feedback"></span>  
    // has-error wstaw do form-group has-feedback
    let searchResult = this.props.searchResult;
    console.log("W result.js");
    console.log(searchResult);
    let no_result=''    ;
    if(!searchResult.sukces) {
        no_result = <h3>Brak wyników!</h3>
    }
    return (
        <section className="row">
            <div className="col-sm-12">
                <form className="form-horizontal" action="">
                    <div className="form-group">
                        <div className="col-sm-12">
                            <div className="input-group">
                                <span className="input-group-addon">Nazwa</span>
                                <input type="text" value={searchResult.nazwa} className="form-control" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-8">
                            <div className="input-group">
                                <span className="input-group-addon">Ulica</span>
                                <input type="text" value={searchResult.ulica} className="form-control" placeholder="" />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="input-group">
                                <span className="input-group-addon smaller">Nr</span>
                                <input type="text" value={searchResult.numer} className="form-control" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-6">
                            <div className="input-group">
                                <span className="input-group-addon  ">Kod</span>
                                <input type="text" value={searchResult.kod} className="form-control" placeholder="" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="input-group">
                                <span className="input-group-addon">Miasto</span>
                                <input type="text"value={searchResult.miasto} className="form-control" placeholder="" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {no_result}
        </section>
        
    );
  }
}

export default Result;