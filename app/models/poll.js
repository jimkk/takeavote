import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  createdOn: DS.attr('date', {
    defaultValue () {
      return new Date();
    }}),
  options: DS.hasMany('option')
});
