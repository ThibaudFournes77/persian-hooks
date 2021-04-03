import express from 'express';
//import datas from './datas.js';
import datas from './letters.js';

const app = express();

app.get('/api/letters', (req, res) => {
    let letters = [];
    datas.forEach(data =>{
        if(data.game.name === 'find-answer' && data.position.name === 'start'){
            letters.push(data);
        }
    });
    //res.send(datas);
    res.send(letters);
});

app.get('/', (req, res) => {
    res.send('Server is ready');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
