<template>
   <div>
       <h5>Download selected file</h5>
       <form action="/file-manager/download" ref="download-form" method="post" class="hide">
           <div>
               <input v-for="item in items" type="text" name="items[]" :value="item"/>
           </div>
       </form>
       <ui-button
               @click="download"
               button-type="b"
               :loading="progress">
           Download
       </ui-button>
       <ui-button button-type="button" @click="close()" :loading="progress">
           Close
       </ui-button>
   </div>
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
			    action: 4,
			    progress: false
		    }
	    },
	    methods: {
		    close(){
			    let self = this;
			    self.$bus.emit('close-modal');
		    },

		    download(){
		    	let self = this;
		    	self.$refs['download-form'].submit();
			    self.$bus.emit('completed', self.action);
		    }

	    }
    }
</script>
