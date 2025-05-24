"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = __importDefault(require("../app/modules/auth/auth.route"));
// import postPreferenceRouter from '../app/modules/PostPreference/postPreference.route';
const message_route_1 = __importDefault(require("../app/modules/message/message.route"));
const user_route_1 = __importDefault(require("../app/modules/user/user.route"));
const addMedicine_route_1 = __importDefault(require("../app/modules/addMedicine/addMedicine.route"));
const order_route_1 = __importDefault(require("../app/modules/order/order.route"));
const doctor_route_1 = __importDefault(require("../app/modules/doctor/doctor.route"));
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.default,
    },
    {
        path: '/addMedicine',
        route: addMedicine_route_1.default,
    },
    {
        path: '/doctor',
        route: doctor_route_1.default,
    },
    {
        path: '/order',
        route: order_route_1.default,
    },
    {
        path: '/message',
        route: message_route_1.default,
    },
    {
        path: '/user',
        route: user_route_1.default,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
