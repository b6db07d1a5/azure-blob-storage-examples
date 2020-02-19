import 'dotenv/config';

import * as httpServer from './http_server';
import * as db from './db'

async function initialize() {
	httpServer.initialize();
	db.initialize();
}

initialize();
