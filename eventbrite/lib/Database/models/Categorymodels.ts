import { Document, Schema, model, models } from "mongoose"


export interface category extends Document{
    name:string,
    _id:string
}

const CategorySchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    }
})

const Category = models.Category || model('Category' , CategorySchema);

export default Category;