import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		createNewDashboard(){
			this.get('store').createRecord('dashboard');
		},

		rollbackDashboardChanges: function() {
			this.get('store').rollbackAttributes();
		},
		saveDashboardChanges() {
			// this.get('store').findRecord('dashboard', id)
			// 	.then(function(){
			// 		this.set('name', this.get('model.name'));
			// 		this.set('text', this.get('model.text'));
			// 	});

			this.get('store').save().then(function() {
				Ember.Logger.debug('Record saved successfully!');
			}, function() {
				Ember.Logger.debug('Saving record failed!');
			});
		}

	}
	
});
