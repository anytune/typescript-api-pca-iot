import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import File from '../models/File';

class FileController {
    async store (request: Request, response: Response) {
        const encoded = request.file.buffer.toString('base64');
        const mimetype = request.file.mimetype;
        const { originalname } = request.file;
        const repository = getRepository(File);

        const name = originalname.split('.')[0];

        const file = repository.create({ name, path: encoded, mime: mimetype });

        await repository.save(file);

        return response.status(201).json(file);
    }

    async index (_: Request, response: Response) {
        const repository = getRepository(File);

        const files = await repository.find();

        return response.status(201).json(files);
    }
}

export default new FileController();