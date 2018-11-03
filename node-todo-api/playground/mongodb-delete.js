const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({
    //     completed: false,
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({ name: 'John' })

    db.collection('Users').findOneAndDelete({__id: new ObjectID("this is my id")})
    .then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    })

    db.collection('Users')
    //db.close();
});

// C:\Program Files\MongoDB\Server\4.0\bin>mongod.exe --dbpath /Users/john/mongo-data