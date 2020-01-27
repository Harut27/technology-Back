const express = require('express');

const router = express.Router();
const {selectAllHows,selectAllPhones,selectAllPhotography,selectAllTvs,selectAllLaptops} = require("./db/requests");

function route(db) {

    router.get('/', (req,res)=>{
        // res.send('we are at home')
    });

    router.get('/news',(req,res)=>{
        res.send('we are in NEWS page' )
    });

    router.get('/contactus',(req,res)=>{
        res.send('we are in Contactus page' )
    });

    router.get('/posts',(req,res)=>{
        res.send('we are in Posts page' )
    });

    router.get('/howto',(req,res)=>{
        selectAllHows(db).then(result=>{
            return res.status(200).send(result);
        }).catch(err=>{
            return res.status(400).send(err.message);
        })
    });

    router.get('/phones',(req,res)=>{
        selectAllPhones(db).then(result=>{
            return res.status(200).send(result)
        }).catch(err=>{
            return res.status(400).send(err.message);
        })
    });

    router.get('/laptops',(req,res)=>{
        selectAllLaptops(db).then(result=>{
            return res.status(200).send(result);
        }).catch(err=>{
            return res.status(400).send(err.message);
        })
    });


    router.get('/tvs',(req,res)=>{
        selectAllTvs(db).then(result=>{
            return res.status(200).send(result);
        }).catch(err=>{
            return res.status(400).send(result);
        })
    });

    router.get('/photography',(req,res)=>{
        selectAllPhotography(db).then(result=>{
            return res.status(200).send(result);
        }).catch(err=>{
            return res.status(400).send(err.message);
        })
    });

    return router;
}

module.exports = route;