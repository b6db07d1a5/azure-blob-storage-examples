import { BlobServiceClient } from '@azure/storage-blob';
import uuidv1 from 'uuid/v1';

import errorType from '@error-type';

import * as db from '@db';

async function createContainer(args) {

	const container = db.createContainer();

	return 'gg';

// Create the BlobServiceClient object which will be used to create a container client
	// const blobServiceClient = await BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING);

	// console.log(blobServiceClient.accountName);
	// // Create a unique name for the container
	// const containerName = 'quickstart' + uuidv1();

	// console.log('\nCreating container...');
	// console.log('\t', containerName);

	// //   // Get a reference to a container
	// //   const containerClient = await blobServiceClient.getContainerClient(containerName);

	// //   const containerClient = await blobServiceClient.getContainerClient('quickstart93bbcd30-52dd-11ea-90bf-09c3480f746c');

	// let i = 1;
	// const iter = blobServiceClient.listContainers();
	// let containerItem = await iter.next();
	// while (!containerItem.done) {
	// 	console.log(`Container ${i++}: ${containerItem.value.name}`);
	// 	containerItem = await iter.next();
	// }

	//   // Create the container
	//   const createContainerResponse = await containerClient.create();
	//   console.log('Container was created successfully. requestId: ', createContainerResponse.requestId);

	// Create a unique name for the blob
//   const blobName = 'quickstart' + uuidv1() + '.txt';

	// Get a block blob client
//   const blockBlobClient = containerClient.getBlockBlobClient(blobName);

//   console.log('\nUploading to Azure storage as blob:\n\t', blobName);

	// Upload data to the blob
//   const data = 'Hello, World!';
//   const uploadBlobResponse = await blockBlobClient.upload(data, data.length);
//   console.log('Blob was uploaded successfully. requestId: ', uploadBlobResponse.requestId);


	// List the blob(s) in the container.

//   let i = 1;
//   let iter = containerClient.listBlobsFlat();
//   let blobItem = await iter.next();
//   while (!blobItem.done) {
//     console.log(`Blob ${i++}: ${blobItem.value.name}`);
//     blobItem = await iter.next();
//   }
}


export default createContainer;