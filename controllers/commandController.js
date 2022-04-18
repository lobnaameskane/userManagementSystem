const mysql = require('mysql');

// Connection DB
let connection = mysql.createConnection({
host: 'localhost',
  user: 'root',
  password: '',
  database: 'myDb'
});

//commande
exports.createCommand= (req, res) => {
  const { commandId, dateCommand , nomClient} = req.body;
  connection.query('INSERT INTO commande SET commandId = ?, dateCommand = ? , nomClient= ?', [commandId , dateCommand , nomClient], (err, rows) => {
    if (!err) {
      res.redirect('/commande')
    } else {
      console.log(err);
    }});}

    // Update User
exports.updateCommand = (req, res) => {
  const { commandId, dateCommand , nomClient} = req.body;
  connection.query('UPDATE commande SET dateCommand = ?, nomClient = ? WHERE commandId = ?', [ dateCommand, nomClient, commandId], (err, rows) => {
    if (!err) {
      res.redirect('/commande')
      console.log('update succes')
        } else {
          console.log(err);
        } } ); }
    

// Delete Command
exports.deleteCommand = (req, res) => {
  connection.query('DELETE FROM commande WHERE commandId = ?', [req.body.commandId], (err, rows) => {
    if(!err) {
    res.redirect('/commande');
    } else {
   console.log(err);
     }}); };
  

     exports.viewCommand = (req, res) => {
      connection.query('SELECT * FROM commande', (err, rows) => {
        if (!err) {
          res.render('commande', { rows });
        } else {
          console.log(err);
        }
        console.log('The data from commande table: \n', rows);
      });
    }
    

    // exports.findCommand= (req, res) => {
    //   const nomClient = req.body.nomClient;
    //   connection.query('SELECT * FROM commande WHERE nomClient =? ', nomClient , (err, rows) => {
    //     if (!err) {
    //       res.render('commande', { rows });
    //      res.json("cbon")
    //     } else {
    //       console.log(err);
    //     }
    //     console.log('The data from commande table: \n', rows);
    //   });
    // }