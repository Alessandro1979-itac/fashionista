import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Topbar from './components/Topbar';
import Routes from './routes';

import { store, persistor } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Topbar />
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
