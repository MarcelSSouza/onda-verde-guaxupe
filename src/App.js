import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Navbar';



import Main from './Main';
import MyFooter from './MyFooter';
import MyFormularioDoacao from './MyFormularioDoacao';
import MyFormularioContato from './MyFormularioContato';
import MyAjuda from './MyAjuda';
import MyCachorroCards from './MyCachorroCards';
import MyGatoCards from './MyGatoCards';
import MyQuemSomos from './MyQuemSomos';
function App() {
  return (
    <div className="App">
          <MyNavbar></MyNavbar>
        <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/contato" element={<MyFormularioContato />} /> 
          <Route path="/sobre" element={<MyQuemSomos />} /> 
          <Route path="/ajuda" element={<MyAjuda />} /> 
          <Route path="/adocao" element={<MyFormularioDoacao />} /> 
          <Route path="/cachorro" element={<MyCachorroCards />} /> 
          <Route path="/gato" element={<MyGatoCards />} /> 
        </Routes>
      </BrowserRouter>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
