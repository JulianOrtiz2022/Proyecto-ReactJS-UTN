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
function Public() {
  return (
    
      <Router>
        <Menu />
        <Container>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/alta" element={<Registro />}/>
          <Route path="/ingresar" element={<Login />}/>
          <Route path="/producto/:id" element={<Detalle />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Container>
      </Router>

  );
}

export default Public;
