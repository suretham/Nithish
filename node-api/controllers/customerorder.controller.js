const CustomerOrder = require("../models/customerorder.model.js");

exports.findAll = (req, res) => {
    CustomerOrder.getAll((err, data) => {

        console.log("request received");
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };

  exports.create = (req, res) => {
    
    console.log("request received: " + req);
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const customerorder = new CustomerOrder({
      customerId: req.body.customerId,
      orderValue: req.body.orderValue
    });

    console.log(req.body);
  
    // Save Customer in the database
    CustomerOrder.create(customerorder, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    Customer.findById(req.params.customerId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.customerId
          });
        }
      } else res.send(data);
    });
  };

  exports.findOneByEmail = (req, res) => {

    console.log(req.query.customeremail);    
    Customer.findByEmail(req.query.customeremail, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.query.customeremail}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.query.customeremail
          });
        }
      } else res.send(data);
    });
  };

 