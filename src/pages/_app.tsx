import { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';

import SEO from '../../next-seo.config';
import { AlertContext } from '../contexts';
import * as gtag from '../lib/gtag';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isInfo, setIsInfo] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <AlertContext.Provider
        value={{
          isError,
          errorMessage,
          isInfo,
          infoMessage,
          isSuccess,
          successMessage,
          setIsError,
          setErrorMessage,
          setIsInfo,
          setInfoMessage,
          setIsSuccess,
          setSuccessMessage,
        }}
      >
        <ThemeProvider attribute='class'>
          <Component {...pageProps} />
        </ThemeProvider>
      </AlertContext.Provider>
    </>
  );
};

export default MyApp;
