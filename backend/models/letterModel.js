import mongoose from 'mongoose';

const letterSchema = new mongoose.Schema({
    french: {type: String, required: true},
    persian: {type: String, required: true},
    nbSuccess: {type: Number, required: true, default: 0},
    nbTot: {type: Number, required: true, default: 0},
    game: {type: String, required: true},
    position: {type: String, required: true},
    category: {type: String, required: true},
});

const Letter = mongoose.model('Letter', letterSchema);

export default Letter;
 