var d = new Date();
var year = d.getFullYear();

var month;
switch (d.getMonth()) {
    case 0:
        day = "jan";
        break;
    case 1:
        day = "feb";
        break;
    case 2:
        day = "mar";
        break;
    case 3:
        day = "apr";
        break;
    case 4:
        day = "may";
        break;
    case 5:
        day = "jun";
        break;
    case 6:
        day = "jul";
        break;
    case 7:
        day = "auh";
        break;
    case 8:
        day = "sep";
        break;
    case 9:
        day = "oct";
        break;
    case 10:
        day = "nov";
        break;
    case 11:
        day = "dec";
        break;
}

var currentMonthAddress = day + year + ".html";

$('a[href="concerts.html"]').attr('href', currentMonthAddress);
// $('head').append("");

$(document).ready( function() {

});

// $('#side-container').replaceWith('');

// $( "#side-footer-wrapper" ).hide();