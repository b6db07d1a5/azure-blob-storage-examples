import sql from './mysql';
import azure from './azure';

export function initialize() {
	azure.initialize();
	// sql.connect();
}

export function instance() {
	return azure.instance();
	// return sql.getInstance();
}

export async function createContainer(containerName) {
	const containerClient = await azure.instance().getContainerClient(containerName);
	const createContainerResponse = await containerClient.create();

	return createContainerResponse;
}

export async function getContainers() {
	let items =[];

	const iter = azure.instance().listContainers();

	let containerItem = await iter.next();
	while (!containerItem.done) {
		items.push(containerItem);
		containerItem = await iter.next();
	}

	return items;
}

export async function fileUpload(containerName, fileName, data) {
	const containerClient = await azure.instance().getContainerClient(containerName);
	const blockBlobClient = containerClient.getBlockBlobClient(fileName);
	const uploadBlobResponse = await blockBlobClient.upload(data, data.length);

	return uploadBlobResponse;
}

export async function getFiles(containerName) {
	let items =[];

	const containerClient = await azure.instance().getContainerClient(containerName);

	let iter = containerClient.listBlobsFlat();
	let blobItem = await iter.next();
	while (!blobItem.done) {
		items.push(blobItem);
		blobItem = await iter.next();
	}

	return items;
}
