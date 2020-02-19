import sql from './mysql';
import azure from './azure';

export function initialize() {
	azure.initialize();
	// sql.connect();
}

export function instance() {
	return azure.instance();
	// return sql.getInstance();
}

export async function createContainer() {
	console.log(azure.instance().accountName+ ' <<==== Accout name');
}

export async function getDopa(query) {
	const {
		dopa: dopaModel
	} = sql.models;

	const {
		where
	} = query;

	return dopaModel.findAll({
		where,
		attributes: [
			['ID', 'id'],
			['FIRST_NAME', 'firstName'],
			['LAST_NAME', 'lastName'],
			['DATE_OF_BIRTH', 'dateOfBirth'],
			['ADDRESS', 'address'],
			['LASER_CODE', 'laserCode'],
			['ISSUE_DATE', 'issueDate'],
			['EXPIRE_DATE', 'expireDate'],
			['CARD_IMAGE', 'cardImage'],
			['CREATE_AT', 'createAt'],
			['UPDATE_AT', 'updateAt'],
			['USER_CREATE', 'userCreate'],
			['USER_UPDATE', 'userUpdate']
		]
	});
}

export async function getIdentity({
	where,
	limit,
	offset,
	order
}) {

	const {
		identity
	} = sql.models;

	return identity.findAll({
		where,
		limit,
		offset,
		order,
		attributes: [
			['NAMESPACE', 'namespace'],
			['IDENTIFIER', 'identifier'],
			['FIRST_NAME', 'firstName'],
			['LAST_NAME', 'lastName'],
			['CONTACT_NO', 'contactNo'],
			['PIN_CODE', 'pinCode'],
			['STATUS', 'status'],
			['CREATE_AT', 'createAt'],
			['UPDATE_AT', 'updateAt'],
			['USER_CREATE', 'userCreate'],
			['USER_UPDATE', 'userUpdate'],
		]
	});
}

export async function createIdentity({
	params,
	transaction
}) {
	const {
		identity
	} = sql.models;

	const {
		namespace,
		identifier,
		firstName,
		lastName,
		contactNo,
		pinCode,
		status,
		createAt,
		userCreate,
	} = params;

	return identity.create({
		NAMESPACE: namespace,
		IDENTIFIER: identifier,
		FIRST_NAME: firstName,
		LAST_NAME: lastName,
		CONTACT_NO: contactNo,
		PIN_CODE: pinCode,
		STATUS: status,
		CREATE_AT: createAt,
		USER_CREATE: userCreate,
	}, {
		transaction
	});
}

export async function updateIdentity({
	params,
	where,
	transaction
}) {
	const {
		identity
	} = sql.models;

	const {
		firstName,
		lastName,
		contactNo,
		pinCode,
		status,
		updateAt,
		userUpdate
	} = params;

	return identity.update({
		FIRST_NAME: firstName,
		LAST_NAME: lastName,
		CONTACT_NO: contactNo,
		PIN_CODE: pinCode,
		STATUS: status,
		UPDATE_AT: updateAt,
		USER_UPDATE: userUpdate
	}, {
		where,
		transaction
	});
}

export async function deleteIdentity({
	where,
	transaction
}) {
	const {
		identity
	} = sql.models;

	return identity.destroy({
		where,
		transaction
	});
}


// Store image by using SQL

export async function getIdentityBiometric({
	where,
	limit,
	offset,
	order
}) {
	const {
		identityBiometric
	} = sql.models;

	return identityBiometric.findAll({
		where,
		limit,
		offset,
		order,
		attributes: [
			['IDENTIFIER', 'identifier'],
			['LIVENESS_IMAGE', 'livenessImage'],
			['BRANCH_IMAGE', 'branchImage'],
		]
	});
}

export async function createIdentityBiometric({
	params,
	transaction
}) {
	const {
		identityBiometric
	} = sql.models;

	const {
		namespace,
		identifier,
		livenessImage,
		branchImage
	} = params;

	return identityBiometric.create({
		NAMESPACE: namespace,
		IDENTIFIER: identifier,
		LIVENESS_IMAGE: livenessImage,
		BRANCH_IMAGE: branchImage
	}, {
		transaction
	});
}

export async function updateIdentityBiometric({
	params,
	where,
	transaction
}) {

	const {
		identityBiometric
	} = sql.models;

	const {
		livenessImage,
		branchImage,
	} = params;

	return identityBiometric.update({
		LIVENESS_IMAGE: livenessImage,
		BRANCH_IMAGE: branchImage
	}, {
		where,
		transaction
	});
}

export async function deleteIdentityBiometric({
	where,
	transaction
}) {
	const {
		identityBiometric
	} = sql.models;

	return identityBiometric.destroy({
		where,
		transaction
	});
}
