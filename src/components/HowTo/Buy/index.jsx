import React from "react";
import Split from "../../Split";
import Link from 'next/link';

const Buy = () => {
    return (
        <section id="howTo--Buy" className="intro-section pt-50 pb-10 sub-bg">
          <div className="container lease-intro">
            <div className="htit mb-20 cont text-center">
              <span className="secondary-color subtitle">HOW TO</span>
              <h4 className="section-title">Buy LTO</h4>
            </div>
            <Split>
              <p className="wow txt words chars splitting mb-20" data-splitting>Buying LTO tokens or crypto in general sometimes needs a little getting used to. To make it easier on you and to help you avoid mistakes in the process we summarize tutorials for the biggest exchanges (CEX and DEX) right here.</p>
              <p className="wow txt words chars splitting" data-splitting>The number of exchanges offering LTO is steadily growing and writing a tutorial for every exchange is currently not feasible. Instead, we focus on markets with the biggest impact, namely Binance, AscendEX (Bitmax), Kucoin, Uniswap, and Pancake Swap, in addition to creating an abstract tutorial for other exchanges which usually offer ERC-20 LTO tokens.</p>
            </Split>
          </div>
        </section>
    );
}

export default Buy;