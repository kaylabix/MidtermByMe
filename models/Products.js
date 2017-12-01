var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    Name: String,
    selected: Boolean,
    ordered: {type: Number, default: 0},
    price: Number,
    imageURL: String,
});

// CandidateSchema.methods.upvote = function(cb) {
//     this.upvotes += 1;
//     this.save(cb);
// };

mongoose.model('Product', ProductSchema);