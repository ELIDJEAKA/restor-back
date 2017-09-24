/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

<<<<<<< HEAD
module.exports = {
	
//   /**
//    * `FileController.upload()`
//    *
//    * Upload file(s) to the server's disk.
//    */
//   upload: function (req, res) {

//     // e.g.
//     // 0 => infinite
//     // 240000 => 4 minutes (240,000 miliseconds)
//     // etc.
//     //
//     // Node defaults to 2 minutes.
//     res.setTimeout(0);

//     req.file('image')
//     .upload({

//       // You can apply a file upload limit (in bytes)
//       maxBytes: 1000000

//     }, function whenDone(err, uploadedFiles) {
//       if (err) return res.serverError(err);
//       else return res.json({
//         files: uploadedFiles,
//         textParams: req.allParams()
//       });
//     });
//   },

//   /**
//    * `FileController.s3upload()`
//    *
//    * Upload file(s) to an S3 bucket.
//    *
//    * NOTE:
//    * If this is a really big file, you'll want to change
//    * the TCP connection timeout.  This is demonstrated as the
//    * first line of the action below.
//    */
//   s3upload: function (req, res) {

//     // e.g.
//     // 0 => infinite
//     // 240000 => 4 minutes (240,000 miliseconds)
//     // etc.
//     //
//     // Node defaults to 2 minutes.
//     res.setTimeout(0);

//     req.file('image').upload({
//       adapter: require('skipper-s3'),
//       bucket: process.env.BUCKET,
//       key: process.env.KEY,
//       secret: process.env.SECRET
//     }, function whenDone(err, uploadedFiles) {
//       if (err) return res.serverError(err);
//       else return res.json({
//         files: uploadedFiles,
//         textParams: req.allParams()
//       });
//     });
//   },


//   /**
//    * FileController.download()
//    *
//    * Download a file from the server's disk.
//    */
//   download: function (req, res) {
//     var Path = require('path');
//     var fs = require('fs');

//     // If a relative path was provided, resolve it relative
//     // to the cwd (which is the top-level path of this sails app)
//     fs.createReadStream(Path.resolve(req.param('path')))
//     .on('error', function (err) {
//       return res.serverError(err);
//     })
//     .pipe(res);
//   }
};
=======
 module.exports = {
    uploadFile: function(req,res){
      req.file('image').upload(function(err,file){
          if (err) console.log(err)
          res.json({"status":"file upload successfully","file" :file})
      })
    }
 };
>>>>>>> 9d956ae7a432267f7cae2aa12d453a66f0e649f8

