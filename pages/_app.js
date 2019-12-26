import React from 'react';
import App from 'next/app';
import {ApolloProvider} from '@apollo/react-hooks';

import withData from '../utils/withApollo';
import Head from "next/dist/next-server/lib/head";

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Head>
          <title>Template</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

// Wraps all components in the tree with the data provider
export default withData(MyApp);
