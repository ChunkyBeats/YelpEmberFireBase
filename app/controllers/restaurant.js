import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['restaurant'],
  needs: ['review'],
  stars: [1, 2, 3, 4, 5],
  isReviewing: false,

  actions: {
    Add: function() {
      this.set('isReviewing', true);
    },
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
      this.set('author', "");
      this.set('rating', "");
      this.set('review', "");
    },
    deleteReview: function(review) {
      if (confirm('Are you sure?')){
       var restaurant = this.get('model');
       review.destroyRecord();
       restaurant.save();
       this.transitionToRoute('restaurant', this.get('id'));
     }
    }
  }
});
