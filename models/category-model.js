
import mongoose, {Schema} from "mongoose"



const categorySchema = new mongoose.Schema({
    title:{
        required: true,
        type: String
    },
    description:{
        required: true,
        type: String
    },
    thumbnail:{
        required: true,
        type: String
    }
});

export const Category = mongoose.model.Category ?? mongoose.model("Category", categorySchema);