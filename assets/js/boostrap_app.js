define([
  'require',
  'jquery',
  'angular',
  'angular-resource',
  'socketio',
  'app'
], function (require, $, ng) {
  'use strict';
  require(['domReady!'], function (document) {
    ng.bootstrap(document, ['app']);
  });
});
