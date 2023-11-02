import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Navbar';
import React from 'react';



import Main from './Main';
import MyFooter from './MyFooter';
import MyFormularioAdocao from './MyFormularioAdocao';
import MyFormularioContato from './MyFormularioContato';
import MyAjuda from './MyAjuda';
import MyNoticias from './MyNoticias';
function App() {
  return (
    <div className="App">
      <MyNavbar></MyNavbar>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/contato" element={<MyFormularioContato />} />
          <Route path="/ajuda" element={<MyAjuda />} />
          <Route path="/adocao" element={<MyFormularioAdocao />} />
          <Route path="/noticias" element={<MyNoticias />} />
        </Routes>
      </BrowserRouter>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
