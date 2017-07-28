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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_manager_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_manager_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__file_manager_vue__);


var FileManager = {
	install: function install(Vue, options) {
		Vue.component(__WEBPACK_IMPORTED_MODULE_0__file_manager_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__file_manager_vue___default.a);
	}
};
console.log('fm', FileManager);
/* harmony default export */ __webpack_exports__["default"] = (FileManager);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(5),
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
/* 3 */
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
/* 4 */
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

/*VueModal.component('create-directory', require('./modal/create-directory.vue'));
VueModal.component('view-image', require('./modal/view-image.vue'));
VueModal.component('rename-item', require('./modal/rename-item.vue'));
VueModal.component('move-items', require('./modal/move-items.vue'));
VueModal.component('move-items-footer', require('./modal/move-items-footer.vue'));
VueModal.component('edit-image', require('./modal/edit-image.vue'));
VueModal.component('edit-image-footer', require('./modal/edit-image-footer.vue'));*/
//Vue.component('directories', require('./directories.vue'));
//Vue.component('file', require('./file.vue'));

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'file-manager'
    /* props: {
         payload: {
             type: Object,
             required: false
         }
     },
      data(){
         return {
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
             filters: [
                 {
                     id: 'everything',
                     label: 'Everything',
                     value: 'everything'
                 },
                 {
                     id: 'image',
                     label: 'Images',
                     value: ['image']
                 },
                 {
                     id: 'video',
                     label: 'Video',
                     value: ['video']
                 },
                 {
                     id: 'audio',
                     label: 'Audio',
                     value: ['audio']
                 },
                 {
                     id: 'document',
                     label: 'Documents',
                     value: ['pdf', 'word', 'text', 'officedocument']
                 },
                 {
                     id: 'archive',
                     label: 'Archive',
                     value: ['zip', 'rar']
                 }
             ],
             selected_filter: 0,
             sort: 'name',
             order: 1,
             history: [],
             csrf_token: Laravel.csrfToken,
             zip_path: null,
             mode: null
         }
     },
      computed: {
         dropZoneClasses(){
             return {
                 'active-dropzone': this.drop_area == 'active',
                 'error-dropzone': this.drop_area == 'error'
             }
         },
          noItemSelected(){
             return !this.selected_items.length;
         },
          items(){
             let self = this;
             let data = self.search.results.length > 0 || self.search.keyword ? self.search.results : self.current_path.files;
              if (self.selected_filter != 0) {
                 data = data.filter(function (item) {
                     let valid = self.filters[self.selected_filter].value.indexOf(item.type.replace(/.*\//, '')) > -1
                             || self.filters[self.selected_filter].value.indexOf(item.type.replace(/\/.*!/, '')) > -1;
                      if (item.type == 'directory' || valid) {
                         return item;
                     }
                 });
             }
              let output = data.sort(function (a, b) {
                 let nameA = self.sort == 'name' ? a.name.toLowerCase() : a[self.sort];
                 let nameB = self.sort == 'name' ? b.name.toLowerCase() : b[self.sort];
                  if (a.type == 'directory' && b.type == 'directory') {
                     if (nameA < nameB) //sort string ascending
                         return -(self.order);
                     if (nameA > nameB)
                         return (self.order);
                     return 0; //default return value (no sorting)
                 }
                  if (a.type == 'directory') {
                     return -(self.order);
                 }
                  if (b.type == 'directory') {
                     return (self.order);
                 }
                  if (nameA < nameB) //sort string ascending
                     return -(self.order);
                 if (nameA > nameB)
                     return (self.order);
                 return 0; //default return value (no sorting)
             });
             return output;
         },
          selectedItemsToken(){
             return (this.selected_items.map(function (item) {
                 return item.token;
             }));
         }
     },
      created(){
         let self = this;
          if (!self.payload) {
             self.payload = self.modal.payload;
             self.mode = 'modal';
             if (self.modal.type) {
                 self.selected_filter = self.filters.findIndex(function (item) {
                     return item.id == self.modal.type;
                 });
             }
         }
         Object.assign(this, this.payload);
     },
      mounted(){
         let self = this;
          let previewTemplate = $('#preview-template').html();
          let $fileManager = $('.file-manager');
          $fileManager.dropzone({
             url: '/file-manager/upload',
             clickable: '#upload-button', //upload button id
             thumbnailWidth: 50,
             thumbnailHeight: 50,
             previewTemplate: previewTemplate,
             parallelUploads: 20,
             createImageThumbnails: true,
             addRemoveLinks: false,
              params: {
                 _token: Laravel.csrfToken
             },
              init() {
                 this.on('success', function (file, upload) {
                     self.current_path.files.push(upload);
                     self.current_path.hasFiles = self.current_path.hasFiles + 1;
                      VueEvent.$emit('item-created', {
                         current_path: self.current_path.path,
                         upload
                     });
                     $.unblockUI();
                 });
                  this.on('processing', function (file) {
                     $.blockUI();
                     this.options.params.path = self.current_path.path;
                     self.uploaded_files.push({
                         name: file.name,
                         progress: 0
                     });
                 });
                  this.on('uploadprogress', function (file, progress) {
                     self.uploaded_files.filter(function (this_file) {
                         if (this_file.name == file.name) {
                             this_file.progress = progress;
                         }
                     });
                     self.calculateProgress();
                 });
                  this.on('complete', function (file) {
                  });
                  this.on('error', function (file, message) {
                     $.unblockUI();
                     alert(message.path[0]);
                 });
                  this.on('dragover', function (event) {
                     self.drop_area = self.search.keyword ? 'error' : 'active';
                 });
                  this.on('drop', function (event) {
                     self.drop_area = 'inactive';
                 });
                  this.on('dragleave', function (event) {
                     self.drop_area = 'inactive';
                 });
             },
              accept(file, done) {
                  if (self.search.keyword) {
                     return;
                 }
                  if (self.uploaded_files.length > 0) {
                     if (!self.isUploading) {
                         self.isUploading = true;
                         VueModal.create()
                                 .content('File is being process. Please wait.')
                                 .show();
                     }
                     return;
                 }
                 done();
             }
          });
          $.contextMenu({
             selector: '.file_caption',
             build: function ($trigger, e) {
                 self.clearSelection();
                  let index = $($trigger).attr("data-index");
                 let file = self.items[index];
                  setTimeout(function () {
                     file.selected = true;
                     self.selectItem(file);
                 }, 100);
                  return {
                     callback: function (key, options) {
                         console.log('Key is ', key);
                         switch (key) {
                             case 'rename':
                                     console.log('rename ', file);
                                 VueModal.create()
                                         .data({
                                             name: file.name,
                                         })
                                         .buttonLabels({
                                             confirm: 'Save'
                                         })
                                         .callbacks({
                                             confirm(){
                                                 let modal = this;
                                                 $.blockUI();
                                                 axios.post('/file-manager/update', {
                                                             name: modal.name,
                                                             items: self.selectedItemsToken,
                                                             action: 1
                                                         })
                                                         .then(function (response) {
                                                             Object.assign(file, response.data);
                                                              if (file.type == 'directory') {
                                                                 VueEvent.$emit('item-rename', {
                                                                     file: file
                                                                 });
                                                             }
                                                         })
                                                         .catch(function (error) {
                                                          });
                                                  self.clearSelection();
                                                 modal.close();
                                                 $.unblockUI();
                                             }
                                         })
                                         .components({
                                             content: 'rename-item',
                                         })
                                         .show();
                                 break;
                              case 'move':
                                 self.moveItems();
                                 break;
                              case 'delete':
                                 self.deleteItems();
                                 break;
                              case 'crop':
                                 VueModal.create()
                                         .data({
                                             cropper: null,
                                             image: file,
                                             image_url: file.url,
                                             modified_image: null
                                         })
                                         .buttonLabels({
                                             confirm: 'Save Image'
                                         })
                                         .callbacks({
                                             confirm(){
                                                 let modal = this;
                                                  let data = new FormData();
                                                 data.append('file', modal.modified_image);
                                                 data.append('items', self.selectedItemsToken);
                                                 data.append('action', 3);
                                                 $.blockUI();
                                                 axios.post('/file-manager/crop', data)
                                                         .then(function (response) {
                                                             VueEvent.$emit('edit-image', file);
                                                         })
                                                         .catch(function (error) {
                                                             console.log(error);
                                                         });
                                                  self.clearSelection();
                                                 modal.close();
                                                 $.unblockUI();
                                             }
                                         })
                                         .components({
                                             content: 'edit-image',
                                             footer: 'edit-image-footer'
                                         })
                                         .show();
                                 break;
                              case 'optimise':
                                 VueModal.create()
                                         .content('Optimise the selected image?')
                                         .buttonLabels({
                                             confirm: 'Optimise'
                                         })
                                         .callbacks({
                                             confirm(){
                                                 let modal = this;
                                                 axios.post('/file-manager/optimise', {
                                                             items: self.selectedItemsToken,
                                                             action: 4
                                                         })
                                                         .then(function (response) {
                                                             let data = response.data;
                                                              if (data.errors.length > 0) {
                                                                 //display message
                                                             }
                                                              modal.close();
                                                         })
                                                         .catch(function (error) {
                                                          });
                                             }
                                         })
                                         .show();
                                 break;
                              case 'download':
                                 self.downloadItems();
                                 break;
                         }
                     },
                     items: {
                         "rename": {
                             name: "Rename"
                         },
                         "move": {
                             name: "Move"
                         },
                         "delete": {
                             name: "Delete"
                         },
                         "crop": {
                             name: "Crop",
                             disabled(){
                                 return file.type.indexOf('image') == -1;
                             }
                         },
                         "download": {
                             name: "Download",
                             disabled(){
                                 return file.type == 'directory';
                             }
                         }
                     }
                 };
             }
         });
          self.$on('clear-selection', self.clearSelection);
          VueEvent.$on('open-directory', self.openDirectory);
          VueEvent.$on('select-item', self.selectItem);
          $('.progress-bar').hide();
     },
      methods: {
          formatSize(bytes = 0){
             bytes = isNaN(bytes) ? 0 : bytes;
              let thresholds = [
                 {
                     range: 1024,
                     unit: 'Bytes'
                 },
                 {
                     range: 1048576,
                     unit: 'KB'
                 },
                 {
                     range: 1073741824,
                     unit: 'MB'
                 },
                 {
                     range: 1073741824,
                     unit: 'GB'
                 },
             ];
              let output = '';
              thresholds.some(function (threshold, index) {
                 let {range, unit} = threshold;
                 if (bytes < range && bytes > 0) {
                     output = (bytes / thresholds[index - 1].range).toFixed(2) + unit;
                     return true;
                 }
             });
              return output ? output : '0 Bytes';
         },
          createDirectory(){
             let self = this;
              VueModal.create()
                     .data({
                         name: 'new-folder',
                         current_path: self.current_path.path
                     })
                     .buttonLabels({
                         confirm: 'Create'
                     })
                     .callbacks({
                         confirm(){
                             let modal = this;
                             $.blockUI();
                             axios.post('/file-manager/create', {
                                         name: modal.name,
                                         path: self.current_path.path
                                     })
                                     .then(function (response) {
                                         self.current_path.files.push(response.data);
                                         self.current_path.subDirectories.push(response.data);
                                          VueEvent.$emit('item-created', {
                                             current_path: self.current_path.path,
                                             upload: response.data
                                         });
                                          modal.close();
                                         $.unblockUI();
                                     })
                                     .catch(function (error) {
                                         $.unblockUI();
                                         console.log(error);
                                     });
                         }
                     })
                     .components({
                         content: 'create-directory',
                     })
                     .show();
         },
          openDirectory(path, back){
             let self = this;
              let previous_directory = self.current_path.path;
              self.search = {
                 keyword: '',
                 results: []
             };
             self.$set(self, 'filter', 'everything');
             $.blockUI();
             axios.post('/file-manager', {
                         path: path
                     })
                     .then(function (response) {
                         Object.assign(self, response.data.payload);
                          if (!back && _.last(self.history) != previous_directory) {
                             self.history.push(previous_directory);
                         }
                         $.unblockUI();
                     })
                     .catch(function (error) {
                         $.unblockUI();
                         console.log(error);
                     });
         },
          deleteItems(){
             let self = this;
              if (self.selected_items.length == 0) {
                 return;
             }
              VueModal.create()
                     .content('Are you sure you want to delete this file?')
                     .buttonLabels({
                         confirm: 'Delete'
                     })
                     .callbacks({
                         confirm(){
                             let modal = this;
                             $.blockUI();
                             axios.post('/file-manager/delete', {
                                         items: self.selectedItemsToken
                                     })
                                     .then(function (response) {
                                         let data = response.data;
                                          if (data.errors.length > 0) {
                                             //display message
                                         }
                                          let deletedDirectories = data.deleted.directories;
                                          let deletedFiles = data.deleted.files;
                                          if (deletedDirectories.length > 0 || deletedFiles.length > 0) {
                                             self.current_path.files = self.current_path.files.filter(function (file) {
                                                  return !(deletedDirectories.indexOf(file.token) > -1
                                                 || deletedFiles.indexOf(file.token) > -1);
                                             });
                                              if (self.search.keyword) {
                                                 self.search.results = self.search.results.filter(function (file) {
                                                      return !(deletedDirectories.indexOf(file.token) > -1
                                                     || deletedFiles.indexOf(file.token) > -1);
                                                 });
                                             }
                                              VueEvent.$emit('item-deleted', {
                                                 data: data.deleted
                                             });
                                              self.$emit('clear-selection');
                                         }
                                          modal.close();
                                         $.unblockUI();
                                     })
                                     .catch(function (error) {
                                         $.unblockUI();
                                     });
                         }
                     })
                     .show();
         },
          clearSelection(){
             this.$set(this, 'selected_items', []);
             this.items.forEach(function (item) {
                 item.selected = false;
             });
         },
          calculateProgress(){
             let self = this;
             let progress_bar = $('.file-progress .determinate');
              let file_count = self.uploaded_files.length;
             let total = self.uploaded_files.reduce(function (total, file) {
                 return total + file.progress;
             }, 0);
              let progress = parseInt(total / file_count);
             progress_bar.velocity({'width': progress + '%'});
              if (progress == 100) {
                 setTimeout(function () {
                     self.uploaded_files = [];
                     self.isUploading = false;
                 }.bind(self), 2000);
             }
         },
          searchData(){
             let self = this;
              if (!self.search.keyword) {
                 self.search.results = [];
                 return;
             }
             $.blockUI();
             self.clearSelection();
              axios.post('/file-manager/search', {
                         search: self.search.keyword
                     })
                     .then(function (response) {
                         self.search.results = response.data;
                         $.unblockUI();
                     })
                     .catch(function (error) {
                         $.unblockUI();
                     });
         },
          moveItems(){
             let self = this;
              if (self.selected_items.length == 0) {
                 return;
             }
              VueModal.create()
                     .data({
                         root: self.root,
                         destination: ''
                     })
                     .buttonLabels({
                         confirm: 'Move'
                     })
                     .callbacks({
                         confirm(){
                             let modal = this;
                              if (!modal.destination) {
                                 return;
                             }
                             $.blockUI();
                             axios.post('/file-manager/move', {
                                         items: self.selectedItemsToken,
                                         destination_token: modal.destination.token,
                                         action: 2
                                     })
                                     .then(function (response) {
                                          if (response.data.errors.length > 0) {
                                             //display message
                                         }
                                          let data = response.data.moved;
                                          let movedDirectories = data.directories;
                                         let movedFiles = data.files;
                                          if (movedDirectories.length > 0 || movedFiles.length > 0) {
                                              self.current_path.files = self.current_path.files.filter(function (file) {
                                                 return !(movedDirectories.indexOf(file.token) > -1
                                                 || movedFiles.indexOf(file.token) > -1);
                                             });
                                              if (self.search.keyword) {
                                                 self.search.results = self.search.results.filter(function (file) {
                                                      return !(movedDirectories.indexOf(file.token) > -1
                                                     || movedFiles.indexOf(file.token) > -1);
                                                 });
                                             }
                                              VueEvent.$emit('item-moved', {
                                                 data
                                             });
                                              self.current_path.files.forEach(function (directory, index) {
                                                 if (directory.type == 'directory' && directory.token == data.destination.token) {
                                                     self.current_path.files[index] = data.destination;
                                                 }
                                             });
                                              self.$emit('clear-selection');
                                         }
                                          modal.close();
                                         $.unblockUI();
                                     })
                                     .catch(function (error) {
                                         $.unblockUI();
                                     });
                         }
                     })
                     .components({
                         content: 'move-items',
                         footer: 'move-items-footer'
                     })
                     .show();
         },
          downloadItems(){
             let self = this;
              if (self.selected_items.length == 0) {
                 return;
             }
              VueModal.create()
                     .content('Download selected file(s)?')
                     .buttonLabels({
                         confirm: 'Download'
                     })
                     .callbacks({
                         confirm(){
                             let modal = this;
                             $(self.$el).find('#download-form').submit();
                             modal.close();
                         }
                     })
                     .show();
         },
          isDirectory(item){
             return item.type == 'directory';
         },
          refresh(){
             let self = this;
             self.openDirectory(self.current_path.path);
             self.clearSelection();
         },
          back(){
             let self = this;
             if (self.history.length > 0) {
                 let last = _.last(self.history);
                 self.history.pop();
                 self.openDirectory(last, true);
              }
         },
          selectItem(file){
             let self = this;
              if (self.modal && self.modal.mode == 'SF') {
                 self.clearSelection();
                 file.selected = true;
                 self.modal.file = file;
             }
              if (file.selected) {
                 self.selected_items.push(file);
                 return;
             }
              self.selected_items = self.selected_items.filter(function (item) {
                 return file.token != item.token;
             });
         }
     }*/
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("test")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1c831c5c", module.exports)
  }
}

/***/ })
/******/ ]);