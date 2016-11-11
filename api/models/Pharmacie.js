/**
 * Pharmacie.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  meta: {
    schemaName: 'public'
  },


  attributes: {




    finess: {

      type: 'string',
      required: true,
      primaryKey: true
    },

    lib: {

      type: 'string',
      required: true,

    },

    promos: {
      collection: 'promo',
      via: 'pha',
      through: 'promo_pharmacie'
    }


  }
};

