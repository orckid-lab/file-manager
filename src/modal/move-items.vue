<template>
    <div>
        <h5>Select directory to move item</h5>
        <directories :directory.once="modal.root" :mode="'modal'"></directories>
        <fieldset>
            <label>Move to: {{modal.destination.name}}</label>
        </fieldset>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        mounted(){
            let self = this;
            VueEvent.$on('select-destination', function (directory) {
                self.modal.destination = directory;
            })
        }
    }
</script>
