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
3. $ cd lg-mean
4. $ npm install
5. $ mkdir data

## Grunt tasks

### grunt build
    * concat/uglyfing/minify js and sass from src folder to build folder
    * copy html files and images into build folder

### grunt development
    * same as build plus watch for file changes in src folder

## Config
The project contains a front-end config file (src/app/config/config.js) and a server config folder (config/)

## Run

### development

1. $ grunt development
2. $ mongod --dbpath=./data
3. $ node server

### production

1. $ grunt build
2. $ mongod --dbpath=./data
3. $ node server

