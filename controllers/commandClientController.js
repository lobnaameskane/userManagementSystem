
    const mysql = require('mysql');

    // Connection DB
    let connection = mysql.createConnection({
    host: 'localhost',
      user: 'root',
      password: '',
      database: 'myDb'
    });
    
    exports.viewCommandClient = (req, res) => {
      
            res.render('commandClient');
        
      }
      
    
    exports.findCommand= (req, res) => {
    //   const {nomClient} = req.body.nomClient;
      connection.query('SELECT * FROM commande WHERE commandId = ? ', [req.body.commandId] , (err, rows) => {
        if (!err) {
          res.render('commandClient', { rows });
        } else {
          console.log(err);
        }
        console.log('The data from commande table: \n', rows);
      });
    }