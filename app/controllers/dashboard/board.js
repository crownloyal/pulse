import Ember from 'ember';

export default Ember.Controller.extend({

	editDashboard: false,
	actions: {
		toggleEditDashboard: function() {
			this.toggleProperty('editDashboard');
			Ember.Logger.info("Edit was clicked!");
		}
	}
});
