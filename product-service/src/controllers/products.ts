import { ProductsService } from "../services/products";

const Products = new ProductsService();

export const getProductsById = (productId) => {
  return Products.getById(productId);
};

export const getProducts = async () => {
  const allProducts = await Products.getAllProducts();
  return allProducts;
};
