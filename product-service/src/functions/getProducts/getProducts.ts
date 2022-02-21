import { formatJSONResponse } from "@libs/apiGateway";
import { middyfyCors } from "@libs/lambda";
import { getProducts } from "../../controllers/products";

export const getProductsHandler = async () => {
  try {
    const response = await getProducts();
    return formatJSONResponse(response);
  } catch (error) {
    return formatJSONResponse(error?.message || "", 400);
  }
};

export const handler = middyfyCors(getProductsHandler);
