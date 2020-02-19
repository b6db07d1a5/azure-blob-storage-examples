import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.send([{
			name: 'citizen_id'
		},
		{
			name: 'passport'
		}
	]);
});
