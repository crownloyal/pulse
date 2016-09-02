import Ember from 'ember';

export default Ember.Component.extend({

init() {
  this._super(...arguments);
  let appCtrl = Ember.getOwner(this).lookup('controller:application');
  this.set('appCtrl', appCtrl);
},

translatedRoute() {
	
}

});
