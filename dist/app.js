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
  __webpack_require__(34),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/laravel-cms/modules/file-manager/src/file-manager.vue"
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
  __webpack_require__(10),
  /* template */
  __webpack_require__(11),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/laravel-cms/modules/file-manager/src/directory.vue"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_manager_modal_vue__ = __webpack_require__(35);
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


var Dropzone = __webpack_require__(6);
var Alert = function Alert() {
	return {
		type: 'warning',
		show: false,
		icon: 'battery_alert',
		content: ''
	};
};

Vue.component('directories', __webpack_require__(8));
Vue.component('file', __webpack_require__(13));
Vue.component('renameItem', __webpack_require__(16));
Vue.component('moveItem', __webpack_require__(19));
Vue.component('deleteItem', __webpack_require__(22));
Vue.component('downloadItem', __webpack_require__(25));
Vue.component('createDirectory', __webpack_require__(28));
Vue.component('viewImage', __webpack_require__(31));

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'file-manager',

	props: {
		multiple: {
			type: Boolean,
			default: true
		}
	},

	data: function data() {
		return {
			payload: {},
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
			mode: null,
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

		//self.initialiseDropzone();
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

			var file_upload = new Dropzone('#file-upload', {
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
				//unblock loading
			}).catch(function (error) {
				//unblock loading
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
				return;
			}

			self.selected_items = self.selected_items.filter(function (item) {
				return file.token !== item.token;
			});
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

			self.single_item = self.items[index];

			self.menu.show = true;

			self.$nextTick(function () {
				self.single_item.selected = true;
				self.selectItem(self.single_item);

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

/* WEBPACK VAR INJECTION */(function(module) {
/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

(function() {
  var Dropzone, Emitter, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  noop = function() {};

  Emitter = (function() {
    function Emitter() {}

    Emitter.prototype.addEventListener = Emitter.prototype.on;

    Emitter.prototype.on = function(event, fn) {
      this._callbacks = this._callbacks || {};
      if (!this._callbacks[event]) {
        this._callbacks[event] = [];
      }
      this._callbacks[event].push(fn);
      return this;
    };

    Emitter.prototype.emit = function() {
      var args, callback, callbacks, event, _i, _len;
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      this._callbacks = this._callbacks || {};
      callbacks = this._callbacks[event];
      if (callbacks) {
        for (_i = 0, _len = callbacks.length; _i < _len; _i++) {
          callback = callbacks[_i];
          callback.apply(this, args);
        }
      }
      return this;
    };

    Emitter.prototype.removeListener = Emitter.prototype.off;

    Emitter.prototype.removeAllListeners = Emitter.prototype.off;

    Emitter.prototype.removeEventListener = Emitter.prototype.off;

    Emitter.prototype.off = function(event, fn) {
      var callback, callbacks, i, _i, _len;
      if (!this._callbacks || arguments.length === 0) {
        this._callbacks = {};
        return this;
      }
      callbacks = this._callbacks[event];
      if (!callbacks) {
        return this;
      }
      if (arguments.length === 1) {
        delete this._callbacks[event];
        return this;
      }
      for (i = _i = 0, _len = callbacks.length; _i < _len; i = ++_i) {
        callback = callbacks[i];
        if (callback === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }
      return this;
    };

    return Emitter;

  })();

  Dropzone = (function(_super) {
    var extend, resolveOption;

    __extends(Dropzone, _super);

    Dropzone.prototype.Emitter = Emitter;


    /*
    This is a list of all available events you can register on a dropzone object.
    
    You can register an event handler like this:
    
        dropzone.on("dragEnter", function() { });
     */

    Dropzone.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];

    Dropzone.prototype.defaultOptions = {
      url: null,
      method: "post",
      withCredentials: false,
      parallelUploads: 2,
      uploadMultiple: false,
      maxFilesize: 256,
      paramName: "file",
      createImageThumbnails: true,
      maxThumbnailFilesize: 10,
      thumbnailWidth: 120,
      thumbnailHeight: 120,
      filesizeBase: 1000,
      maxFiles: null,
      params: {},
      clickable: true,
      ignoreHiddenFiles: true,
      acceptedFiles: null,
      acceptedMimeTypes: null,
      autoProcessQueue: true,
      autoQueue: true,
      addRemoveLinks: false,
      previewsContainer: null,
      hiddenInputContainer: "body",
      capture: null,
      renameFilename: null,
      dictDefaultMessage: "Drop files here to upload",
      dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
      dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
      dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
      dictInvalidFileType: "You can't upload files of this type.",
      dictResponseError: "Server responded with {{statusCode}} code.",
      dictCancelUpload: "Cancel upload",
      dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
      dictRemoveFile: "Remove file",
      dictRemoveFileConfirmation: null,
      dictMaxFilesExceeded: "You can not upload any more files.",
      accept: function(file, done) {
        return done();
      },
      init: function() {
        return noop;
      },
      forceFallback: false,
      fallback: function() {
        var child, messageElement, span, _i, _len, _ref;
        this.element.className = "" + this.element.className + " dz-browser-not-supported";
        _ref = this.element.getElementsByTagName("div");
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          child = _ref[_i];
          if (/(^| )dz-message($| )/.test(child.className)) {
            messageElement = child;
            child.className = "dz-message";
            continue;
          }
        }
        if (!messageElement) {
          messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
          this.element.appendChild(messageElement);
        }
        span = messageElement.getElementsByTagName("span")[0];
        if (span) {
          if (span.textContent != null) {
            span.textContent = this.options.dictFallbackMessage;
          } else if (span.innerText != null) {
            span.innerText = this.options.dictFallbackMessage;
          }
        }
        return this.element.appendChild(this.getFallbackForm());
      },
      resize: function(file) {
        var info, srcRatio, trgRatio;
        info = {
          srcX: 0,
          srcY: 0,
          srcWidth: file.width,
          srcHeight: file.height
        };
        srcRatio = file.width / file.height;
        info.optWidth = this.options.thumbnailWidth;
        info.optHeight = this.options.thumbnailHeight;
        if ((info.optWidth == null) && (info.optHeight == null)) {
          info.optWidth = info.srcWidth;
          info.optHeight = info.srcHeight;
        } else if (info.optWidth == null) {
          info.optWidth = srcRatio * info.optHeight;
        } else if (info.optHeight == null) {
          info.optHeight = (1 / srcRatio) * info.optWidth;
        }
        trgRatio = info.optWidth / info.optHeight;
        if (file.height < info.optHeight || file.width < info.optWidth) {
          info.trgHeight = info.srcHeight;
          info.trgWidth = info.srcWidth;
        } else {
          if (srcRatio > trgRatio) {
            info.srcHeight = file.height;
            info.srcWidth = info.srcHeight * trgRatio;
          } else {
            info.srcWidth = file.width;
            info.srcHeight = info.srcWidth / trgRatio;
          }
        }
        info.srcX = (file.width - info.srcWidth) / 2;
        info.srcY = (file.height - info.srcHeight) / 2;
        return info;
      },

      /*
      Those functions register themselves to the events on init and handle all
      the user interface specific stuff. Overwriting them won't break the upload
      but can break the way it's displayed.
      You can overwrite them if you don't like the default behavior. If you just
      want to add an additional event handler, register it on the dropzone object
      and don't overwrite those options.
       */
      drop: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      dragstart: noop,
      dragend: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      dragenter: function(e) {
        return this.element.classList.add("dz-drag-hover");
      },
      dragover: function(e) {
        return this.element.classList.add("dz-drag-hover");
      },
      dragleave: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      paste: noop,
      reset: function() {
        return this.element.classList.remove("dz-started");
      },
      addedfile: function(file) {
        var node, removeFileEvent, removeLink, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
        if (this.element === this.previewsContainer) {
          this.element.classList.add("dz-started");
        }
        if (this.previewsContainer) {
          file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
          file.previewTemplate = file.previewElement;
          this.previewsContainer.appendChild(file.previewElement);
          _ref = file.previewElement.querySelectorAll("[data-dz-name]");
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            node = _ref[_i];
            node.textContent = this._renameFilename(file.name);
          }
          _ref1 = file.previewElement.querySelectorAll("[data-dz-size]");
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            node = _ref1[_j];
            node.innerHTML = this.filesize(file.size);
          }
          if (this.options.addRemoveLinks) {
            file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
            file.previewElement.appendChild(file._removeLink);
          }
          removeFileEvent = (function(_this) {
            return function(e) {
              e.preventDefault();
              e.stopPropagation();
              if (file.status === Dropzone.UPLOADING) {
                return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {
                  return _this.removeFile(file);
                });
              } else {
                if (_this.options.dictRemoveFileConfirmation) {
                  return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {
                    return _this.removeFile(file);
                  });
                } else {
                  return _this.removeFile(file);
                }
              }
            };
          })(this);
          _ref2 = file.previewElement.querySelectorAll("[data-dz-remove]");
          _results = [];
          for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
            removeLink = _ref2[_k];
            _results.push(removeLink.addEventListener("click", removeFileEvent));
          }
          return _results;
        }
      },
      removedfile: function(file) {
        var _ref;
        if (file.previewElement) {
          if ((_ref = file.previewElement) != null) {
            _ref.parentNode.removeChild(file.previewElement);
          }
        }
        return this._updateMaxFilesReachedClass();
      },
      thumbnail: function(file, dataUrl) {
        var thumbnailElement, _i, _len, _ref;
        if (file.previewElement) {
          file.previewElement.classList.remove("dz-file-preview");
          _ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            thumbnailElement = _ref[_i];
            thumbnailElement.alt = file.name;
            thumbnailElement.src = dataUrl;
          }
          return setTimeout(((function(_this) {
            return function() {
              return file.previewElement.classList.add("dz-image-preview");
            };
          })(this)), 1);
        }
      },
      error: function(file, message) {
        var node, _i, _len, _ref, _results;
        if (file.previewElement) {
          file.previewElement.classList.add("dz-error");
          if (typeof message !== "String" && message.error) {
            message = message.error;
          }
          _ref = file.previewElement.querySelectorAll("[data-dz-errormessage]");
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            node = _ref[_i];
            _results.push(node.textContent = message);
          }
          return _results;
        }
      },
      errormultiple: noop,
      processing: function(file) {
        if (file.previewElement) {
          file.previewElement.classList.add("dz-processing");
          if (file._removeLink) {
            return file._removeLink.textContent = this.options.dictCancelUpload;
          }
        }
      },
      processingmultiple: noop,
      uploadprogress: function(file, progress, bytesSent) {
        var node, _i, _len, _ref, _results;
        if (file.previewElement) {
          _ref = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            node = _ref[_i];
            if (node.nodeName === 'PROGRESS') {
              _results.push(node.value = progress);
            } else {
              _results.push(node.style.width = "" + progress + "%");
            }
          }
          return _results;
        }
      },
      totaluploadprogress: noop,
      sending: noop,
      sendingmultiple: noop,
      success: function(file) {
        if (file.previewElement) {
          return file.previewElement.classList.add("dz-success");
        }
      },
      successmultiple: noop,
      canceled: function(file) {
        return this.emit("error", file, "Upload canceled.");
      },
      canceledmultiple: noop,
      complete: function(file) {
        if (file._removeLink) {
          file._removeLink.textContent = this.options.dictRemoveFile;
        }
        if (file.previewElement) {
          return file.previewElement.classList.add("dz-complete");
        }
      },
      completemultiple: noop,
      maxfilesexceeded: noop,
      maxfilesreached: noop,
      queuecomplete: noop,
      addedfiles: noop,
      previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>"
    };

    extend = function() {
      var key, object, objects, target, val, _i, _len;
      target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      for (_i = 0, _len = objects.length; _i < _len; _i++) {
        object = objects[_i];
        for (key in object) {
          val = object[key];
          target[key] = val;
        }
      }
      return target;
    };

    function Dropzone(element, options) {
      var elementOptions, fallback, _ref;
      this.element = element;
      this.version = Dropzone.version;
      this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, "");
      this.clickableElements = [];
      this.listeners = [];
      this.files = [];
      if (typeof this.element === "string") {
        this.element = document.querySelector(this.element);
      }
      if (!(this.element && (this.element.nodeType != null))) {
        throw new Error("Invalid dropzone element.");
      }
      if (this.element.dropzone) {
        throw new Error("Dropzone already attached.");
      }
      Dropzone.instances.push(this);
      this.element.dropzone = this;
      elementOptions = (_ref = Dropzone.optionsForElement(this.element)) != null ? _ref : {};
      this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});
      if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {
        return this.options.fallback.call(this);
      }
      if (this.options.url == null) {
        this.options.url = this.element.getAttribute("action");
      }
      if (!this.options.url) {
        throw new Error("No URL provided.");
      }
      if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {
        throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
      }
      if (this.options.acceptedMimeTypes) {
        this.options.acceptedFiles = this.options.acceptedMimeTypes;
        delete this.options.acceptedMimeTypes;
      }
      this.options.method = this.options.method.toUpperCase();
      if ((fallback = this.getExistingFallback()) && fallback.parentNode) {
        fallback.parentNode.removeChild(fallback);
      }
      if (this.options.previewsContainer !== false) {
        if (this.options.previewsContainer) {
          this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer");
        } else {
          this.previewsContainer = this.element;
        }
      }
      if (this.options.clickable) {
        if (this.options.clickable === true) {
          this.clickableElements = [this.element];
        } else {
          this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable");
        }
      }
      this.init();
    }

    Dropzone.prototype.getAcceptedFiles = function() {
      var file, _i, _len, _ref, _results;
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (file.accepted) {
          _results.push(file);
        }
      }
      return _results;
    };

    Dropzone.prototype.getRejectedFiles = function() {
      var file, _i, _len, _ref, _results;
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (!file.accepted) {
          _results.push(file);
        }
      }
      return _results;
    };

    Dropzone.prototype.getFilesWithStatus = function(status) {
      var file, _i, _len, _ref, _results;
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (file.status === status) {
          _results.push(file);
        }
      }
      return _results;
    };

    Dropzone.prototype.getQueuedFiles = function() {
      return this.getFilesWithStatus(Dropzone.QUEUED);
    };

    Dropzone.prototype.getUploadingFiles = function() {
      return this.getFilesWithStatus(Dropzone.UPLOADING);
    };

    Dropzone.prototype.getAddedFiles = function() {
      return this.getFilesWithStatus(Dropzone.ADDED);
    };

    Dropzone.prototype.getActiveFiles = function() {
      var file, _i, _len, _ref, _results;
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED) {
          _results.push(file);
        }
      }
      return _results;
    };

    Dropzone.prototype.init = function() {
      var eventName, noPropagation, setupHiddenFileInput, _i, _len, _ref, _ref1;
      if (this.element.tagName === "form") {
        this.element.setAttribute("enctype", "multipart/form-data");
      }
      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
      }
      if (this.clickableElements.length) {
        setupHiddenFileInput = (function(_this) {
          return function() {
            if (_this.hiddenFileInput) {
              _this.hiddenFileInput.parentNode.removeChild(_this.hiddenFileInput);
            }
            _this.hiddenFileInput = document.createElement("input");
            _this.hiddenFileInput.setAttribute("type", "file");
            if ((_this.options.maxFiles == null) || _this.options.maxFiles > 1) {
              _this.hiddenFileInput.setAttribute("multiple", "multiple");
            }
            _this.hiddenFileInput.className = "dz-hidden-input";
            if (_this.options.acceptedFiles != null) {
              _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles);
            }
            if (_this.options.capture != null) {
              _this.hiddenFileInput.setAttribute("capture", _this.options.capture);
            }
            _this.hiddenFileInput.style.visibility = "hidden";
            _this.hiddenFileInput.style.position = "absolute";
            _this.hiddenFileInput.style.top = "0";
            _this.hiddenFileInput.style.left = "0";
            _this.hiddenFileInput.style.height = "0";
            _this.hiddenFileInput.style.width = "0";
            document.querySelector(_this.options.hiddenInputContainer).appendChild(_this.hiddenFileInput);
            return _this.hiddenFileInput.addEventListener("change", function() {
              var file, files, _i, _len;
              files = _this.hiddenFileInput.files;
              if (files.length) {
                for (_i = 0, _len = files.length; _i < _len; _i++) {
                  file = files[_i];
                  _this.addFile(file);
                }
              }
              _this.emit("addedfiles", files);
              return setupHiddenFileInput();
            });
          };
        })(this);
        setupHiddenFileInput();
      }
      this.URL = (_ref = window.URL) != null ? _ref : window.webkitURL;
      _ref1 = this.events;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        eventName = _ref1[_i];
        this.on(eventName, this.options[eventName]);
      }
      this.on("uploadprogress", (function(_this) {
        return function() {
          return _this.updateTotalUploadProgress();
        };
      })(this));
      this.on("removedfile", (function(_this) {
        return function() {
          return _this.updateTotalUploadProgress();
        };
      })(this));
      this.on("canceled", (function(_this) {
        return function(file) {
          return _this.emit("complete", file);
        };
      })(this));
      this.on("complete", (function(_this) {
        return function(file) {
          if (_this.getAddedFiles().length === 0 && _this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {
            return setTimeout((function() {
              return _this.emit("queuecomplete");
            }), 0);
          }
        };
      })(this));
      noPropagation = function(e) {
        e.stopPropagation();
        if (e.preventDefault) {
          return e.preventDefault();
        } else {
          return e.returnValue = false;
        }
      };
      this.listeners = [
        {
          element: this.element,
          events: {
            "dragstart": (function(_this) {
              return function(e) {
                return _this.emit("dragstart", e);
              };
            })(this),
            "dragenter": (function(_this) {
              return function(e) {
                noPropagation(e);
                return _this.emit("dragenter", e);
              };
            })(this),
            "dragover": (function(_this) {
              return function(e) {
                var efct;
                try {
                  efct = e.dataTransfer.effectAllowed;
                } catch (_error) {}
                e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
                noPropagation(e);
                return _this.emit("dragover", e);
              };
            })(this),
            "dragleave": (function(_this) {
              return function(e) {
                return _this.emit("dragleave", e);
              };
            })(this),
            "drop": (function(_this) {
              return function(e) {
                noPropagation(e);
                return _this.drop(e);
              };
            })(this),
            "dragend": (function(_this) {
              return function(e) {
                return _this.emit("dragend", e);
              };
            })(this)
          }
        }
      ];
      this.clickableElements.forEach((function(_this) {
        return function(clickableElement) {
          return _this.listeners.push({
            element: clickableElement,
            events: {
              "click": function(evt) {
                if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message")))) {
                  _this.hiddenFileInput.click();
                }
                return true;
              }
            }
          });
        };
      })(this));
      this.enable();
      return this.options.init.call(this);
    };

    Dropzone.prototype.destroy = function() {
      var _ref;
      this.disable();
      this.removeAllFiles(true);
      if ((_ref = this.hiddenFileInput) != null ? _ref.parentNode : void 0) {
        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = null;
      }
      delete this.element.dropzone;
      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
    };

    Dropzone.prototype.updateTotalUploadProgress = function() {
      var activeFiles, file, totalBytes, totalBytesSent, totalUploadProgress, _i, _len, _ref;
      totalBytesSent = 0;
      totalBytes = 0;
      activeFiles = this.getActiveFiles();
      if (activeFiles.length) {
        _ref = this.getActiveFiles();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          file = _ref[_i];
          totalBytesSent += file.upload.bytesSent;
          totalBytes += file.upload.total;
        }
        totalUploadProgress = 100 * totalBytesSent / totalBytes;
      } else {
        totalUploadProgress = 100;
      }
      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
    };

    Dropzone.prototype._getParamName = function(n) {
      if (typeof this.options.paramName === "function") {
        return this.options.paramName(n);
      } else {
        return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
      }
    };

    Dropzone.prototype._renameFilename = function(name) {
      if (typeof this.options.renameFilename !== "function") {
        return name;
      }
      return this.options.renameFilename(name);
    };

    Dropzone.prototype.getFallbackForm = function() {
      var existingFallback, fields, fieldsString, form;
      if (existingFallback = this.getExistingFallback()) {
        return existingFallback;
      }
      fieldsString = "<div class=\"dz-fallback\">";
      if (this.options.dictFallbackText) {
        fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
      }
      fieldsString += "<input type=\"file\" name=\"" + (this._getParamName(0)) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + " /><input type=\"submit\" value=\"Upload!\"></div>";
      fields = Dropzone.createElement(fieldsString);
      if (this.element.tagName !== "FORM") {
        form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
        form.appendChild(fields);
      } else {
        this.element.setAttribute("enctype", "multipart/form-data");
        this.element.setAttribute("method", this.options.method);
      }
      return form != null ? form : fields;
    };

    Dropzone.prototype.getExistingFallback = function() {
      var fallback, getFallback, tagName, _i, _len, _ref;
      getFallback = function(elements) {
        var el, _i, _len;
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          el = elements[_i];
          if (/(^| )fallback($| )/.test(el.className)) {
            return el;
          }
        }
      };
      _ref = ["div", "form"];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        tagName = _ref[_i];
        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
          return fallback;
        }
      }
    };

    Dropzone.prototype.setupEventListeners = function() {
      var elementListeners, event, listener, _i, _len, _ref, _results;
      _ref = this.listeners;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        elementListeners = _ref[_i];
        _results.push((function() {
          var _ref1, _results1;
          _ref1 = elementListeners.events;
          _results1 = [];
          for (event in _ref1) {
            listener = _ref1[event];
            _results1.push(elementListeners.element.addEventListener(event, listener, false));
          }
          return _results1;
        })());
      }
      return _results;
    };

    Dropzone.prototype.removeEventListeners = function() {
      var elementListeners, event, listener, _i, _len, _ref, _results;
      _ref = this.listeners;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        elementListeners = _ref[_i];
        _results.push((function() {
          var _ref1, _results1;
          _ref1 = elementListeners.events;
          _results1 = [];
          for (event in _ref1) {
            listener = _ref1[event];
            _results1.push(elementListeners.element.removeEventListener(event, listener, false));
          }
          return _results1;
        })());
      }
      return _results;
    };

    Dropzone.prototype.disable = function() {
      var file, _i, _len, _ref, _results;
      this.clickableElements.forEach(function(element) {
        return element.classList.remove("dz-clickable");
      });
      this.removeEventListeners();
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        _results.push(this.cancelUpload(file));
      }
      return _results;
    };

    Dropzone.prototype.enable = function() {
      this.clickableElements.forEach(function(element) {
        return element.classList.add("dz-clickable");
      });
      return this.setupEventListeners();
    };

    Dropzone.prototype.filesize = function(size) {
      var cutoff, i, selectedSize, selectedUnit, unit, units, _i, _len;
      selectedSize = 0;
      selectedUnit = "b";
      if (size > 0) {
        units = ['TB', 'GB', 'MB', 'KB', 'b'];
        for (i = _i = 0, _len = units.length; _i < _len; i = ++_i) {
          unit = units[i];
          cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
          if (size >= cutoff) {
            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
            selectedUnit = unit;
            break;
          }
        }
        selectedSize = Math.round(10 * selectedSize) / 10;
      }
      return "<strong>" + selectedSize + "</strong> " + selectedUnit;
    };

    Dropzone.prototype._updateMaxFilesReachedClass = function() {
      if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
        if (this.getAcceptedFiles().length === this.options.maxFiles) {
          this.emit('maxfilesreached', this.files);
        }
        return this.element.classList.add("dz-max-files-reached");
      } else {
        return this.element.classList.remove("dz-max-files-reached");
      }
    };

    Dropzone.prototype.drop = function(e) {
      var files, items;
      if (!e.dataTransfer) {
        return;
      }
      this.emit("drop", e);
      files = e.dataTransfer.files;
      this.emit("addedfiles", files);
      if (files.length) {
        items = e.dataTransfer.items;
        if (items && items.length && (items[0].webkitGetAsEntry != null)) {
          this._addFilesFromItems(items);
        } else {
          this.handleFiles(files);
        }
      }
    };

    Dropzone.prototype.paste = function(e) {
      var items, _ref;
      if ((e != null ? (_ref = e.clipboardData) != null ? _ref.items : void 0 : void 0) == null) {
        return;
      }
      this.emit("paste", e);
      items = e.clipboardData.items;
      if (items.length) {
        return this._addFilesFromItems(items);
      }
    };

    Dropzone.prototype.handleFiles = function(files) {
      var file, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        _results.push(this.addFile(file));
      }
      return _results;
    };

    Dropzone.prototype._addFilesFromItems = function(items) {
      var entry, item, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        item = items[_i];
        if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
          if (entry.isFile) {
            _results.push(this.addFile(item.getAsFile()));
          } else if (entry.isDirectory) {
            _results.push(this._addFilesFromDirectory(entry, entry.name));
          } else {
            _results.push(void 0);
          }
        } else if (item.getAsFile != null) {
          if ((item.kind == null) || item.kind === "file") {
            _results.push(this.addFile(item.getAsFile()));
          } else {
            _results.push(void 0);
          }
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Dropzone.prototype._addFilesFromDirectory = function(directory, path) {
      var dirReader, errorHandler, readEntries;
      dirReader = directory.createReader();
      errorHandler = function(error) {
        return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log(error) : void 0 : void 0;
      };
      readEntries = (function(_this) {
        return function() {
          return dirReader.readEntries(function(entries) {
            var entry, _i, _len;
            if (entries.length > 0) {
              for (_i = 0, _len = entries.length; _i < _len; _i++) {
                entry = entries[_i];
                if (entry.isFile) {
                  entry.file(function(file) {
                    if (_this.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                      return;
                    }
                    file.fullPath = "" + path + "/" + file.name;
                    return _this.addFile(file);
                  });
                } else if (entry.isDirectory) {
                  _this._addFilesFromDirectory(entry, "" + path + "/" + entry.name);
                }
              }
              readEntries();
            }
            return null;
          }, errorHandler);
        };
      })(this);
      return readEntries();
    };

    Dropzone.prototype.accept = function(file, done) {
      if (file.size > this.options.maxFilesize * 1024 * 1024) {
        return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
        return done(this.options.dictInvalidFileType);
      } else if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
        return this.emit("maxfilesexceeded", file);
      } else {
        return this.options.accept.call(this, file, done);
      }
    };

    Dropzone.prototype.addFile = function(file) {
      file.upload = {
        progress: 0,
        total: file.size,
        bytesSent: 0
      };
      this.files.push(file);
      file.status = Dropzone.ADDED;
      this.emit("addedfile", file);
      this._enqueueThumbnail(file);
      return this.accept(file, (function(_this) {
        return function(error) {
          if (error) {
            file.accepted = false;
            _this._errorProcessing([file], error);
          } else {
            file.accepted = true;
            if (_this.options.autoQueue) {
              _this.enqueueFile(file);
            }
          }
          return _this._updateMaxFilesReachedClass();
        };
      })(this));
    };

    Dropzone.prototype.enqueueFiles = function(files) {
      var file, _i, _len;
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        this.enqueueFile(file);
      }
      return null;
    };

    Dropzone.prototype.enqueueFile = function(file) {
      if (file.status === Dropzone.ADDED && file.accepted === true) {
        file.status = Dropzone.QUEUED;
        if (this.options.autoProcessQueue) {
          return setTimeout(((function(_this) {
            return function() {
              return _this.processQueue();
            };
          })(this)), 0);
        }
      } else {
        throw new Error("This file can't be queued because it has already been processed or was rejected.");
      }
    };

    Dropzone.prototype._thumbnailQueue = [];

    Dropzone.prototype._processingThumbnail = false;

    Dropzone.prototype._enqueueThumbnail = function(file) {
      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
        this._thumbnailQueue.push(file);
        return setTimeout(((function(_this) {
          return function() {
            return _this._processThumbnailQueue();
          };
        })(this)), 0);
      }
    };

    Dropzone.prototype._processThumbnailQueue = function() {
      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
        return;
      }
      this._processingThumbnail = true;
      return this.createThumbnail(this._thumbnailQueue.shift(), (function(_this) {
        return function() {
          _this._processingThumbnail = false;
          return _this._processThumbnailQueue();
        };
      })(this));
    };

    Dropzone.prototype.removeFile = function(file) {
      if (file.status === Dropzone.UPLOADING) {
        this.cancelUpload(file);
      }
      this.files = without(this.files, file);
      this.emit("removedfile", file);
      if (this.files.length === 0) {
        return this.emit("reset");
      }
    };

    Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {
      var file, _i, _len, _ref;
      if (cancelIfNecessary == null) {
        cancelIfNecessary = false;
      }
      _ref = this.files.slice();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
          this.removeFile(file);
        }
      }
      return null;
    };

    Dropzone.prototype.createThumbnail = function(file, callback) {
      var fileReader;
      fileReader = new FileReader;
      fileReader.onload = (function(_this) {
        return function() {
          if (file.type === "image/svg+xml") {
            _this.emit("thumbnail", file, fileReader.result);
            if (callback != null) {
              callback();
            }
            return;
          }
          return _this.createThumbnailFromUrl(file, fileReader.result, callback);
        };
      })(this);
      return fileReader.readAsDataURL(file);
    };

    Dropzone.prototype.createThumbnailFromUrl = function(file, imageUrl, callback, crossOrigin) {
      var img;
      img = document.createElement("img");
      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }
      img.onload = (function(_this) {
        return function() {
          var canvas, ctx, resizeInfo, thumbnail, _ref, _ref1, _ref2, _ref3;
          file.width = img.width;
          file.height = img.height;
          resizeInfo = _this.options.resize.call(_this, file);
          if (resizeInfo.trgWidth == null) {
            resizeInfo.trgWidth = resizeInfo.optWidth;
          }
          if (resizeInfo.trgHeight == null) {
            resizeInfo.trgHeight = resizeInfo.optHeight;
          }
          canvas = document.createElement("canvas");
          ctx = canvas.getContext("2d");
          canvas.width = resizeInfo.trgWidth;
          canvas.height = resizeInfo.trgHeight;
          drawImageIOSFix(ctx, img, (_ref = resizeInfo.srcX) != null ? _ref : 0, (_ref1 = resizeInfo.srcY) != null ? _ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (_ref2 = resizeInfo.trgX) != null ? _ref2 : 0, (_ref3 = resizeInfo.trgY) != null ? _ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
          thumbnail = canvas.toDataURL("image/png");
          _this.emit("thumbnail", file, thumbnail);
          if (callback != null) {
            return callback();
          }
        };
      })(this);
      if (callback != null) {
        img.onerror = callback;
      }
      return img.src = imageUrl;
    };

    Dropzone.prototype.processQueue = function() {
      var i, parallelUploads, processingLength, queuedFiles;
      parallelUploads = this.options.parallelUploads;
      processingLength = this.getUploadingFiles().length;
      i = processingLength;
      if (processingLength >= parallelUploads) {
        return;
      }
      queuedFiles = this.getQueuedFiles();
      if (!(queuedFiles.length > 0)) {
        return;
      }
      if (this.options.uploadMultiple) {
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
      } else {
        while (i < parallelUploads) {
          if (!queuedFiles.length) {
            return;
          }
          this.processFile(queuedFiles.shift());
          i++;
        }
      }
    };

    Dropzone.prototype.processFile = function(file) {
      return this.processFiles([file]);
    };

    Dropzone.prototype.processFiles = function(files) {
      var file, _i, _len;
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        file.processing = true;
        file.status = Dropzone.UPLOADING;
        this.emit("processing", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("processingmultiple", files);
      }
      return this.uploadFiles(files);
    };

    Dropzone.prototype._getFilesWithXhr = function(xhr) {
      var file, files;
      return files = (function() {
        var _i, _len, _ref, _results;
        _ref = this.files;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          file = _ref[_i];
          if (file.xhr === xhr) {
            _results.push(file);
          }
        }
        return _results;
      }).call(this);
    };

    Dropzone.prototype.cancelUpload = function(file) {
      var groupedFile, groupedFiles, _i, _j, _len, _len1, _ref;
      if (file.status === Dropzone.UPLOADING) {
        groupedFiles = this._getFilesWithXhr(file.xhr);
        for (_i = 0, _len = groupedFiles.length; _i < _len; _i++) {
          groupedFile = groupedFiles[_i];
          groupedFile.status = Dropzone.CANCELED;
        }
        file.xhr.abort();
        for (_j = 0, _len1 = groupedFiles.length; _j < _len1; _j++) {
          groupedFile = groupedFiles[_j];
          this.emit("canceled", groupedFile);
        }
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", groupedFiles);
        }
      } else if ((_ref = file.status) === Dropzone.ADDED || _ref === Dropzone.QUEUED) {
        file.status = Dropzone.CANCELED;
        this.emit("canceled", file);
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", [file]);
        }
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    resolveOption = function() {
      var args, option;
      option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (typeof option === 'function') {
        return option.apply(this, args);
      }
      return option;
    };

    Dropzone.prototype.uploadFile = function(file) {
      return this.uploadFiles([file]);
    };

    Dropzone.prototype.uploadFiles = function(files) {
      var file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, key, method, option, progressObj, response, updateProgress, url, value, xhr, _i, _j, _k, _l, _len, _len1, _len2, _len3, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
      xhr = new XMLHttpRequest();
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        file.xhr = xhr;
      }
      method = resolveOption(this.options.method, files);
      url = resolveOption(this.options.url, files);
      xhr.open(method, url, true);
      xhr.withCredentials = !!this.options.withCredentials;
      response = null;
      handleError = (function(_this) {
        return function() {
          var _j, _len1, _results;
          _results = [];
          for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
            file = files[_j];
            _results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr));
          }
          return _results;
        };
      })(this);
      updateProgress = (function(_this) {
        return function(e) {
          var allFilesFinished, progress, _j, _k, _l, _len1, _len2, _len3, _results;
          if (e != null) {
            progress = 100 * e.loaded / e.total;
            for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
              file = files[_j];
              file.upload = {
                progress: progress,
                total: e.total,
                bytesSent: e.loaded
              };
            }
          } else {
            allFilesFinished = true;
            progress = 100;
            for (_k = 0, _len2 = files.length; _k < _len2; _k++) {
              file = files[_k];
              if (!(file.upload.progress === 100 && file.upload.bytesSent === file.upload.total)) {
                allFilesFinished = false;
              }
              file.upload.progress = progress;
              file.upload.bytesSent = file.upload.total;
            }
            if (allFilesFinished) {
              return;
            }
          }
          _results = [];
          for (_l = 0, _len3 = files.length; _l < _len3; _l++) {
            file = files[_l];
            _results.push(_this.emit("uploadprogress", file, progress, file.upload.bytesSent));
          }
          return _results;
        };
      })(this);
      xhr.onload = (function(_this) {
        return function(e) {
          var _ref;
          if (files[0].status === Dropzone.CANCELED) {
            return;
          }
          if (xhr.readyState !== 4) {
            return;
          }
          response = xhr.responseText;
          if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
            try {
              response = JSON.parse(response);
            } catch (_error) {
              e = _error;
              response = "Invalid JSON response from server.";
            }
          }
          updateProgress();
          if (!((200 <= (_ref = xhr.status) && _ref < 300))) {
            return handleError();
          } else {
            return _this._finished(files, response, e);
          }
        };
      })(this);
      xhr.onerror = (function(_this) {
        return function() {
          if (files[0].status === Dropzone.CANCELED) {
            return;
          }
          return handleError();
        };
      })(this);
      progressObj = (_ref = xhr.upload) != null ? _ref : xhr;
      progressObj.onprogress = updateProgress;
      headers = {
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "X-Requested-With": "XMLHttpRequest"
      };
      if (this.options.headers) {
        extend(headers, this.options.headers);
      }
      for (headerName in headers) {
        headerValue = headers[headerName];
        if (headerValue) {
          xhr.setRequestHeader(headerName, headerValue);
        }
      }
      formData = new FormData();
      if (this.options.params) {
        _ref1 = this.options.params;
        for (key in _ref1) {
          value = _ref1[key];
          formData.append(key, value);
        }
      }
      for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
        file = files[_j];
        this.emit("sending", file, xhr, formData);
      }
      if (this.options.uploadMultiple) {
        this.emit("sendingmultiple", files, xhr, formData);
      }
      if (this.element.tagName === "FORM") {
        _ref2 = this.element.querySelectorAll("input, textarea, select, button");
        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
          input = _ref2[_k];
          inputName = input.getAttribute("name");
          inputType = input.getAttribute("type");
          if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
            _ref3 = input.options;
            for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
              option = _ref3[_l];
              if (option.selected) {
                formData.append(inputName, option.value);
              }
            }
          } else if (!inputType || ((_ref4 = inputType.toLowerCase()) !== "checkbox" && _ref4 !== "radio") || input.checked) {
            formData.append(inputName, input.value);
          }
        }
      }
      for (i = _m = 0, _ref5 = files.length - 1; 0 <= _ref5 ? _m <= _ref5 : _m >= _ref5; i = 0 <= _ref5 ? ++_m : --_m) {
        formData.append(this._getParamName(i), files[i], this._renameFilename(files[i].name));
      }
      return this.submitRequest(xhr, formData, files);
    };

    Dropzone.prototype.submitRequest = function(xhr, formData, files) {
      return xhr.send(formData);
    };

    Dropzone.prototype._finished = function(files, responseText, e) {
      var file, _i, _len;
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        file.status = Dropzone.SUCCESS;
        this.emit("success", file, responseText, e);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("successmultiple", files, responseText, e);
        this.emit("completemultiple", files);
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    Dropzone.prototype._errorProcessing = function(files, message, xhr) {
      var file, _i, _len;
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        file.status = Dropzone.ERROR;
        this.emit("error", file, message, xhr);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("errormultiple", files, message, xhr);
        this.emit("completemultiple", files);
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    return Dropzone;

  })(Emitter);

  Dropzone.version = "4.3.0";

  Dropzone.options = {};

  Dropzone.optionsForElement = function(element) {
    if (element.getAttribute("id")) {
      return Dropzone.options[camelize(element.getAttribute("id"))];
    } else {
      return void 0;
    }
  };

  Dropzone.instances = [];

  Dropzone.forElement = function(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if ((element != null ? element.dropzone : void 0) == null) {
      throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
    }
    return element.dropzone;
  };

  Dropzone.autoDiscover = true;

  Dropzone.discover = function() {
    var checkElements, dropzone, dropzones, _i, _len, _results;
    if (document.querySelectorAll) {
      dropzones = document.querySelectorAll(".dropzone");
    } else {
      dropzones = [];
      checkElements = function(elements) {
        var el, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          el = elements[_i];
          if (/(^| )dropzone($| )/.test(el.className)) {
            _results.push(dropzones.push(el));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };
      checkElements(document.getElementsByTagName("div"));
      checkElements(document.getElementsByTagName("form"));
    }
    _results = [];
    for (_i = 0, _len = dropzones.length; _i < _len; _i++) {
      dropzone = dropzones[_i];
      if (Dropzone.optionsForElement(dropzone) !== false) {
        _results.push(new Dropzone(dropzone));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];

  Dropzone.isBrowserSupported = function() {
    var capableBrowser, regex, _i, _len, _ref;
    capableBrowser = true;
    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
      if (!("classList" in document.createElement("a"))) {
        capableBrowser = false;
      } else {
        _ref = Dropzone.blacklistedBrowsers;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          regex = _ref[_i];
          if (regex.test(navigator.userAgent)) {
            capableBrowser = false;
            continue;
          }
        }
      }
    } else {
      capableBrowser = false;
    }
    return capableBrowser;
  };

  without = function(list, rejectedItem) {
    var item, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = list.length; _i < _len; _i++) {
      item = list[_i];
      if (item !== rejectedItem) {
        _results.push(item);
      }
    }
    return _results;
  };

  camelize = function(str) {
    return str.replace(/[\-_](\w)/g, function(match) {
      return match.charAt(1).toUpperCase();
    });
  };

  Dropzone.createElement = function(string) {
    var div;
    div = document.createElement("div");
    div.innerHTML = string;
    return div.childNodes[0];
  };

  Dropzone.elementInside = function(element, container) {
    if (element === container) {
      return true;
    }
    while (element = element.parentNode) {
      if (element === container) {
        return true;
      }
    }
    return false;
  };

  Dropzone.getElement = function(el, name) {
    var element;
    if (typeof el === "string") {
      element = document.querySelector(el);
    } else if (el.nodeType != null) {
      element = el;
    }
    if (element == null) {
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
    }
    return element;
  };

  Dropzone.getElements = function(els, name) {
    var e, el, elements, _i, _j, _len, _len1, _ref;
    if (els instanceof Array) {
      elements = [];
      try {
        for (_i = 0, _len = els.length; _i < _len; _i++) {
          el = els[_i];
          elements.push(this.getElement(el, name));
        }
      } catch (_error) {
        e = _error;
        elements = null;
      }
    } else if (typeof els === "string") {
      elements = [];
      _ref = document.querySelectorAll(els);
      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
        el = _ref[_j];
        elements.push(el);
      }
    } else if (els.nodeType != null) {
      elements = [els];
    }
    if (!((elements != null) && elements.length)) {
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
    }
    return elements;
  };

  Dropzone.confirm = function(question, accepted, rejected) {
    if (window.confirm(question)) {
      return accepted();
    } else if (rejected != null) {
      return rejected();
    }
  };

  Dropzone.isValidFile = function(file, acceptedFiles) {
    var baseMimeType, mimeType, validType, _i, _len;
    if (!acceptedFiles) {
      return true;
    }
    acceptedFiles = acceptedFiles.split(",");
    mimeType = file.type;
    baseMimeType = mimeType.replace(/\/.*$/, "");
    for (_i = 0, _len = acceptedFiles.length; _i < _len; _i++) {
      validType = acceptedFiles[_i];
      validType = validType.trim();
      if (validType.charAt(0) === ".") {
        if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
          return true;
        }
      } else if (/\/\*$/.test(validType)) {
        if (baseMimeType === validType.replace(/\/.*$/, "")) {
          return true;
        }
      } else {
        if (mimeType === validType) {
          return true;
        }
      }
    }
    return false;
  };

  if (typeof jQuery !== "undefined" && jQuery !== null) {
    jQuery.fn.dropzone = function(options) {
      return this.each(function() {
        return new Dropzone(this, options);
      });
    };
  }

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Dropzone;
  } else {
    window.Dropzone = Dropzone;
  }

  Dropzone.ADDED = "added";

  Dropzone.QUEUED = "queued";

  Dropzone.ACCEPTED = Dropzone.QUEUED;

  Dropzone.UPLOADING = "uploading";

  Dropzone.PROCESSING = Dropzone.UPLOADING;

  Dropzone.CANCELED = "canceled";

  Dropzone.ERROR = "error";

  Dropzone.SUCCESS = "success";


  /*
  
  Bugfix for iOS 6 and 7
  Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
  based on the work of https://github.com/stomita/ios-imagefile-megapixel
   */

  detectVerticalSquash = function(img) {
    var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;
    iw = img.naturalWidth;
    ih = img.naturalHeight;
    canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = ih;
    ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    data = ctx.getImageData(0, 0, 1, ih).data;
    sy = 0;
    ey = ih;
    py = ih;
    while (py > sy) {
      alpha = data[(py - 1) * 4 + 3];
      if (alpha === 0) {
        ey = py;
      } else {
        sy = py;
      }
      py = (ey + sy) >> 1;
    }
    ratio = py / ih;
    if (ratio === 0) {
      return 1;
    } else {
      return ratio;
    }
  };

  drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
    var vertSquashRatio;
    vertSquashRatio = detectVerticalSquash(img);
    return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
  };


  /*
   * contentloaded.js
   *
   * Author: Diego Perini (diego.perini at gmail.com)
   * Summary: cross-browser wrapper for DOMContentLoaded
   * Updated: 20101020
   * License: MIT
   * Version: 1.2
   *
   * URL:
   * http://javascript.nwbox.com/ContentLoaded/
   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
   */

  contentLoaded = function(win, fn) {
    var add, doc, done, init, poll, pre, rem, root, top;
    done = false;
    top = true;
    doc = win.document;
    root = doc.documentElement;
    add = (doc.addEventListener ? "addEventListener" : "attachEvent");
    rem = (doc.addEventListener ? "removeEventListener" : "detachEvent");
    pre = (doc.addEventListener ? "" : "on");
    init = function(e) {
      if (e.type === "readystatechange" && doc.readyState !== "complete") {
        return;
      }
      (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
      if (!done && (done = true)) {
        return fn.call(win, e.type || e);
      }
    };
    poll = function() {
      var e;
      try {
        root.doScroll("left");
      } catch (_error) {
        e = _error;
        setTimeout(poll, 50);
        return;
      }
      return init("poll");
    };
    if (doc.readyState !== "complete") {
      if (doc.createEventObject && root.doScroll) {
        try {
          top = !win.frameElement;
        } catch (_error) {}
        if (top) {
          poll();
        }
      }
      doc[add](pre + "DOMContentLoaded", init, false);
      doc[add](pre + "readystatechange", init, false);
      return win[add](pre + "load", init, false);
    }
  };

  Dropzone._autoDiscoverFunction = function() {
    if (Dropzone.autoDiscover) {
      return Dropzone.discover();
    }
  };

  contentLoaded(window, Dropzone._autoDiscoverFunction);

}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(12),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/laravel-cms/modules/file-manager/src/directories.vue"
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(15),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/laravel-cms/modules/file-manager/src/file.vue"
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
/* 14 */
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
		mode: {
			type: String,
			required: false
		}

	},

	data: function data() {
		return {
			items: [],
			selected: false
		};
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

				$(image).on('load', function () {
					self.upload.preloaded = path;
				});
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
/* 15 */
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
  }, [_vm._v("Last modified: " + _vm._s(_vm.upload.updated_at))]), _vm._v(" "), (_vm.search.keyword) ? _c('p', [_vm._v("Location: " + _vm._s(_vm.upload.path))]) : _vm._e(), _vm._v(" "), (!_vm.mode || (_vm.mode && _vm.upload.type != 'directory')) ? _c('div', {
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(18),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/laravel-cms/modules/file-manager/src/modal/rename-item.vue"
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
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(21),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/laravel-cms/modules/file-manager/src/modal/move-items.vue"
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
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(24),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/laravel-cms/modules/file-manager/src/modal/delete-items.vue"
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(27),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/laravel-cms/modules/file-manager/src/modal/download-items.vue"
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
/* 26 */
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
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(30),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/laravel-cms/modules/file-manager/src/modal/create-directory.vue"
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
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(33),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/laravel-cms/modules/file-manager/src/modal/view-image.vue"
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
/* 32 */
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
/* 33 */
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ui-modal', {
    ref: "modal",
    attrs: {
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
    style: ({
      top: _vm.menu.top,
      left: _vm.menu.left
    }),
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
    }, [_vm._v(_vm._s(option.label))])
  })) : _vm._e(), _vm._v(" "), _c('ui-progress-linear', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.upload_progress > 0),
      expression: "upload_progress > 0"
    }],
    attrs: {
      "color": "black",
      "type": "determinate",
      "progress": _vm.upload_progress
    }
  }), _vm._v(" "), _c('form', {
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
      "disabled": _vm.noItemSelected
    },
    on: {
      "click": _vm.clearSelection
    }
  }, [_c('span', [_vm._v("Deselect all")])]), _vm._v(" "), _c('button', {
    attrs: {
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
  }, [_c('label', {
    attrs: {
      "for": "search"
    }
  }, [_vm._v("Search")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.search.keyword),
      expression: "search.keyword"
    }],
    attrs: {
      "type": "text",
      "id": "search",
      "name": "search",
      "placeholder": "Search.."
    },
    domProps: {
      "value": (_vm.search.keyword)
    },
    on: {
      "keyup": _vm.searchData,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.search.keyword = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('section', {
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(37),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/laravel-cms/modules/file-manager/src/file-manager-modal.vue"
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
/* 36 */
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

Vue.component('file-manager', __webpack_require__(1));

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'file-manager-modal',

    props: {
        mode: {
            type: String,
            required: true
        }
    },
    data: function data() {
        return {};
    },

    methods: {
        browse: function browse() {
            var self = this;
            self.$refs['file-manager'].open();
        },
        close: function close() {
            console.log('closing');
        }
    }
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-group"
  }, [_c('ui-modal', {
    ref: "file-manager",
    attrs: {
      "title": "Select file"
    },
    on: {
      "close": _vm.close
    }
  }, [_c('file-manager', {
    attrs: {
      "multiple": true
    }
  })], 1), _vm._v(" "), _c('input', {
    attrs: {
      "type": "text",
      "name": _vm.name,
      "readonly": "readonly"
    }
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
  })])]), _vm._v(" "), _c('ui-button', {
    attrs: {
      "button-type": "button"
    }
  }, [_vm._v("\n        Ok\n    ")]), _vm._v(" "), _c('ui-button', {
    attrs: {
      "button-type": "button"
    }
  }, [_vm._v("\n        Close\n    ")])], 1)
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