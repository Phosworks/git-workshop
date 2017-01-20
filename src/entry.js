var $ = require("jquery");
var $velocity = require("velocity-animate");

$(function () {
    $("h1")
    .addClass("yellowBUG")
    .text("Rock'n roll all night, party every day!")
    .velocity({ left: 800 }, { duration: 4500, easing: "swing"})
    .velocity("reverse", { loop: true });
})