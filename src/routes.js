// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');

// const connection = mysql.createPool({
//     host: '127.0.0.1:3306',
//     user: 'root',
//     password: 'secret',
//     database: 'hess_property_management'
// });

// const app = express();

// app.get('/users', function (req, res) {
//     connection.getConnection(function (err, connection) {
//     connection.query('SELECT * FROM users', function(error, results, fields) {
//             if (error) throw error;
//         res.send(results)
//     });    
//   });
// })

// app.listen(3306, () => {
//     console.log("Go to localhost:3306/users to see data")
// });