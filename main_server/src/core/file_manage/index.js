import createContainer from './create_container';
import getContainers from './get_containers';
import fileUpload from './file_upload';


export {
	createContainer,
	getContainers,
	fileUpload
};

export function ping() {
	return 'Hello World!!';
}
