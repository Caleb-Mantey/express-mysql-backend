const cors = require('cors');
const express = require('express');
const Router = require('./routes');
const port = 5000;
const app = express();

    var corsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/',Router);



app.listen(port, () => {
    console.log(`Server started on ${port}`);
});