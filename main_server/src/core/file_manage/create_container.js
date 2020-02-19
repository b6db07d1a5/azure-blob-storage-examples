import * as db from '@db';

async function createContainer({ containerName }) {
	const createContainerResponse = await db.createContainer(containerName);

	return createContainerResponse;

}

export default createContainer;