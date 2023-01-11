const path = require("path");

module.exports = {
  prueba: (req, res) => {
    res.send(`Producto nro ${req.params.idProducto}`);
  },
  prueba2: (req, res) => {
    res.send(`Comentario de producto nro ${req.params.idProducto}`);
  },
  prueba3: (req, res) => {
    if (req.params.idLinea == undefined) {
      res.send(`Comentario de producto nro ${req.params.idProducto}`);
    } else {
      res.send(
        `Comentario nro ${req.params.idLinea} de producto nro ${req.params.idProducto}`
      );
    }
  },
};
