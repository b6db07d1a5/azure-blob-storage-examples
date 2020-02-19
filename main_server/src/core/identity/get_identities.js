import * as base64 from '@core/utilities/base64';
import * as db from '@db';

async function getIdentities({
	namespace,
	limit,
	offset
}) {

	const identityDemographics = await db.getIdentity({
		where: {
			NAMESPACE: namespace
		},
		limit: limit && parseInt(limit),
		offset: offset && parseInt(offset)
	});

	const identityBiometrics = await db.getIdentityBiometric({
		where: {
			NAMESPACE: namespace
		},
		limit: limit && parseInt(limit),
		offset: offset && parseInt(offset)
	});

	const [demographicResults, biometricResults] = await Promise.all([identityDemographics, identityBiometrics]);

	return demographicResults.map(function ({
		dataValues: demographic
	}) {

		const {
			dataValues: {
				livenessImage,
				branchImage
			}
		} = biometricResults.find(function ({
			dataValues: bio
		}) {
			return demographic.identifier === bio.identifier;
		});

		return {
			...demographic,
			livenessImage: base64.blobtoBase64(livenessImage),
			branchImage: base64.blobtoBase64(branchImage),
		};

	});

}

export default getIdentities;
