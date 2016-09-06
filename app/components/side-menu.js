import Ember from 'ember';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';


export default Ember.Component.extend(RecognizerMixin, {

	menuVisible: false,

	toggleMenuVisibility() {
			this.toggleProperty('menuVisible');
		},

	click() {
		this.toggleMenuVisibility();
		},
	swipe() {
	 	this.toggleMenuVisibility();
	 	},


	recognizers: 'swipe tap'
});
