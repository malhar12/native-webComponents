# native-webComponents [![Build Status](https://travis-ci.org/malhar12/native-webComponents.svg?branch=master)](https://travis-ci.org/malhar12/native-webComponents)
A UI Library of Native ES6 Web Components

## Installation
First you need to install npm module

    npm install native-es6-webkit

## Usage
Import the web component in your application

    Import 'native-es6-webkit/Blue-Components/Blue-Primary-Button/blue-primary-button.component';
    
    or 
    
    <script src='./node_modules/native-es6-webkit/Blue-Components/Blue-Primary-Button/blue-primary-button.component.js'></script>

Since, the web components technology, is relatively new, support for web components is not present on all browsers. Currently, only Google Chrome and Safari gives 100% support. Mozilla Firefox, is currently working on giving support for Shadow DOM v1.

Current support for web components, on a specific borwser, can be found at:
https://caniuse.com/#search=web%20components

There is a suite of web components, present, that gives a user a full coverage of web browsers. These polyfill comes in a npm package. More information on polyfills can be found at:
https://github.com/webcomponents/webcomponentsjs

Following polyfills, is a MUST, that needs to be included in your application:

webcomponentsjs/custom-elements-es5-adapter.js
