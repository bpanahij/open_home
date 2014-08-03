module.exports = {
  get: function(req, res, next) {
    res.json({
      js: "endpoint"
    });
  },
  post: function(req, res, next) {
    res.json({
      message: "post received"
    })
  }
};