/**
 * Promo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  meta: {
    schemaName: 'public'
  },


  attributes: {


    id_promo: {

      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      required: 'true'

    },

    lib: {

      type: 'string',
      required: 'true'

    },

    date_deb: {

      type: 'date',
      required: 'true'

    },

    date_fin: {

      type: 'date',
      required: 'true'

    },

    pdf: {

      model: 'pdf',

    },

    produits: {
      collection: 'produit',
      via: 'pr',
      through: 'promo_produit'
    },

    pharmacies: {
      collection: 'pharmacie',
      via: 'pr',
      through: 'promo_pharmacie'
    }


  }
};

