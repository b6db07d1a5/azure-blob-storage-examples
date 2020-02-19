import express from 'express';

import * as file from '@core/file_manage';

import {
	validateBody,
	validateParams
} from '../middleware/validation';

// eslint-disable-next-line babel/new-cap
const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const ping = file.ping();

		res.send(ping);
		next();
	} catch (error) {
		next(error);
	}
});

router.post('/create_container', async (req, res, next) => {
	try {
		const createContainerResponse = await file.createContainer(req.body);

		res.send(createContainerResponse);
		next();
	} catch (error) {
		next(error);
	}
});

router.get('/get_container', async (req, res, next) => {
	try {
		const getContainerResponse = await file.getContainers();

		res.send(getContainerResponse);
		next();
	} catch (error) {
		next(error);
	}
});

router.post('/file_upload', async (req, res, next) => {
	try {
		const uploadBlobResponse = await file.fileUpload(req.body);

		res.send(uploadBlobResponse);
		next();
	} catch (error) {
		next(error);
	}
});

router.get('/get_file/:container', async (req, res, next) => {
	try {
		const getFileResponse = await file.getFiles(req.params);

		res.send(getFileResponse);
		next();
	} catch (error) {
		next(error);
	}
});

export default router;
