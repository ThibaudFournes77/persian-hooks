import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import letters from '../datas/letters.js';
import Letter from '../models/letterModel.js';
import { getOneRandom, getRandom, shuffle } from '../utils/lettersSelection.js';

const letterRouter = express.Router();

letterRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
    // await Letter.remove({});
    const createdLetters = await Letter.insertMany(letters);
    res.send(createdLetters);
}));

letterRouter.get('/find-answer&:position', expressAsyncHandler(async (req, res) => {

    const letters = await Letter.find({game: 'find-answer', position: req.params.position}).lean();
    const data = [];
    const weightedLetters = [];

    letters.map((letter) => {
        if(letter.nbTot !== 0){
            letter.weight = Math.round(((1 - letter.nbSuccess / letter.nbTot) + 1) * 100);
        } else {
            letter.weight = 200;
        }
        return letter;
    });

    letters.forEach((letter) => {
        for(let i = 0; i <= letter.weight; i++){
            weightedLetters.push(letter);
        }
    });
    
    weightedLetters.map(letter => {
        delete letter.weight;
        return letter;
    });
    
    for(let i=0; i<20; i++){
        let round = {};
        const question = getOneRandom(weightedLetters);
        const possibleAnswers = weightedLetters.filter(letter => {
            return letter._id !== question._id;
        });
        const answers = [question, ...getRandom(possibleAnswers, 3)];
        round.answers = shuffle(answers);
        round.question = question;
        data.push(round);
    }

    res.send(data);
}));

letterRouter.get('/write-answer&:position', expressAsyncHandler(async (req, res) => {
    const letters = await Letter.find({game: 'write-answer', position: req.params.position}).lean();
    const data = [];
    const weightedLetters = [];

    letters.map((letter) => {
        if(letter.nbTot !== 0){
            letter.weight = Math.round(((1 - letter.nbSuccess / letter.nbTot) + 1) * 100);
        } else {
            letter.weight = 200;
        }
        return letter;
    });

    letters.forEach((letter) => {
        for(let i = 0; i <= letter.weight; i++){
            weightedLetters.push(letter);
        }
    });
    
    weightedLetters.map(letter => {
        delete letter.weight;
        return letter;
    });

    for(let i=0; i<20; i++){
        const question = getOneRandom(weightedLetters);
        data.push(question);
    }

    res.status(200).send(data);
}));

letterRouter.post('/', expressAsyncHandler(async (req, res) => {
    const letters = req.body;

    letters.forEach(async ({ id, score }) => {
        await Letter.findByIdAndUpdate(id, { $inc: { nbSuccess: score, nbTot: 1 } });
    });

    res.end();
}));

export default letterRouter;