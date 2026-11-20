
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connecting router with the model
let Report = require('../models/Report');

/* Read operation to display URLs submitted prior */
router.get('/', async(req, res, next) => {

    try {

        const ReportList = await Report.find();

        res.render('report', {
            title: 'LinkHop Reports',
            ReportList: ReportList
        });

    }

    catch(err) {
        console.log(err);

        res.render('report', {
            error: 'Error on Server',
            ReportList: []
        });
    }

});

/* Create operation for link submission*/
router.get('/add', async(req, res, next) => {

    try {

        res.render('Reports/add', {
            title: 'Submit URL'
        });

    }

    catch(err) {
        console.log(err);

        res.render('Reports/add', {
            title: 'Submit URL',
            error: 'Error on Server'
        });
    }

});


/* Post operation for saving a submitted URL */
router.post('/add', async(req, res, next) => {

    try {

        let newReport = Report({

            "url": req.body.url,
            "lurecategory": req.body.lurecategory,
            "description": req.body.description,
            "riskstatus": "Pending",
            "submissiondate": new Date()

        });

        await Report.create(newReport);

        res.redirect('/reports');

    }

    catch(err) {
        console.log(err);

        res.render('Reports/add', {
            title: 'Submit URL',
            error: 'Error saving report'
        });
    }

});

router.get('/view', async (req, res, next) => {
    try {
        const ReportList = await Report.find();

        res.render('report', {
            title: 'LinkHop Reports',
            ReportList: ReportList
        });
    } catch (err) {
        console.log(err);

        res.render('report', {
            title: 'LinkHop Reports',
            error: 'Error on Server',
            ReportList: []
        });
    }
});
module.exports = router;