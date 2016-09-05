import Ember from 'ember';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';

const { Component } = Ember;

export default Ember.Component.extend(RecognizerMixin, {

	menuVisible: false,

	toggleMenuVisibility(){
		this.toggleProperty('menuVisible');
	},
 	tapStart(e) {
 		toggleMenuVisibility();
 	},


	recognizers: 'swipe tap'
});
