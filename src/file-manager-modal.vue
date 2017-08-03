<template>
    <div class="input-group">
        <ui-modal ref="file-manager" title="Select file" @close="close">
            <file-manager :multiple="true"></file-manager>
        </ui-modal>
        <input type="text" :name="name" readonly="readonly">
        <span>
            <button class="button" type="button" @click="browse">
                <i class="fa fa-cloud-upload" aria-hidden="true"></i>
            </button>
        </span>
        <ui-button button-type="button">
            Ok
        </ui-button>
        <ui-button button-type="button">
            Close
        </ui-button>
    </div>
</template>
<script>
	Vue.component('file-manager', require('./file-manager.vue'));

    export default{
	    name: 'file-manager-modal',

	    props: {
		    mode: {
			    type: String,
			    required: true
		    }
	    },
        data(){
            return{
            
            }
        },
        methods:{
	        browse(){
	        	let self = this;
	        	self.$refs['file-manager'].open();
            },

            close(){
                console.log('closing');
            }
        }
    }
</script>
