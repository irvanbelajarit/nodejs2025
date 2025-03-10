const express = require('express');
const router = express.Router();


router.get('/login', function(req, res) {
        res.render('pages/login');
    });


router.post('/login', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (username === 'irvan' && password === '1234') {
        req.session.authUser = { username
        };
        res.render('pages/home');
    } else {
        res.render('pages/login', { error: 'Invalid username or password' });
    }
});




module.exports = router; 

