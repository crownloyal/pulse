import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	model(param){
        return this.get('store').findRecord('dashboard', param.dashboard_id);
        }
});
