/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
       toJSON: function() {
        var obj = this.toObject();
        delete obj.password;
        return obj;
      },
      name : {
        type: 'string',
        required: true
      },
      email:{
        type:'string',
        required:true,
        unique:true
      },
      identite:{
        type:'string',
        enum: ['gerant', 'proprietaire', 'comptable', 'developpeur'],
        defaultsTo: 'gerant'
      },
      username:{
        type:'string',
        required:true,
        unique:true
      },
      password:{
        type:'string',
        required:true
      }
    /*  avatar:{
        type:'string'
      }*/

  }
};

