import * as db from '@db';

async function getContainers() {
	const getContainerResponse = await db.getContainers();
    
	return getContainerResponse;
}

export default getContainers;