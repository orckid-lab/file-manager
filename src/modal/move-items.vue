<template>
    <form @submit.prevent="move">
        <h5>Select directory to move item</h5>
        <directories :directory.once="root" :mode="'modal'"></directories>
        <fieldset>
            <label>Move to: {{ destination.name }}</label>
        </fieldset>
        <div class="btn-handler">
            <ui-button
                    :disabled="!destination"
                    button-type="submit"
                    :loading="progress">
                Move
            </ui-button>
            <ui-button button-type="button" @click="close()">
                Close
            </ui-button>
        </div>
    </form>
</template>
<script>
	export default{
		props: {
			root: {
				type: Object
			},
            items: {
				type: Array
            }
		},

		data(){
			return {
				destination: '',
				action: 2,
				progress: false
			}
		},

		mounted(){
			let self = this;
			self.$bus.on('select-destination', function (directory) {
				self.destination = directory;
			})
		},

		methods: {

			close(){
				let self = this;
				self.$bus.emit('close-modal');
			},

			move(){
				let self = this;

				if (!self.destination) {
					return;
				}

				self.progress = true;

				axios.post('/file-manager/move', {
						items: self.items,
						destination_token: self.destination.token,
						action: self.action
					})
					.then(function (response) {
                        self.$bus.emit('completed', self.action, response);
					})
					.catch(function (error) {
						self.progress = false;
					});

			}
		}
	}
</script>
