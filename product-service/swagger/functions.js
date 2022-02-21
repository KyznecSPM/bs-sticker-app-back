"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (serverless) => {
    var _a, _b, _c, _d, _e, _f;
    const handlerPath = "swagger/";
    const configInput = (serverless === null || serverless === void 0 ? void 0 : serverless.configurationInput) || serverless.service;
    const path = (_c = (_b = (_a = serverless.service.custom) === null || _a === void 0 ? void 0 : _a.autoswagger) === null || _b === void 0 ? void 0 : _b.swaggerPath) !== null && _c !== void 0 ? _c : "swagger";
    const name = typeof (configInput === null || configInput === void 0 ? void 0 : configInput.service) == "object"
        ? configInput.service.name
        : configInput.service;
    const stage = (_d = configInput === null || configInput === void 0 ? void 0 : configInput.provider) === null || _d === void 0 ? void 0 : _d.stage;
    const useStage = (_f = (_e = serverless.service.custom) === null || _e === void 0 ? void 0 : _e.autoswagger) === null || _f === void 0 ? void 0 : _f.useStage;
    return {
        swaggerUI: {
            name: name && stage ? `${name}-${stage}-swagger-ui` : undefined,
            handler: handlerPath + "swagger-html.handler",
            disableLogs: true,
            events: [
                {
                    httpApi: {
                        method: "get",
                        path: useStage ? `/${stage}/${path}` : `/${path}`,
                    },
                },
            ],
        },
        swaggerJSON: {
            name: name && stage ? `${name}-${stage}-swagger-json` : undefined,
            handler: handlerPath + "swagger-json.handler",
            disableLogs: true,
            events: [
                {
                    httpApi: {
                        method: "get",
                        path: useStage ? `/${stage}/${path}.json` : `/${path}.json`,
                    },
                },
            ],
        },
    };
};
