export default {
	defsSchema: {
		definitions: {
			ial: {
				type: 'number',
				enum: [1.1, 1.2, 1.3, 2.1, 2.2, 2.3, 3]
			},
			aal: {
				type: 'number',
				enum: [1, 2.1, 2.2, 3]
			},
			modeString: {
				type: 'string',
				enum: ['2', '3'],
			},
			url: {
				type: 'string',
				format: 'uri',
				pattern: '^(https?)://',
			},
			keyType: {
				type: 'string',
				enum: ['RSA'],
			},
			signMethod: {
				type: 'string',
				enum: ['RSA-SHA256'],
			},
		}
	},
	GET: {
		'/identity/:namespace/:identifier': {
			params: {
				$schema: 'http://json-schema.org/draft-07/schema#',
				properties: {
					namespace: {
						type: 'string',
						minLength: 1
					},
					identifier: {
						type: 'string',
						minLength: 1
					}
				},
				required: ['namespace', 'identifier']
			}
		},
		'/identity/list/:namespace/:limit/:offset?': {
			params: {
				$schema: 'http://json-schema.org/draft-07/schema#',
				properties: {
					namespace: {
						type: 'string',
						minLength: 1
					},
					limit: {
						type: 'string',
						minLength: 1
					},
					offset: {
						type: 'string',
						minLength: 1
					}
				},
				required: ['namespace', 'limit']
			}
		}
	},
	POST: {
		'/identity/create_identity': {
			body: {
				$schema: 'http://json-schema.org/draft-07/schema#',
				properties: {
					namespace: {
						type: 'string',
						minLength: 1
					},
					identifier: {
						type: 'string',
						minLength: 1
					},
					firstName: {
						type: 'string',
						minLength: 1
					},
					lastName: {
						type: 'string',
						minLength: 1
					},
					contactNo: {
						type: 'string',
						minLength: 1
					},
					pinCode: {
						type: 'string',
						minLength: 1
					},
					status: {
						type: 'number',
						minimun: 1
					},
					livenessImage: {
						type: 'string',
						minLength: 1
					},
					branchImage: {
						type: 'string',
						minLength: 1
					},
					userCreate: {
						type: 'string',
						minLength: 1
					},
				},
				required: ['namespace', 'identifier', 'userCreate']
			}
		},
		'/identity/update_identity/:namespace/:identifier': {
			params: {
				$schema: 'http://json-schema.org/draft-07/schema#',
				properties: {
					namespace: {
						type: 'string',
						minLength: 1
					},
					identifier: {
						type: 'string',
						minLength: 1
					}
				},
				required: ['namespace', 'identifier']
			},
			body: {
				$schema: 'http://json-schema.org/draft-07/schema#',
				properties: {
					firstName: {
						type: 'string',
						minLength: 1
					},
					lastName: {
						type: 'string',
						minLength: 1
					},
					contactNo: {
						type: 'string',
						minLength: 1
					},
					pinCode: {
						type: 'string',
						minLength: 1
					},
					status: {
						type: 'number',
						minimun: 1
					},
					livenessImage: {
						type: 'string',
						minLength: 1
					},
					branchImage: {
						type: 'string',
						minLength: 1
					},
					userUpdate: {
						type: 'string',
						minLength: 1
					},
				},
				required: ['userUpdate']
			}
		},
		'/identity/delete_identity/:namespace/:identifier': {
			params: {
				$schema: 'http://json-schema.org/draft-07/schema#',
				properties: {
					namespace: {
						type: 'string',
						minLength: 1
					},
					identifier: {
						type: 'string',
						minLength: 1
					}
				},
				required: ['namespace', 'identifier']
			}
		}
	}
};
