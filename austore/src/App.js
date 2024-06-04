import './App.css';
import Footer from './views/Layout/Footer';
import Header from './views/Layout/Header';
import Top from './views/Layout/Top';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { store } from './store';
import ProductDetailsPage from './pages/ProductDetailsPage';
import React from 'react';

function App() {
  return (
    <Provider store={store}>
      <Top />
      <Header />
      <div className='container mt-16 mb-48'>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path="/detail/:id" element={<ProductDetailsPage />} />
      </Routes>
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
