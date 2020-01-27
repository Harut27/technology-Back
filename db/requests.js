async function selectAllHows(db) {
    try{
        const c = db.collection('howTo');
        return (await c.find({}).toArray());
    }catch (e) {
        throw e;
    }
}

async function selectAllPhones(db){
    try {
        const PhoneDb = db.collection('phones');
        return ( await PhoneDb.find({}).toArray());

    }catch (e) {
        throw e;
    }
}

async function selectAllPhotography(db){
    try{
        const PhotoDb = db.collection('photography');
        return( await PhotoDb.find({}).toArray());

    }catch (e) {
        throw e;
    }
}

async function selectAllTvs(db){
    try{
        const TvsDb = db.collection('tvs');
        return( await TvsDb.find({}).toArray());
    }catch (e) {
        throw e;
    }
}


async function selectAllLaptops(db){
    try {
        const LaptopDb = db.collection('laptops');
        return ( await LaptopDb.find({}).toArray());
    }catch(e) {
        throw e;
    }
}




module.exports = {
    selectAllHows,
    selectAllPhones,
    selectAllPhotography,
    selectAllTvs,
    selectAllLaptops
};