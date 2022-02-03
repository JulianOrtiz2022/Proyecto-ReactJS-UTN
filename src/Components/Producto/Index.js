import {Card} from 'react-bootstrap';
import {Col} from "react-bootstrap";
import Actions from "../Producto/Actions";
import AuthContext from '../../Context/AuthContext';

const styles={
  cardContainer:{
    marginBottom:"10 px",
    width:"10rem"
  }
}

function Producto(props) {
  const {datos} = props
  //const datos = props.datos
  return (
    <AuthContext.Consumer>
      {
        context=>
        <Col>
        <Card style={styles.cardContainer}>
        <Card.Img variant="top" src={datos.thumbnail} />
        <Card.Body>
          <Card.Title>{datos.name}</Card.Title>
          <Card.Subtitle>$ {datos.price}</Card.Subtitle>
          <Card.Text>
          {datos.sku}
          </Card.Text>
          <Card.Text>
          {datos.description}
          </Card.Text>
          <Actions  userLogin={context.userLogin} datos={datos}/>
        </Card.Body>
        </Card> 
        </Col>
      }
  </AuthContext.Consumer>
  );
}

export default Producto;