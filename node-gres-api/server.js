var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const db = require("./app/config/db.config.js");

// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  initial();
  console.log("Drop and Resync with { force: true }");
});

require("./app/route/customer.route.js")(app);

// Create a Server
var server = app.listen(8080, function() {
  let host = server.address().address;
  let port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});

function initial() {
  let customers = [
    {
      firstname: "usama",
      lastname: "jamil",
      age: 36
    },
    {
      firstname: "ali",
      lastname: "gill",
      age: 18
    },
    {
      firstname: "fahad",
      lastname: "insan",
      age: 31
    },
    {
      firstname: "zeeshan",
      lastname: "bhatti",
      age: 24
    },
    {
      firstname: "alice",
      lastname: "jhon",
      age: 25
    },
    {
      firstname: "hassan",
      lastname: "ali",
      age: 27
    },
    {
      firstname: "zaheen",
      lastname: "abbas",
      age: 45
    }
  ];

  // Init data -> save to PostGres
  const Customer = db.customer;
  for (let i = 0; i < customers.length; i++) {
    console.log('setting data')
    Customer.create(customers[i]);
  }
}
