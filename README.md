[![Build Status](https://travis-ci.org/andrefarzat/ng-jcrop.svg?branch=master)](https://travis-ci.org/andrefarzat/ng-jcrop)
[![Coverage Status](https://coveralls.io/repos/andrefarzat/ng-jcrop/badge.png)](https://coveralls.io/r/andrefarzat/ng-jcrop)
[![Code Climate](https://codeclimate.com/github/andrefarzat/ng-jcrop/badges/gpa.svg)](https://codeclimate.com/github/andrefarzat/ng-jcrop)

ng-jcrop
========

Angular directive to jCrop jQuery plugin


### Installing

Install via `bower`

```sh
$ bower install ng-jcrop --save
```


It depends of angular, jquery and jquery-jcrop, so it is necessary including all libraries

```html
<link rel="stylesheet" href="bower_components/jcrop/css/jquery.Jcrop.css" />

<script src="bower_components/jquery/dist/jquery.js"></script>
<script src="bower_components/jcrop/js/jquery.Jcrop.js"></script>
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/ng-jcrop/ng-jcrop.js"></script>
```

### Usage

First of all, add `ngJcrop` as dependency to your existing application by doing the following:

```js
var yourModule = angular.module("yourModule", ['ngJcrop']);
```

Next, apply `ng-jcrop` directive on any `<div>` element inside your template, like so:

```html
<div ng-jcrop="{{ imageUrl }}" data-selection="{{ coordinates }}"></div>
````

Note that `data-selection` attribute is required for the directive to run.

### Configuration

Following attributes can be used with `ng-jcrop` directive to tweak its behaviour.

#### selection

Required. Must be an array `[x, y, x2, y2, w, h]`.

#### maxWidth

`Number`. Set to override default max width of an image. Defaults to 300.

#### maxHeight

`Number`. Set to override default max height of an image. Defaults to 200.

