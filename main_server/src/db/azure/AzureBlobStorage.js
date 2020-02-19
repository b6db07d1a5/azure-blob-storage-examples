import { BlobServiceClient } from '@azure/storage-blob';

export default class AzureBlobStorage {
	constructor(connectionString) {
		if (!this.constructor.instance) {
			this.constructor.instance = this;
			this.connectionString = connectionString;
			this.client;
		}
		
		return this.constructor.instance;
	}

	async initialize() {
		this.client = await BlobServiceClient.fromConnectionString(this.connectionString);
	}

	instance() {
		return this.client;
	}
}