import express from 'express';
import { generateImage, getAllImages } from '../controllers/image.controller.js';

const router = express.Router();

router.post('/generate', generateImage);
router.get('/', getAllImages);

export default router;