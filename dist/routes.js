"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var multer_2 = __importDefault(require("./config/multer"));
var FileController_1 = __importDefault(require("./app/controllers/FileController"));
var AttendanceController_1 = __importDefault(require("./app/controllers/AttendanceController"));
var router = express_1.Router();
var upload = multer_1.default(multer_2.default);
router.post('/attendance', AttendanceController_1.default.store);
router.get('/files', FileController_1.default.index);
router.post('/files', upload.single('file'), FileController_1.default.store);
exports.default = router;
