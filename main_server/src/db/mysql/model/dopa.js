import Sequelize from 'sequelize';

export default class Dopa extends Sequelize.Model {
	static init(sequelize, DataTypes) {
		return super.init({
			ID: {
				type: DataTypes.STRING,
				primaryKey: true
			},
			FIRST_NAME: {
				type: DataTypes.STRING
			},
			LAST_NAME: {
				type: DataTypes.STRING
			},
			DATE_OF_BIRTH: {
				type: DataTypes.DATE
			},
			ADDRESS: {
				type: DataTypes.STRING
			},
			LASER_CODE: {
				type: DataTypes.STRING
			},
			ISSUE_DATE: {
				type: DataTypes.DATE
			},
			CARD_IMAGE: {
				type: DataTypes.STRING
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
			modelName: 'EKYC_DOPA',
			tableName: 'EKYC_DOPA',
			timestamps: false
		});
	}
}
