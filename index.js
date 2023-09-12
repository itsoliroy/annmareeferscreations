$(document).ready(function() {

    $('body').removeClass('primary secondary accent1 accent2 accent3');
    var userSelectedColor = localStorage.getItem('userSelectedColor') ?? userSelectedColor;
    $('body').addClass(userSelectedColor);

    $('.bGButton').find('button').click(function() {
      $('body').removeClass('primary secondary accent1 accent2 accent3');
      var userSelectedColor = $(this).attr('class');
      $('body').addClass(userSelectedColor);
      console.log($('body').attr('class'));
      localStorage.setItem("userSelectedColor", userSelectedColor);
    });
  });

  console.log("hello world");