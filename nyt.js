
//var searchTerm = "";

$('#search-button').on('click', function (event) {

    event.preventDefault();
    var searchTerm = $("#search").val();
    console.log(searchTerm)
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=" + searchTerm;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (nytReturn) {
        console.log(nytReturn);
    });
});