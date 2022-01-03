$(function() {
    /* se agrega efecto de esconder texto en seccion destacados, trajetas */
    $(".card-title").click(function() {
        $(".card-text").toggle("slow", function() {

        });
    });
    /* se agrega efecto tooltip en etiqueta navbar, palabra "inicio" */
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })


});