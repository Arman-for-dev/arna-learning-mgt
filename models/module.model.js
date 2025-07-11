
import mongoose, {Schema} from "mongoose"



const moduleSchema = new mongoose.Schema({
    title:{
        required: true,
        type: String
    },
    description:{
        required: true,
        type: String
    },
    status:{
        required: true,
        type: String
    },
    slug:{
        required: true,
        type: String
    },
    course:{
        required: true,
        type:String
    },
    lessonIds:{
        required: true,
        type:[String]
    }
});

export const Module = mongoose.model.Module ?? mongoose.model("Module", moduleSchema);