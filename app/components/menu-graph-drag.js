import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		cancelChanges() {
			model.rollbackAttributes();
		},
		saveChanges() {
			this.get('store').findRecord('dashboard', param.dashboard_id).then(function(data){
				data.set('title', model.name);
				data.set('text', model.text);
			})
		}

	}

});
