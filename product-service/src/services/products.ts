import productList from "./productList.json";

const responseDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export class ProductsService {
  async getById(productId) {
    await responseDelay(2000);
    return productList.find((value) => value.id === productId);
  }

  async getAllProducts() {
    await responseDelay(1000);
    return productList;
  }
}
