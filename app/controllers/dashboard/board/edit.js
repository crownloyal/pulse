import Ember from 'ember';

export default Ember.Controller.extend({  
  actions: {
    update() {
      var resource = this.get('model');
      resource.save();
    }
  },
});
