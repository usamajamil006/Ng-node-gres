const db = require("../config/db.config");
const Customer = db.customer;

// Post a Customer
exports.create = (req, res) => {
  Customer.create(req.body)
    .then(customer => res.json(customer))
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "error", details: err });
    });
};

// Get all Customers
exports.findAll = (req, res) => {
  Customer.findAll()
    .then(customers => res.json(customers))
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "error", details: err });
    });
};

// Find Customer By id
exports.findById = (req, res) => {
  Customer.findById(req.params.id)
    .then(customer => res.json(customer))
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "error", details: err });
    });
};

// Update Customer By id
exports.update = (req, res) => {
  const id = req.body.id;
  Customer.update(req.body, { where: { id } })
    .then(() => {
      res
        .status(200)
        .json({ msg: "Updated Successfully -> Customer Id =" + id });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "error", details: err });
    });
};

// Delete Customer By id
exports.delete = (req, res) => {
  const id = req.params.id;
  Customer.destroy(req.body, { where: { id } })
    .then(() => {
      res
        .status(200)
        .json({ msg: "Deleted Successfully -> Customer Id =" + id });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "error", details: err });
    });
};
