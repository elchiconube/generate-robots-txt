import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load('AHPSAQEI', {
      includedDomains: ['generaterobotstxt.com'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Component {...pageProps} />;
}

export default App;