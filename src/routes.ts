import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import FileController from './app/controllers/FileController'
import AttendanceController from './app/controllers/AttendanceController';

const router = Router();
const upload = multer(multerConfig);

router.post('/attendance', AttendanceController.store);

router.get('/files', FileController.index);
router.post('/files', upload.single('file'), FileController.store);

export default router;