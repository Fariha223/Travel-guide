import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required:true,
        },

        City:{
            type:String,
            required:true,
        },

        price:{
            type: Number,
            required: true,
        },

        details:{
            type: String,
            required:true,
        },

        Beds:{
            type:Number,
            required:true,
        },

        rate:{
            type:Number,
            required:true,
        },

        picture:{
            type: String,
        },
    },
    {timestamps: true}
);

const hotel = mongoose.model("hotel", hotelSchema);
export default hotel;

