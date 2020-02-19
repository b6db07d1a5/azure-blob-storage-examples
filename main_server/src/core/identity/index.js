// this is what i expect
// export * from './get_identity';
// export * from './create_identity';
// export * from './update_identity';
// export * from './delete_identity';

//this is what my brain give
import getIdentity from './get_identity';
import getIdentities from './get_identities';
import createIdentity from './create_identity';
import updateIdentity from './update_identity';
import deleteIdentity from './delete_identity';

import createContainer from './create_container';

export {
	getIdentity,
	getIdentities,
	createIdentity,
	updateIdentity,
	deleteIdentity,
	createContainer
};

export function ping() {
	createContainer('xxx');
	return 'Hello World!!';
}
