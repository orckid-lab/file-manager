<template>
    <div @contextmenu.prevent="openContextMenu($event)" class="item file_caption" @dblclick="handleDoubleClick()">
        <div class="icon-container">
            <div class="preloader" :class="{ active: upload.preloaded }" v-if="upload.type.indexOf('image') > -1">
                <div class="loader"></div>
                <img class="image-thumbnail" :src="upload.preloaded" @click="viewImage(upload)"/>
            </div>
            <div class="icon-wrapper" v-else>
                <i :class="upload.icon" aria-hidden="true"></i>
            </div>
        </div>
        <div class="info">
            <h5>{{ upload.name }}</h5>
            <p>Size: {{ formatSize(upload.size )}}</p>
            <p v-if="upload.type!='directory'">
                Public URL:
                <a :href="upload.url" target="_blank">Click here</a>
            </p>
            <p class="data-dz-date">Last modified: {{upload.updated_at}}</p>
            <p v-if="search.keyword">Location: {{upload.path}}</p>
            <div class="checkbox" v-if="show">
                <input type="checkbox"
                       :id="upload.token"
                       :value="upload"
                       v-model="upload.selected"
                       @change="checkItem"/>
                <label :for="upload.token">Select</label>
            </div>
        </div>
    </div>
</template>
<script>
	export default{
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

		data(){
			return {
				items: [],
				selected: false,
			}
		},

        computed:{
		    show(){
		    	return !(this.modalMode && this.upload.type === 'directory');
            }
        },
		mounted(){
			let self = this;
			self.preloadImage();
			self.$bus.on('edit-image', function (file) {
				if (self.upload.token === file.token) {
					self.upload.thumbnail = file.thumbnail + '?' + new Date().getTime();
					self.preloadImage();
				}
			});
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

			preloadImage(){
				let self = this;
				if (self.upload.type.indexOf('image') > -1) {
					let path = self.upload.thumbnail;
					let image = new Image();
					image.src = path;

					image.onload = function () {
						self.upload.preloaded = path;
					};
				}
			},

			handleDoubleClick(file){
				let self = this;

				if (self.upload.type !== 'directory') {
					return;
				}
				self.$bus.emit('open-directory', self.upload.path);
				self.preloadImage();
			},

			viewImage(){
				let self = this;
				self.$bus.emit('view-image', self.upload);
			},

			checkItem(){
				let self = this;
				self.$bus.emit('select-item', self.upload);
			},

			openContextMenu(event){
				let self = this;
				self.upload.selected = true;
				self.$bus.emit('context-menu', self.index, event);
			}
		},
		watch: {
			upload(){
				let self = this;
				if (self.upload.type.indexOf('image') > -1 && !self.upload.preload) {
					self.preloadImage();
				}
			}
		}
	}
</script>
