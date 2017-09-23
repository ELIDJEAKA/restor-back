/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
    uploadFile: function(req,res){
      req.file('image').upload(function(err,file){
          if (err) console.log(err)
          res.json({"status":"file upload successfully","file" :file})
      })
    }
 };

