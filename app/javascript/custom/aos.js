import AOS from 'aos';

document.addEventListener('DOMContentLoaded', function() {
  console.log("Hello from aos.js");
  AOS.init({
    startEvent: 'turbolinks:load'
  });
});
