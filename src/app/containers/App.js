import React from "react";
import {connect} from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";

import CurrencyConversionDisplay from "../components/CurrencyConversionDisplay";
import CurrencyConversionContainer from "../containers/CurrencyConversionContainer";

import { convertCurrency} from "../actions/CurrencyConversionActions";

class App extends React.Component {

    componentDidMount(){

       this.props.init(this.props.currency);
    }
    render() {
        return (
            <div className="container">
              <Header />
              <main className="mdl-layout__content">
                <div className="page-content">
                  <CurrencyConversionDisplay currency={this.props.currency} />
                  <CurrencyConversionContainer />
                </div>
              </main>
              <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      currency: state.currency
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: (currency) => {
          dispatch(convertCurrency(currency.moneyValue,currency.fromCurrency,currency.toCurrency));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
