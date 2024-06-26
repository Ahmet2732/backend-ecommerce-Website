import catchAsyncError from "../middleware/catchAyncError.js";
import AppError from "../services/AppError.js";



const deleteOne = (Model) => {
 return    catchAsyncError(async (req, res, next) => {
     let { id } = req.params;
       let results = await Model.findByIdAndDelete(id);
       !results && next(new AppError("not found Brand", 404));
       results && res.json({ message: "Done", results });
     });

}



export default deleteOne;