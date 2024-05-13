const express = require('express');
const userRoutes = require('./src/users/routes');
const app = express();
const port = 4000;

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hellos world");
});


app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});