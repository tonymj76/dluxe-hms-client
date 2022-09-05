import '../public/css/global.css';
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import {Provider} from "react-redux";
import {storeFn, wrapper} from "redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import {ErrorBoundary} from 'react-error-boundary'
import { ToastContainer } from 'react-toastify';
import {ErrorFallback} from "components/ErrorBoundary";
import "react-toastify/dist/ReactToastify.css";

const persistor = persistStore(storeFn);

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <Provider store={storeFn}>
          <PersistGate loading={<div>loading</div>} persistor={persistor}>
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
            >
              <Layout>
                <Component {...pageProps} key={router.route} />
                <ToastContainer
                  position="top-right"
                  autoClose={8000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  draggable={true}
                  closeOnClick
                  pauseOnHover
                />
              </Layout>
            </ErrorBoundary>
          </PersistGate>
      </Provider>
    </div>
  );
}

export default wrapper.withRedux(MyApp)
