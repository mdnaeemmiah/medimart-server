"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = __importDefault(require("../app/modules/auth/auth.route"));
// import mealProviderRouter from '../app/modules/mealProvider/mealProvider.route';
// import postPreferenceRouter from '../app/modules/PostPreference/postPreference.route';
// import orderRouter from '../app/modules/order/order.route';
// import messageRoute from '../app/modules/message/message.route';
const user_route_1 = __importDefault(require("../app/modules/user/user.route"));
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.default,
    },
    // {
    //   path: '/mealProvider',
    //   route: mealProviderRouter,
    // },
    // {
    //   path: '/postPreference',
    //   route: postPreferenceRouter,
    // },
    // {
    //   path: '/order',
    //   route: orderRouter,
    // },
    // {
    //   path: '/message',
    //   route: messageRoute,
    // },
    {
        path: '/user',
        route: user_route_1.default,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
