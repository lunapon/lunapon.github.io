/* -------------------------------------------- *
 * Import Google Sheet
 * -------------------------------------------- */

//data instructures
function arrayToProduct(id, sheetData, sheet) {
  var itemDiv = '';
  for (var i = 0; i < sheetData.length; i++) {
    var name = sheetData[0];
    var image = sheetData[1];
    var link = sheetData[2];
    var lowprice = sheetData[3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var highprice = sheetData[4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var tag = sheetData[5];
    //HTML
    itemDiv += '<a id="product' + sheet + '-' + (i + 1) + '"></a>';
    itemDiv += '<figure class="product col-6 col-md-4 col-lg-2 px-1"><div class="card">';
    //image
    itemDiv += '<a class="card-img-top gtm-product' + sheet + '-' + (i + 1) + '" href="' + link + '" target="_blank" itemprop="url">';
    itemDiv += '<div class="thumbnail rounded-sm"><div class="thumbnail-content"><img class="thumbnail-image" src="' + image + '" alt="' + name + '" itemprop="image"></div></div>';
    itemDiv += '</a>';
    //info
    itemDiv += '<figcaption class="card-body p-0">';
    itemDiv += '<div class="text-sm text-white text-center bg-dark p-1">' + tag + '</div>';
    itemDiv += '<a class="text-gray-900 gtm-product' + sheet + '-' + (i + 1) + '" href="' + link + '" target="_blank" itemprop="url"><span class="text-ellipsis-1 text-center m-2" itemprop="name">' + name + '</span></a>';
    itemDiv += '<div class="text-price text-center m-2" itemprop="offers" aria-label="價格"><span class="text-xs mr-1" itemprop="priceCurrency" content="NTD">$</span><span class="text-3xl" itemprop="price" content="' + lowprice + '">' + lowprice + '</span>';
    if (highprice != '') {
      itemDiv += '<del class="text-xs text-gray-400 ml-1">$' + highprice + '</del></div>';
    }
    itemDiv += '</figcaption>';
    //end
    itemDiv += '</div></figure>';
  });
  $(id).html(itemDiv);
};

//import data to HTML
$(document).ready(function() {
  for (var i = 0; i <= categoryCaption.length; i++) {
    (function(i) {
      var rowId = '#productlist_' + i;
      $.ajax({
        type: 'GET',
        url: 'https://sheets.googleapis.com/v4/spreadsheets/1jRcyG6Xh2-YjlsJ4k4Ta9bkPdadz6kPgggx6QUdNwmo/values/List' (i + 1) + '?alt=json&key=AIzaSyAKEO8ydK_jNlqdOZjHCa4xgt-5RxBwkIY',
        dataType: 'json',
        success: function(data) {
          //console.log(data);
          data.shift();
          arrayToProduct(rowId, data, i);
          jumpToCategory();
        },
        error: function() {
          $(rowId).html('<div class="text-center w-100">無任何相關商品</div>');
        }
      });
    })(i);
  };
});

//scroll to specific category by url hash when data loaded
var windowHash;
var headerHeight = $('.l-header').height();
function jumpToCategory() {
  if (window.location.hash) {
    windowHash = window.location.hash;
    setTimeout(function() {
      $('html, body').animate({
        scrollTop: $(windowHash).offset().top - headerHeight - 8
      }, 500);
    }, 1500);
  }
}