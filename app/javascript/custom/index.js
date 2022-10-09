$( document ).on('turbolinks:load', function() {
  // Initiate bootstrap js
  $(function () {
    $('[data-toggle="popover"]').popover()
  })
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  // Scroll to to tab after clicking tabs
  $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    window.scrollTo(0, 0);
  })

  // Smooth scrolling when clicking anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
});
