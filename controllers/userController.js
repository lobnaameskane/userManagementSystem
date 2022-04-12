const mysql = require('mysql');

// Connection Pool
let connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME

host: 'localhost',
  user: 'root',
  password: '',
  database: 'myDb'
});

let test= ["a" , "b" ,"c"];
exports.test;


exports.create = (req, res) => {
    const { userId, nom, prenom, age} = req.body;
  
    // User the connection
    connection.query('INSERT INTO useer SET userId = ?, nom = ?, prenom = ?, age = ?', [userId, nom, prenom, age], (err, rows) => {
      if (!err) {
        //res.json("user added succefully");
        res.redirect('/')
      } else {
        console.log(err);
      }
      // console.log('The data from user table: \n', rows);
      // console.log('delete su')
    }
    );
  }

// Delete User
exports.delete = (req, res) => {

  // Delete a record
  connection.query('DELETE FROM useer WHERE userId = ?', [req.params.userId], (err, rows) => {
    if(!err) {
   
    res.redirect('/');
    // console.log('sucess')
    } else {
   console.log(err);
     }
   //  console.log('The data from user table: \n', rows);

   });
  };
  // connection.query('UPDATE useer SET supprime = ? WHERE userId = ?', ['1', req.body.userId], (err, rows) => {
  //   if (!err) {
  //     let userSupprim = encodeURIComponent('User successeflly removed.');
  //    res.redirect('/')
  //   } else {
  //     console.log(err);
  //   }
  //   console.log('The data from beer table are: \n', rows);
  // });


 
// Update User
exports.update = (req, res) => {
  const { nom, prenom, age } = req.body;
  // User the connection
  connection.query('UPDATE userr SET  nom = ?, prenom = ?, age = ? WHERE userId = ?', [ nom, prenom, age, req.params.id], (err, rows) => {

    if (!err) {
      // User the connection
      console.log('update succes')
      // connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
      //   // When done with the connection, release it
        
      //   if (!err) {
      //     res.render('edit-user', { rows, alert: `${first_name} has been updated.` });
      //   } else {
      //     console.log(err);
      //   }
      //   console.log('The data from user table: \n', rows);
      // });
    } else {
      console.log(err);
    }
    //console.log('The data from user table: \n', rows);
  });
}
// View Users
// exports.getUsers = (req, res) => {
//   // User the connection
//   connection.query('SELECT * FROM userr' , (err, rows) => {
//     // When done with the connection, release it
//     if (!err) {
//       res.json(rows) 
//       // res.render('user' , {rows})
//    //   let removedUser = req.query.removed;
//      // res.render('home', { rows, removedUser });
//     } else {
//       console.log(err);
//     }
//    // console.log('The data from user table: \n', rows);
//   });
// }
// Find User by Search
exports.find = (req, res) => {
  let searchTerm = req.body.search;
  // User the connection
  connection.query('SELECT * FROM userr WHERE userId =? ', searchTerm , (err, rows) => {
    if (!err) {
     // res.render('home', { rows });
     res.json("cbon")
    } else {
      console.log(err);
    }
    console.log('The data from userr table: \n', rows);
  });
}



// exports.user = (req, res) => {
//   connection.query('SELECT * FROM userr' , (err, rows) => {
//     // When done with the connection, release it
//     if (!err) {
      
//       res.render('user' , {rows});
//     }
//   });
// }


// View Users
exports.view = (req, res) => {
  // User the connection
  connection.query('SELECT * FROM useer where supprime !=1', (err, rows) => {
    // When done with the connection, release it
    if (!err) {
      // let removedUser = req.query.removed;
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


// exports.lobna=function(req, res, next) {
//   var userId = req.body.userId;
//   var nom = req.body.nom;
//   var prenom = req.body.prenom;
//   var age = req.body.age;

//   var sql = `INSERT INTO userr (userId, nom, prenom, age) VALUES ("${userId}", "${nom}", "${prenom}", "${age}")`;
//   connection.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log('record inserted');
//    // req.flash('success', 'Data added successfully!');
//     res.redirect('/');
//   });
// };  
