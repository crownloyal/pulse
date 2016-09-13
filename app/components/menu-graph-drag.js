import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		createNewDashboard(){},

		rollbackDashboardChanges() {
			this.get('store').rollbackAttributes();
		},
		saveDashboardChanges(id) {
			this.get('store').findRecord('dashboard', id)
				.then(function(){
					this.set('name', this.get('model.name'));
					this.set('text', this.get('model.text'));
				});
			record.save().then(function() {
				Ember.Logger.debug('Record saved successfully!');
			}, function() {
				Ember.Logger.debug('Saving record failed!');
			})
		}

	}

});
