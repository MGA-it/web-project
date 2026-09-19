$(function () {
    var slides = $("#wowslider-container1 .ws_images li");
    var bar = $(".wowbar");
    bar.attr("max", slides.length - 1);
    $(".ws_bullets").hide();
});
