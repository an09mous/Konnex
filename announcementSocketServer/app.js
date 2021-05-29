const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');
const {MongoClient} = require('mongodb');

const app = express();

app.use(cors())

const PORT = 5002;
const mongo_uri = "mongodb+srv://an09mous:";
const password = "konnex@123";
const suffix = "@cluster0.is84r.mongodb.net/konnexDB?retryWrites=true&w=majority";

const server = http.createServer(app);
const mongoClient = new MongoClient(mongo_uri + password + suffix);

const io = socketio(server, {
    cors: {
        origin: '*'
    }
});

io.on('connection', (socket) => {
    console.log('connected');

    socket.on('clientKey', (key) => {
        console.log(key);
        mongoClient.connect()
        .then(() => listDB());
    });

    
})

async function listDB() {
    databasesList = await mongoClient.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

server.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});