import file_manager from "./file-manager.vue";

const FileManager = {
	install(Vue, options) {
		Vue.component(file_manager.name, file_manager);
	}
};
console.log('fm', FileManager);
export default FileManager;

