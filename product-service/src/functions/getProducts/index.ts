import { handlerPath } from "@libs/handlerResolver";

export default {
  handler: `${handlerPath(__dirname)}/getProducts.handler`,
  events: [
    {
      http: {
        cors: true,
        method: "get",
        path: "products",
      },
    },
  ],
};
