import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required:true,
        },

        location:{
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

const restaurant = mongoose.model("restaurant", restaurantSchema);
export default restaurant;
