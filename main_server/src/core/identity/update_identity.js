import errorType from '@error-type';

import * as base64 from '@core/utilities/base64';
import * as db from '@db';

async function updateIdentity(args) {

	const transaction = await db.instance().transaction();

	try {
		const dateNow = new Date();

		const where = {
			NAMESPACE: args.namespace,
			IDENTIFIER: args.identifier
		};

		const demographic = db.updateIdentity({
			params: {
				...args,
				updateAt: dateNow
			},
			where,
			transaction
		});

		const {
			livenessImage,
			branchImage
		} = args;

		let biometric = null;

		if (livenessImage || branchImage) {
			biometric = db.updateIdentityBiometric({
				params: {
					livenessImage: base64.base64toBlob(livenessImage),
					branchImage: base64.base64toBlob(branchImage)
				},
				where,
				transaction
			});
		}

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

export default updateIdentity;
