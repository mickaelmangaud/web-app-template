import { FC } from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store';
import { appWithTranslation } from 'next-i18next';
import nextI18nConfig from '../next-i18next.config'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(App, nextI18nConfig);
