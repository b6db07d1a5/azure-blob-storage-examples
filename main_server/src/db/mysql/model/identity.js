import Sequelize from 'sequelize';

export default class Identity extends Sequelize.Model {
	static init(sequelize, DataTypes) {
		return super.init({
			NAMESPACE: {
				type: DataTypes.STRING
			},
			IDENTIFIER: {
				type: DataTypes.STRING,
				primaryKey: true
			},
			FIRST_NAME: {
				type: DataTypes.STRING
			},
			LAST_NAME: {
				type: DataTypes.STRING
			},
			CONTACT_NO: {
				type: DataTypes.STRING
			},
			PIN_CODE: {
				type: DataTypes.NUMBER
			},
			STATUS: {
				type: DataTypes.NUMBER
			},
			CREATE_AT: {
				type: DataTypes.DATE
			},
			UPDATE_AT: {
				type: DataTypes.DATE
			},
			USER_CREATE: {
				type: DataTypes.STRING
			},
			USER_UPDATE: {
				type: DataTypes.STRING
			}
		}, {
			sequelize,
			modelName: 'EKYC_IDENTITY',
			tableName: 'EKYC_IDENTITY',
			timestamps: false
		});
	}
}
