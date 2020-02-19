import errorType from '@error-type';

import * as db from '@db';

import uuid from 'uuid/v1';

async function createContainer(args) {
  const gg = 'wp';

    
  console.log(uuid());
  console.log('create_container function execute'+ process.env.AZURE_STORAGE_CONNECTION_STRING);
}


export default createContainer;