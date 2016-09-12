import Ember from 'ember';

export default Ember.Component.extend({

init() {
  this._super(...arguments);
  let appCtrl = Ember.getOwner(this).lookup('controller:application');
  this.set('appCtrl', appCtrl);
},

translatedRoute: Ember.computed('this.appCtrl', function() {
	let currentRoute = this.appCtrl.currentRouteName;

	switch(currentRoute) {
		case 'account.index':
		case 'account.settings':
			return 'Account';

		case 'dashboard.index':
			return 'Dashboard help';
		case 'dashboard.new':
			return 'New dashboard';
		case 'dashboard.board.index':
			return 'Dashboard';
		case 'dashboard.board.edit':
			return 'Edit dashboard'

		case 'settings':
			return 'App settings';
		case 'about':
			return 'About (this)';

		default:
			Ember.Logger.debug(currentRoute);
			return 'Oooops!';
			};

		}).property('appCtrl.currentRouteName')

});
