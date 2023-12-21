import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../services/productsService";

export const ItemDetailContainer = () => {
  const { productId } = useParams();

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductById(productId).then((respuesta) => {
        setProductData(respuesta.data[0]);
        console.log(respuesta)
    })
  },[])

  return (
    <Card key={productData.id} style={{ width: "18rem", margin: 10 }}>
      <Card.Img variant="top" src={productData.image} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>{productData.description}</Card.Text>
        <div>{productData.price}</div>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};