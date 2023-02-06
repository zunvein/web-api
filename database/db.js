const { limitCount } = require('../lib/settings');
const { User } = require('./model');

    async function addUser(username, password, apikey) {
        let obj = { username, password, apikey, defaultKey: apikey, premium: [], limit: limitCount };
        User.create(obj);
    }
    module.exports.addUser = addUser

    async function checkUsername(username) {
        let users = await User.findOne({username: username});
        if(users !== null) {
            return users.username;
        } else {
            return false;
        }
    }
    module.exports.checkUsername = checkUsername;

    async function getApikey(id) {
        let users = await User.findOne({_id: id});
        return {apikey: users.apikey, username: users.username};
    }
    module.exports.getApikey = getApikey;

    async function cekKey(apikey) {
        let db = await User.findOne({apikey: apikey});
        if(db === null) {
            return false;
        } else {
            return db.apikey;
        }
    }
    module.exports.cekKey = cekKey;
    
    async function kurangLimit(apikey) {
    let users = await User.findOne({apikey: apikey});
    if ( users.limit < 1 ) {
    return false
      } else {

           await User.updateOne({
         apikey: apikey
      }, { $inc: { limit: -1 } })
        
           }
        }
     module.exports.kurangLimit = kurangLimit;
     
     async function resetLimitevery12pm() {
     let urlim = await User.updateMany({limit: {$lt:50}}, {"$set":{"limit": 50}});
     }
     module.exports.resetLimitevery12pm = resetLimitevery12pm;
     
     async function checkLimit(apikey) {
     let users = await User.findOne({apikey: apikey});
     return users.limit
     }
     module.exports.checkLimit = checkLimit;
     
     async function changeKey(key) {
     let getkey = await getApikey(req.user.id)
     let { apikey, username } = getkey
     let users = await User.findOne({username: username});
     if ( username || key === null ) return false
     const result = await User.updateOne({
         username: username
      }, { apikey: key })
      
      console.log(result, users, getkey)
     }
     module.exports.changeKey = changeKey;
     