<template>
    <div class="directory-tree-menu">
        <ul>
            <directory :directory.sync="directory" :mode="mode" :expand="true"></directory>
        </ul>
    </div>
</template>
<script>
    export default{
        props: {
            mode: String,
            directory: {
                type: Object,
                required: true
            }
        },
        components: {
            directory: require('./directory.vue')
        },
        computed: {}
    }
</script>
