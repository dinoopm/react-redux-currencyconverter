import React from 'react'

const CurrencyConversionDisplay = ({currency}) => {

  return (
      <div className="mdl-shadow--2dp currency-converter">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--12-col">{currency.convertedMoneyValue} {currency.toCurrency} = </div>
              <div className="mdl-cell mdl-cell--12-col converted-value-text">{currency.moneyValue} <span>{currency.fromCurrency}</span></div>
            </div> 
      </div>         
  )
}


export default CurrencyConversionDisplay