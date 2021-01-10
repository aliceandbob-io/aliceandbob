/*
$( window ).on( "load", function() {
  $("#overlay").fadeOut("slow");
});
*/

$( document ).on('turbolinks:load', function() {
  $(function () {
    $('[data-toggle="popover"]').popover()
  })

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    window.scrollTo(0, 0);
  })
});
