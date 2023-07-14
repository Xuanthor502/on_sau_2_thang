
const upLoadSingleFile = async(image)=>{
    let uploadPath = "/hoc_back_end_0/code/on_lai_sau_2_thang/src/public/image/"+ image.name;
    // Use the mv() method to place the file somewhere on your server
    try {
      await image.mv(uploadPath);
      return{
        status: 'success',
        path: uploadPath,
        error: null
    }
    } catch (error) {
      return{
          status:  fall,
          path: null,
          error: JSON.string(error) 
      }
    }
}
module.exports={upLoadSingleFile}


