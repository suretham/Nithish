const Customer = require("../models/customer.model.js");
const nodemailer = require("nodemailer");

exports.findAll = (req, res) => {
    Customer.getAll((err, data) => {

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
    const customer = new Customer({
      customerName: req.body.customername,
      customerEmail: req.body.customeremail,
      customerPhone: req.body.customerphone
    });

    console.log(req.body);
  
    // Save Customer in the database
    Customer.create(customer, (err, data) => {
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

  exports.sendContactEmail = (req, res) => {

    console.log(req.body.customeremail);

    var transporter = nodemailer.createTransport(
      {
        service: 'gmail',
        auth: {
          user:'babanschool3@gmail.com',
          pass:'testing@S123',
        }
      });

    var mailOptions = {
    from: req.body.customeremail,
    to: "babanschool3@gmail.com", 
    subject: "Message from Customer",
    text: 'Customer Email: ' + req.body.customeremail + " Message: " + req.body.customercomment,
    };

    transporter.sendMail(mailOptions, function(err,data)
    {
       if(err)
       {
         console.log(err);
       }
       else
       {
         res.send("Success"); 
       }

    })
 
  };

  exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Customer.updateById(
      req.params.customerId,
      new Customer(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.customerId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Customer with id " + req.params.customerId
            });
          }
        } else res.send(data);
      }
    );
  };

  exports.delete = (req, res) => {
    Customer.remove(req.params.customerId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Customer with id " + req.params.customerId
          });
        }
      } else res.send({ message: `Customer was deleted successfully!` });
    });
  };
  
  exports.deleteAll = (req, res) => {
    Customer.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all customers."
        });
      else res.send({ message: `All Customers were deleted successfully!` });
    });
  };