import React, { Fragment, useEffect } from 'react';
import GlobalStyle from '../styles/Globals';
import Head from 'next/head';
import GoogleFonts from 'next-google-fonts';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import PropTypes from 'prop-types';

function App({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.lang = 'en';
  }, []);

  return (
    <Fragment>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" />
      <GlobalStyle />
      <DefaultSeo {...SEO} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link
          rel="mask-icon"
          href="/static/favicons/safari-pinned-tab.svg"
          color="#603cba"
        />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#603cba" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
};

const FixNum = (num) => Number((num / 1000).toFixed(6));

export function reportWebVitals(metric) {
  switch (metric.name) {
    case 'FCP':
      console.log('First Contentful Paint (s): ', FixNum(metric.startTime));
      break;
    case 'LCP':
      console.log('Largest Contentful Paint (s): ', FixNum(metric.startTime));
      break;
    case 'CLS':
      console.log('Cumulative Layout Shift (s): ', FixNum(metric.startTime));
      break;
    case 'FID':
      console.log('First Input Delay (s): ', FixNum(metric.startTime));
      break;
    case 'TTFB':
      console.log('Time to First Byte (s): ', FixNum(metric.startTime));
      break;
    case 'Next.js-hydration':
      console.log('Next.js hydration (s): ', FixNum(metric.startTime));
      break;
    default:
      console.log(`${metric.name} (S)`, FixNum(metric.startTime));
      break;
  }
}

export default App;
