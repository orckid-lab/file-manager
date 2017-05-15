<template>
    <div class="btn-handler">
        <button type="button" :disabled="!modal.destination" @click="modal.confirm()">Move</button>
        <button type="button" @click="modal.close()">Cancel</button>
    </div>
</template>
<script>
    export default{

    }
</script>
