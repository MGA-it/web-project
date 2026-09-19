$(function () {
    $("form").on("submit", function (e) {
        e.preventDefault();
        if (window.toastr) toastr.success("Form submitted successfully");
    });
    $("input[type=email]").on("input", function () {
        $(this).next(".email-msg").toggle(!this.value.includes("@"));
    });
});
