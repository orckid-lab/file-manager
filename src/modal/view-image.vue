<template>
    <div class="image-viewer">
        <figure>
            <div class="preloader" :class="{ active: image.preloaded }">
                <div class="loader"></div>
                <img :src="image.preloaded"/>
            </div>
            <figcaption>
                <p><strong>Meta data:</strong> {{ image.name }}, {{ formatSize }}</p>
            </figcaption>
        </figure>
        <ui-button button-type="button" @click="open">
            View original size (new window)
        </ui-button>
        <ui-button button-type="button" @click="close">
            Close
        </ui-button>
    </div>
</template>
<script>
	export default{
		props: {
			image: {
				type: Object
            }
        },

		data(){
			return {}
		},

		computed: {
			formatSize(){
				let bytes = this.image.size;
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

			open(){
				window.open(this.image.url, "_blank");
				this.close();
            },

			close(){
				let self = this;
				self.$bus.emit('close-modal');
			},

			preloadImage(){
				let self = this;

				let path = self.image.url;
				let image = new Image();
				image.src = path;

				image.onload = function () {
					self.image.preloaded = path;
				};
			},
		}
	}
</script>
