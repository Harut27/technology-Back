const express = require("express");
const cors = require("cors");
const usrRouterFn = require("./routing");
const connectToDb = require("./db/connect");

connectToDb().then((db) => {
    const PORT = process.env.PORT || 3000;
    const app = express();
    let userRouter = usrRouterFn(db);

    app.use(cors());
    app.use('/', userRouter);

    app.listen(PORT, () => {
        console.log("server has been started")
    });
}).catch(() => {
    process.exit();
});
















//
//
//
// MongoClient.connect(url, function(err, db) {
//
//     try{
//         if (err) throw err;
//         let dbo = db.db("gsTech");
//         dbo.collection("tvs").insertMany(tv).then(r => {
//
//             console.log(/*r.toJSON().ops,*/ "++++++++++++");
//
//         }).catch(e => {
//
//             console.log(e, "-------------------------")
//         });
//         //.toArray(function(err, result) {
//         //if (err) throw err;
//         // console.log(result);
//         db.close();
//     }catch (e) {
//         console.log(e, "---------------");
//     }
// });
//
//
// const PORT = process.env.PORT || 3000;
//
// const app = express();
//
// app.use('/', usrRouter);
//
// app.listen(PORT, ()=>{
//     console.log("server has been started")
// });

//.......................................................................
// //
// //
// const MongoClient = require('mongodb').MongoClient;
// const express = require('express');
//
// const commingdata = require('./data-from-backend/laptops')
//
// let url = "mongodb://localhost:27017/";
// let how = [];
// let phone=[];
// let photogr=[];
// let laptops=[];
//
//
// commingdata.forEach((e,i)=>{
//     laptops.push(e)
// });
//
//
// MongoClient.connect(url, function(err, db) {
//
//     try{
//         if (err) throw err;
//         let dbo = db.db("gsTech");
//         dbo.collection("laptops").insertMany(laptops).then(r => {
//
//             console.log(/*r.toJSON().ops,*/ "++++++++++++");
//
//         }).catch(e => {
//
//             console.log(e, "-------------------------")
//         });
//         //.toArray(function(err, result) {
//         //if (err) throw err;
//         // console.log(result);
//         db.close();
//     }catch (e) {
//         console.log(e, "---------------");
//     }
// });
//
//
// const PORT = process.env.PORT || 3000;
//
// const app = express();
//
// // app.use('/', usrRouter);
//
// app.listen(PORT, ()=>{
//     console.log("server has been started")
// });

//
//
//
//
//

//
// const fs = require('fs');
// const express = require('express');
//
// let app = express();
//
// app.get('/', (req, res)=>{
//     res.send('Hello World')
// });
//
// app.get('/about', (req, res)=>{
//     res.send('About')
// });
//
// app.get('/pictures', (req, res )=>{
//     res.renderFile('index.html')
// });
//
// app.listen(3000);


