import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfyCors } from "@libs/lambda";
import { getProducts } from "../../controllers/products";

const getProductsHandler: ValidatedEventAPIGatewayProxyEvent<
  null
> = async () => {
  try {
    const response = formatJSONResponse(getProducts());
    return response;
  } catch (error) {
    return formatJSONResponse(error?.message || "", 400);
  }
};

export const handler = middyfyCors(getProductsHandler);
