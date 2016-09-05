import Ember from 'ember';

export default Ember.Component.extend({

	menuVisible: false,

	toggleMenuVisibility(){
		this.toggleProperty('menuVisible');
	}
});
