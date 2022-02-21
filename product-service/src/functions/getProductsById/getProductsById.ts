import type { APIGatewayProxyHandler } from "aws-lambda";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfyCors } from "@libs/lambda";
import { getProductsById } from "../../controllers/products";

const getProductsByIdHandler: APIGatewayProxyHandler = async (event) => {
  const { productId } = event.pathParameters;
  try {
    const response = await formatJSONResponse(getProductsById(productId));
    return response;
  } catch (error) {
    return formatJSONResponse(error?.message || "", 400);
  }
};

export const handler = middyfyCors(getProductsByIdHandler);
