import { Course } from "@/models/course-model";
import { Testimonial } from "@/models/testimonial-model";
import { model } from "mongoose";


export async function getCourses(){
    const courses = await Course.find({}).populate({
        path:"category",
        model: Category
    }).populate({
        path:"instructor",
        model:User
    }).populate({
        path:"testimonials",
        model: Testimonial
    }).populate({
        path:"modules",
        model: Module
    });
    return courses;
}