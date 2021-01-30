// const apikey = "80fad0ae-5191-4204-b800-a52b704c8eee";
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./schema");
const resolvers = require("./resolver");
require('dotenv').config();


const server = new ApolloServer({
  typeDefs,
  resolvers
});

// Connect to db
const dbUrl = "mongodb+srv://MegaBooks:aaaaaa1@Users.ygp5p.mongodb.net/MegaBooks?retryWrites=true&w=majority";
mongoose.connect(dbUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("db is lit, yo");
});

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/dev
  `);
});
