import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './assets/styles/reset.css';
import './App.css';

// import Navbar from './Navbar';
import Header from './components/Header';
import Homepage from './pages/home';
import Menu from './pages/menu'
// importar todas as páginas


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='menu' element={<Menu />} />
        {/* <Route path='/antiga' exact component={Antiga} /> */}
        {/* <Route path='/menu-vinhos' exact component={Menuvinhos} /> */}
        {/* <Route path='/contactos' exact component={Contactos} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;