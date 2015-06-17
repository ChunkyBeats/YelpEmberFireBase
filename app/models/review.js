import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  rating: DS.attr('number'),
  review: DS.attr('string'),
  restaurant: DS.belongsTo('restaurant')
});
