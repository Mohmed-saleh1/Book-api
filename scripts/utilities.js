var randomstring = require("randomstring");

exports.generateStoreCode = ()=>{
    return randomstring.generate({
        length: 12,
        charset: 'alphabetic',
        capitalization :'uppercase'
      });
}