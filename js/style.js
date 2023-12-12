$(document).ready(function (){
  'use stickt'
  var typed = new Typed('#element', {
    strings: [' a professional front end developer', 'and wordpress elementor pro designer'],
    typeSpeed: 100,
    loop:true,
  });
  $('.fixed-action-btn').floatingActionButton();
});
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left',
      hoverEnabled: false
    });
    // $(window).on('load', function () {
    //   $('.ided').delay(500).fadeOut();
    // });
    $(window).on('load',function (){
    $('.ring').delay(50).fadeOut();
    });

}); 

  // -----------------------------------------------

// Or with jQuery


  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);
