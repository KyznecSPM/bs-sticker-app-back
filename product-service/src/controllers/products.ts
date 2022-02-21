import { ProductsService } from "../services/products";

const Products = new ProductsService();

export const getProductsById = (productId) => {
  return Products.getById(productId);
};

export const getProducts = () => {
  return Products.getAllProducts();
};
