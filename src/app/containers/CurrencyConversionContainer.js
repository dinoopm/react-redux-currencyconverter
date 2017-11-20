import React from "react";
import {connect} from "react-redux";

import CurrencyConversionForm from "../components/CurrencyConversionForm";
import { setCurrency,fromCurrency,toCurrency,convertCurrency} from "../actions/CurrencyConversionActions";

const mapStateToProps = (state) => {
  return {
    currency: state.currency
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    changeCurrency:(e,currency)=>{
      dispatch(setCurrency(e.target.value));
      dispatch(convertCurrency(e.target.value,currency.fromCurrency,currency.toCurrency));
    },
    changeFromCurrency:(e,currency)=>{
      dispatch(fromCurrency(e.target.value));
      dispatch(convertCurrency(currency.moneyValue,e.target.value,currency.toCurrency));
    },
    changeToCurrency:(e,currency)=>{
      dispatch(toCurrency(e.target.value));
      dispatch(convertCurrency(currency.moneyValue,currency.fromCurrency,e.target.value));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyConversionForm)