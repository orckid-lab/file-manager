
window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = require('jquery');

/**
 * Requiring dropzone
 */
require('dropzone');

/**
 * jQuery plugin for rendering contextual menu
 */
require('jquery-contextmenu');


/**
 * Block Ui js
 */
require('block-ui');

/**
 * vendor configurations
 */
$.blockUI.defaults = Object.assign({}, $.blockUI.defaults, {
	message: '<div class="loading-animator"></div>',
	css: {
		border: 'none',
		padding: '2px',
		backgroundColor: 'none'
	},
	overlayCSS: {
		backgroundColor: '#fff',
		opacity: 0.3,
		cursor: 'wait'
	}
});

/**
 * Requiring cropper js for editting image
 */
require('cropperjs');

/**
 * Require axios api for ajax request
 */
window.axios = require('axios');
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.Velocity = require('velocity-animate');


/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */
window.VueEvent = new Vue();

require('vue-modal');

const app = new Vue({
	el: '#global',
	components: {
		fileManager: require('./file-manager.vue'),
	}
});
