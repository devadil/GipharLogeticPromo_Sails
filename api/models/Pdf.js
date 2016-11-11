/**
 * Pdf.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {


  meta: {
    schemaName: 'public'
  },

  attributes: {


    id_pdf: {

      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      required: 'true'
    },

    path: {

      type: 'string',
      required: 'true'
    },

    type: {

      type: 'string',
      required: 'true'
    },

    nom_pdf: {

      type: 'string',
      required: 'true'
    },

    promo: {
      model: 'promo'
    }
  }
};

