import * as db from '@db';

async function getFiles({ container }) { 
	const getFileResponse = await db.getFiles(container);
    
	return getFileResponse;

}

export default getFiles;