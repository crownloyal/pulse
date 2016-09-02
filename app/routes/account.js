import Ember from 'ember';

export default Ember.Route.extend({
	model(param){
	return this.store.peekRecord('account',param.account_id);
	}
});
