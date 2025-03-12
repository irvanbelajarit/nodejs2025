const express = require('express');
const router = express.Router();


router.get('/login', function(req, res) {
        res.render('pages/login',{ layout: false });
    });


router.post('/login', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (username === 'irvan' && password === '1234') {
        req.session.authUser = { username
        };
        res.redirect('/');
    } else {
        res.render('pages/login', { error: 'Invalid username or password' });
    }
});

router.get('/logout', async (req, res) => {
    // destroy all session
    req.session.destroy();
  
    // redirect to login
    res.redirect('/auth/login');
  });
  




module.exports = router; 

