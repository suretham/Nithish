const sql = require("./db.js");

// constructor
const CustomerOrder = function(customerOrder) {
  this.customerId = customerOrder.customerId;
  this.orderValue = customerOrder.orderValue;
};

CustomerOrder.create = (newCustomerOrder, result) => {
  sql.query("INSERT INTO CustomerOrder SET ?", newCustomerOrder, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { idCustomerOrder: res.insertId, ...newCustomerOrder });
    result(null, { idCustomerOrder: res.insertId });
  });
};

CustomerOrder.createBulk = (customerOrders, result) => {
  sql.query("INSERT INTO CustomerOrder (customerId, orderValue) VALUES ?", 
  [customerOrders.map(item => [item.customerId, item.orderValue])], 
  (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

module.exports = CustomerOrder;