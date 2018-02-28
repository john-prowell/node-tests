var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // Check if the email already exist
  db.saveUser({
    email: email,
    password: password
  });
  // Send the welcome email
};