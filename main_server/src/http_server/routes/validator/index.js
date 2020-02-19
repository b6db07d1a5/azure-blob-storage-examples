import Ajv from 'ajv';

import schemasV1 from './json_schema/v1';

const ajvOptions = {
	allErrors: true,
};

const ajv = new Ajv(ajvOptions);

function validate({
	apiVersion,
	method,
	path,
	params,
	body
}) {
	let data;
	let dataType;
	if (typeof params === 'object') {
		data = params;
		dataType = 'params';
	} else if (typeof body === 'object') {
		data = body;
		dataType = 'body';
	}

	ajv.removeSchema('defs');
	ajv.addSchema(schemasV1.defsSchema, 'defs');

	const jsonSchema = getJSONSchema(apiVersion, method, path, dataType);

	const validate = ajv.compile(jsonSchema);
	const valid = validate(data);

	return {
		valid,
		errors: validate.errors,
	};

}

function getJSONSchema(apiVersion, method, path, dataType) {
	try {
		// if (apiVersion == 1) TODOS

		return schemasV1[method][path][dataType];

	} catch (error) {
		throw new Error('Cannot find JSON schema for validation');
	}
}

export default validate;
