<template>
	<div class="form">
		<h5>Create a new folder</h5>
		<fieldset>
			<label for="directory_name">Create a new directory at {{modal.current_path}}/</label>
			<input name="directory_name" id="directory_name" class="new-folder-name" type="text" v-model="modal.name"/>
		</fieldset>
	</div>
</template>

<script>
	export default{
		data(){
			return {}
		}
	}
</script>