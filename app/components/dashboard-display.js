import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		toggleEditDashboard: fuction() {
			this.toggleProperty('isEditingDashboard');
		}
	}
});
