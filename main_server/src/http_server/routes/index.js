import express from 'express';

import apiV1Router from './v1';

const router = express.Router();

router.use('/v1', apiV1Router);

export default router;
