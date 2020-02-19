import errorType from '@error-type';

import * as base64 from '@core/utilities/base64';
import * as db from '@db';

async function createIdentity(args) {

	const transaction = await db.instance().transaction();

	try {
		const dateNow = new Date();

		const demographic = db.createIdentity({
			params: {
				...args,
				createAt: dateNow
			},
			transaction
		});

		const biometric = db.createIdentityBiometric({
			params: {
				...args,
				livenessImage: base64.base64toBlob(args.livenessImage),
				branchImage: base64.base64toBlob(args.branchImage)
			},
			transaction
		});

		await Promise.all([demographic, biometric]);

		await transaction.commit();

		return errorType.SUCCESS;

	} catch (error) {
		if (error) {
			await transaction.rollback();

			return errorType.FAILED;
		}

	}

}

export default createIdentity;
