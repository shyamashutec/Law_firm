import { Auth } from 'aws-amplify';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import awsconfig from '../src/aws-exports';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
});
function CustomApp({ Component, pageProps }: AppProps) {
  Auth.configure(awsconfig);
  return (
    <div>
      <Head>
        <title>LAW</title>
      </Head>
      <main>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </main>
    </div>
  );
}

export default CustomApp;
