const currencyConversionReducer = (state = {
      fromCurrency: "USD",
      toCurrency: "INR",
      moneyValue: 1
}, action) => {
    switch (action.type) {
        case "CONVERT_CURRENCY_FULFILLED":
            state = {
                ...state,
                convertedMoneyValue: action.payload
            };
            break;

         case "SET_CURRENCY":
            state = {
                ...state,
                moneyValue: action.payload
            };
            break;   

         case "SET_FROM_CURRENCY":
            state = {
                ...state,
                fromCurrency: action.payload
            };
            break;      

         case "SET_TO_CURRENCY":
            state = {
                ...state,
                toCurrency: action.payload
            };
            break; 
    }
    return state;
};

export default currencyConversionReducer;


