import { useState, useEffect } from "react";
import {
  getProductsByCategory,
} from "../services";

import { collection, getDocs, doc, getDoc, getFirestore, query, where } from "firebase/firestore";

/**
 * @description Custom Hook for get products
 * @returns {Array}
 */


export const useGetProducts = (collectionName = "productos") => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, collectionName); 

    getDocs(productsCollection).then((snapshot) => {
      setProductsData(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);

  return { productsData };
};

export const useGetProductById = (collectionName = "productos", id) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const docRef = doc(db, collectionName, id)

    getDoc(docRef).then((doc) => {
      setProductData({ id: doc.id, ...doc.data() })
    })

  }, [id]);

  return { productData };
};

export const useGetCategories = (collectionName = 'categorias') => {
  const [categorias, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, collectionName);

    getDocs(productsCollection).then((snapshot) => {
      setCategories(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);

  return { categorias };
};

export const useGetProductsByCategory = (id) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, 'productos'); 
    const q = query(productsCollection, where('categoria', "==", id));
    getDocs(q).then((snapshot) => {
      setProductsData(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, [id]);

  return { productsData };
};