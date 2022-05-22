import Head from "next/head";
import Script from 'next/script'

const CurrencyWidget = () => {
  return (
    <>
      <Script type="text/javascript" src="https://crypto.com/price/static/widget/index.js"></Script>
      {//@ts-ignore
        <div id="crypto-widget-CoinTicker" data-theme="dark" data-design="classic" data-coins="lto-network"></div>}
    </>
  )
}

export default CurrencyWidget