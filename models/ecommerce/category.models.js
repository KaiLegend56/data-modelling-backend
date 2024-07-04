import mongoose from 'mongoose';
const categorySchema = new mongooseSchema({
  name:{
    type:String,
    required:true
  },

  }, { timestamps: true });
export const Category = mongoose.model('Category', categorySchema);
