/* -------------------------------------------- *
 * Import Google Sheet
 * -------------------------------------------- */


//data instructures

function arrayToNav(id, sheetData) {

  var itemDiv = '';

  for (var i = 1; i < sheetData.length; i++) {
    var name = sheetData[i][0];
    var link = sheetData[i][1];

    //HTML
    itemDiv += '<a href="' + link + '">';
    itemDiv += '<div class="nav-item">' + name + '</div>';
    itemDiv += '</a>';
  };

  $(id).html(itemDiv);

};


//import data to HTML

$(document).ready(function() {

  const uri = 'https://sheets.googleapis.com/v4/spreadsheets/1jRcyG6Xh2-YjlsJ4k4Ta9bkPdadz6kPgggx6QUdNwmo/values/Navigation?alt=json&key=AIzaSyAKEO8ydK_jNlqdOZjHCa4xgt-5RxBwkIY';
  
  fetch(uri)
    .then(res => res.json())
    .then(res => {
      const data = res.values;
      console.log(data);

      arrayToNav('#nav', data);    
  });

});