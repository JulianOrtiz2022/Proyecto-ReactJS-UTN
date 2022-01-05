import {Link} from "react-router-dom";
import {Card,Button} from 'react-bootstrap'

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
    <Card style={styles.cardContainer}>
    <Card.Img variant="top" src={datos.thumbnail} />
    <Card.Body>
      <Card.Title>{datos.title}</Card.Title>
      <Card.Text>
      <p>$ {datos.price}</p>
      </Card.Text>
      <Button variant="primary" as={Link} to={'/producto/'+datos.id} >Comprar</Button>
    </Card.Body>
  </Card>
  );
}

export default Producto;