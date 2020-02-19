import { BlobServiceClient } from "@azure/storage-blob";

const uuidv1 = require("uuid/v1");

async function main() {
  console.log("Azure Blob storage v12 - JavaScript quickstart sample");
  // Quick start code goes here
  // Create the BlobServiceClient object which will be used to create a container client
  const blobServiceClient = await BlobServiceClient.fromConnectionString(
    process.env.AZURE_STORAGE_CONNECTION_STRING
  );

  // Create a unique name for the container
  const containerName = "quickstart" + uuidv1();

  console.log("\nCreating container...");
  console.log("\t", containerName);

  // Get a reference to a container
  const containerClient = await blobServiceClient.getContainerClient(
    containerName
  );

  // Create the container
  const createContainerResponse = await containerClient.create();
  console.log(
    "Container was created successfully. requestId: ",
    createContainerResponse.requestId
  );
}

main()
  .then(() => console.log("Done"))
  .catch(ex => console.log(ex.message));
