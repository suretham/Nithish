module.exports = customerapp => {
    const customers = require("../controllers/customer.controller.js");
    const menuitem = require("../controllers/menuitem.controller.js");
    const customerorder = require("../controllers/customerorder.controller.js");
    const orderdetails = require("../controllers/orderdetails.controller.js");

    // Create a new Customer
    customerapp.post("/api/customers", customers.create);
  
    // Retrieve all Customers
    customerapp.get("/api/customers", customers.findAll);
  
    // Retrieve a single Customer with customerId
    customerapp.get("/api/customers/id/:customerId", customers.findOne);

    // Retrieve a single Customer with customerId
    customerapp.get("/api/customers/email", customers.findOneByEmail);
  
    // Update a Customer with customerId
    customerapp.put("/api/customers/:customerId", customers.update);
  
    // Delete a Customer with customerId
    customerapp.delete("/api/customers/:customerId", customers.delete);
  
    // Create a new Customer
    customerapp.delete("/api/customers", customers.deleteAll);

    //Retrieve all menu items
    customerapp.get("/api/menuitems", menuitem.findAll);

    //Insert Customer Order
    customerapp.post("/api/customerorder", customerorder.create);

     //Insert Order Details
     customerapp.post("/api/orderdetails", orderdetails.create);

      //Retrieve Order Details
      customerapp.get("/api/orderdetails", orderdetails.findByCustomerId);
      
      customerapp.post("/api/contact", customers.sendContactEmail);

  };