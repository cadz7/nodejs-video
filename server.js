var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/* Mongoose Model */

var commentsSchema = new mongoose.Schema({
  comment: String,
  time: Number
});

var Comments = mongoose.model('Comments', commentsSchema);
try {
  mongoose.connect('mongodb://db_user:qwasdf@ds049130.mongolab.com:49130/nodejs-video');
  console.log('Mongoose connection status code:', mongoose.connection.readyState);
} catch(e) {
  console.log('e.stack')
  console.log(e.stack)
}

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/comments', function(req, res, next) {
  var query = Comments.find();
 
  query.exec(function(err, shows) {
    if (err) return next(err);
    res.send(shows);
  });
});

/* Routes */

app.post('/comments', function (req, res, next) {
    console.log(req.body);
    var comment = new Comments({
        comment: req.body.comment.commentText,
        time: req.body.comment.time
    })
      comment.save(function(err) {
        if (err) return next(err);
        res.send(200);
      });
});

app.delete('/comments', function(req, res, next) {
  Comments.remove(function(e, result){
    if (e) return next(e)
    res.send((result===1)?{msg:'success'}:{msg:'error'})
  });
});

app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.send(500, { message: err.stack });
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});