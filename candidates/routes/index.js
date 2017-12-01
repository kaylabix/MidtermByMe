var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Candidate = mongoose.model('Candidate');

//get all of the candidates
router.get('/candidates', function(req, res, next) {
  Candidate.find(function(err, candidates){
    if(err)
    {
      return next(err);
    }
    res.json(candidates);
  });
});

//adding a new candidate to candidates
router.post('/candidates', function(req, res, next) {
  var candidate = new Candidates(req.body);
  candidate.save(function(err, candidate){
    if(err)
    {
      return next(err);
    }
    console.log(candidate);
    res.json(candidate);
  });
});





module.exports = router;