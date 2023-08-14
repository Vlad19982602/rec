import mask from './modules/mask.js';
import scrolling from './modules/pageup.js';

window.addEventListener('DOMContentLoaded', () => {

	scrolling('.pageup');
	mask('[name="form_text_2"]');
});

