const express = require('express');
const router = express.Router();
const club = require('../models/Club');



router.get('/', async (req, res) => {

    const result = await club.find();
    if (result !== null) {
        res.render('home', { clubList: result });
        console.log('RESULT ... ' + result.length);
    } else {
        console.log('Something wrong occurred when retrieving data from DB: ' + err);
    }

    console.log(result)
    console.log('Inside home.js');
});

router.post('/add', async (req, res, next) => {
    const { clubName, players, coach } = req.body;
    //  console.log(`Club name : ${name}, players: ${players}, Coach: ${coach}`);
    console.log(clubName, players, coach);
    const ucl = new club({ clubName, players, coach });
    await ucl.save().then((savedDoc) => {
        console.log('Saving to database is successful!');
        res.redirect('/');
    }).catch(err => {
        console.log('Error occurred when saving to database : ' + err);
    });


})

// ROUTE TO SHOW UPDATE ELEMENT
router.get('/edit/:id', async (req, res) => {
    console.log(req.params.id);
    // club.findOneAndUpdate({ _id: req.params.id });{
    const clb = await club.findOne({ _id: req.params.id }, req.body, { new: true });
    if (clb !== null) {
        console.log("Inside edit data found..........")
        console.log("Club name: " + clb.clubName);
        console.log("Club coach: " + clb.coach);
        res.render('edit', { club: clb });
    } else {
        console.log('Something wrong happened when displaying selected row data... ' + err);
    }
});

// ROUTE TO UPDATE DATA
router.post('/edit/:id', (req, res, next) => {
    club.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then(() => {
            console.log('Update successful!')
            res.redirect('/');
        }).catch(err => {
            console.log('Something wrong happened when updating data .... ' + err);
            next(err);
        });

})

// ROUTE TO DELETE DATA
router.get('/delete/:id', (req, res, next) => {
    club.deleteOne({ _id: req.params.id }).then(() => {
        console.log('Delete successful!');
        res.redirect('/');
    }).catch((err) => {
        console.log('Error occurred during deletion......... ' + err);
        next(err);
    })
})





module.exports = router;