var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = mongoose.model('Product');

//get all of the candidates
router.get('/products', function(req, res, next) {
  Product.find(function(err, products){
    if(err)
    {
      return next(err);
    }
    res.json(products);
  });
});

//adding a new candidate to candidates
router.post('/products', function(req, res, next) {
  var product = new Product(req.body);
  console.log(product);
  product.save(function(err, candidate){
    if(err)
    {
      return next(err);
    }
    res.json(product);
  });
});

//deleting a candidate
router.delete('/products/:id', function(req, res, next) {
  console.log('in delete');
  Product.remove({_id: req.params.id}, function(err){ 
    if(err)
    {
      return next(err);
    }
    res.send('success');
  });
});

// router.put('/products/:id', function(req, res, next) {
//   Candidate.findById(req.params.id, function(err, product){
//     if(err)
//     {
//       return next(err);
//     }
//     candidate.upvote++;
//     candidate.save(function(err){
//       if(err)
//       {
//         return next(err);
//       }
//       res.send("success");
//     })
   
//   });

// })

module.exports = router;