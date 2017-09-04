<template>
    <div class="input-group">
        <ui-modal dismiss-on="close-button esc" ref="file-manager" title="Select file" @close="close">
            <file-manager v-if="showModal"
                          @selected="getSelected"
                          :multiple="multiple"
                          :modalMode="true"></file-manager>
            <div slot="footer">
                <ui-button button-type="button" color="primary" @click="confirm">Ok</ui-button>
                <ui-button button-type="button" @click="deny">Cancel</ui-button>
            </div>
        </ui-modal>
        <span v-html="renderPath"></span>
        <input type="hidden" v-for="file in files" :name="name" :value="file.token" @input="updateValue($event.target.value)">
        <button class="button" type="button" @click="browse">
            <i class="fa fa-cloud-upload" aria-hidden="true">Browse</i>
        </button>
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
				type: String
            },
            value: {
				type: String,
            },
            name: {
				type: String,
                required: true
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
				this.selected_files = [];
				this.$refs['file-manager'].close();
			},

			close(){
				this.showModal = false;
			},

			confirm(){
				this.files = JSON.parse(JSON.stringify(this.selected_files));
				this.selected_files = [];
				this.$refs['file-manager'].close();
			},

			getSelected(selected_files){
				this.selected_files = selected_files;
			},

			updateValue(value){
				console.log('value is ', value);
				this.$emit('input', value);
            }
		}
	}
</script>
