// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // delete many
    /* db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
        console.log(result);
    }); */

    // delete one
    /* db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    }); */

    // findOneandDelete
    /* db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    }); */

    // db.collection('Users').deleteMany({name: 'Anthony'});

    db.collection('Users').findOneAndDelete({ 
        _id: new ObjectID("5ac752efde228b3dd0a84eb9")
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })

    client.close();
});