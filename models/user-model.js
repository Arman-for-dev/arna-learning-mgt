import mongoose, {Schema} from "mongoose"



const userSchema = new mongoose.Schema({
    firstName:{
        required: true,
        type: String
    },
    lastName:{
        required: true,
        type: String
    },
    password:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String
    },
    phone:{
        required: true,
        type: String
    },
    role:{
        required: true,
        type: String
    },
    profilePicture:{
        required: true,
        type: String
    },
    designation:{
        required: true,
        type:String
    }
});

export const User = mongoose.model.User ?? mongoose.model("User", userSchema);