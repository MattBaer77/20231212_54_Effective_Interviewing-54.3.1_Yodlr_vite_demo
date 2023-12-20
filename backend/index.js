var debug = require('debug')('frontend-code-challenge');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('./lib/logger');
var cors = require('cors');

var users = require('./routes/users');

var app = express();
var log = logger(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// No longer used - "GET /" - Redirect to react frontend - Changed to "static-reference" for reference.
app.use('/static-reference', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next){

  // Temporary for development - will redirect to hosted frontend
  res.redirect("http://localhost:3000")
  // Temporary for development - will redirect to hosted frontend

})

app.use('/api/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
app.use(function(err, req, res, next) {
  log.error(err);
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

app.set('port', process.env.PORT || 3001);

var server = app.listen(app.get('port'), function() {
  log.info(
    'Express server listening on http://localhost:%d',
    server.address().port
  );
});
