$(document).ready(function() {

    $('.bGButton').find('button').click(function() {
      $('body').removeClass('primary secondary accent1 accent2 accent3');
      var color = $(this).attr('class');
      $('body').addClass(color);
      console.log($('body').attr('class'));
    });
  });