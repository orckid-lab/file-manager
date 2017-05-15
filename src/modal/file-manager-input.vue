<template>
    <div class="input-group">
        <input type="text" :name="name" readonly="readonly" v-model="file.url">
        <span>
            <button class="button" type="button" @click="browse()">
                <i class="fa fa-cloud-upload" aria-hidden="true"></i>
            </button>
        </span>
    </div>
</template>
<script>
    VueModal.component('file-manager', require('../file-manager.vue'));
    VueModal.component('file-manager-footer', require('../file-manager-footer.vue'));
    export default{
        props: {
            mode: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: false
            },
            default_value: {
                type: String,
                required: false
            }
        },
        data(){
            return {
                file: {}
            }
        },
        mounted(){
            if (this.default_value) {
                this.$set(this.file, 'url', this.default_value);
            }
        },
        methods: {
            browse(){
                let self = this;
                $.blockUI();
                axios.post('/dashboard/file-manager', {})
                        .then(function (response) {
                            $.unblockUI();
                            VueModal.create()
                                    .classes(
                                            ['file-manager-modal']
                                    )
                                    .data({
                                        mode: self.mode,
                                        payload: response.data.payload,
                                        type: self.type,
                                        file: {}
                                    })
                                    .buttonLabels({
                                        confirm: 'Ok'
                                    })
                                    .callbacks({
                                        confirm(){
                                            let modal = this;
                                            if (modal.file.type == 'directory') {
                                                alert('Invalid file type');
                                            }
                                            else {
                                                self.file = modal.file;
                                            }
                                            modal.close();
                                        }
                                    })
                                    .components({
                                        content: 'file-manager',
                                        footer: 'file-manager-footer'
                                    })
                                    .show();
                        })
                        .catch(function (error) {
                            $.unblockUI();
                        });
            },
        }
    }
</script>
