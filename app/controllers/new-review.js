import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['restaurant'],
  stars: [1, 2, 3, 4, 5],
  actions: {
    submit: function() {
      var newReview = this.store.createRecord('review', {
        author: this.get('author'),
        rating: this.get('rating'),
        review: this.get('review')
      });
      newReview.save();

      var restaurant = this.get('controllers.restaurant.model');
      restaurant.get('reviews').pushObject(newReview);
      restaurant.save();

      this.transitionToRoute('restaurant');
    }
  }
});
