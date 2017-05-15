<template>
    <div id="image-preview-container">
        <div class="img-container">
            <img class="edited-image" :src="modal.image_url" alt="Picture">
        </div>
    </div>
</template>
<script>
    export default{
        mounted(){
            this.initialise(0.5);
        },

        methods: {
            initialise(ratio, zoomable = true, zoomOnWheel = true){
                let self = this;
                self.modal.cropper = new Cropper($(this.$el).find('.edited-image').get(0), {
                    autoCropArea: ratio,
                    zoomable: zoomable,
                    zoomOnWheel: zoomOnWheel,
                    ready: function () {
                        self.modal.cropper.setCropBoxData().setCanvasData();
                    }
                });
            }
        }
    }
</script>
