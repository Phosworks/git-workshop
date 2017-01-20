var $ = require("jquery");
var $velocity = require("velocity-animate");

$(function () {
    $("h1")
    .addClass("red")
    .text("The H1 is red")
    .velocity({ left: 800 }, { duration: 4500, easing: "swing"})
    .velocity("reverse", { loop: true });
})