# lg-mean
A very light starter kit for [MEAN](http://meanjs.org) stack apps.
MEAN = [MogoDB](http://mongodb.org/), [Express](http://expressjs.com/), [Angular](http://angularjs.org/), and [Node](http://nodejs.org/).


Base mean stack framework with Grunt - This is very basic setup and is for personal use but feel free to use it. It contains a simple apiService, basic route setup and example controller with interaction with the apiService.

## Requirements

* Git
* NPM
* GruntCi
* Ruby
* Compass

## Install

1. $ npm install -g grunt-cli
2. $ git clone https://github.com/LGLabGreg/lg-mean.git
2. $ cd lg-mean
3. $ npm install

## Grunt tasks

### grunt build
    * concat/uglyfing/minify js and sass from src folder to build folder
    * copy html files and images into build folder
    * node server (8080)

### grunt development
    * same as build plus watch for file changes in src folder
    * node server (8080)

## Config
The project contains a front-end config file (src/app/config/config.js) and a server config folder (config/)

