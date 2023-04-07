import mongoose from "mongoose";
const bookSchema = new mongoose.Schema(

    {
        hotel:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref:'hotel',
        },

        user:{
            type: mongoose.Schema.Types.ObjectId,
            required:true,
        },

        checkin:{
            type:Date,
            required:true,
        },

        checkout:{
            type:Date,
            required:true,
        },
        phone:{
            type:String,
            required:true,            
        },

    },
);

const book= mongoose.model('Book', bookSchema);
export default book;