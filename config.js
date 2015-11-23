var Config = function(){

    var self = this;

    /**
     * Http Port
     * @type {number}
     */
    self.port = process.env.PORT || 5000;

    /**
     * Facebook Application Settings
     * @type {{app: {id: string, secret: string, auth: {callback: string}}}}
     */
    self.facebook = {
        id: process.env.FACEBOOK_ID, // facebook application ID
        secret: process.env.FACEBOOK_SECRET, // facebook application secret
        callback: process.env.FACEBOOK_CALLBACK, // facebook callback url
        scope: ['email'] // https://developers.facebook.com/docs/facebook-login/permissions/v2.0
    };

    /**
     * Session Settings
     * @type {{secret: string, key: string, cookie: {secure: boolean}}}
     */
    self.session = {
        secret: process.env.SESSION_SECRET, // custom hash
        key: 'fb_' + self.facebook.id, // session key name
        cookie: {
            secure: true,
            maxAge  : new Date(Date.now() + 3600000*24) // 24 hours
        },
        proxy: true
    };

};

module.exports = new Config();
