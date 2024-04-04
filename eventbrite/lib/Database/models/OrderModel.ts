import { Document, Schema, model, models } from "mongoose"


export interface order extends Document{
    createdAt:Date,
    stripeId:string,
    event:{
        _id:string,
        title:string,
    }
    totalAmount:string,
    buyer:{
        _id:string,
        firstName:string,
        lastName:string
    }
}

export type OrderItem ={
    _id:string ,
    totalAMount:string,
    cretedAt:string,
    eventTitle: string
    eventId: string
    buyer: string
}

const OrderSchema = new Schema({
    createdAt:{
        type:Date,
        default:Date.now,
    },
    stripeId: {
        type: String,
        required: true,
        unique: true,
      },
      totalAmount: {
        type: String,
      },
      event: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
      },
      buyer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },

})

const Order = models.Order || model('Order' , OrderSchema);

export default Order;