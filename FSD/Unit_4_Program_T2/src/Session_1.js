const expr = require("Express");
const sess = require("express-session");
const app = expr();

app.use(sess({
    resave: false,            //Doesn't save session if not modified
    saveUninitialized: false,  //Dont Create session if something is not stored
    secret:"key"               //If the Secret key is changed, the session is considered as fresh session and its value will be reset
}))

app.get('/', (req, res) => {
    if (req.session.count) {
        req.session.count++;
        res.send('You have visited this page '+req.session.count+' times')
    }
    else {
        req.session.count = 1
        res.send('Welcome 1st Time')
    }
})

app.listen(9009, () => {
    console.log("Server Running");
});
