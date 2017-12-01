var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Candidates = mongoose.model('Candidates');

//get all of the candidates
router.get('/candidates', function(req, res, next) {
  Candidates.find(function(err, candidates){
    if(err)
    {
      return next(err);
    }
    res.json(candidates);
  });
});

//adding a new candidate to candidates
router.post('/comments', function(req, res, next) {
  var candidates = new Candidates(req.body);
  candidates.save(function(err, candidates){
    if(err)
    {
      return next(err);
    }
    res.json(candidates);
  });
});





module.exports = router;