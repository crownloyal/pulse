import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		cancelChanges() {
			this.get('model').rollbackAttributes();
		},
		saveChanges() {
			this.get('model').findRecord('dashboard', param.dashboard_id).then(function(data){
				this.set('title', model.name);
				this.set('text', model.text);
			});
		}

	}

});
