<template>
    <div class="btn-handler">
        <p>First crop your image then save it.</p>
        <button type="button" class="crop-button" @click="crop">Crop</button>
        <button type="button" class="zoom-out" @click="zoom(-1)">-</button>
        <button type="button" class="zoom-in" @click="zoom(1)">+</button>
        <button type="button" @click="reset">Reset</button>
        <button type="button" :disabled="!modal.modified_image" @click="modal.confirm()">Save Image</button>
        <button type="button" @click="modal.close()">Cancel</button>
    </div>
</template>
<script>
    export default{

        methods: {
            initialise(ratio, zoomable = true, zoomOnWheel = true){
                let self = this;
                self.modal.cropper = new Cropper($('#image-preview-container').find('.edited-image').get(0), {
                    autoCropArea: ratio,
                    zoomable: zoomable,
                    zoomOnWheel: zoomOnWheel,
                    ready: function () {
                        self.modal.cropper.setCropBoxData().setCanvasData();
                    }
                });
            },
            crop(){
                let self = this;
                self.modal.cropper.getCroppedCanvas().toBlob(function (blob) {
                    self.modal.image_url = URL.createObjectURL(blob);
                    self.modal.cropper.destroy();

                    self.$nextTick(function () {
                        self.initialise(0.95);
                    });
                    self.modal.modified_image = new File([blob], self.modal.image.name, {type: self.modal.image.type, lastModified: Date.now()});
                });
            },
            reset(){
                let self = this;
                self.modal.cropper.destroy();
                self.modal.image_url = self.modal.image.url;
                self.modal.modified_image = null;
                self.$nextTick(function () {
                    self.initialise(0.5);
                });
            },
            zoom(value){
                let self = this;
                if (value == 1) {
                    self.modal.cropper.zoom(0.1);
                    return;
                }
                self.modal.cropper.zoom(-0.1);
            }
        }
    }
</script>
