module.exports = (app) => {
  const customer = require("../controller/customer.controller");

  //Create A new Customer
  app.post("/api/customers", customer.create);
  // Retrieve all Customer
  app.get("/api/customers", customer.findAll);
  // Retrieve a single Customer by Id
  app.get("/api/cusotmers/:id", customer.findById);
  // Update a Customer with Id
  app.put("/api/customers", customer.update);
  // Delete a Customer with Id
  app.delete("/api/customer/:id", customer.delete);
};
