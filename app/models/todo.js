var mongoose = require('mongoose');

module.exports = mongoose.model('todo', {
    text: {type: String, default: ''},
    done: {type: Boolean, default: false}
});