import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import letters from '../datas/letters.js';
import Letter from '../models/letterModel.js';

const letterRouter = express.Router();

letterRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
    // await Letter.remove({});
    const createdLetters = await Letter.insertMany(letters);
    res.send(createdLetters);
}));

letterRouter.get('/:game&:position', expressAsyncHandler(async (req, res) => {
    const letters = await Letter.find({game: req.params.game, position: req.params.position});
    res.send(letters);
}));

export default letterRouter;