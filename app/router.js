import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', function() {
    this.route('new');
    this.route('board', { path: '/:id' });
  });
  this.route('settings');
  this.route('profile');
});

export default Router;
