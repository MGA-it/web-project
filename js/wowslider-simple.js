$(function () {
    var slides = $("#wowslider-container1 .ws_images li");
    slides.hide().eq(0).show();
    $(".wowbar").on("input", function () {
        slides.hide().eq(Number(this.value)).fadeIn(200);
    });
});
