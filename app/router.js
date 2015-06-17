import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('restaurants', {path: '/'});
  this.resource('restaurant', {path: 'restaurants/:restaurant_id'}, function() {
    this.resource('review');
  });
  this.route('newReview');
  this.resource("new-restaurant");
  this.route('reviews');
  this.route('new-review');
});

export default Router;
