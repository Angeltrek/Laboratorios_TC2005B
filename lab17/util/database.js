const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "ecommerce",
  password: "31416",
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Connection error with database: ", err);
  } else {
    console.log("Success connection with database: ");
    connection.release();
  }
});

module.exports = pool.promise();
