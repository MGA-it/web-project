$(function () {
    if ($("#home-page").length && window.toastr) {
        toastr.options.timeOut = 3000;
        toastr.options.extendedTimeOut = 1000;
        toastr.success("Welcome to my portfolio!");
    } else if ($("#home-page").length) {
        $("#welcome-fallback").addClass("show");
    }
    $(".menu").click(function () { $(".nav-links").toggleClass("show"); });
});
