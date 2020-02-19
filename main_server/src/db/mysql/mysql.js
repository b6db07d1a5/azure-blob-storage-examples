import Sequelize from 'sequelize';

import DopaModel from '../mysql/model/dopa';
import IdentityModel from './model/identity';
import IdentityBioModel from './model/identity_biometric';

export default class MySql {
	constructor({
		host,
		port,
		dialect,
		database,
		username,
		password,
	}) {

		this.host = host;
		this.port = port;
		this.dialect = dialect;
		this.database = database;
		this.username = username;
		this.password = password;

		this.sequelize;
		this.models;
	}

	getInstance() {
		return this.sequelize;
	}

	connect() {
		try {
			this.sequelize = new Sequelize(this.database, this.username, this.password, {
				host: this.host,
				port: this.port,
				dialect: this.dialect,
				pool: {
					max: 5,
					min: 0,
					acquire: 30000,
					idle: 10000
				}
			});

			//this.member = DopaModel.init(this.sequelize, Sequelize);
			this.initModel();

		} catch (error) {
			throw new Error(error);
		}
	}

	initModel() {
		const importedModels = {
			dopa: DopaModel.init(this.sequelize, Sequelize),
			identity: IdentityModel.init(this.sequelize, Sequelize),
			identityBiometric: IdentityBioModel.init(this.sequelize, Sequelize)
		};

		// Associate
		Object.values(importedModels)
			.filter(model => typeof model.associate === 'function')
			.forEach(model => model.associate(importedModels));

		this.models = {
			...importedModels
		};
	}

	close() {
		try {
			this.sequelize.close();
		} catch (error) {
			throw new Error(error);
		}
	}

}
