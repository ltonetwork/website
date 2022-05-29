import Head from "next/head";
import Script from 'next/script'

const CurrencyWidget = () => {
  return (
    <>
      <Script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></Script>
      {//@ts-ignore
        <div className="currency-widget coinmarketcap-currency-widget" data-currencyid="3714" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>}
    </>
  )
}

export default CurrencyWidget