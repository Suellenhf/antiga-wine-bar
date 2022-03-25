import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Menu from './pages/Menu'
// importar todas as páginas


function App() {
  return (
    <Router>
      <Navbar />
      <Homepage />
      <Routes>
        {/* <Route path='/' exact component={Homepage} /> */}
        <Route path="menu" element={<Menu />} />
        {/* <Route path='/antiga' exact component={Antiga} /> */}
        {/* <Route path='/menu-vinhos' exact component={Menuvinhos} /> */}
        {/* <Route path='/contactos' exact component={Contactos} /> */}
      </Routes>
    </Router>
  );
}

export default App;