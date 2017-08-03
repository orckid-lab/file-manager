<template>
    <li>
        <label v-if="current_directory.hasDirectories > 0" @click="expandDirectory()">
            <span v-if="!expand">+</span>
            <span v-else>-</span>
        </label>
        <a href="#" @click.prevent="clickAction(current_directory)">
            <i class="icon-folder-network-1"></i>
            <span>{{current_directory.name}}</span>
            <span class="badge" v-if="current_directory.hasFiles > 0">{{current_directory.hasFiles}}</span>
        </a>
        <ul v-show="current_directory.subDirectories.length > 0 && expand">
            <directory v-for="sub_directory in current_directory.subDirectories" :directory.sync="sub_directory" :mode="mode" :parent="current_directory"></directory>
        </ul>
    </li>
</template>
<script>
    export default{
        name: 'directory',

        props: {
            directory: Object,
            mode: String,
            parent: Object,
            expand: {
                type: Boolean,
                'default': false
            }
        },

        data(){
            return {
                current_directory: {}
            }
        },

        components: {
            directory: require('./directory.vue')
        },

        created(){
            this.current_directory = this.directory;
        },

        mounted(){
            let self = this;

	        self.$bus.on('item-created', self.addedItem);

	        self.$bus.on('item-deleted', self.deleteItem);

	        self.$bus.on('item-rename', self.renameItem);

	        self.$bus.on('item-moved', self.moveItem);
        },

        methods: {
            expandDirectory(){
                let self = this;

                self.expand = !self.expand;

                if (self.current_directory['subDirectories'].length > 0 || !self.expand) {
                    return;
                }

                axios.post('/dashboard/file-manager', {path: self.current_directory.path})
                        .then(function (response) {
                            self.current_directory['subDirectories'] = response.data.payload.current_path.subDirectories;
                        })
                        .catch(function (response) {

                        });
            },

            addedItem(settings) {
                let {current_path, upload} = settings;
                let self = this;

                if (current_path !== self.current_directory.path) {
                    return;
                }

                if (upload.type === 'directory') {
                    self.current_directory.hasDirectories = self.current_directory.hasDirectories + 1;
                    self.current_directory.subDirectories.push(upload);
                    return;
                }
                self.current_directory.hasFiles = self.current_directory.hasFiles + 1;
            },

            deleteItem(parameters) {
                let {data} = parameters;
                let self = this;

                if (data.files_parents.indexOf(self.current_directory.token) > -1) {
                    self.current_directory.hasFiles = self.current_directory.hasFiles - (data.files_parents.filter(function (token) {
                                return token === self.current_directory.token;
                            }).length);
                }

                self.current_directory.hasDirectories = self.current_directory.hasDirectories - (self.directory.subDirectories.filter(function (directory) {
                            return data.directories.indexOf(directory.token) > -1;
                        }).length);

                if (data.directories_parents.indexOf(self.current_directory.token) > -1) {
                    self.current_directory.subDirectories = self.current_directory.subDirectories.filter(function (directory) {
                        return data.directories.indexOf(directory.token) === -1;
                    });
                }
            },

            renameItem(parameters){
                let {file} = parameters;
                let self = this;

                if (file.token === self.current_directory.token) {
                    self.current_directory.name = file.name;
                }
            },

            clickAction(directory){
                let self = this;
                if(self.mode === 'navigate'){
	                self.$bus.emit('open-directory', directory.path);
                    return;
                }
	            self.$bus.emit('select-destination', directory);
            },

            moveItem(parameters) {
                let {data} = parameters;
                let self = this;

                if (data.files_parents.indexOf(self.current_directory.token) > -1) {
                    self.current_directory.hasFiles = self.current_directory.hasFiles - (data.files_parents.filter(function (token) {
                                return token === self.current_directory.token;
                            }).length);
                }

                if (data.directories_parents.indexOf(self.current_directory.token) > -1) {
                    self.current_directory.subDirectories = self.current_directory.subDirectories.filter(function (directory) {
                        return data.directories.indexOf(directory.token) > -1;
                    });
                }

                if (data.destination.token === self.current_directory.token) {
                    self.$set(self, 'current_directory', data.destination);
                }

            },
        }
    }
</script>
