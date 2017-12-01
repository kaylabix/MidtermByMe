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
  var candidate = new Candidate(req.body);
  console.log(candidate);
  candidate.save(function(err, candidate){
    if(err)
    {
      return next(err);
    }
    res.json(candidate);
  });
});

//deleting a candidate
router.delete('/candidates/:id', function(req, res, next) {
  console.log('in delete');
  Candidate.remove({_id: req.body.id}, function(err){ 
    if(err)
    {
      return next(err);
    }
  });

  console.log(res);
});

module.exports = router;