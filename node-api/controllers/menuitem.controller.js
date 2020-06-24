const MenuItem = require("../models/menuitem.model.js");

exports.findAll = (req, res) => {
    MenuItem.getAll((err, data) => {

      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving menuitems."
        });
      else res.send(data);
    });
  };

 