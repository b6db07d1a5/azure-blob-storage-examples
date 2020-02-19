import Sequelize from 'sequelize';

export default class IdentityBiometric extends Sequelize.Model {
	static init(sequelize, DataTypes) {
		return super.init({
			NAMESPACE: {
				type: DataTypes.STRING,
				primaryKey: true
			},
			IDENTIFIER: {
				type: DataTypes.STRING,
				primaryKey: true
			},
			LIVENESS_IMAGE: {
				type: DataTypes.STRING,
				primaryKey: true
			},
			BRANCH_IMAGE: {
				type: DataTypes.STRING,
				primaryKey: true
			},
		}, {
			sequelize,
			modelName: 'EKYC_BIOMETRIC',
			tableName: 'EKYC_BIOMETRIC',
			timestamps: false
		});
	}
}
