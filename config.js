var Config = function(){

    var self = this;

    /**
     * Http Port
     * @type {number}
     */
    self.port = 1772;

    /**
     * Facebook Application Settings
     * @type {{app: {id: string, secret: string, auth: {callback: string}}}}
     */
    self.facebook = {
        id: '664975803575764', // facebook application ID
        secret: 'b43412d7b4d39dd135f643088778952a', // facebook application secret
        callback: 'https://mcnallydevelopers.com/apps/facebook/1475477369355601/', // facebook callback url
        scope: ['email'], // https://developers.facebook.com/docs/facebook-login/permissions/v2.0
        page: 'mcnallydev' // facebook page name
    };

    /**
     * Session Settings
     * @type {{secret: string, key: string, cookie: {secure: boolean}}}
     */
    self.session = {
        secret: 'password', // custom hash
        key: 'fb_' + self.facebook.id, // session key name
        cookie: {
            secure: true,
            maxAge  : new Date(Date.now() + 3600000*24) // 24 hours
        },
        proxy: true
    };

}

module.exports = new Config();