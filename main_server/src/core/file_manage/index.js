import createContainer from './create_container';
import getContainers from './get_containers';
import fileUpload from './file_upload';
import getFiles from './get_files';


export {
	createContainer,
	getContainers,
	fileUpload,
	getFiles
};

export function ping() {
	return 'Hello World!!';
}
