import Ember from 'ember';

export default Ember.Controller.extend({

	isEditingDashboard: false,
	actions: {
		toggleEditDashboard: function() {
			this.toggleProperty('isEditingDashboard');
			
			Ember.Logger.info("Edit was clicked!");
		}
	}
});
