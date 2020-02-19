import errorType from '@error-type';

import * as db from '@db';

async function deleteIdentity(args) {

	const transaction = await db.instance().transaction();

	try {

		const {
			namespace,
			identifier
		} = args;

		const where = {
			namespace,
			identifier
		};

		const demographic = db.deleteIdentity({
			where
		});

		const biometric = db.deleteIdentityBiometric({
			where
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

export default deleteIdentity;
