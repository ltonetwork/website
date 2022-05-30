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
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
