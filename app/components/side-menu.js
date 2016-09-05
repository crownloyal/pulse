import Ember from 'ember';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';

const { Component } = Ember;

export default Ember.Component.extend(RecognizerMixin, {

	menuVisible: false,

	toggleMenuVisibility() {
			this.toggleProperty('menuVisible');
		},

	click(event) {
		this.toggleMenuVisibility();
		},
	swipe(event) {
	 	this.toggleMenuVisibility();
	 	},


	recognizers: 'swipe tap'
});
