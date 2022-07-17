import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <title>Adrizen portfolio</title>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
