import MySql from './mysql';

//SQL=mysql://rwfr1-n:helloface12n@203.151.132.28:3306/EKYC

const sqlConfig = {
	host: '203.151.132.28',
	port: '3306',
	dialect: 'mysql',
	database: 'EKYC',
	username: 'rwfr1-n',
	password: 'helloface12n'
};

const mySqlInstance = new MySql(sqlConfig);

export default mySqlInstance;
