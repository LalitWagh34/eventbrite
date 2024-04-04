import { Document, Schema, model, models } from "mongoose";

export interface Events extends Document{
    _id:String;
    title: string;
    description?: string;
    location?: string;
    createdAt: Date;
    imageURL: string;
    startDateTime: Date;
    endDateTime: Date;
    url?: string;
    category: {_id:string ,name:string};
    organizer:  {_id:string ,firstName:string ,lastName:string};
}

const EventSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    location:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    imageURL:{
        type:String,
        required:true
    },
    startDateTime:{
        type:String,
        default:Date.now
    },
    endDateTime:{
        type:String,
       default:Date.now
    },
    url:{
        type:String
    },
    category:{
        type:Schema.ObjectId,
        ref:'Category'
    },
    organizer:{
        type:Schema.ObjectId,
        ref:'User'
    }
})

const Event = models.Event || model('Event' , EventSchema);

export default Event;