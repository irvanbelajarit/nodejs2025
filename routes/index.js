const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    // check user session
    if (!req.session.authUser) {
      res.redirect('/auth/login');
    } else {
      res.render('pages/home');
  }
  }); 

  const Contact = require("../model/Contact");

  router.get("/contact", async (req, res) => {
    const contacts = await Contact.find();
  
    res.render("pages/home", {
      title: "contact ejs",
      contacts,
    });
  });

  router.get("/contact/add", (req, res) => {
    res.render("pages/tambahdata", {
     
    });
  });

  router.post("/contact", async (req, res) => {
    const contact = new Contact(req.body);
    await contact.save();
    res.redirect("/contact");
  });

  router.get("/contact/edit/:id", async (req, res) => {
    const id = req.params.id;
    const contact = await Contact.findById(id);
    res.render("pages/editdata", { contact });
  }
  );

  router.post("/contact/update/", async (req, res) => {
    const id = req.body._id;
    await
    Contact.findByIdAndUpdate(id, req.body);
    res.redirect("/contact");
  }
  );

  router.get("/contact/delete/:id", async (req, res) => {
    const id = req.params.id;
    await Contact.findByIdAndDelete(id);
    res.redirect("/contact");
  }
  );
  


module.exports = router;