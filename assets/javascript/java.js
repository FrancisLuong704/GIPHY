var topics = ["Super Mario", "Metal Gear", "Street Fighter", "Resident Evil", "Skyrim", "Destiny"]
//makes buttons
function renderButtons() {
    for (var i = 0; i < topics.length; i++) {
        var newButton = $('<button>');
        newButton.attr('id', 'button' + i);
        newButton.text(topics[i]);
        newButton.attr("data-name", topics[i]);
        newButton.addClass('search');
        $('#searchTags').append(newButton);
    }
}
renderButtons();
//adds to the topics array and then makes a button
$('#add-topic').on('click', function (event) {
    event.preventDefault();
    $('#searchTags').html('');
    var userInput = $('#topic-input').val();
    topics.push(userInput);
    renderButtons();
})
//on click function that grabs 10 gifs from giphy and creates divs and appends to them to put on the page
$(document).on('click', '.search', function () {
    console.log(this);
    var name = $(this).attr('data-name');
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "+video+games&api_key=N58pplWVQxSxzn6cv54929BIxQdzCdgJ&limit=10"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;
            $('#images').html('');
            
            for (var i = 0; i < results.length; i++) {
                var gif = $('<div>');
                var p = $('<p id="gifs">');
                $('#gifs').text("rating: " + results[i].rating);
                var gifImage = $('<img>');
                gifImage.addClass("gif");
                gifImage.attr('src', results[i].images.fixed_height.url);
                gif.append(p);
                gif.append(gifImage);
                $('#images').append(gif);
            }
        });

})

// $(".gif").on("click", function() {    
//     var state = $(this).attr("data-state"); 
//     if ( state === "still") {
//       $(this).attr('src', $(this).attr("data-animate"));
//       $(this).attr("data-state", "animate");
//     } else {
//       $(this).attr('src', $(this).attr('data-still'))
//       $(this).attr("data-state", "still");
//     } 
//  });

