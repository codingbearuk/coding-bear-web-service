const MongoClient = require('mongodb').MongoClient;
const test = require('assert');
const dbConnect= require('../dbConnect');
//const db = 'codingBear';
// const uri = "mongodb+srv://codingbear:Aez@2478144@cluster0-scgdz.mongodb.net/test?retryWrites=true";

const menu = ( req,res ) => {

    const client = new MongoClient(dbConnect.uri, { useNewUrlParser: true });
    
    client.connect( err => {
        test.equal(null,err);
        
        const collection = client.db(dbConnect.name).collection('menu');

        collection.find({}).toArray( (err, items)=> {
            test.equal(null,err);            
            res.json(items);            
        });
        
    })

    client.close();

}

module.exports = menu;