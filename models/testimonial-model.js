
import mongoose, {Schema} from "mongoose"



const testimonialSchema = new mongoose.Schema({
    content:{
        required: true,
        type: String
    },
    rating:{
        required: true,
        type: Number
    },
    description:{
        required: true,
        type: String
    },
    courseId:{
        type: Schema.ObjectId,
        ref: "Course"
    },
    user:{
        type: Schema.ObjectId,
        ref: "User"
    }
});

export const Testimonial = mongoose.model.Testimonial ?? mongoose.model("Testimonial", testimonialSchema);