"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Attendance_entity_1 = __importDefault(require("../models/Attendance.entity"));
class AttendanceController {
    async store(request, response) {
        const { name } = request.body;
        const repository = typeorm_1.getRepository(Attendance_entity_1.default);
        const studentExists = await repository.findOne({ where: { name } });
        if (studentExists) {
            return response.sendStatus(409);
        }
        const student = repository.create({ name });
        await repository.save(student);
        return response.status(201).json(student);
    }
}
exports.default = new AttendanceController();
