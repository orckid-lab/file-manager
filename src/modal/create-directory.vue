<template>
	<form  @submit.prevent="validateBeforeSubmit">
		<h5>Create a new folder</h5>
		<fieldset>
			<label for="directory_name">Create a new directory at {{ directory }}/</label>
			<input name="directory_name" id="directory_name" class="new-folder-name" type="text" v-model="directory_name"/>
		</fieldset>
		<ui-button
				button-type="submit"
				:loading="progress">
			Save
		</ui-button>
		<ui-button button-type="button" :loading="progress" @click="close()">
			Close
		</ui-button>
	</form>
</template>

<script>
	export default{
		props: {
			directory: {
				type: String
			}
		},
		data(){
			return {
				directory_name: '',
				progress: false,
				action: 6,
			}
		},
		methods: {
			validateBeforeSubmit() {
				let self = this;
				this.$validator.validateAll().then(result => {
					if (result) {
						self.create();
					}
				});
			},

			create(){
				let self = this;
				self.progress = true;

				axios.post('/file-manager/create', {
						name: self.directory_name,
						path: self.directory
					})
					.then(function (response) {
						self.$bus.emit('completed', self.action, response);
						self.resetForm();
					})
					.catch(function (error) {
						self.progress = false;
						console.log(error);
					});
			},
			resetForm(){
				let self = this;
				self.$el.reset();
				self.progress = false;
				self.$validator.clean();
			},
			close(){
				let self = this;
				self.$bus.emit('close-modal');
			}
		}
	}
</script>