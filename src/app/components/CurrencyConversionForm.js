import React from 'react'
import { CURRENCIES } from '../utils/currencies';

const CurrencyConversionForm = ({currency,changeCurrency,changeFromCurrency,changeToCurrency}) => {


  const currencyOptions = CURRENCIES.map((currency, index) => {

    return <option value={currency.value} key={index}>{currency.name}</option>
    
  });

  return (
          <form action="#" className="mdl-grid">

            <div className="mdl-cell mdl-cell--4-col">
              <div  className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input  className="mdl-textfield__input" min="1" type="number" value={currency.moneyValue} onChange={(e)=>{ 
                  changeCurrency(e,currency);
                }}/>

              </div>
            </div>
            <div className="mdl-cell mdl-cell--4-col">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <select className="mdl-textfield__input" name="fromCurrency" onChange={(e)=>{
                    changeFromCurrency(e,currency)
                }} value={currency.fromCurrency}>{currencyOptions}</select>
              </div>
            </div>
            <div className="mdl-cell mdl-cell--4-col">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <select className="mdl-textfield__input" name="fromCurrency" onChange={(e)=>{
                  changeToCurrency(e,currency);
                }} value={currency.toCurrency}>{currencyOptions}</select>
              </div>
            </div>

          </form>
  )
  
}       
export default CurrencyConversionForm    
