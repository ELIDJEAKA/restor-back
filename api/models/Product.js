/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
let multer = require('multer')
module.exports = {

  attributes: {
    name:{
      type:'string',
      required:true
    },
    image:{
      type:'string'
    },
    prixAchat:{
      type:'integer'
    },
    prixVente:{
      type:'integer'
    },
    description:{
      type:'text'
    },
    category:{
      model:'category'
    }
  }
};

