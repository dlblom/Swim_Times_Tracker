const MongoClient = require('mongodb').MongoClient

var db, reviewsCollection;
MongoClient.connect('mongodb://localhost/swim_tracker', { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    db = client.db('swim_tracker');
    swimmersCollection = db.collection('swimmers');
    console.log(`Connected to Mongodb`)
  })
  .catch((err) => console.log(`Error connecting to database: ${err}))
