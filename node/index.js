const express = require('express');
const mysql = require('mysql');
require('dotenv').config();
const app = express();
const port = 3000;

const connect = () => {
  let connection = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_pass,
    database: process.env.db_name
  });
  connection.connect();
  return connection;
}

const createTable = () => {
  let connection = connect();
  connection.query('create table if not exists people (id int not null auto_increment, name varchar(255), primary key (id))', function (err) {
    if (err) throw err;
  });
  connection.end();
}

const random = () => {
  return (Math.random() + 1).toString(36).substring(7);
}

app.get('/', (req, res) => {
  let connection = connect();
  connection.query(`insert into people (name) values ('${random()}')`, function (err) {
    if (err) throw err;
    connection.query(`select id, name from people`, function (err, rows) {
      if (err) throw err;
      let str = '<html><h1>Full Cycle Rocks!</h1><br/><table border=1><thread><tr><th>N.</th><th>Nome</th></tr></thread><tbody>';
      for (let i = 0; i < rows.length; i++) {
        str += `<tr><td>${i+1}</td><td>${rows[i].name}</td><tr>`;
      }
      str += '</tbody></table></html>';
      res.send(str);
      connection.end();
    });
  });

})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});

createTable();