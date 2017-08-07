<template>
    <div>
        <ui-preloader :show="loading"></ui-preloader>
        <ui-progress-linear color="black"
                            type="determinate"
                            :progress="upload_progress"
                            v-show="isUploading"></ui-progress-linear>
        <ui-modal dismiss-on="close-button esc" ref="modal" title="Title" @close="closeModal">
            <rename-item v-if="modal == 1" :items="selectedItemsToken"></rename-item>
            <move-item v-if="modal == 2" :root="root" :items="selectedItemsToken"></move-item>
            <delete-item v-if="modal == 3" :items="selectedItemsToken"></delete-item>
            <download-item v-if="modal == 4" :items="selectedItemsToken"></download-item>
            <create-directory v-if="modal == 6" :directory="current_path.path"></create-directory>
            <view-image v-if="modal == 7" :image="image"></view-image>
        </ui-modal>
        <ul id="context-menu"
            tabindex="-1"
            ref="right"
            v-if="menu.show"
            @blur="closeMenu"
            :class="{top: menu.top, left: menu.left}">
            <li v-for="option in options" @click="openModal(option.value)">
                <a>{{ option.label }}</a>
            </li>
        </ul>
        <form method="post" action="#" class="form grid" id="file-upload">
            <div class="file-manager" :class="dropZoneClasses">
                <header>
                    <div class="button-group">
                        <button type="button" @click="back()" :disabled="history.length == 0">
                            <i class="fa fa-chevron-left" aria-hidden="true"></i>
                            <span>Back</span>
                        </button>
                        <button type="button" @click="refresh">
                            <i class="fa fa-refresh" aria-hidden="true"></i>
                            <span>Refresh</span>
                        </button>
                    </div>
                    <div class="button-group">
                        <button type="button"
                                :disabled="search.keyword.length > 0"
                                ref="upload-button"
                                id="upload-button">
                            <i class="fa fa-upload" aria-hidden="true"></i>
                            <span>Upload</span>
                        </button>
                        <!--<button disabled>
                            <i class="fa fa-cloud-download" aria-hidden="true"></i>
                            <span>Download</span>
                        </button>-->
                    </div>
                    <div class="button-group">
                        <button type="button" @click="openModal(6)">
                            <i class="fa fa-folder-open" aria-hidden="true"></i>
                            <span>Add folder</span>
                        </button>
                        <button type="button" :disabled="noItemSelected" @click="clearSelection">
                            <span>Deselect all</span>
                        </button>
                        <button type="button" :disabled="noItemSelected" @click="openModal(2)">
                            <i class="fa fa-reply-all" aria-hidden="true"></i>
                            <span>Move</span>
                        </button>
                        <button type="button" :disabled="noItemSelected" @click="openModal(3)">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                            <span>Delete</span>
                        </button>
                    </div>
                    <div class="button-group">
                        <button type="button" @click="order = 1"
                                :class="{ active : order == 1 }">
                            <i class="fa fa-sort-amount-asc" aria-hidden="true"></i>
                        </button>
                        <button type="button" @click="order = -1"
                                :class="{ active : order == -1 }">
                            <i class="fa fa-sort-amount-desc" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div class="search-bar">
                        <ui-textbox
                                icon="search"
                                id="search"
                                name="search"
                                placeholder="Search.."
                                v-model="search.keyword"
                                @keydown="searchData">
                        </ui-textbox>
                        <!--<label for="search">Search</label>
                        <input type="text"
                               id="search"
                               name="search"
                               placeholder="Search.."
                               v-model="search.keyword"
                               @keyup="searchData">-->
                    </div>
                </header>
                <section class="content layout" id="uploadzone">
                    <main class="layout-row">
                        <aside class="layout-cell">
                            <h5>Directories</h5>
                            <directories v-if="root" :directory.once="root" :mode="'navigate'"></directories>
                            <div class="group-separator">
                                <h5>Filter {{current_path.name}} by</h5>
                                <ul class="aside-content file-type-list">
                                    <li v-for="(type, index) in filters">
                                        <div class="radio">
                                            <input class="file-type-radio"
                                                   type="radio"
                                                   :id="type.id"
                                                   name="file-type-group"
                                                   :value="index"
                                                   v-model="selected_filter"/>
                                            <label class="file-type-label" :for="type.id">{{type.label}}</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="group-separator">
                                <h5>Order {{current_path.name}} by</h5>
                                <ul>
                                    <li>
                                        <div class="select">
                                            <select v-model="sort">
                                                <option value="name">Title</option>
                                                <option value="size">Size</option>
                                                <option value="last_modified">Last Modified</option>
                                            </select>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                        <div class="layout-cell file-panel">
                            <div class="file-library">
                                <ul class="breadcrumb">
                                    <li>You are here</li>
                                    <li v-for="directory in breadcrumb" @dblclick="handleDoubleClick(directory)">{{
                                        directory.name }}
                                    </li>
                                </ul>
                                <p v-if="items.length == 0">No item found.</p>
                                <div class="file-list">
                                    <div id="preview-template">
                                        <div class="file-row"></div>
                                    </div>
                                    <div class="file-row">
                                        <file v-for="(upload, index) in items"
                                              :modalMode="modalMode"
                                              :index="index"
                                              :upload="upload"
                                              :search="search"></file>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
            </div>
        </form>
        <ui-alert @dismiss="closeAlert" :type="alert.type" v-show="alert.show">
            <!--<ui-icon :icon="alert.icon" slot="icon"></ui-icon>-->
            <div v-html="alert.content"></div>
        </ui-alert>
    </div>
</template>
<script type="text/babel">
	let Alert = function () {
		return {
			type: 'warning',
			show: false,
			icon: 'battery_alert',
			content: ''
		}
	};

	Vue.component('directories', require('./directories.vue'));
	Vue.component('file', require('./file.vue'));
	Vue.component('renameItem', require('./modal/rename-item.vue'));
	Vue.component('moveItem', require('./modal/move-items.vue'));
	Vue.component('deleteItem', require('./modal/delete-items.vue'));
	Vue.component('downloadItem', require('./modal/download-items.vue'));
	Vue.component('createDirectory', require('./modal/create-directory.vue'));
	Vue.component('viewImage', require('./modal/view-image.vue'));

	export default{
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

		data(){
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
				menu: {
					show: false,
					top: '0px',
					left: '0px'
				},
				options: [
					{
						value: 1,
						label: 'Rename'
					},
					{
						value: 2,
						label: 'Move'
					},
					{
						value: 3,
						label: 'Delete'
					},
					{
						value: 4,
						label: 'Download'
					},

				],
				single_item: {},
				modal: 0,
				upload_progress: 0,
				dropzone_errors: [],
				alert: new Alert(),
				image: {}
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

				if (!data) {
					return [];
				}

				if (self.selected_filter != 0) {
					data = data.filter(function (item) {
						let valid = self.filters[self.selected_filter].value.indexOf(item.type.replace(/.*\//, '')) > -1
							|| self.filters[self.selected_filter].value.indexOf(item.type.replace(/\/.*/, '')) > -1;

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
			},

			uploadPath(){
				return this.current_path.path;
			}
		},

		mounted(){
			let self = this;

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

			getPayload(){
				let self = this;

				axios.get('/file-manager')
					.then(function (response) {
						self.payload = response.data.payload;
						Object.assign(self, self.payload);
						self.$nextTick(function () {
							self.initialiseDropzone();
						});
					})
					.catch(function (error) {
						console.log('Error ', error);
					});
			},

			initialiseDropzone(){
				let self = this;

				new Dropzone(
					'#file-upload', {
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

						init: function () {
							let dropzone = this;
							dropzone.on('success', function (file, upload) {
								self.current_path.files.push(upload);
								self.current_path.hasFiles = self.current_path.hasFiles + 1;

								self.$bus.emit('item-created', {
									current_path: self.current_path.path,
									upload
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
						accept(file, done) {

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
					}
				);
				self.loading = false;
			},

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

			openDirectory(path, back){
				let self = this;
                self.loading = true;
				let previous_directory = self.current_path.path;

				self.search = {
					keyword: '',
					results: []
				};
				self.$set(self, 'filter', 'everything');
				//loading block
				axios.post('/file-manager', {
						path: path
					})
					.then(function (response) {
						Object.assign(self, response.data.payload);

						if (!back && _.last(self.history) != previous_directory) {
							self.history.push(previous_directory);
						}
						self.loading = false;
					})
					.catch(function (error) {
						self.loading = false;
						console.log(error);
					});
			},

			clearSelection(){
				this.$set(this, 'selected_items', []);
				this.items.forEach(function (item) {
					item.selected = false;
				});
			},

			calculateProgress(){
				let self = this;

				let file_count = self.uploaded_files.length;
				let total = self.uploaded_files.reduce(function (total, file) {
					return total + file.progress;
				}, 0);

				let progress = parseInt(total / file_count);

				self.upload_progress = 0 + progress;

				if (progress === 100) {

					setTimeout(function () {
						self.upload_progress = 0;
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

				self.clearSelection();

				axios.post('/file-manager/search', {
						search: self.search.keyword
					})
					.then(function (response) {
						self.search.results = response.data;
					})
					.catch(function (error) {
					});
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

			setMenu(top, left) {

				let largestHeight = window.innerHeight - this.$refs['right'].offsetHeight - 25;
				let largestWidth = window.innerWidth - this.$refs['right'].offsetWidth - 25;

				if (top > largestHeight) top = largestHeight;

				if (left > largestWidth) left = largestWidth;

				this.menu.top = top + 'px';
				this.menu.left = left + 'px';
			},

			closeMenu(){
				this.menu.show = false;
			},

			openMenu(index, event) {
				let self = this;
				self.menu.show = true;

				self.single_item = self.items[index];
				self.clearSelection();
				self.single_item.selected = true;
				self.selectItem(self.single_item);

				self.$nextTick(function () {
					self.$refs['right'].focus();
					self.setMenu(event.y, event.x)
				}.bind(this));
				event.preventDefault();
			},

			openModal(option) {
				let self = this;
				self.modal = option;
				self.$refs['modal'].open();
			},

			closeModal(){
				this.$refs['modal'].close();
				this.modal = 0;
				this.image = {};
			},

			completed(action, response){
				let self = this;
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

							self.$bus.emit('item-moved', {
								data
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

						let deletedDirectories = response.data.deleted.directories;

						let deletedFiles = response.data.deleted.files;

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

			showAlert(content){
				let self = this;

				self.alert.content = content;

				if (Array.isArray(content)) {
					self.alert.content = content.reduce(function (data, message) {
						let html = `<p>${message}</p>`;
						return data + html;
					}, '');
				}

				self.alert.show = true;
			},

			closeAlert(){
				this.alert = new Alert();
				this.dropzone_errors = [];
			},

			viewImage(image){
				let self = this;
				image.preloaded = null;
				self.image = image;
				self.openModal(7);
			}

		}
	}
</script>
