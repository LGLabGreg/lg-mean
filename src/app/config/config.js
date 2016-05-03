'use strict';

angular.module('app.config', [])

.constant('Settings', {
  'API': {
    'baseURL': '/api/',
    'todos':{
      'all': 'todos',
      'item': 'todos/:id'
    }
  },
  'UI': {
    'header':{
      'logo':{
        'url': 'images/logo.png',
        'alt': 'LGLab Logo'
      }
    },
    'footer':{
      'copyright': '&copy; 2016 - LGLab'
    }
  }
});
