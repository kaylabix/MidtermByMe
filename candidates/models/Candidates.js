var mongoose = require('mongoose');

var CandidateSchema = new mongoose.Schema({
    Name: String,
    selected: Boolean,
    upvote: {type: Number, default: 0},
});

// CandidateSchema.methods.upvote = function(cb) {
//     this.upvotes += 1;
//     this.save(cb);
// };

mongoose.model('Candidate', CandidateSchema);