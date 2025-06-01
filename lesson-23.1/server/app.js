const express = require('express');
const cors = require('cors');
const app = express();
// let todos =[];
const TodosModul = require('./TodosScheme');

const mongoose = require('mongoose');
const uri = "mongodb+srv://olegporuchikov:ZaYOq0fbbVzu1zCB@cluster0.o7nuj0j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        app.listen(3000, () => {
            console.log('Server started on port 3000');
        })
    } catch (error) {
        // Ensures that the client will close when you finish/error
        // await mongoose.disconnect();
        console.log(error);
    }
}
run().catch(console.dir);

app.use(cors());
app.use(express.json());



app.get('/todos', async (req, res) => {
    // res.send(todos);
    try {
        const todos = await TodosModul.find();
        res.send(todos);
    } catch (err) {}
})

app.post('/todos', async (req, res) => {
    const todos = await TodosModul.find();
    let body = req.body;
    body.userId = todos.length + 1;

    const newTodo = new TodosModul(body);

    newTodo.save().then((todo) => {
        res.status(201).send(todo);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send('Server error');
    })
})

app.get('/todos/:id', async (req, res) => {
    let id = +req.params.id;
    await TodosModul.deleteOne({userId: id});
})

app.put('/todos/:id', async (req, res) => {
    let id = +req.params.id;

    await TodosModul.findOne({userId: id}).updateOne(req.body);
})