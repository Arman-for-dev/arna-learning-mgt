import mongoose, {Schema} from "mongoose"



const courseSchema = new mongoose.Schema({
    title:{
        required: true,
        type: String
    },
    description:{
        required: true,
        type: String
    },
    category:{
        type: Schema.ObjectId,
        ref: "Category"
    },
    instructor:{
        type: Schema.ObjectId,
        ref: "User"
    },
    thumbnail:{
       required: true,
       type: String 
    },
    modules:{
        type: Schema.ObjectId,
        ref: "Module"
    },
    price:{
        required: true,
        type: Number 
    },
    active:{
        required: true,
        type: Boolean
    },
    category:{
        required: true,
        type: Schema.ObjectId 
    },
    instructor:{
        required: true,
        type: Schema.ObjectId
    },
    testimonials:[{
        required: true,
        type: [Schema.ObjectId]
    }],
    quizSet:{
        type: Schema.ObjectId,
        ref: "Testimonial"
    },
    subtitle:{
        required: true,
        type: String
    },
    learning:{
        required: true,
        type: [string]
    },
    createdOn: {
        required: true,
        type: Date
    },
    modifiedOn: {
        required: true,
        type: Date
    }

});

export const Course = mongoose.model.Course ?? mongoose.model("Course", courseSchema);