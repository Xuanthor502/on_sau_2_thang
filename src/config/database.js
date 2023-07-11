const mysql = require('mysql2/promise');
const connection = mysql.createPool({
      hostname:process.env.DATA_HOSTNAME,
      port:process.env.DATA_PORT, 
      user:process.env.DATA_USER,
      password:process.env.DATA_PASSWORD,
      database:process.env.DATA_DATABASE,
      waitForConnections:true,
      connectionLimit:10,
      queueLimit:0
});


module.exports = connection