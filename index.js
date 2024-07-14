const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('The Vercel API is online');
});

app.post('/detail', async (req, res) => {
    let info = req.body;
    console.log(info);
    let options = {
        method: 'post',
        url: 'http://localhost:8500/pay/upgrade',
        headers: {
            'Content-Type': 'application/json'
        },
        data: info
    }
    let sendy = await axios(options)
    res.redirect('http://127.0.0.1:5500/index.html')
});

app.listen(3900, () => console.log('Server is online!!'));
