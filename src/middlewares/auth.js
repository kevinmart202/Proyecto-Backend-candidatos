
const passport = require("passport");

const { BasicStrategy } = require("passport-http");

const { AUTH_USERNAME, AUTH_PASSWORD } = process.env;

passport.use(
  "general",
  new BasicStrategy( (username, password, done) =>  {
    if(username === AUTH_USERNAME && password === AUTH_PASSWORD){
         return done(null, { user:username});
    }
    return done(null, false);
  })  
)

module.exports = passport;