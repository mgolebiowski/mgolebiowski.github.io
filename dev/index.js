require('jquery');
require('bootstrap-loader');
require('fullpage.js');
require('fullpage.js/dist/jquery.fullpage.min.css');
require('style-loader!css-loader!sass-loader!./style.scss');
import $ from "jquery";
$("#fullpage").fullpage({
	sectionsColor: ['#3b63a3'],
	responsiveWidth: 1280
});