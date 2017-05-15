<template>
    <div>
        <h5>Rename file - Do not change the extension i.e .jpg/.zip</h5>
        <fieldset>
            <label for="file_name" class="hide">New file name</label>
            <input name="file_name" id="file_name" class="file-name" type="text" v-model="modal.name"/>
        </fieldset>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        mounted(){
            console.log('Rename component ready.');
        }
    }
</script>
