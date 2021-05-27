import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Attendance from '../models/Attendance.entity';

class AttendanceController {
    async store (request: Request, response: Response) {
        const { name } = request.body;
        const repository = getRepository(Attendance);

        const studentExists = await repository.findOne({ where: { name } });

        if (studentExists) {
            return response.sendStatus(409);
        }

        const student = repository.create({ name });
        await repository.save(student);

        return response.status(201).json(student);
    }
}

export default new AttendanceController();