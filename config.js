var Config = function(){

    var self = this;

    /**
     * Http Port
     * @type {number}
     */
    self.port = 5000;

    /**
     * Facebook Application Settings
     * @type {{app: {id: string, secret: string, auth: {callback: string}}}}
     */
    self.facebook = {
        id: '469842273148638', // facebook application ID
        secret: 'a6c152fb647b503000ff7cc080da3d61', // facebook application secret
        callback: 'https://mcnallydevelopers.com/apps/facebook/466603996805799/', // facebook callback url
        scope: ['email'], // https://developers.facebook.com/docs/facebook-login/permissions/v2.0
        page: 'mcnallydev' // facebook page name
    };

    /**
     * Database Settings
     * @type {{url: string, db: string}}
     */
    self.mongodb = {
        url: 'mongodb://polin:polin123@oceanic.mongohq.com:10007/',
        db: 'betafbapps'
        //url: 'mongodb://paulomcnally:9821u3213jkn1@oceanic.mongohq.com:10043/', // mongodb://0.0.0.0
        //db: 'sinsa' // database name
    };

    /**
     * Use Database Store
     * @param MongoStore
     */
    self.setStore = function(MongoStore){
        self.session.store = new MongoStore({
            url: self.mongodb.url + self.mongodb.db
        });
    }

    /**
     * Session Settings
     * @type {{secret: string, key: string, cookie: {secure: boolean}}}
     */
    self.session = {
        secret: '3b4279ec13b811fdce6e0120682d7ec8', // custom hash
        key: 'fb_' + self.facebook.id, // session key name
        cookie: {
            secure: true,
            maxAge  : new Date(Date.now() + 3600000*24)
        },
        proxy: true
    };

    /**
     * SMTP Settings
     * @type {{user: string, password: string, host: string, ssl: boolean}}
     */
    self.smtp = {
        user: '', // smtp user
        password: '', // smtp password
        host: 'smtp.gmail.com', // smtp host
        ssl: true // smtp secure
    };
}

module.exports = new Config();