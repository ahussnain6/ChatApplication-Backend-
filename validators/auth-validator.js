const validate = (schema)=>async (req,res,next)=>{
try{
    const parsebody = await schema.parseAsync(req.body);
    req.body = parsebody;
    next(); 
}catch(err){
    const status = 422;
    const message = "Fill The Input Properly";
    const extraDetails = err.issues.map((curElem)=>curElem.message);
    const error ={status,message,extraDetails};
    next(error);
}
}
module.exports = validate;