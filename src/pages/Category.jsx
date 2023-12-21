import { useEffect, useState } from 'react';
import ItemListContainer from '../components/ItemListContainer';
import { getProductByCategory } from '../services/productsService';
import { useParams } from 'react-router-dom';


export const Category = () => {

  // Setear titulo de pagina
  useEffect(() => {
    document.title = "Mi tienda - Categorias";
  })
  const idCategory = useParams().id;
  const [productsData, setProductData] = useState([]);

  useEffect(() => {
    getProductByCategory(idCategory).then((respuesta) => {
        setProductData(respuesta.data);
    })
  },[idCategory])



  return (
    <ItemListContainer productsData={productsData} />
  )
}