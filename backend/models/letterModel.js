import mongoose from 'mongoose';

const letterSchema = new mongoose.Schema({
    french: {type: String, required: true},
    persian: {type: String, required: true},
    nbSuccess: {type: Number, required: true, default: 0},
    nbTot: {type: Number, required: true, default: 0},
    game: {
        id: String,
        name: String,
    },
    position: {
        id: String,
        name: String,
    },
    category: {
        id: String,
        name: String,
    }
});

const Letter = mongoose.model('Letter', letterSchema);

export default Letter;
 