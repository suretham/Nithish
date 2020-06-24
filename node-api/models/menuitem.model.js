const sql = require("./db.js");

// constructor
const MenuItem = function(menuitem) {
  this.idMenuItem = menuitem.idMenuItem;
  this.name = menuitem.name;
  this.price = menuitem.price;
  this.description = menuitem.description;
  this.qty = "";
};

MenuItem.getAll = result => {
  sql.query("SELECT MenuItem.*, 0 qty FROM MenuItem", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Customer: ", res);
    result(null, res);
  });
};


module.exports = MenuItem;