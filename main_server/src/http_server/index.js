import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes';

const port = 3000;

export function initialize() {

	const app = express();

	app.use(bodyParser.json({
		limit: '3mb'
	}));

	app.use(routes);

	app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}
