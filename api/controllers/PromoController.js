/**
 * PromoController
 *
 * @description :: Server-side logic for managing Promoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  Liste_Promos: function (req, res, next) {

    Promo.find(function AllPromos(err, promos) {

      if (err) return next(err);
      if (!promos) return next;

      res.view({
        promos: promos
      });

    });


  }

};

