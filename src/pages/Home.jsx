import { useEffect, useState } from 'react';
import ItemListContainer from '../components/ItemListContainer';
import { getProducts } from '../services/productsService';


export const Home = () => {

  // Setear titulo de pagina
  useEffect(() => {
    document.title = "Mi tienda - Home";
  })
  const [productsData, setProductData] = useState([]);

  useEffect(() => {
    getProducts().then((respuesta) => {
        setProductData(respuesta.data);
    })
  },[])



  return (
    <ItemListContainer productsData={productsData} />
  )
}