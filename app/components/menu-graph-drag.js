import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
	    update() {
	      this.attrs.update();
	    } 
	  }
});
