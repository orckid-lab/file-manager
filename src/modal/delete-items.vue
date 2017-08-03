<template>
	<form @submit.prevent="deleteItem">
		<h5>Delete the selected item(s)</h5>
		<ui-button button-type="submit" :loading="progress">
			Delete
		</ui-button>
		<ui-button button-type="button" @click="close">
			Close
		</ui-button>
	</form>
</template>
<script>
	export default{
		props: {
			items: {
				type: Array
			}
		},

		data(){
			return {
				destination: '',
				action: 3,
				progress: false
			}
		},

		methods:{
			close(){
				let self = this;
				self.$bus.emit('close-modal');
			},

			deleteItem(){
				let self = this;

				if (self.items.length === 0) {
					return;
				}
				self.progress = true;

				axios.post('/file-manager/delete', {
						items: self.items
					})
					.then(function (response) {
						self.progress = false;
						self.$bus.emit('completed', self.action, response);
					})
					.catch(function (error) {
						self.progress = false;
					});
			}
		}
	}
</script>