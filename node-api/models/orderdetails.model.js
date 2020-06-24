const sql = require("./db.js");


// constructor
const OrderDetails = function(orderDetails) {
  this.orderDetails = orderDetails;
};

OrderDetails.create = (newCustomerOrder, result) => {

   console.log(newCustomerOrder);
   var idCustomerOrder = newCustomerOrder.idCustomerOrder;
   var idMenuItem = newCustomerOrder.idMenuItem;
   var qty = newCustomerOrder.qty;
   
  sql.query("INSERT INTO CustomerOrderDetail (idCustomerOrder,idMenuItem,qty) VALUES (?,?,?)",
    [idCustomerOrder,idMenuItem,qty], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return
    }

    console.log("created customer: ", { idCustomerOrder: res.insertId, ...newCustomerOrder });
    result(null, { idCustomerOrderDetail: res.insertId });
  });
};

OrderDetails.createBulk = (customerOrders, result) => {
  var i;
  var status = 'Success';
  for (i = 0; i < customerOrders.length; i++) {
    OrderDetails.create(customerOrders[i], (err, data) => {
      if (err)
        {
        console.log("Some error occurred while creating the Customer Order Details");
       // result(null,{ status: "Error Occured"});
       status = 'Error Occured';
        return;
        }
     });
  }
    
  result(null, { status: status });
        
};

OrderDetails.getByCustomerId = (customerId, result) => {
  var query = "SELECT o.idCustomerOrder, DATE_FORMAT(o.orderDate,'%m-%d-%Y') orderDate, o.orderValue, od.qty, m.name, m.price" +
              " FROM CustomerOrder o, CustomerOrderDetail od, MenuItem m " +
              " WHERE o.idCustomerOrder = od.idCustomerOrder" +
              " AND od.idMenuItem = m.idMenuItem" +
              " AND o.customerId = ?" +
              " ORDER BY o.idCustomerOrder" ;
  sql.query(query,[customerId],(err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Customer: ", res);
    result(null, res);
  });
};

module.exports = OrderDetails;