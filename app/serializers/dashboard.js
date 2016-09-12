/*
@ DATA Serializer
@ Author: Dominic Brause
@ TYPE: Serializer
@ -
@ This Serializer assists the dashboard router to find nested data
*/

import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
	attrs: {
		display: { embedded: 'always' }
	}

});
