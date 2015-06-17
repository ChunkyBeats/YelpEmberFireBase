import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    save: function() {
      var newRestaurant = this.store.createRecord('restaurant', {
        name: this.get('name'),
        address: this.get('address'),
        phone: this.get('phone')
      });
      newRestaurant.save();
      this.transitionToRoute('restaurants');
      this.set('name', "");
      this.set('phone', "");
      this.set('address', "");
    }
  }
});
