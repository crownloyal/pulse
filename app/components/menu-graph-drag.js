import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({

	actions: {
		cancelChanges() {
			this.get('store').rollbackAttributes();
		},
		saveChanges() {
			this.get('store').findRecord('dashboard', param.dashboard_id).then(function(data){
				this.set('title', model.name);
				this.set('text', model.text);
			});
		}

	}

});
