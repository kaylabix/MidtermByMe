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
  console.log("in candidate")
  var candidate = new Candidate(req.body);
  console.log(candidate);
  candidate.save(function(err, candidate){
    if(err)
    {
      console.log("in candidate error");
      return next(err);
    }
    res.json(candidate);
  });
});

//deleting a candidate
router.delete('/candidates/:id', function(req, res, next) {
  console.log('in delete');
  var candidateID = req.params.id;
  var candidate = Candidate.findById(candidateID);
  candidate.delete();
})





module.exports = router;