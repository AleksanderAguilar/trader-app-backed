const express = require('express');
const userRoutes = require('./src/users/routes');
const app = express();
const port = 4000;
const cors = require('cors');
const allowedOrigins = require('./config/allowedOrigins')
app.use( cors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true // Allow credentials

}));

app.use(express.json());
app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
    res.send("hellos world");
});

app.listen(port, () => {
    console.log(` app listening on port ${port}`)
});

