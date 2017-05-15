<template>
    <div class="image-viewer">
        <figure>
            <div class="preloader" :class="{ active: modal.image.preloaded }">
                <div class="loader"></div>
                <img :src="modal.image.preloaded"/>
            </div>
             <figcaption>
                 <p><strong>Meta data:</strong> {{modal.image.name}}, {{formatSize}}</p>
             </figcaption>
        </figure>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        components: {},
        computed: {
            formatSize(){
                let bytes = this.modal.image.size;
                bytes = isNaN(bytes) ? 0 : bytes;

                let thresholds = [
                    {
                        range: 1024,
                        unit: 'Bytes'
                    },
                    {
                        range: 1048576,
                        unit: 'KB'
                    },
                    {
                        range: 1073741824,
                        unit: 'MB'
                    },
                    {
                        range: 1073741824,
                        unit: 'GB'
                    },
                ];

                let output = '';

                thresholds.some(function (threshold, index) {
                    let {range, unit} = threshold;
                    if (bytes < range && bytes > 0) {
                        output = (bytes / thresholds[index - 1].range).toFixed(2) + unit;
                        return true;
                    }
                });

                return output ? output : '0 Bytes';
            }
        },
        mounted(){
            this.preloadImage();
        },
        methods: {
            preloadImage(){
                let self = this;

                let path = self.modal.image.url;
                let image = new Image();
                image.src = path;

                $(image).on('load', function () {
                    self.modal.image.preloaded = path;
                });

            },
        }
    }
</script>
