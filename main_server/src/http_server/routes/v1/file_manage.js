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

router.get('/:namespace/:identifier', validateParams, async (req, res, next) => {
	try {
		// const identityResult = await fileManage.getIdentity(req.params);

		// res.send(identityResult);

		next();
	} catch (error) {
		next(error);
	}
});

router.get('/list/:namespace/:limit/:offset?', validateParams, async (req, res, next) => {
	try {

		// const identityResults = await fileManage.getIdentities(req.params);

		// res.send(identityResults);

		next();
	} catch (error) {
		next(error);
	}
});

router.post('/create_identity', validateBody, async (req, res, next) => {
	try {

		// const createResult = await fileManage.createIdentity(req.body);

		// res.send(createResult);

		next();
	} catch (error) {
		next(error);
	}
});

router.post('/update_identity/:namespace/:identifier', validateParams, validateBody, async (req, res, next) => {
	try {

		// const {
		// 	params,
		// 	body
		// } = req;

		// const updateResult = await identity.updateIdentity({
		// 	...params,
		// 	...body
		// });

		// res.send(updateResult);

		next();
	} catch (error) {
		next(error);
	}
});

router.post('/delete_identity/:namespace/:identifier', validateParams, async (req, res, next) => {
	try {
		// const deleteResult = await identity.deleteIdentity(req.params);

		// res.send(deleteResult);

		next();
	} catch (error) {
		next(error);
	}
});

export default router;
