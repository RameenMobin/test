// backend/firebase.js
const admin = require('firebase-admin');
const serviceAccount = require('./peergig-17769-firebase-adminsdk-fbsvc-378fae4f34.json'); // <-- point to your downloaded file
console.log("WHRKWRKJW", serviceAccount)
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
