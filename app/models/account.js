import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	lastname: DS.attr('string'),
	email: DS.attr('string'),
	image: DS.attr('string'),
	partnername: DS.attr('string'),
	role: DS.attr('string')
});
