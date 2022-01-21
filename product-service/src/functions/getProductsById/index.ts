import { handlerPath } from "@libs/handlerResolver";

export default {
  handler: `${handlerPath(__dirname)}/getProductsById.handler`,
  events: [
    {
      http: {
        cors: true,
        method: "get",
        path: "/products/{productId}",
        request: {
          parameters: {
            paths: {
              productId: true,
            },
          },
        },
      },
    },
  ],
};
