$(document).ready(function () {
    setTimeout(function () 
    {
      $('.carousel-item').removeClass('active');
      var nextItem = $('.carousel-item.active').next('.carousel-item');
      if (nextItem.length === 0) {
        nextItem = $('.carousel-item:first');
      }
      nextItem.addClass('active');
    }, 3000);
  });