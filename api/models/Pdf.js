/**
 * Pdf.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {


    meta: {
      schemaName: 'public'
    },

    id_pdf: {

      type : 'integer',
      required : 'true'
    },

    path: {

      type : 'string',
      required : 'true'
    },

    type: {

      type : 'string',
      required : 'true'
    },

    nom_pdf: {

      type : 'string',
      required : 'true'
    }


  }
};

