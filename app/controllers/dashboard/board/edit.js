import Ember from 'ember';

export default Ember.Controller.extend({

	rolledbackDashboardChanges: function() {
			this.get('store').rollbackAttributes();
		}

});
