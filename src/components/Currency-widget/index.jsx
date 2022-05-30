import Head from "next/head";

const CurrencyWidget = () => {
  setTimeout(function(){ 
    var script = document.createElement('script');
    script.src = 'https://files.coinmarketcap.com/static/widget/currency.js';
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(script);
  })
  return (
    <>
      {//@ts-ignore
        <div className="currency-widget coinmarketcap-currency-widget" data-currencyid="3714" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>}
    </>
  )
}

export default CurrencyWidget