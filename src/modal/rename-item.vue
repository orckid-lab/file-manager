<template>
    <form @submit.prevent="validateBeforeSubmit">
        <h5>Rename file - Do not change the extension i.e .jpg/.zip</h5>
        <fieldset>
            <label for="file_name" class="hide">New file name</label>
            <input name="file_name"
                   id="file_name"
                   class="file-name"
                   type="text"
                   v-validate="'required'"
                   data-vv-as="file name"
                   v-model="form.name"/>
            <span v-show="errors.has('file_name')" class="help is-danger">{{ errors.first('file_name') }}</span>
        </fieldset>
        <ui-button
                button-type="submit"
                :loading="form.progress">
            Rename
        </ui-button>
        <ui-button button-type="button" @click="close()">
            Close
        </ui-button>
    </form>
</template>
<script>
	let FormData = function () {
		return {
			name: '',
			action: 1,
			progress: false
		}
	};

	export default {
		props: {
			items: {
				type: Array
			}
		},
		data(){
			return {
				form: new FormData()
			}
		},
		methods: {
			validateBeforeSubmit() {
				let self = this;
				this.$validator.validateAll().then(result => {
					if (result) {
						self.rename();
					}
				});
			},

			resetForm(){
				let self = this;
				self.$el.reset();
				self.form = new FormData();
				self.$validator.clean();
			},

			close(){
				let self = this;
				self.$bus.emit('close-modal');
			},

			rename(){
				let self = this;
				self.form.progress = true;

				axios.post('/file-manager/update', {
						name: self.form.name,
						items: self.items,
						action: self.form.action
					})
					.then(function (response) {
						self.$bus.emit('completed', self.form.action, response);
						self.resetForm();
					})
					.catch(function (error) {
						self.progress = false;
					});
			}

		}
	}
</script>
