/**
 * Promo_produit.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    pr: {
      model: 'promo',
      columnName: 'id_promo',
    },
    pro: {
      model: 'produit' ,
      columnName: 'cip'
    }


  }
};

