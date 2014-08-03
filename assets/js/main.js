require.config({
  "paths": {
    "require": "../libs/require.min",
    "jquery": "../libs/jquery.min",
    "domReady": "../libs/domReady.min",
    "angular": "../libs/angular.min",
    "angular-resource": "../libs/angular-resource.min",
    "socketio": "../libs/socket.io.min"
  },
  "shim": {
    "angular": {
      "exports": "angular"
    },
    "jquery": {
      "exports": "$"
    },
    "angular-resource": {
      "deps": ["angular"]
    }
  },
  "deps": ["./bootstrap_app"]
});
