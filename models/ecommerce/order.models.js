import mongoose from 'mongoose';
const orderItemSchema= new mongoose.Schema({
  productID:{
    type:mongoose.Schema.Types.ObjectId,
    ref='Product'
  },
  quantity:{
    type:Number,
    required:true
  }
})//mini model
const orderSchema = new mongoose.Schema({
  orderPrice:{
    type:Number,
    required:true,

  },
  customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  orderItems:{
    type:[orderItemSchema]
  },
  address:{
    type:String,
    required:true,
  },
  status:{
    type:String,
    enum:['PENDING','CANCELLED','DELIVERED'],
    default:"PENDING"
  }

}, { timestamps: true });
const Order = mongoose.model('Order', orderSchema);
