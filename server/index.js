const express = require("express");
const path = require("path");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;

const PORT = 3007;
const app = express();

app.use(express.static(path.join(__dirname, "../client/public")));
app.use(express.json());
app.use(cors());

// mongodb connection
var db, swimmersCollection;
const mongo = MongoClient.connect("mongodb://localhost/swim_tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    db = client.db("swim_tracker");
    swimmersCollection = db.collection("swimmers");
    console.log(`Connected to Mongodb`);
  })
  .catch((err) => console.log(`Error connecting to database: ${err}`));

// should get document for swimmer based on their name
app.get(`/swimTimes/:name`, (req, res) => {
  let name = req.params.name;
  swimmersCollection
    .findOne({ name: name })
    .then((data) => {
      console.log(`Successfully found swimmer times by name: ${name}`);
      res.status(200).send(data);
    })
    .catch((err) => console.error(`Failed to get times: ${err}`));
});

// add a new time log for swimmer based on their name
app.post(`/swimTimes/:name`, (req, res) => {
  let name = req.params.name;
  let date = req.body.date;
  let event = req.body.event;
  let time = req.body.time;
  let meet = req.body.meet;
  swimmersCollection
    .updateOne(
      { name: name },
      {
        $push: { times: { time: time, event: event, date: date, meet: meet } },
      }
    )
    .then((data) => {
      console.log(`Successfully logged time`);
      res.status(200).send(data);
    })
    .catch((err) => console.error(`Failed to get times: ${err}`));
});

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
