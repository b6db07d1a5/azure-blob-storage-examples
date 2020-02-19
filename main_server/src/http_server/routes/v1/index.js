import express from 'express';

import identityRouter from './identity';
import fileManageRouter from './file_manage';

const router = express.Router();

router.use('/identity', identityRouter);
router.use('/file', fileManageRouter);

export default router;
