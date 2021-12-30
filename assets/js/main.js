$(function() {
    $(".card-title").click(function() {
        $(".card-text").toggle("slow", function() {

        });
    });

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })


});