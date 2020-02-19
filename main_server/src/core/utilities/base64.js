export function base64toBlob(base64String) {
	if (!base64String) {
		return null;
	}

	return Buffer.from(base64String, 'base64');
}

export function blobtoBase64(buffer) {
	if (!buffer) {
		return null;
	}

	return Buffer.from(buffer).toString('base64');
}
