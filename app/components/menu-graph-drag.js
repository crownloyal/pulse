import Ember from 'ember';

export default Ember.Component.extend({

	store: Ember.inject.service(),

	actions: {
		changeDashboardSelection(objectkey) {
			this.toggleProperty('model.display.["' + objectkey + '"]');
		},

		createNewDashboard() {

		},

		rollbackDashboardChanges() {
		
		},
		saveDashboardChanges() {

		}

	}

});
