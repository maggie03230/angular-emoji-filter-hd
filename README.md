# AngularJS Emoji Filter HD
=========

An AngularJS filter for replacing [emoji codes](http://www.emoji-cheat-sheet.com) with actual **high-definition** emoticons (**Retina** friendly). (heavily inspired by [Angular-Emoji-Filter](https://github.com/globaldev/angular-emoji-filter))

Bower
--
This module is available as bower package, install it with this command:

```bash
bower install https://github.com/maggie03230/angular-emoji-filter-hd-thin.git
```

Usage
--
- Add maggie.emoji as a dependency
- Add ngSanitize as a dependency (belongs to AngularJS)
- Apply the filter within ng-bind-html: ```<div ng-bind-html="message | emoji"></div>```

Example
--

```html
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="emoji.min.css">
        <script src="angular.min.js"></script>
        <script src="emoji.min.js"></script>
    </head>
    <body ng-app="app" ng-controller="AppCtrl">
        <div ng-bind-html="message | emoji"></div>
    </body>
</html>
```
 
```js
angular.module("app", ["dbaq.emoji","ngSanitize"]).controller("AppCtrl", function ($scope) {
    $scope.message = "表情: [大笑] [微笑] [阴险] ";
});
```


License
--
The AngularJS Emoji filter HD is released under the MIT license as detailed in the LICENSE file that should be distributed with this library; the source code is [freely available](http://github.com/globaldev/angular-emoji-filter).

The filter was adapted by Didier Baquier from the work of [James Allardice](http://jamesallardice.com). The resources come from [emoji codes website](http://www.emoji-cheat-sheet.com)