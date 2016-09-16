import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	model(param){
        return RSVP.hash({
        	dashboard: this.get('store').findRecord('dashboard', param.dashboard_id),
        	display: this.get('store').peekAll('display', param.dashboard_id)
        });
    }
});
