<template>
    <div class="input-group">
        <ui-confirm dismiss-on="close-button esc" ref="file-manager" title="Select file" @confirm="confirm" @close.prevent="close" @deny="deny">
            <file-manager v-if="showModal"
                          @selected="getSelected"
                          :multiple="multiple"
                          :modalMode="true"></file-manager>
        </ui-confirm>
        <!--<input type="text" :placeholder="placeholder" name="file_name" readonly="readonly" :value="formattedFiles">-->
        <span v-html="renderPath"></span>
        <input type="hidden" v-for="file in files" name="file[]" :value="file.url">
        <span>
            <button class="button" type="button" @click="browse">
                <i class="fa fa-cloud-upload" aria-hidden="true">Browse</i>
            </button>
        </span>
    </div>
</template>
<script>
	Vue.component('file-manager', require('./file-manager.vue'));

	export default{
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
				type: String,
            }
		},

		computed: {
			formattedFiles(){
				return this.files.map(function (file) {
					return file.name;
				}).join(',');
			},

            renderPath(){
				return this.formattedFiles ? this.formattedFiles : this.placeholder;
            }
		},

		data(){
			return {
				showModal: false,
				files: [],
				selected_files: []
			}
		},
		methods: {
			browse(){
				let self = this;
				self.showModal = true;
				self.$refs['file-manager'].open();
			},

			deny(){
				this.$refs['file-manager'].close();
				this.selected_files = [];
			},

			close(){
				this.showModal = false;
			},

			confirm(){
				this.files = JSON.parse(JSON.stringify(this.selected_files));
				this.selected_files = [];
			},

			getSelected(selected_files){
				this.selected_files = selected_files;
				this.$emit('input', selected_files);
			}
		}
	}
</script>
