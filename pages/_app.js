import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';
import { GTM_ID, pageview } from '../lib/gtm';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Opaku Store | e-Commerve</title>
				<meta
					name="description"
					content="Opaku Store is a clothing retail company that is engaged in the development, manufacturing,
          and sells a wide variety of products for toddlers."
				/>
				<meta name="keyword" content="ecommerce, retail, online shop" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* Google Tag Manager - Global base code */}
			<Script
				id="gtag-base"
				strategy="beforeInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
				}}
			/>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
