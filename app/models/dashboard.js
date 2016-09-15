import DS from 'ember-data';
import { fragmentArray } from 'model-fragments/attributes'

export default DS.Model.extend({
	name: DS.attr('string'),
	text: DS.attr('string'),
	display: fragmentArray('display')
});
