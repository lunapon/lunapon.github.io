var pageTitle, pageBgColor;
var categoryCaption = [];

jQuery(function ($) {

  //init
  $(document).ready(function () {
    //page title
    document.title = pageTitle;

    //body background color
    $('body').css('background-color', pageBgColor);

    //create category container
    $('.categories').append(
      categoryContainer()
    );

    //name of category
    $('.product-caption').each(function (index) {
      $(this).html(categoryCaption[index]);
    });

  });

  //create category container
  function categoryContainer() {
    var containerDiv = '';
    for (var i = 1; i <= categoryCaption.length; i++) {
      containerDiv += '<a id="list' + i + '"></a>';
      containerDiv += '<div class="products py-3" style="background-image: url(images/bg-list' + i + '.png">';
      containerDiv += '<div class="container">';
      containerDiv += '<h3 class="product-caption text-center mb-3 py-2" style="background-image: url(images/product-caption' + i + '.png"></h3>';
      containerDiv += '<div class="product-list row" id="productlist_' + i + '"></div>';
      containerDiv += '</div></div>';
    };
    return containerDiv;
  };
});