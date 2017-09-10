import React, { Component } from 'react';
import '../App.css';

class Result extends Component {
  render() {
    //let x = <span className="glyphicon glyphicon-remove form-control-feedback"></span>  
    // has-error wstaw do form-group has-feedback
    return (
        <section className="row">
            <div className="col-sm-12">
                <form className="form-horizontal" action="">
                    <div className="form-group">
                        <div className="col-sm-12">
                            <div className="input-group">
                                <span className="input-group-addon">Nazwa</span>
                                <input type="text" className="form-control" placeholder="Firma sp.z.o.o" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-8">
                            <div className="input-group">
                                <span className="input-group-addon">Ulica</span>
                                <input type="text" className="form-control" placeholder="Słowackiego" />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="input-group">
                                <span className="input-group-addon smaller">Nr</span>
                                <input type="text" className="form-control" placeholder="8A" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-6">
                            <div className="input-group">
                                <span className="input-group-addon smaller">Kod</span>
                                <input type="text" className="form-control" placeholder="78-609" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="input-group">
                                <span className="input-group-addon">Miasto</span>
                                <input type="text" className="form-control" placeholder="Warszawa" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
  }
}

export default Result;