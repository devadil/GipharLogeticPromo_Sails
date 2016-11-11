/**
 * Promo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    meta: {
      schemaName: 'public'
    },

    id_promo : {

      type : 'integer' ,
      required :'true'

    },

    lib : {

      type : 'string' ,
      required :'true'

    },

    date_deb : {

      type : 'date' ,
      required :'true'

    },

    date_fin : {

      type : 'date' ,
      required :'true'

    },

    pdf : {

      model : 'Pdf' ,
      required :'true'

    }







  }
};

