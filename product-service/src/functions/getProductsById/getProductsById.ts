import type { APIGatewayProxyHandler } from "aws-lambda";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfyCors } from "@libs/lambda";
import productList from "./productList.json";

const getProductsById: APIGatewayProxyHandler = async (event) => {
  const { productId } = event.pathParameters;
  return formatJSONResponse(
    productList.find((value) => value.id === productId)
  );
};

export const handler = middyfyCors(getProductsById);
