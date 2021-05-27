"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const multer_2 = __importDefault(require("./config/multer"));
const FileController_1 = __importDefault(require("./app/controllers/FileController"));
const AttendanceController_1 = __importDefault(require("./app/controllers/AttendanceController"));
const router = express_1.Router();
const upload = multer_1.default(multer_2.default);
router.post('/attendance', AttendanceController_1.default.store);
router.get('/files', FileController_1.default.index);
router.post('/files', upload.single('file'), FileController_1.default.store);
exports.default = router;
