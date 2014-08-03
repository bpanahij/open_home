var models = require('models');
module.exports = {
  /**
   *
   * @param req
   * @param res
   */
  get: function (req, res) {
    models.Home.find({}, function (err, docs) {
      if (err) {
        res.json(400, err);
      }
      res.json(docs);
    });
  },
  /**
   *
   * @param req
   * @param res
   *
   ===================================
   req.body:
   {
    "homeId": 1,
      "address": {
        "address1": "18 10th Street",
        "address2": "Apartment 1623",
        "city": "San Francisco",
        "state": "CA",
        "zip": 94103
      }
    }
   -----------------------------------
   */
  post: function (req, res) {
    var Home = new models.Home(req.body);
    console.log(req.body);
    Home.save(function (err) {
      if (err) {
        res.json(400, err);
      }
      res.json({
        success: true
      })
    });
  }
};