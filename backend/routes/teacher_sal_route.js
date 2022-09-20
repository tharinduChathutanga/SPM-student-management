const express = require('express');
const TeachSalPost = require('../models/teachersal.model');

const path = require('path');

const router = express.Router();

//insert Teacher salary details in data base 
router.post('/teacsal/save', (req, res) => {

    let newTeachSalPost = new TeachSalPost(req.body);

    newTeachSalPost.save((err) => {

        if (err) {
            return res.status(400).json({
                error: err
            });
        }

        return res.status(200).json({
            success: "Teacher Salary saved successfully"
        });
    });
});

//Display all salary Details of teachers
router.get('/teacsal', (req, res) => {
    TeachSalPost.find().exec((err, teachsalpost) => {
        if (err) {
            return res.status(400).json({

                error: err
            });
        }

        return res.status(200).json({
            success: true,
            existingPosts: teachsalpost
        });
    });
});

//Display Relevant salary details of Relavant teacher id
router.get("/teacsal/:id", (req, res) => {

    let teachid = req.params.id;
    TeachSalPost.findById(teachid, (err, teachsalpost) => {
        if (err) {
            return res.status(400).json({ success: false, err });

        }

        return res.status(200).json({
            success: true,
            teachsalpost
        });
    });
});

//update salary details
router.put('/teacsal/update/:id', (req, res) => {

    TeachSalPost.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, teachsalpost) => {

            if (err) {
                return res.status(400).json({
                    error: err
                });

            }

            return res.status(200).json({
                success: "Update Succesfully"
            });
        }
    );
});


//delete salary details in specific id 
router.delete('/teacsal/delete/:id', (req, res) => {

    TeachSalPost.findByIdAndRemove(req.params.id).exec((err, teachsalpost) => {
        if (err) return res.status(400).json({
            message: "Delete unsucceful", err
        });

        return res.json({
            message: "Teacher Salary details deleted succfully", teachsalpost
        });
    });
});


module.exports = router;