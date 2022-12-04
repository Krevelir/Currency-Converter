{
    const specifyRate = () => {
        const inputCurrencyElement = document.querySelector(".js-inputCurrency");
        const outputCurrencyElement = document.querySelector(".js-outputCurrency");
        const currencyPair = `${inputCurrencyElement.value}/${outputCurrencyElement.value}`;

        switch (currencyPair) {
            case "PLN/EUR":
                return 0.21;
            case "PLN/USD":
                return 0.22;
            case "PLN/GBP":
                return 0.18;
            case "EUR/USD":
                return 1.03;
            case "EUR/GBP":
                return 0.87;
            case "EUR/PLN":
                return 4.71;
            case "USD/EUR":
                return 0.97;
            case "USD/GBP":
                return 0.84;
            case "USD/PLN":
                return 4.55;
            case "GBP/EUR":
                return 1.15;
            case "GBP/USD":
                return 1.19;
            case "GBP/PLN":
                return 5.41;
            default:
                return 1;
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const displayedCurrencyElement = document.querySelector(".js-outputCurrency");
        const inputMoneyElement = document.querySelector(".js-inputMoney");
        const outputMoneyElement = document.querySelector(".js-outputMoney");
        const outputMoney = specifyRate() * inputMoneyElement.value;

        outputMoneyElement.innerText = `${outputMoney.toFixed(2)}${displayedCurrencyElement.value}`;
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }
    init();
}