"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const File_entity_1 = __importDefault(require("../models/File.entity"));
class FileController {
    async store(request, response) {
        const encoded = request.file.buffer.toString('base64');
        const mimetype = request.file.mimetype;
        const { originalname } = request.file;
        const repository = typeorm_1.getRepository(File_entity_1.default);
        const name = originalname.split('.')[0];
        const file = repository.create({ name, path: encoded, mime: mimetype });
        await repository.save(file);
        return response.status(201).json(file);
    }
    async index(_, response) {
        const repository = typeorm_1.getRepository(File_entity_1.default);
        const files = await repository.find();
        return response.status(201).json(files);
    }
}
exports.default = new FileController();
