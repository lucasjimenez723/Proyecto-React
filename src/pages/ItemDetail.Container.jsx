import Card from "react-bootstrap/Card";
import { useGetProductById } from "../hooks/useProducts";
import { Link, useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount";
export const ItemDetailContainer = () => {

  const { id } = useParams()

  const {productData} = useGetProductById("productos", id)
  
  return (
    <Card key={productData.id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={productData.imagen} />

      <Card.Body>
        <Card.Title>{productData.titulo}</Card.Title>
        <Card.Text>{productData.descripcion}</Card.Text>
        {/* {
          productData.images ? productData.images.map((image) => {
            return (
              <Card.Img variant="top" src={image} />
            )
          }) : null
        } */}
        <div>{productData.precio}</div>
        <ItemCount productId={productData.id} />
      </Card.Body>
    </Card>
  );
};