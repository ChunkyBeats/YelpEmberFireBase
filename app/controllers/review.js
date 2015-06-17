import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteReview: function() {
      if (confirm('Are you sure?')){
       var restaurant = this.get('controllers.restaurant.model');
       restaurant.get('model').destroyRecord();
       restaurant.save();
       this.transitionToRoute('restaurant', this.get('id'));
     }
    }
  }
})
