import AzureBlobStorage from './AzureBlobStorage';

const connection = process.env.AZURE_STORAGE_CONNECTION_STRING;

const azureInstance = new AzureBlobStorage(connection);

export default azureInstance;
