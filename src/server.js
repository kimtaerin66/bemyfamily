const express = require('express')
const app = express();
const cors = require('cors');
const port = 5000;

const api = require("./api");


app.use(cors());

app.use("/api", api);

app.get("/", (req, res) => {
    res.send("hello")
});

app.listen(port, () => {
  console.log(`listening at ${port}`)
})

 