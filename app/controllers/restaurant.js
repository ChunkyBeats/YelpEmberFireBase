import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['restaurant'],
  stars: [1, 2, 3, 4, 5],
  isReviewing: false,

  // CODE TO CREATE AVERAGE RATING, BUT IN WRONG SPOT
  // var totalRating = 0, avgRating;
  // if (this.reviews && this.reviews.length) {
  //   for(var i = 0; i < this.reviews.length; i++) {
  //     totalRating += this.reviews[i].rating;
  //   }
  //   avgRating = totalRating / this.reviews.length;
  // }
  //
  // this.set('rating', avgRating);


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

      this.set('isReviewing', false);
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
