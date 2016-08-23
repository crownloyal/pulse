import Ember from 'ember';

export default Ember.Route.extend({
	model(param){
        return this.store.peekRecord('dashboard',param.id);
    }
});
