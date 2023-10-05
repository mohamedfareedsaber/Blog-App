const GoogleStrategy=require('passport-google-oauth20').Strategy;
const passport=require('passport');
passport.use(
    new GoogleStrategy(
        {
        clientID:process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECERT,
        callbackURL:"/auth/google/callback"
    },
    function (accessToken,refreshToken,profile,callback){
        callback(null,profile)
    }
    )
);
passport.serializeUser