import {Link} from "react-router-dom"
import {Button} from 'react-bootstrap'

function Actions(props) {
  const {datos,userLogin} = props
  //const datos = props.datos
  return (
          <>
            <Button variant="primary" as={Link} to={'/producto/'+datos.id}>Ver Detalle</Button>
            { userLogin &&
              <Button variant="primary" as={Link} to={'/productos/modificar/'+datos.id}>Modificar</Button>
            }
          </>
  );
}

export default Actions;