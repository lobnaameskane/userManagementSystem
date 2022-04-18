const mysql = require('mysql');

// Connection DB
let connection = mysql.createConnection({
host: 'localhost',
  user: 'root',
  password: '',
  database: 'myDb'
});

//ADD USER
exports.create = (req, res) => {
    const { userId, nom, prenom, age} = req.body;
    connection.query('INSERT INTO usser SET userId = ?, nom = ?, prenom = ?, age = ?', [userId, nom, prenom, age], (err, rows) => {
      if (!err) {
        res.redirect('/')
      } else {
        console.log(err);
      }});}

// Delete User
exports.delete = (req, res) => {
  connection.query('DELETE FROM usser WHERE userId = ?', [req.body.userId], (err, rows) => {
    if(!err) {
    res.redirect('/');
    } else {
   console.log(err);
     }}); };
  
 
// Update User
exports.update = (req, res) => {
  const {userId , nom, prenom, age } = req.body;
  connection.query('UPDATE usser SET  nom = ?, prenom = ?, age = ? WHERE userId = ?', [ nom, prenom, age, userId], (err, rows) => {
    if (!err) {
      res.redirect('/')
      console.log('update succes')
        } else {
          console.log(err);
        } } ); }
      
// Find User by Search
exports.find = (req, res) => {
  let searchTerm = req.body.search;
  connection.query('SELECT * FROM usser WHERE userId =? ', searchTerm , (err, rows) => {
    if (!err) {
     // res.render('home', { rows });
     res.json("cbon")
    } else {
      console.log(err);
    }
    console.log('The data from userr table: \n', rows);
  });
}

// View Users
exports.view = (req, res) => {
  connection.query('SELECT * FROM usser where deleted !=1', (err, rows) => {
    if (!err) {
      res.render('user', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}

exports.form = (req, res) => {
  res.render('add-user');
}



//commande
exports.createCommand= (req, res) => {
  const { commandId, dateCommand , nomClient} = req.body;
  connection.query('INSERT INTO commande SET commandId = ?, dateCommand = ? , nomClient= ?', [commandId , dateCommand , nomClient], (err, rows) => {
    if (!err) {
      res.redirect('/')
    } else {
      console.log(err);
    }});}

    // Update User
exports.updateCommand = (req, res) => {
  const { commandId, dateCommand , nomClient} = req.body;
  connection.query('UPDATE commande SET dateCommand = ?, nomClient = ? WHERE commandId = ?', [ dateCommand, nomClient, commandId], (err, rows) => {
    if (!err) {
      res.redirect('/')
      console.log('update succes')
        } else {
          console.log(err);
        } } ); }
    

// Delete Command
exports.deleteCommand = (req, res) => {
  connection.query('DELETE FROM commande WHERE commandId = ?', [req.body.commandId], (err, rows) => {
    if(!err) {
    res.redirect('/');
    } else {
   console.log(err);
     }}); };
  

    //  exports.viewCommand = (req, res) => {
    //   connection.query('SELECT * FROM commande', (err, commands) => {
    //     if (!err) {
    //       res.render('user', { commands });
    //     } else {
    //       console.log(err);
    //     }
    //     console.log('The data from commande table: \n', commands);
    //   });
    // }
    

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