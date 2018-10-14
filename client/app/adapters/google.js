import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import  Ember  from 'ember';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
    authorizer : 'authorizer:google',
    host: 'https://www.googleapis.com',
    session: Ember.inject.service('session')
});
