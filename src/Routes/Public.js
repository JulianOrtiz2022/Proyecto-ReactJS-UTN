import React, {useState} from "react";
import Home from '../Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Registro from '../Pages/Registro';
import Login from '../Pages/Login';
import Menu from '../Components/Menu';
import Detalle from '../Pages/Detalle';
import NotFound from '../Pages/NotFound';
import Container from 'react-bootstrap/Container'
import AltaProducto from '../ABMProductos/AltaProductos';
import ModificarProductos from '../ABMProductos/ModificarProductos';
import AuthContext from '../Context/AuthContext';

function Public() {
  const [login, setLogin] = useState(false)
  return (
    
      <Router>
        <Menu  statusLogin={login}/>
        <Container>
        <AuthContext.Consumer>
        {
          context=>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/alta" element={<Registro />}/>
          <Route path="/ingresar" element={<Login setLoginUser={setLogin} />}/>
          <Route path="/producto/alta" element={<AltaProducto />}/>
          { context.userLogin &&
            <Route path="/productos/modificar/:id" element={<ModificarProductos />}/>
          }
          <Route path="/producto/:id" element={<Detalle />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        }
        </AuthContext.Consumer>
        </Container>
      </Router>

  );
}

export default Public;
