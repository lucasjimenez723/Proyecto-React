import axios from "axios";

/**
 * @name getProducts
 * @description Get products from dummyjson API
 * @param {number} limit
 * @default limit [10]
 * @returns {Promise}
 */
export async function getProducts() {
  return await axios.get(`https://apireact.wabit.cl/api/lucas/products`);
}

export async function getProductById(id) {
  return await axios.get(`https://apireact.wabit.cl/api/lucas/products/${id}`);
}

export async function getProductByCategory(id) {
  return await axios.get(`https://apireact.wabit.cl/api/lucas/products/category/${id}`);
}

export async function getCategories() {
  return await axios.get('https://apireact.wabit.cl/api/lucas/categories');
}