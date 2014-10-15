Angular-crop
========

*WIP*

Angular directive that brings jCrop into Angular.

**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

-  [Angular-crop](#user-content-angular-crop)
    - [Installing](#user-content-installing)
    - [Usage](#user-content-usage)
    - [Configuration](#user-content-configuration)
        - [selection](#user-content-selection)
        - [maxWidth](#user-content-maxwidth)
        - [maxHeight](#user-content-maxheight)
    - [Contributing](#user-content-contributing)
    - [Legacy notes](#user-content-legacy-notes)
        - [Licence](#user-content-licence)
        - [History](#user-content-history)

### Installing

Use following `bower` command to install `angular-jcrop`

```sh
$ bower install angular-jcrop --save
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

### Contributing

This repository uses `Airbnb` javascript style guide along with `jscs` tests to make sure all the requirements are fulfilled. Before doing a pull request, please double check your code.

### Legacy notes

#### Licence

As original repository has been licensed under GPL license and that was changed here to MIT, the whole project will be rewritten from scratch to avoid any legacy issues that may occur in the future. Feel free after reading contributors note to help with that process.

#### History

As original repository seems to be abandoned, the purpose of this fork is to carry on further development to allow easy usage of JCrop in other projects.
