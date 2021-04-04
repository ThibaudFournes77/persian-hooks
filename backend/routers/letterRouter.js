import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import letters from '../datas/letters.js';
import datas from '../datas/letters.js';
import Letter from '../models/letterModel.js';

const letterRouter = express.Router();

letterRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
    // await Letter.remove({});
    const createdLetters = await Letter.insertMany(letters);
    res.send(createdLetters);
}));

letterRouter.get('/', expressAsyncHandler(async (req, res) => {
    let letters = [];
    const datas = await Letter.find({});
    datas.forEach(data =>{
        if(data.game.name === 'find-answer' && data.position.name === 'start'){
            letters.push(data);
        }
    });
    //res.send(datas);
    res.send(letters);
}));

export default letterRouter;