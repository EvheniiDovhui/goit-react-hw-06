import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import AddContactForm from './components/AddContactForm';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app">
          <h1>Книга контактів</h1>
          <AddContactForm />
          <Filter />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;