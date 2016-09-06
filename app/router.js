import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', function() {
    this.route('new');
    this.route('board', { path: '/:dashboard_id' }, function(){
        this.route('edit');
    });
  });
  this.route('about');
  this.route('settings');
  this.route('account', { path: 'account/:account_id' }, function() {
  		this.route('settings');
  });
});

export default Router;
