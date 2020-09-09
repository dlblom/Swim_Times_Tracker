const express = require('express');
const path = require('path');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../client/public')))
app.use(express.json());
app.use(cors());

var db, swimmersCollection;
const mongo = MongoClient.connect('mongodb://localhost/swim_tracker', { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    db = client.db('swim_tracker');
    swimmersCollection = db.collection('swimmers');
    console.log(`Connected to Mongodb`)
  })
  .catch((err) => console.log(`Error connecting to database: ${err}`));

// should get document for swimmer based on their email
app.get(`/swimTimes/:email`, (req, res) => {
  let email = req.params.email;
  swimmersCollection.findOne({ email: email })
  .then(data => {
      console.log(`Successfully found swimmer times by email: ${email}`);
      res.status(200).send(data);
  })
  .catch(err => console.error(`Failed to get times: ${err}`));
})

// get times by event

// add a new time to document for the logged in swimmer

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});