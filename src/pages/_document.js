import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TVWD427C');
              `,
            }}
          />
          {/* End Google Tag Manager */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="author" content="LTO Network" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
          <meta property="og:title" content="LTO Network - Start Your Journey" />
          <meta property="og:type" content="website" />

          <meta property="og:image" content="https://www.ltonetwork.com/img/logo-light.svg" />
          <meta property="og:url" content="https://ltonetwork.com" />
          <meta property="og:description" content="Next-Gen blockchain for B2B, Identities, Privacy, Ownership and Digital Collectibles." />

          <meta name="twitter:image" content="https://www.ltonetwork.com/img/logo-light.svg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="LTO Network - Start Your Journey" />
          <meta name="twitter:description" content="Next-Gen blockchain for B2B, Identities, Privacy, Ownership and Digital Collectibles." />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-MF9PZPR17H'
          />›
       
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <noscript>
            {/* Google Tag Manager (noscript) */}
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-TVWD427C"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
            {/* End Google Tag Manager (noscript) */}
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
