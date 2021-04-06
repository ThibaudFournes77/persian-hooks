import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import letters from '../datas/letters.js';
import Letter from '../models/letterModel.js';
import { getOneRandom, getRandom } from '../utils/lettersSelection.js';

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
    const data = [];
    
    for(let i=0; i<20; i++){
        let round = {};
        const answers = getRandom(letters, 4);
        const question = getOneRandom(answers);
        round.answers = answers;
        round.question = question;
        data.push(round);
    }

    res.send(data);
}));

export default letterRouter;