module.exports = function(app) {
    const customer = require('../controller/customer.controller.js');
 
    // Create a new Customer
    app.post('/api/customers', customer.create);
 
    // Retrieve all Customer
    app.get('/api/customers', customer.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/customers/:id', customer.findById);
 
    // Update a Customer with Id
    app.put('/api/customers', customer.update);
 
    // Delete a Customer with Id
    app.delete('/api/customers/:id', customer.delete);
}