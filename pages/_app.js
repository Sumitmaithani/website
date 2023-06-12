import Head from 'next/head';
import Layout from '../components/layout/Layout'
import Banner from '../components/campaigns/Banner'
import AppContext from '../context/AppContext'
import Footer from "../components/Footer";
import { MDXProvider } from '../components/MDX';
import AlgoliaSearch from '../components/AlgoliaSearch';
import ScrollButton from '../components/buttons/ScrollButton';
import { useRouter } from 'next/router';
import { FormattedMessage, IntlProvider, useIntl } from 'react-intl';

import en from "../i18n/en.json";
import fr from "../i18n/fr.json";

import '../styles/globals.css'

const messages = {
  en,
  fr
}

function getDirection(locale){
  return "ltr";
}

export default function App({ Component, pageProps, router }) {
  const { locale, locales, push } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
    <AppContext.Provider value={{ path: router.asPath }}>
      <Head>
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </Head>
      <MDXProvider>
        <AlgoliaSearch>
          <div className="flex flex-col min-h-screen">
            <Banner />
            <Layout>
              <Component {...pageProps} />
              <ScrollButton/>
            </Layout>
            <div className="mt-auto">
              <Footer />
            </div>
          </div>
        </AlgoliaSearch>
      </MDXProvider>
    </AppContext.Provider>
    </IntlProvider>
  )
}
