//configure as per your requirements
var redirect = "http://localhost:8000/";
var apikey = '1234567890abcdef';
var sitekey = 'localhost';

//users  // I have hardcoded this but you can also retrieve from db (remember this is mockid not the actual)
var users = {
    'alexis':{ uid : 'alexis.duque',user_email: 'alexis.duque@openmrs.org',user_name :'Alexis',password : 'duque' },
    'shekhar':{ uid : 'shekhar' ,user_email: 'shekhar@openmrs.org', user_name: 'ShekharReddy', password : 'shekhar' },
    'burke':{ uid : 'burke', user_email: 'burke.mamlin@openmrs.org',user_name :'Burke',password : 'mamlin' },
    'user':{ uid : 'user' ,user_email : 'user@openmrs.org', user_name: 'OpenMRSUser', password : 'user' }
};

var crypto = require('crypto');
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

//multipass registering
var Multipass = require('atlas-node-multipass');
var multipass = new Multipass(apikey, sitekey);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

//Routes

app.get('/authenticate/atlas',function(req, res){
    res.redirect('/')
});

app.get('/disconnect', function (req, res) {
    res.redirect(redirect);
});

//get '/'
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/auth.html'));
});

//post '/'
app.post('/', function (req, res) {
    
    if(users[req.body.user]&&(users[req.body.user].password==req.body.password)){
        obj = users[req.body.user];
        var token = multipass.encode(obj);

        // signature
        var signature = crypto.createHmac('sha1', apikey)
            .update(token)
            .digest('base64');
        
        URL = redirect+'auth/multipass/callback?multipass='+token+"&signature="+signature;
        res.redirect(URL);
    }
    else
    {
        alert("wrong credentials please check the details and sign in again");
        res.sendFile(path.join(__dirname+ '/auth.html'))
    }
    
});

var port = process.env.PORT || 8080;

app.listen(port, function(){
    console.log('http://127.0.0.1:'+port+'/');
});