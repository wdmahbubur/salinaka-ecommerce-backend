require("dotenv").config();

const user = process.env.MONGODB_USERNAME;
const pass = process.env.MONGODB_PASSWORD;

module.exports = {
  mongoURIDev: "mongodb://localhost:27017/life-shopping",
  mongoURI:
    `mongodb+srv://${user}:${pass}@cluster0.ni4ot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
};
