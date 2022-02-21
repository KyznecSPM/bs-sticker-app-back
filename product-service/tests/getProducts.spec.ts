import "mocha";
import { expect } from "chai";
import lambdaTester from "lambda-tester";
import proxyquire from "proxyquire";

const mockedProductList = [
  {
    count: 4,
    description: "Наклейка для MacBook Миньёны",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    price: 19.99,
    assetName: "C-LYF-M.jpg",
    title: "Миньёны",
  },
];

// Define a common test suite
describe("getProducts Lambda Unit Test", function () {
  let lambda = null;

  beforeEach(function () {
    lambda = proxyquire
      .noCallThru()
      .load("../src/functions/getProducts/getProducts.ts", {
        "@libs/apiGateway": () => mockedProductList,
      });
  });

  describe("Successful Invocation", function () {
    it("with statusCode = 200", function (done) {
      console.log(lambda);

      lambdaTester(lambda)
        .expectResult((result) => {
          expect(result.statusCode).to.exist;
          expect(result.statusCode).to.equal(200);
          done();
        })
        .catch(done); // Catch assertion errors
    });
  });
});
