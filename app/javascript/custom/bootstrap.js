$( window ).on( "load", function() {
  $("#overlay").fadeOut("slow");
});

$( document ).on('turbolinks:load', function() {
  $(function () {
    $('[data-toggle="popover"]').popover()
  })

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('.alert').hide();
  $('.alert').on('close.bs.alert', function (e) {
    e.preventDefault();
    $(this).hide();
  })

  $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    window.scrollTo(0, 0);
  })
});
