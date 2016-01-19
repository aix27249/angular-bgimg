# angular-bgimg
Angular directive that displays a responsive image with given aspect ratio using background-image

## Usage
Install it using bower:

`bower install angular-bgimg --save`

After that, include bower.js and bower.css in your HTML:

    #!html
    <script src="/bower_components/angular-bgimg/bgimg.js"></script>
    <link rel="stylesheet" href="/bower_components/angular-bgimg/bgimg.css">
    

Add a dependency `angular-bgimg` to your angular app, like:


    angular.module('app', ['angular-bgimg']);

Now you can use directive:

    <bgimg src="'/path/to/image.jpg'" cover ratio="16_9"></bgimg>


## Options
 * **src:** Image path. Note that you should use single quotes if you're passing a string directly, otherwise parameter will be interpreted as a variable reference
 * **cover:** Indicates that image should cover area
 * **contain:** Indicates that image should be fitted inside area
 * **ratio:** Aspect ratio in format X_Y. Default is 1:1. Out of the box, the ratios availabe are: `2_1`, `1_2`, `3_4`, `4_3`, `5_4`, `16_9` and `16_10`. Take a look into bgimg.css to find out how to specify more aspect ratios.