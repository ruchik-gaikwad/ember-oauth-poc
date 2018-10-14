import Ember from 'ember';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
// import SessionService from 'ember-simple-auth/services/session';


export default Controller.extend({
    session: service('session'),

    actions: {
        authenticateSession() {
            let session = this.get('session')
            this.get('session').authenticate('authenticator:torii', 'google-oauth2').then(() => {
                // debugger;
                // console.error('exception in your authenticators authenticate method', reason)
                //  console.log(this.get('session').currentUser)
                this.store.queryRecord('user', {}).then((user) => {
                        // console.log(user)
                        // debugger
                        session.set('currentUser', user)
                })
            }).catch(err => {
                console.log(err, "adasdads")
            })
        }
    }
});
