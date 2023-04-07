import user from "..User.js";

export const updateUser = async(req, res, next) =>{
    try{
        const updateUser= await user.findOneAndUpdate(
            req.params.id,
            { $set : req.body},
            {new: true}
        );
        res.status(200).json(updateUser);
    } catch(err){
        next
    }
}