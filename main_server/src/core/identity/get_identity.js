import * as base64 from '@core/utilities/base64';
import * as db from '@db';

async function getIdentity({
	namespace,
	identifier
}) {

	const identityDemographic = db.getIdentity({
		where: {
			NAMESPACE: namespace,
			IDENTIFIER: identifier
		}
	});

	const identityBiometric = db.getIdentityBiometric({
		where: {
			IDENTIFIER: identifier
		}
	});

	const [demographicResult, biometricResult] = await Promise.all([identityDemographic, identityBiometric]);

	if (!demographicResult || demographicResult.length === 0) {
		return new Object();
	}

	const demographic = demographicResult[0].dataValues;
	const biometric = biometricResult[0].dataValues;

	return {
		...demographic,
		livenessImage: base64.blobtoBase64(biometric.livenessImage),
		branchImage: base64.blobtoBase64(biometric.branchImage)
	};
}

export default getIdentity;
