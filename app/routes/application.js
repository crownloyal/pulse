import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
	      	dashboard: this.get('store').findAll('dashboard'),
	      	account: this.get('store').findAll('account')
		})
	}
});
