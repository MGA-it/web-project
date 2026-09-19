$(function () {
    $(".ajax-btn").click(function () {
        let button = $(this);
        $(button.data("target") + " .modal-body").load(button.data("url"));
    });
});
