const MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/gsTech";

function connectToDb() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {useUnifiedTopology : true}, function(err, connection) {
            try{
                if (err) throw err;
                return resolve(connection.db('gsTech'));
            }catch (e) {
                return reject(e);
            }
        });
    })
}

module.exports = connectToDb;