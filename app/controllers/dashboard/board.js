import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		toggleEditDashboard: function() {
			this.toggleProperty('isEditingDashboard');
			
			Ember.Logger.info("Edit was clicked!");
		}
	}
});
