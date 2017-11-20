import axios from 'axios';
import fx from "../utils/money";

export function convertCurrency(money, fromCurrency, toCurrency) {
    return {
        type: "CONVERT_CURRENCY",
        payload: new Promise((resolve, reject) => {
            let url = "http://api.fixer.io/latest";
            axios.get(url).then(function(response){
            	console.log("test")
              fx.base = "EUR";
              fx.rates = response.data.rates
              let rate = fx(money).from(fromCurrency).to(toCurrency)
                resolve(rate.toFixed(2));
            });  
        })
    };
}

export function setCurrency(value) {
    return {
        type: "SET_CURRENCY",  
        payload: value
    };
}

export function fromCurrency(value) {
    return {
        type: "SET_FROM_CURRENCY",
        payload: value
    };
}

export function toCurrency(value) {
    return {
        type: "SET_TO_CURRENCY",
        payload: value
    };
}