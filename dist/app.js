/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(32),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/file-manager/src/file-manager.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] file-manager.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c831c5c", Component.options)
  } else {
    hotAPI.reload("data-v-1c831c5c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(9),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/file-manager/src/directory.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] directory.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5afe801d", Component.options)
  } else {
    hotAPI.reload("data-v-5afe801d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_manager_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_manager_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__file_manager_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_manager_modal_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_manager_modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__file_manager_modal_vue__);



var FileManager = {
	install: function install(Vue) {
		Vue.component(__WEBPACK_IMPORTED_MODULE_0__file_manager_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__file_manager_vue___default.a);
		Vue.component(__WEBPACK_IMPORTED_MODULE_1__file_manager_modal_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_1__file_manager_modal_vue___default.a);
	}
};

/* harmony default export */ __webpack_exports__["default"] = (FileManager);

if (window.Vue) {
	window.Vue.use(FileManager);
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Alert = function Alert() {
	return {
		type: 'warning',
		show: false,
		icon: 'battery_alert',
		content: ''
	};
};

Vue.component('directories', __webpack_require__(6));
Vue.component('file', __webpack_require__(11));
Vue.component('renameItem', __webpack_require__(14));
Vue.component('moveItem', __webpack_require__(17));
Vue.component('deleteItem', __webpack_require__(20));
Vue.component('downloadItem', __webpack_require__(23));
Vue.component('createDirectory', __webpack_require__(26));
Vue.component('viewImage', __webpack_require__(29));

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'file-manager',

	props: {
		multiple: {
			type: Boolean,
			default: true
		},
		modalMode: {
			type: Boolean,
			default: false
		}
	},

	data: function data() {
		return {
			payload: {},
			loading: true,
			current_path: [],
			data_items: [],
			breadcrumb: [],
			drop_area: 'inactive',
			search: {
				keyword: '',
				results: []
			},
			selected_items: [],
			root: null,
			uploaded_files: [],
			isUploading: false,
			filters: [{
				id: 'everything',
				label: 'Everything',
				value: 'everything'
			}, {
				id: 'image',
				label: 'Images',
				value: ['image']
			}, {
				id: 'video',
				label: 'Video',
				value: ['video']
			}, {
				id: 'audio',
				label: 'Audio',
				value: ['audio']
			}, {
				id: 'document',
				label: 'Documents',
				value: ['pdf', 'word', 'text', 'officedocument']
			}, {
				id: 'archive',
				label: 'Archive',
				value: ['zip', 'rar']
			}],
			selected_filter: 0,
			sort: 'name',
			order: 1,
			history: [],
			csrf_token: Laravel.csrfToken,
			zip_path: null,
			menu: {
				show: false,
				top: '0px',
				left: '0px'
			},
			options: [{
				value: 1,
				label: 'Rename'
			}, {
				value: 2,
				label: 'Move'
			}, {
				value: 3,
				label: 'Delete'
			}, {
				value: 4,
				label: 'Download'
			}],
			single_item: {},
			modal: 0,
			upload_progress: 0,
			dropzone_errors: [],
			alert: new Alert(),
			image: {}
		};
	},


	computed: {
		dropZoneClasses: function dropZoneClasses() {
			return {
				'active-dropzone': this.drop_area == 'active',
				'error-dropzone': this.drop_area == 'error'
			};
		},
		noItemSelected: function noItemSelected() {
			return !this.selected_items.length;
		},
		items: function items() {
			var self = this;
			var data = self.search.results.length > 0 || self.search.keyword ? self.search.results : self.current_path.files;

			if (!data) {
				return [];
			}

			if (self.selected_filter != 0) {
				data = data.filter(function (item) {
					var valid = self.filters[self.selected_filter].value.indexOf(item.type.replace(/.*\//, '')) > -1 || self.filters[self.selected_filter].value.indexOf(item.type.replace(/\/.*/, '')) > -1;

					if (item.type == 'directory' || valid) {
						return item;
					}
				});
			}

			var output = data.sort(function (a, b) {
				var nameA = self.sort == 'name' ? a.name.toLowerCase() : a[self.sort];
				var nameB = self.sort == 'name' ? b.name.toLowerCase() : b[self.sort];

				if (a.type == 'directory' && b.type == 'directory') {
					if (nameA < nameB) //sort string ascending
						return -self.order;
					if (nameA > nameB) return self.order;
					return 0; //default return value (no sorting)
				}

				if (a.type == 'directory') {
					return -self.order;
				}

				if (b.type == 'directory') {
					return self.order;
				}

				if (nameA < nameB) //sort string ascending
					return -self.order;
				if (nameA > nameB) return self.order;
				return 0; //default return value (no sorting)
			});
			return output;
		},
		selectedItemsToken: function selectedItemsToken() {
			return this.selected_items.map(function (item) {
				return item.token;
			});
		},
		uploadPath: function uploadPath() {
			return this.current_path.path;
		}
	},

	mounted: function mounted() {
		var self = this;

		self.getPayload();

		self.$bus.on('clear-selection', self.clearSelection);

		self.$bus.on('open-directory', self.openDirectory);

		self.$bus.on('select-item', self.selectItem);

		self.$bus.on('context-menu', self.openMenu);

		self.$bus.on('completed', self.completed);

		self.$bus.on('close-modal', self.closeModal);

		self.$bus.on('view-image', self.viewImage);
	},


	methods: {
		getPayload: function getPayload() {
			var self = this;

			axios.get('/file-manager').then(function (response) {
				self.payload = response.data.payload;
				Object.assign(self, self.payload);
				self.$nextTick(function () {
					self.initialiseDropzone();
				});
			}).catch(function (error) {
				console.log('Error ', error);
			});
		},
		initialiseDropzone: function initialiseDropzone() {
			var self = this;

			new Dropzone('#file-upload', {
				url: '/file-manager/upload',
				previewTemplate: document.getElementById('preview-template').innerHTML,
				clickable: '#upload-button',
				thumbnailWidth: 50,
				thumbnailHeight: 50,
				parallelUploads: 20,
				createImageThumbnails: false,
				addRemoveLinks: false,
				params: {
					_token: Laravel.csrfToken
				},

				init: function init() {
					var dropzone = this;
					dropzone.on('success', function (file, upload) {
						self.current_path.files.push(upload);
						self.current_path.hasFiles = self.current_path.hasFiles + 1;

						self.$bus.emit('item-created', {
							current_path: self.current_path.path,
							upload: upload
						});
					});

					dropzone.on('processing', function (file) {
						this.options.params.path = self.current_path.path;
						self.uploaded_files.push({
							name: file.name,
							progress: 0
						});
					});

					dropzone.on('uploadprogress', function (file, progress) {
						self.uploaded_files.filter(function (this_file) {
							if (this_file.name === file.name) {
								this_file.progress = progress;
							}
						});
						self.calculateProgress();
					});

					dropzone.on('error', function (file, message) {
						self.dropzone_errors.push(message.path[0]);
					});

					dropzone.on('dragover', function (event) {
						self.drop_area = self.search.keyword ? 'error' : 'active';
					});

					dropzone.on('drop', function (event) {
						self.drop_area = 'inactive';
					});

					dropzone.on('dragleave', function (event) {
						console.log('dragleave');
						self.drop_area = 'inactive';
					});

					dropzone.on('queuecomplete', function () {
						if (self.dropzone_errors.length) {
							self.showAlert(self.dropzone_errors);
						}
					});
				},
				accept: function accept(file, done) {

					if (self.search.keyword) {
						return;
					}

					if (self.uploaded_files.length > 0) {
						if (!self.isUploading) {
							self.isUploading = true;
							console.log('Please wait while file is being processed');
						}
						return;
					}
					done();
				}
			});
			self.loading = false;
		},
		formatSize: function formatSize() {
			var bytes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

			bytes = isNaN(bytes) ? 0 : bytes;

			var thresholds = [{
				range: 1024,
				unit: 'Bytes'
			}, {
				range: 1048576,
				unit: 'KB'
			}, {
				range: 1073741824,
				unit: 'MB'
			}, {
				range: 1073741824,
				unit: 'GB'
			}];

			var output = '';

			thresholds.some(function (threshold, index) {
				var range = threshold.range,
				    unit = threshold.unit;

				if (bytes < range && bytes > 0) {
					output = (bytes / thresholds[index - 1].range).toFixed(2) + unit;
					return true;
				}
			});

			return output ? output : '0 Bytes';
		},
		openDirectory: function openDirectory(path, back) {
			var self = this;
			self.loading = true;
			var previous_directory = self.current_path.path;

			self.search = {
				keyword: '',
				results: []
			};
			self.$set(self, 'filter', 'everything');
			//loading block
			axios.post('/file-manager', {
				path: path
			}).then(function (response) {
				Object.assign(self, response.data.payload);

				if (!back && _.last(self.history) != previous_directory) {
					self.history.push(previous_directory);
				}
				self.loading = false;
			}).catch(function (error) {
				self.loading = false;
				console.log(error);
			});
		},
		clearSelection: function clearSelection() {
			this.$set(this, 'selected_items', []);
			this.items.forEach(function (item) {
				item.selected = false;
			});
		},
		calculateProgress: function calculateProgress() {
			var self = this;

			var file_count = self.uploaded_files.length;
			var total = self.uploaded_files.reduce(function (total, file) {
				return total + file.progress;
			}, 0);

			var progress = parseInt(total / file_count);

			self.upload_progress = 0 + progress;

			if (progress === 100) {

				setTimeout(function () {
					self.upload_progress = 0;
					self.uploaded_files = [];
					self.isUploading = false;
				}.bind(self), 2000);
			}
		},
		searchData: function searchData() {
			var self = this;

			if (!self.search.keyword) {
				self.search.results = [];
				return;
			}

			self.clearSelection();

			axios.post('/file-manager/search', {
				search: self.search.keyword
			}).then(function (response) {
				self.search.results = response.data;
			}).catch(function (error) {});
		},
		isDirectory: function isDirectory(item) {
			return item.type == 'directory';
		},
		refresh: function refresh() {
			var self = this;
			self.openDirectory(self.current_path.path);
			self.clearSelection();
		},
		back: function back() {
			var self = this;
			if (self.history.length > 0) {
				var last = _.last(self.history);
				self.history.pop();
				self.openDirectory(last, true);
			}
		},
		selectItem: function selectItem(file) {
			var self = this;

			if (!self.multiple) {
				self.clearSelection();
				file.selected = true;
			}

			if (file.selected) {
				self.selected_items.push(file);
				self.$emit('selected', self.selected_items);
				return;
			}

			self.selected_items = self.selected_items.filter(function (item) {
				return file.token !== item.token;
			});

			self.$emit('selected', self.selected_items);
		},
		setMenu: function setMenu(top, left) {

			var largestHeight = window.innerHeight - this.$refs['right'].offsetHeight - 25;
			var largestWidth = window.innerWidth - this.$refs['right'].offsetWidth - 25;

			if (top > largestHeight) top = largestHeight;

			if (left > largestWidth) left = largestWidth;

			this.menu.top = top + 'px';
			this.menu.left = left + 'px';
		},
		closeMenu: function closeMenu() {
			this.menu.show = false;
		},
		openMenu: function openMenu(index, event) {
			var self = this;
			self.menu.show = true;

			self.single_item = self.items[index];
			self.clearSelection();
			self.single_item.selected = true;
			self.selectItem(self.single_item);

			self.$nextTick(function () {
				self.$refs['right'].focus();
				self.setMenu(event.y, event.x);
			}.bind(this));
			event.preventDefault();
		},
		openModal: function openModal(option) {
			var self = this;
			self.modal = option;
			self.$refs['modal'].open();
		},
		closeModal: function closeModal() {
			this.$refs['modal'].close();
			this.modal = 0;
			this.image = {};
		},
		completed: function completed(action, response) {
			var self = this;
			switch (action) {
				case 1:
					Object.assign(self.single_item, response.data);

					if (self.single_item.type === 'directory') {
						self.$bus.emit('item-rename', {
							file: self.single_item
						});
					}
					break;
				case 2:
					var data = response.data.moved;

					var movedDirectories = data.directories;
					var movedFiles = data.files;

					if (movedDirectories.length > 0 || movedFiles.length > 0) {

						self.current_path.files = self.current_path.files.filter(function (file) {
							return !(movedDirectories.indexOf(file.token) > -1 || movedFiles.indexOf(file.token) > -1);
						});

						if (self.search.keyword) {
							self.search.results = self.search.results.filter(function (file) {

								return !(movedDirectories.indexOf(file.token) > -1 || movedFiles.indexOf(file.token) > -1);
							});
						}

						self.$bus.emit('item-moved', {
							data: data
						});

						self.current_path.files.forEach(function (directory, index) {
							if (directory.type === 'directory' && directory.token === data.destination.token) {
								self.current_path.files[index] = data.destination;
							}
						});
					}
					break;
				case 3:
					//let data = response.data;

					var deletedDirectories = response.data.deleted.directories;

					var deletedFiles = response.data.deleted.files;

					if (deletedDirectories.length > 0 || deletedFiles.length > 0) {
						self.current_path.files = self.current_path.files.filter(function (file) {

							return !(deletedDirectories.indexOf(file.token) > -1 || deletedFiles.indexOf(file.token) > -1);
						});

						if (self.search.keyword) {
							self.search.results = self.search.results.filter(function (file) {

								return !(deletedDirectories.indexOf(file.token) > -1 || deletedFiles.indexOf(file.token) > -1);
							});
						}

						self.$bus.emit('item-deleted', {
							data: response.data.deleted
						});
					}
					break;
				case 4:
					console.log('Downloading item');
					break;
				case 5:
					break;
				case 6:
					self.current_path.files.push(response.data);
					self.current_path.subDirectories.push(response.data);

					self.$bus.emit('item-created', {
						current_path: self.current_path.path,
						upload: response.data
					});
					break;
			}
			self.clearSelection();
			self.closeModal();
		},
		showAlert: function showAlert(content) {
			var self = this;

			self.alert.content = content;

			if (Array.isArray(content)) {
				self.alert.content = content.reduce(function (data, message) {
					var html = '<p>' + message + '</p>';
					return data + html;
				}, '');
			}

			self.alert.show = true;
		},
		closeAlert: function closeAlert() {
			this.alert = new Alert();
			this.dropzone_errors = [];
		},
		viewImage: function viewImage(image) {
			var self = this;
			image.preloaded = null;
			self.image = image;
			self.openModal(7);
		}
	}
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(10),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/file-manager/src/directories.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] directories.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b6e8f70a", Component.options)
  } else {
    hotAPI.reload("data-v-b6e8f70a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        mode: String,
        directory: {
            type: Object,
            required: true
        }
    },
    components: {
        directory: __webpack_require__(2)
    },
    computed: {}
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'directory',

    props: {
        directory: Object,
        mode: String,
        parent: Object,
        expand: {
            type: Boolean,
            'default': false
        }
    },

    data: function data() {
        return {
            current_directory: {}
        };
    },


    components: {
        directory: __webpack_require__(2)
    },

    created: function created() {
        this.current_directory = this.directory;
    },
    mounted: function mounted() {
        var self = this;

        self.$bus.on('item-created', self.addedItem);

        self.$bus.on('item-deleted', self.deleteItem);

        self.$bus.on('item-rename', self.renameItem);

        self.$bus.on('item-moved', self.moveItem);
    },


    methods: {
        expandDirectory: function expandDirectory() {
            var self = this;

            self.expand = !self.expand;

            if (self.current_directory['subDirectories'].length > 0 || !self.expand) {
                return;
            }

            axios.post('/dashboard/file-manager', { path: self.current_directory.path }).then(function (response) {
                self.current_directory['subDirectories'] = response.data.payload.current_path.subDirectories;
            }).catch(function (response) {});
        },
        addedItem: function addedItem(settings) {
            var current_path = settings.current_path,
                upload = settings.upload;

            var self = this;

            if (current_path !== self.current_directory.path) {
                return;
            }

            if (upload.type === 'directory') {
                self.current_directory.hasDirectories = self.current_directory.hasDirectories + 1;
                self.current_directory.subDirectories.push(upload);
                return;
            }
            self.current_directory.hasFiles = self.current_directory.hasFiles + 1;
        },
        deleteItem: function deleteItem(parameters) {
            var data = parameters.data;

            var self = this;

            if (data.files_parents.indexOf(self.current_directory.token) > -1) {
                self.current_directory.hasFiles = self.current_directory.hasFiles - data.files_parents.filter(function (token) {
                    return token === self.current_directory.token;
                }).length;
            }

            self.current_directory.hasDirectories = self.current_directory.hasDirectories - self.directory.subDirectories.filter(function (directory) {
                return data.directories.indexOf(directory.token) > -1;
            }).length;

            if (data.directories_parents.indexOf(self.current_directory.token) > -1) {
                self.current_directory.subDirectories = self.current_directory.subDirectories.filter(function (directory) {
                    return data.directories.indexOf(directory.token) === -1;
                });
            }
        },
        renameItem: function renameItem(parameters) {
            var file = parameters.file;

            var self = this;

            if (file.token === self.current_directory.token) {
                self.current_directory.name = file.name;
            }
        },
        clickAction: function clickAction(directory) {
            var self = this;
            if (self.mode === 'navigate') {
                self.$bus.emit('open-directory', directory.path);
                return;
            }
            self.$bus.emit('select-destination', directory);
        },
        moveItem: function moveItem(parameters) {
            var data = parameters.data;

            var self = this;

            if (data.files_parents.indexOf(self.current_directory.token) > -1) {
                self.current_directory.hasFiles = self.current_directory.hasFiles - data.files_parents.filter(function (token) {
                    return token === self.current_directory.token;
                }).length;
            }

            if (data.directories_parents.indexOf(self.current_directory.token) > -1) {
                self.current_directory.subDirectories = self.current_directory.subDirectories.filter(function (directory) {
                    return data.directories.indexOf(directory.token) > -1;
                });
            }

            if (data.destination.token === self.current_directory.token) {
                self.$set(self, 'current_directory', data.destination);
            }
        }
    }
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [(_vm.current_directory.hasDirectories > 0) ? _c('label', {
    on: {
      "click": function($event) {
        _vm.expandDirectory()
      }
    }
  }, [(!_vm.expand) ? _c('span', [_vm._v("+")]) : _c('span', [_vm._v("-")])]) : _vm._e(), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.clickAction(_vm.current_directory)
      }
    }
  }, [_c('i', {
    staticClass: "icon-folder-network-1"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.current_directory.name))]), _vm._v(" "), (_vm.current_directory.hasFiles > 0) ? _c('span', {
    staticClass: "badge"
  }, [_vm._v(_vm._s(_vm.current_directory.hasFiles))]) : _vm._e()]), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.current_directory.subDirectories.length > 0 && _vm.expand),
      expression: "current_directory.subDirectories.length > 0 && expand"
    }]
  }, _vm._l((_vm.current_directory.subDirectories), function(sub_directory) {
    return _c('directory', {
      attrs: {
        "directory": sub_directory,
        "mode": _vm.mode,
        "parent": _vm.current_directory
      },
      on: {
        "update:directory": function($event) {
          sub_directory = $event
        }
      }
    })
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5afe801d", module.exports)
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "directory-tree-menu"
  }, [_c('ul', [_c('directory', {
    attrs: {
      "directory": _vm.directory,
      "mode": _vm.mode,
      "expand": true
    },
    on: {
      "update:directory": function($event) {
        _vm.directory = $event
      }
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b6e8f70a", module.exports)
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(13),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/file-manager/src/file.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] file.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60d0bd7c", Component.options)
  } else {
    hotAPI.reload("data-v-60d0bd7c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		index: {
			type: Number,
			required: true
		},
		upload: {
			type: Object,
			required: true
		},
		search: {
			type: Object,
			required: true
		},
		modalMode: {
			type: Boolean,
			default: false
		}
	},

	data: function data() {
		return {
			items: [],
			selected: false
		};
	},


	computed: {
		show: function show() {
			return !(this.modalMode && this.upload.type === 'directory');
		}
	},
	mounted: function mounted() {
		var self = this;
		self.preloadImage();
		self.$bus.on('edit-image', function (file) {
			if (self.upload.token === file.token) {
				self.upload.thumbnail = file.thumbnail + '?' + new Date().getTime();
				self.preloadImage();
			}
		});
	},


	methods: {
		formatSize: function formatSize() {
			var bytes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

			bytes = isNaN(bytes) ? 0 : bytes;

			var thresholds = [{
				range: 1024,
				unit: 'Bytes'
			}, {
				range: 1048576,
				unit: 'KB'
			}, {
				range: 1073741824,
				unit: 'MB'
			}, {
				range: 1073741824,
				unit: 'GB'
			}];

			var output = '';

			thresholds.some(function (threshold, index) {
				var range = threshold.range,
				    unit = threshold.unit;

				if (bytes < range && bytes > 0) {
					output = (bytes / thresholds[index - 1].range).toFixed(2) + unit;
					return true;
				}
			});

			return output ? output : '0 Bytes';
		},
		preloadImage: function preloadImage() {
			var self = this;
			if (self.upload.type.indexOf('image') > -1) {
				var path = self.upload.thumbnail;
				var image = new Image();
				image.src = path;

				image.onload = function () {
					self.upload.preloaded = path;
				};
			}
		},
		handleDoubleClick: function handleDoubleClick(file) {
			var self = this;

			if (self.upload.type !== 'directory') {
				return;
			}
			self.$bus.emit('open-directory', self.upload.path);
			self.preloadImage();
		},
		viewImage: function viewImage() {
			var self = this;
			self.$bus.emit('view-image', self.upload);
		},
		checkItem: function checkItem() {
			var self = this;
			self.$bus.emit('select-item', self.upload);
		},
		openContextMenu: function openContextMenu(event) {
			var self = this;
			self.upload.selected = true;
			self.$bus.emit('context-menu', self.index, event);
		}
	},
	watch: {
		upload: function upload() {
			var self = this;
			if (self.upload.type.indexOf('image') > -1 && !self.upload.preload) {
				self.preloadImage();
			}
		}
	}
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item file_caption",
    on: {
      "contextmenu": function($event) {
        $event.preventDefault();
        _vm.openContextMenu($event)
      },
      "dblclick": function($event) {
        _vm.handleDoubleClick()
      }
    }
  }, [_c('div', {
    staticClass: "icon-container"
  }, [(_vm.upload.type.indexOf('image') > -1) ? _c('div', {
    staticClass: "preloader",
    class: {
      active: _vm.upload.preloaded
    }
  }, [_c('div', {
    staticClass: "loader"
  }), _vm._v(" "), _c('img', {
    staticClass: "image-thumbnail",
    attrs: {
      "src": _vm.upload.preloaded
    },
    on: {
      "click": function($event) {
        _vm.viewImage(_vm.upload)
      }
    }
  })]) : _c('div', {
    staticClass: "icon-wrapper"
  }, [_c('i', {
    class: _vm.upload.icon,
    attrs: {
      "aria-hidden": "true"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('h5', [_vm._v(_vm._s(_vm.upload.name))]), _vm._v(" "), _c('p', [_vm._v("Size: " + _vm._s(_vm.formatSize(_vm.upload.size)))]), _vm._v(" "), (_vm.upload.type != 'directory') ? _c('p', [_vm._v("\n            Public URL:\n            "), _c('a', {
    attrs: {
      "href": _vm.upload.url,
      "target": "_blank"
    }
  }, [_vm._v("Click here")])]) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "data-dz-date"
  }, [_vm._v("Last modified: " + _vm._s(_vm.upload.updated_at))]), _vm._v(" "), (_vm.search.keyword) ? _c('p', [_vm._v("Location: " + _vm._s(_vm.upload.path))]) : _vm._e(), _vm._v(" "), (_vm.show) ? _c('div', {
    staticClass: "checkbox"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.upload.selected),
      expression: "upload.selected"
    }],
    attrs: {
      "type": "checkbox",
      "id": _vm.upload.token
    },
    domProps: {
      "value": _vm.upload,
      "checked": Array.isArray(_vm.upload.selected) ? _vm._i(_vm.upload.selected, _vm.upload) > -1 : (_vm.upload.selected)
    },
    on: {
      "change": _vm.checkItem,
      "__c": function($event) {
        var $$a = _vm.upload.selected,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = _vm.upload,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.upload.selected = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.upload.selected = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.upload.selected = $$c
        }
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": _vm.upload.token
    }
  }, [_vm._v("Select")])]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-60d0bd7c", module.exports)
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(16),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/file-manager/src/modal/rename-item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] rename-item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c105010", Component.options)
  } else {
    hotAPI.reload("data-v-4c105010", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var FormData = function FormData() {
	return {
		name: '',
		action: 1,
		progress: false
	};
};

/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		items: {
			type: Array
		}
	},
	data: function data() {
		return {
			form: new FormData()
		};
	},

	methods: {
		validateBeforeSubmit: function validateBeforeSubmit() {
			var self = this;
			this.$validator.validateAll().then(function (result) {
				if (result) {
					self.rename();
				}
			});
		},
		resetForm: function resetForm() {
			var self = this;
			self.$el.reset();
			self.form = new FormData();
			self.$validator.clean();
		},
		close: function close() {
			var self = this;
			self.$bus.emit('close-modal');
		},
		rename: function rename() {
			var self = this;
			self.form.progress = true;

			axios.post('/file-manager/update', {
				name: self.form.name,
				items: self.items,
				action: self.form.action
			}).then(function (response) {
				self.$bus.emit('completed', self.form.action, response);
				self.resetForm();
			}).catch(function (error) {
				self.progress = false;
			});
		}
	}
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit($event)
      }
    }
  }, [_c('h5', [_vm._v("Rename file - Do not change the extension i.e .jpg/.zip")]), _vm._v(" "), _c('fieldset', [_c('label', {
    staticClass: "hide",
    attrs: {
      "for": "file_name"
    }
  }, [_vm._v("New file name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: ('required'),
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: (_vm.form.name),
      expression: "form.name"
    }],
    staticClass: "file-name",
    attrs: {
      "name": "file_name",
      "id": "file_name",
      "type": "text",
      "data-vv-as": "file name"
    },
    domProps: {
      "value": (_vm.form.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('file_name')),
      expression: "errors.has('file_name')"
    }],
    staticClass: "help is-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('file_name')))])]), _vm._v(" "), _c('ui-button', {
    attrs: {
      "button-type": "submit",
      "loading": _vm.form.progress
    }
  }, [_vm._v("\n        Rename\n    ")]), _vm._v(" "), _c('ui-button', {
    attrs: {
      "button-type": "button"
    },
    on: {
      "click": function($event) {
        _vm.close()
      }
    }
  }, [_vm._v("\n        Close\n    ")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4c105010", module.exports)
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(19),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/file-manager/src/modal/move-items.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] move-items.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60529666", Component.options)
  } else {
    hotAPI.reload("data-v-60529666", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		root: {
			type: Object
		},
		items: {
			type: Array
		}
	},

	data: function data() {
		return {
			destination: '',
			action: 2,
			progress: false
		};
	},
	mounted: function mounted() {
		var self = this;
		self.$bus.on('select-destination', function (directory) {
			self.destination = directory;
		});
	},


	methods: {
		close: function close() {
			var self = this;
			self.$bus.emit('close-modal');
		},
		move: function move() {
			var self = this;

			if (!self.destination) {
				return;
			}

			self.progress = true;

			axios.post('/file-manager/move', {
				items: self.items,
				destination_token: self.destination.token,
				action: self.action
			}).then(function (response) {
				self.$bus.emit('completed', self.action, response);
			}).catch(function (error) {
				self.progress = false;
			});
		}
	}
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.move($event)
      }
    }
  }, [_c('h5', [_vm._v("Select directory to move item")]), _vm._v(" "), _c('directories', {
    attrs: {
      "directory": _vm.root,
      "mode": 'modal'
    }
  }), _vm._v(" "), _c('fieldset', [_c('label', [_vm._v("Move to: " + _vm._s(_vm.destination.name))])]), _vm._v(" "), _c('div', {
    staticClass: "btn-handler"
  }, [_c('ui-button', {
    attrs: {
      "disabled": !_vm.destination,
      "button-type": "submit",
      "loading": _vm.progress
    }
  }, [_vm._v("\n            Move\n        ")]), _vm._v(" "), _c('ui-button', {
    attrs: {
      "button-type": "button"
    },
    on: {
      "click": function($event) {
        _vm.close()
      }
    }
  }, [_vm._v("\n            Close\n        ")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-60529666", module.exports)
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(22),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/file-manager/src/modal/delete-items.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] delete-items.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0fd73d40", Component.options)
  } else {
    hotAPI.reload("data-v-0fd73d40", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		items: {
			type: Array
		}
	},

	data: function data() {
		return {
			destination: '',
			action: 3,
			progress: false
		};
	},


	methods: {
		close: function close() {
			var self = this;
			self.$bus.emit('close-modal');
		},
		deleteItem: function deleteItem() {
			var self = this;

			if (self.items.length === 0) {
				return;
			}
			self.progress = true;

			axios.post('/file-manager/delete', {
				items: self.items
			}).then(function (response) {
				self.progress = false;
				self.$bus.emit('completed', self.action, response);
			}).catch(function (error) {
				self.progress = false;
			});
		}
	}
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.deleteItem($event)
      }
    }
  }, [_c('h5', [_vm._v("Delete the selected item(s)")]), _vm._v(" "), _c('ui-button', {
    attrs: {
      "button-type": "submit",
      "loading": _vm.progress
    }
  }, [_vm._v("\n\t\tDelete\n\t")]), _vm._v(" "), _c('ui-button', {
    attrs: {
      "button-type": "button"
    },
    on: {
      "click": _vm.close
    }
  }, [_vm._v("\n\t\tClose\n\t")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0fd73d40", module.exports)
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(25),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/file-manager/src/modal/download-items.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] download-items.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4fe4555d", Component.options)
  } else {
    hotAPI.reload("data-v-4fe4555d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		items: {
			type: Array
		}
	},
	data: function data() {
		return {
			destination: '',
			action: 4,
			progress: false
		};
	},

	methods: {
		close: function close() {
			var self = this;
			self.$bus.emit('close-modal');
		},
		download: function download() {
			var self = this;
			self.$refs['download-form'].submit();
			self.$bus.emit('completed', self.action);
		}
	}
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h5', [_vm._v("Download selected file")]), _vm._v(" "), _c('form', {
    ref: "download-form",
    staticClass: "hide",
    attrs: {
      "action": "/file-manager/download",
      "method": "post"
    }
  }, [_c('div', _vm._l((_vm.items), function(item) {
    return _c('input', {
      attrs: {
        "type": "text",
        "name": "items[]"
      },
      domProps: {
        "value": item
      }
    })
  }))]), _vm._v(" "), _c('ui-button', {
    attrs: {
      "button-type": "b",
      "loading": _vm.progress
    },
    on: {
      "click": _vm.download
    }
  }, [_vm._v("\n        Download\n    ")]), _vm._v(" "), _c('ui-button', {
    attrs: {
      "button-type": "button"
    },
    on: {
      "click": function($event) {
        _vm.close()
      }
    }
  }, [_vm._v("\n        Close\n    ")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4fe4555d", module.exports)
  }
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(28),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/file-manager/src/modal/create-directory.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] create-directory.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30091afe", Component.options)
  } else {
    hotAPI.reload("data-v-30091afe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		directory: {
			type: String
		}
	},
	data: function data() {
		return {
			directory_name: '',
			progress: false,
			action: 6
		};
	},

	methods: {
		validateBeforeSubmit: function validateBeforeSubmit() {
			var self = this;
			this.$validator.validateAll().then(function (result) {
				if (result) {
					self.create();
				}
			});
		},
		create: function create() {
			var self = this;
			self.progress = true;

			axios.post('/file-manager/create', {
				name: self.directory_name,
				path: self.directory
			}).then(function (response) {
				self.$bus.emit('completed', self.action, response);
				self.resetForm();
			}).catch(function (error) {
				self.progress = false;
				console.log(error);
			});
		},
		resetForm: function resetForm() {
			var self = this;
			self.$el.reset();
			self.progress = false;
			self.$validator.clean();
		},
		close: function close() {
			var self = this;
			self.$bus.emit('close-modal');
		}
	}
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit($event)
      }
    }
  }, [_c('h5', [_vm._v("Create a new folder")]), _vm._v(" "), _c('fieldset', [_c('label', {
    attrs: {
      "for": "directory_name"
    }
  }, [_vm._v("Create a new directory at " + _vm._s(_vm.directory) + "/")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.directory_name),
      expression: "directory_name"
    }],
    staticClass: "new-folder-name",
    attrs: {
      "name": "directory_name",
      "id": "directory_name",
      "type": "text"
    },
    domProps: {
      "value": (_vm.directory_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.directory_name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('ui-button', {
    attrs: {
      "button-type": "submit",
      "loading": _vm.progress
    }
  }, [_vm._v("\n\t\tSave\n\t")]), _vm._v(" "), _c('ui-button', {
    attrs: {
      "button-type": "button"
    },
    on: {
      "click": function($event) {
        _vm.close()
      }
    }
  }, [_vm._v("\n\t\tClose\n\t")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-30091afe", module.exports)
  }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(31),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/file-manager/src/modal/view-image.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] view-image.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0cdccf56", Component.options)
  } else {
    hotAPI.reload("data-v-0cdccf56", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		image: {
			type: Object
		}
	},

	data: function data() {
		return {};
	},


	computed: {
		formatSize: function formatSize() {
			var bytes = this.image.size;
			bytes = isNaN(bytes) ? 0 : bytes;

			var thresholds = [{
				range: 1024,
				unit: 'Bytes'
			}, {
				range: 1048576,
				unit: 'KB'
			}, {
				range: 1073741824,
				unit: 'MB'
			}, {
				range: 1073741824,
				unit: 'GB'
			}];

			var output = '';

			thresholds.some(function (threshold, index) {
				var range = threshold.range,
				    unit = threshold.unit;

				if (bytes < range && bytes > 0) {
					output = (bytes / thresholds[index - 1].range).toFixed(2) + unit;
					return true;
				}
			});

			return output ? output : '0 Bytes';
		}
	},
	mounted: function mounted() {
		this.preloadImage();
	},

	methods: {
		open: function open() {
			window.open(this.image.url, "_blank");
			this.close();
		},
		close: function close() {
			var self = this;
			self.$bus.emit('close-modal');
		},
		preloadImage: function preloadImage() {
			var self = this;

			var path = self.image.url;
			var image = new Image();
			image.src = path;

			image.onload = function () {
				self.image.preloaded = path;
			};
		}
	}
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "image-viewer"
  }, [_c('figure', [_c('div', {
    staticClass: "preloader",
    class: {
      active: _vm.image.preloaded
    }
  }, [_c('div', {
    staticClass: "loader"
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.image.preloaded
    }
  })]), _vm._v(" "), _c('figcaption', [_c('p', [_c('strong', [_vm._v("Meta data:")]), _vm._v(" " + _vm._s(_vm.image.name) + ", " + _vm._s(_vm.formatSize))])])]), _vm._v(" "), _c('ui-button', {
    attrs: {
      "button-type": "button"
    },
    on: {
      "click": _vm.open
    }
  }, [_vm._v("\n        View original size (new window)\n    ")]), _vm._v(" "), _c('ui-button', {
    attrs: {
      "button-type": "button"
    },
    on: {
      "click": _vm.close
    }
  }, [_vm._v("\n        Close\n    ")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0cdccf56", module.exports)
  }
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ui-preloader', {
    attrs: {
      "show": _vm.loading
    }
  }), _vm._v(" "), _c('ui-progress-linear', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isUploading),
      expression: "isUploading"
    }],
    attrs: {
      "color": "black",
      "type": "determinate",
      "progress": _vm.upload_progress
    }
  }), _vm._v(" "), _c('ui-modal', {
    ref: "modal",
    attrs: {
      "dismiss-on": "close-button esc",
      "title": "Title"
    },
    on: {
      "close": _vm.closeModal
    }
  }, [(_vm.modal == 1) ? _c('rename-item', {
    attrs: {
      "items": _vm.selectedItemsToken
    }
  }) : _vm._e(), _vm._v(" "), (_vm.modal == 2) ? _c('move-item', {
    attrs: {
      "root": _vm.root,
      "items": _vm.selectedItemsToken
    }
  }) : _vm._e(), _vm._v(" "), (_vm.modal == 3) ? _c('delete-item', {
    attrs: {
      "items": _vm.selectedItemsToken
    }
  }) : _vm._e(), _vm._v(" "), (_vm.modal == 4) ? _c('download-item', {
    attrs: {
      "items": _vm.selectedItemsToken
    }
  }) : _vm._e(), _vm._v(" "), (_vm.modal == 6) ? _c('create-directory', {
    attrs: {
      "directory": _vm.current_path.path
    }
  }) : _vm._e(), _vm._v(" "), (_vm.modal == 7) ? _c('view-image', {
    attrs: {
      "image": _vm.image
    }
  }) : _vm._e()], 1), _vm._v(" "), (_vm.menu.show) ? _c('ul', {
    ref: "right",
    class: {
      top: _vm.menu.top, left: _vm.menu.left
    },
    attrs: {
      "id": "context-menu",
      "tabindex": "-1"
    },
    on: {
      "blur": _vm.closeMenu
    }
  }, _vm._l((_vm.options), function(option) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.openModal(option.value)
        }
      }
    }, [_c('a', [_vm._v(_vm._s(option.label))])])
  })) : _vm._e(), _vm._v(" "), _c('form', {
    staticClass: "form grid",
    attrs: {
      "method": "post",
      "action": "#",
      "id": "file-upload"
    }
  }, [_c('div', {
    staticClass: "file-manager",
    class: _vm.dropZoneClasses
  }, [_c('header', [_c('div', {
    staticClass: "button-group"
  }, [_c('button', {
    attrs: {
      "type": "button",
      "disabled": _vm.history.length == 0
    },
    on: {
      "click": function($event) {
        _vm.back()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-chevron-left",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Back")])]), _vm._v(" "), _c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.refresh
    }
  }, [_c('i', {
    staticClass: "fa fa-refresh",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Refresh")])])]), _vm._v(" "), _c('div', {
    staticClass: "button-group"
  }, [_c('button', {
    ref: "upload-button",
    attrs: {
      "type": "button",
      "disabled": _vm.search.keyword.length > 0,
      "id": "upload-button"
    }
  }, [_c('i', {
    staticClass: "fa fa-upload",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Upload")])])]), _vm._v(" "), _c('div', {
    staticClass: "button-group"
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.openModal(6)
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-folder-open",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Add folder")])]), _vm._v(" "), _c('button', {
    attrs: {
      "type": "button",
      "disabled": _vm.noItemSelected
    },
    on: {
      "click": _vm.clearSelection
    }
  }, [_c('span', [_vm._v("Deselect all")])]), _vm._v(" "), _c('button', {
    attrs: {
      "type": "button",
      "disabled": _vm.noItemSelected
    },
    on: {
      "click": function($event) {
        _vm.openModal(2)
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-reply-all",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Move")])]), _vm._v(" "), _c('button', {
    attrs: {
      "type": "button",
      "disabled": _vm.noItemSelected
    },
    on: {
      "click": function($event) {
        _vm.openModal(3)
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-trash",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Delete")])])]), _vm._v(" "), _c('div', {
    staticClass: "button-group"
  }, [_c('button', {
    class: {
      active: _vm.order == 1
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.order = 1
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-sort-amount-asc",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('button', {
    class: {
      active: _vm.order == -1
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.order = -1
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-sort-amount-desc",
    attrs: {
      "aria-hidden": "true"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "search-bar"
  }, [_c('ui-textbox', {
    attrs: {
      "icon": "search",
      "id": "search",
      "name": "search",
      "placeholder": "Search.."
    },
    on: {
      "keydown": _vm.searchData
    },
    model: {
      value: (_vm.search.keyword),
      callback: function($$v) {
        _vm.search.keyword = $$v
      },
      expression: "search.keyword"
    }
  })], 1)]), _vm._v(" "), _c('section', {
    staticClass: "content layout",
    attrs: {
      "id": "uploadzone"
    }
  }, [_c('main', {
    staticClass: "layout-row"
  }, [_c('aside', {
    staticClass: "layout-cell"
  }, [_c('h5', [_vm._v("Directories")]), _vm._v(" "), (_vm.root) ? _c('directories', {
    attrs: {
      "directory": _vm.root,
      "mode": 'navigate'
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "group-separator"
  }, [_c('h5', [_vm._v("Filter " + _vm._s(_vm.current_path.name) + " by")]), _vm._v(" "), _c('ul', {
    staticClass: "aside-content file-type-list"
  }, _vm._l((_vm.filters), function(type, index) {
    return _c('li', [_c('div', {
      staticClass: "radio"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.selected_filter),
        expression: "selected_filter"
      }],
      staticClass: "file-type-radio",
      attrs: {
        "type": "radio",
        "id": type.id,
        "name": "file-type-group"
      },
      domProps: {
        "value": index,
        "checked": _vm._q(_vm.selected_filter, index)
      },
      on: {
        "__c": function($event) {
          _vm.selected_filter = index
        }
      }
    }), _vm._v(" "), _c('label', {
      staticClass: "file-type-label",
      attrs: {
        "for": type.id
      }
    }, [_vm._v(_vm._s(type.label))])])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "group-separator"
  }, [_c('h5', [_vm._v("Order " + _vm._s(_vm.current_path.name) + " by")]), _vm._v(" "), _c('ul', [_c('li', [_c('div', {
    staticClass: "select"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.sort),
      expression: "sort"
    }],
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.sort = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "name"
    }
  }, [_vm._v("Title")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "size"
    }
  }, [_vm._v("Size")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "last_modified"
    }
  }, [_vm._v("Last Modified")])])])])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "layout-cell file-panel"
  }, [_c('div', {
    staticClass: "file-library"
  }, [_c('ul', {
    staticClass: "breadcrumb"
  }, [_c('li', [_vm._v("You are here")]), _vm._v(" "), _vm._l((_vm.breadcrumb), function(directory) {
    return _c('li', {
      on: {
        "dblclick": function($event) {
          _vm.handleDoubleClick(directory)
        }
      }
    }, [_vm._v(_vm._s(directory.name) + "\n                                ")])
  })], 2), _vm._v(" "), (_vm.items.length == 0) ? _c('p', [_vm._v("No item found.")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "file-list"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "file-row"
  }, _vm._l((_vm.items), function(upload, index) {
    return _c('file', {
      attrs: {
        "modalMode": _vm.modalMode,
        "index": index,
        "upload": upload,
        "search": _vm.search
      }
    })
  }))])])])])])])]), _vm._v(" "), _c('ui-alert', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.alert.show),
      expression: "alert.show"
    }],
    attrs: {
      "type": _vm.alert.type
    },
    on: {
      "dismiss": _vm.closeAlert
    }
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.alert.content)
    }
  })])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "preview-template"
    }
  }, [_c('div', {
    staticClass: "file-row"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1c831c5c", module.exports)
  }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(35),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/file-manager/src/file-manager-modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] file-manager-modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c2b77fc", Component.options)
  } else {
    hotAPI.reload("data-v-7c2b77fc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

Vue.component('file-manager', __webpack_require__(1));

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'file-manager-modal',

	props: {
		multiple: {
			type: Boolean,
			required: false,
			default: true
		},
		placeholder: {
			type: String,
			required: false
		},
		value: {
			type: String
		}
	},

	computed: {
		formattedFiles: function formattedFiles() {
			return this.files.map(function (file) {
				return file.name;
			}).join(',');
		},
		renderPath: function renderPath() {
			return this.formattedFiles ? this.formattedFiles : this.placeholder;
		}
	},

	data: function data() {
		return {
			showModal: false,
			files: [],
			selected_files: []
		};
	},

	methods: {
		browse: function browse() {
			var self = this;
			self.showModal = true;
			self.$refs['file-manager'].open();
		},
		deny: function deny() {
			this.$refs['file-manager'].close();
			this.selected_files = [];
		},
		close: function close() {
			this.showModal = false;
			return false;
		},
		confirm: function confirm() {
			this.files = JSON.parse(JSON.stringify(this.selected_files));
			this.selected_files = [];
		},
		getSelected: function getSelected(selected_files) {
			this.selected_files = selected_files;
		}
	}
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-group"
  }, [_c('ui-confirm', {
    ref: "file-manager",
    attrs: {
      "dismiss-on": "close-button esc",
      "title": "Select file"
    },
    on: {
      "confirm": _vm.confirm,
      "close": _vm.close,
      "deny": _vm.deny
    }
  }, [(_vm.showModal) ? _c('file-manager', {
    attrs: {
      "multiple": _vm.multiple,
      "modalMode": true
    },
    on: {
      "selected": _vm.getSelected
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.renderPath)
    }
  }), _vm._v(" "), _vm._l((_vm.files), function(file) {
    return _c('input', {
      attrs: {
        "type": "hidden",
        "name": "file[]"
      },
      domProps: {
        "value": file.url
      }
    })
  }), _vm._v(" "), _c('span', [_c('button', {
    staticClass: "button",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.browse
    }
  }, [_c('i', {
    staticClass: "fa fa-cloud-upload",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("Browse")])])])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7c2b77fc", module.exports)
  }
}

/***/ })
/******/ ]);