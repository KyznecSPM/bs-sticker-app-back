import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfyCors } from "@libs/lambda";
import productList from "./productList.json";

const getProductsList: ValidatedEventAPIGatewayProxyEvent<null> = async () => {
  return formatJSONResponse(productList);
};

export const handler = middyfyCors(getProductsList);
