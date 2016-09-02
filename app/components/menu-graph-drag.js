import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		cancelChanges() {
			model.rollbackAttributes();
		},
		saveChanges() {
			model.save();
		}

	}

});
