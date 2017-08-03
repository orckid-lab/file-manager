import Component from "./file-manager.vue";
import Modal from "./file-manager-modal.vue";

const FileManager = {
	install: function (Vue) {
		Vue.component(Component.name, Component);
		Vue.component(Modal.name, Modal);
	}
};

export default FileManager;

if (window.Vue) {
	window.Vue.use(FileManager)
}
