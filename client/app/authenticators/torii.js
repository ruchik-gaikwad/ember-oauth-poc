import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';
import Ember from 'ember';
const  { RSVP, $ ,inject: {service} } = Ember


export default ToriiAuthenticator.extend({
    torii: service('torii'),
    session: service('session'),
    authenticate(provider, options){
        //  debugger
        return this.get('torii').open(provider, options)
        .then((authData) => {
            // console.log(authData, "this is the torii autheticator")
            // debugger
            return new RSVP.Promise((resolve, reject) =>  {
                // debugger    
                return $.ajax('http://localhost:4000/login', {
                    type: 'POST',
                    data: {
                        code: authData.authorizationCode,
                        redirect_uri: authData.redirectUri
                    },
                    success: resolve,
                    error: reject
                })
            })
        })
    }
})
