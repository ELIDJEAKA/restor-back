let md5 = require('MD5');
module.exports = {
    uploadFile:function(req,res){
    req.file('avatar').upload({

      dirname : '../../assets/images/avatar',
      maxBytes: 5000000

    },function(err,file){
      if (err) console.log(err)
        return res.json({"status ":" fichier chargé avec succes ","file" : file})
    })
  },
  countUser:function(req,res){
        User.count({}).exec(function countCB(error, found) {
          if(error) {
            sails.log(error)
          }else{
            if(found==0){
              UserService.createUser()
            }
            //return res.json({user:found})
            console.log('There are ' + found + ' users ');
          }

    });
  },
  createUser:function(req,res){
    User.create({
            name:'dronesoft bl@gg',
            email:'dronesoftci@gmail.com',
            identite:'proprietaire',
            username:'admin',
            password:md5('restor')
        }).exec(function (err, finn){
        if (err) { return res.serverError(err); }
        sails.log('user created');
        //return res.ok();
    });
  }
};

