"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_validation_1 = require("../user/user.validation");
const validateRequest_1 = __importDefault(require("../../../middlewares/validateRequest"));
const auth_validatiuon_1 = require("./auth.validatiuon");
const auth_controller_1 = require("./auth.controller");
const authRouter = (0, express_1.Router)();
authRouter.post('/register', (0, validateRequest_1.default)(user_validation_1.UserValidation.UserValidationSchema), auth_controller_1.AuthControllers.register);
authRouter.post('/login', (0, validateRequest_1.default)(auth_validatiuon_1.AuthValidation.loginValidationSchema), auth_controller_1.AuthControllers.login);
authRouter.post('/change-password', (0, validateRequest_1.default)(auth_validatiuon_1.AuthValidation.changePasswordValidationSchema), auth_controller_1.AuthControllers.changePassword);
authRouter.post('/refresh-token', (0, validateRequest_1.default)(auth_validatiuon_1.AuthValidation.refreshTokenValidationSchema), auth_controller_1.AuthControllers.refreshToken);
exports.default = authRouter;
