'use strict';

angular.module('app.config', [])

.constant('Settings', {
  'API': {
    'baseURL': 'http://jsonplaceholder.typicode.com/',
    'posts':{
      'all': 'posts',
      'item': 'posts/:id'
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
