import Ember from 'ember';

export default Ember.Component.extend({

init() {
  this._super(...arguments);
  let appCtrl = Ember.getOwner(this).lookup('controller:application');
  this.set('appCtrl', appCtrl);
},

translatedRoute: Ember.computed('this.appCtrl', function() {
	let currentRoute = this.appCtrl.currentRouteName;
	Ember.Logger.info('Current route: ', currentRoute)

	switch(currentRoute) {
		case 'account.index':
		case 'account.settings':
			return 'Account';
			break;
		case 'dashboard.index':
			return 'Dashboard help';
			break;
		case 'dashboard.board.index':
			return 'Dashboard';
			break;
		case 'settings':
			return 'App settings';
			break;
		case 'about':
			return 'About (this)';
			break;

		default:
			return 'Oooops!';
			break;
			}

		})

});
