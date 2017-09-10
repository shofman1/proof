import React, { Component } from 'react';
import '../App.css';

class Search extends Component {
  render() {
    //let x = <span className="glyphicon glyphicon-remove form-control-feedback"></span>  
    // has-error wstaw do form-group has-feedback
    return (
        <section className="row searchblock">
            <div className="col-sm-12 col-md-8 col-lg-8">
            <form className="form-horizontal" action="">
                <div className="form-group has-feedback has-error">
                    <div className="col-sm-8">
                        <div className="input-group">
                            <span className="input-group-addon">Szukaj firmy</span>
                            <input type="text" className="form-control" placeholder="np. PL7651467841" name="search" id="search" />
                             <div className="input-group-btn">
                                <button type="submit" className="btn btn-primary"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                             </div>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </section>
    );
  }
}

export default Search;