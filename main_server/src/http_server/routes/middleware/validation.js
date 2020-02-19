import validate from '../validator';

function getBaseUrlAndApiVersion(req) {
	let baseUrl = req.baseUrl;

	const matchedPath = baseUrl.match(/^\/v([0-9]+)/);

	let apiVersion;
	if (matchedPath != null) {
		const splittedBaseUrl = baseUrl.split('/');
		splittedBaseUrl.splice(1, 1);
		baseUrl = splittedBaseUrl.join('/');
		apiVersion = parseInt(matchedPath[1]);
	}

	return {
		baseUrl,
		apiVersion,
	};
}

export function validateParams(req, res, next) {
	const {
		baseUrl,
		apiVersion
	} = getBaseUrlAndApiVersion(req);

	const paramsValidationResult = validate({
		apiVersion,
		method: req.method,
		path: `${baseUrl}${req.route.path}`,
		params: req.params,
	});

	console.log(JSON.stringify(req.params, null, 2));
	console.log(`Method : ${req.method} Path : ${baseUrl}${req.route.path}`);
	console.log(JSON.stringify(paramsValidationResult, null, 2));

	if (!paramsValidationResult.valid) {
		next(new Error(JSON.stringify(paramsValidationResult.errors, null, 2)));
		return;
	}

	next();
}

export function validateBody(req, res, next) {
	const {
		baseUrl,
		apiVersion
	} = getBaseUrlAndApiVersion(req);

	const bodyValidationResult = validate({
		apiVersion,
		method: req.method,
		path: `${baseUrl}${req.route.path}`,
		body: req.body,
	});

	console.log(JSON.stringify(req.body, null, 2));
	console.log(`Method : ${req.method} Path : ${baseUrl}${req.route.path}`);
	console.log(JSON.stringify(bodyValidationResult, null, 2));

	if (!bodyValidationResult.valid) {
		next(JSON.stringify(bodyValidationResult.errors, null, 2));
		return;
	}

	next();
}
