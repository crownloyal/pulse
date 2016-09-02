import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		cancelChanges: function() {
			model.rollback();
		}
	}

});
