var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var _  = require('lodash');

var DrupalGulpGenerator = yeoman.generators.Base.extend({
  constructor: function() {
    yeoman.generators.Base.apply(this, arguments);
  },

  prompting: {
    askForThemeName: function() {
      var done = this.async();

      this.prompt({
        name: 'themeId',
        message: 'What is your theme\'s machine name?',
        default: 'prototype'
      }, function(props) {
        this.themeId = props.themeId;
        done();
      }.bind(this));
    }
  }
});
