import * as db from '@db';

async function fileUpload({ containerName }) { 
	const dataTest = 'xxxxxx';
    
	const uploadBlobResponse = await db.fileUpload(containerName, dataTest, dataTest);
    
	return uploadBlobResponse;

}

export default fileUpload;