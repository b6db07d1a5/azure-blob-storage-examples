import express from 'express';

import fileManageRouter from './file_manage';

const router = express.Router();

router.use('/file', fileManageRouter);

export default router;
