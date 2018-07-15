$(document).ready(function () {
    createButtons(topics, "sitcom-btn", "#buttonSection");
    console.log("ready");
});


var topics = ["Seinfeld", "Friends", "How I Met Your Mother", "Freasier", "King of Queens", "Yes Dear", "The Big Bang Theory"];

function createButtons(topics, classAddition, areaAddition) {
    $(areaAddition).empty();
    for (var i = 0; i < topics.length; i++) {
        var x = $("<button>");
        x.addClass(classAddition);
        x.attr("data-type", topics[i]);
        x.text(topics[i]);
        $(areaAddition).append(x);
    }
};

$("#buttonSection").on("click", ".sitcom-btn", function () {
    $("#sitcomView").empty();
    var sitcom = $(this).attr("data-type");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=IoQ1zJKcgtHnt82LYqSEo1YjOqvwCJfw&q=" + sitcom + "limit=10"
    console.log(this);
    event.preventDefault()

    //ajax GET Request
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            console.log(response);

            for (var i = 0; i < response.length; i++) {
                var sitcomDiv = $("<div>")
                var rating = response.data[i].rating;
                var para = $("<p>").text("Rating" + rating);
                var animation = response.data[i].fixed_height.url;
                var still = response.data[i].fixed_height_still.url;
                var image = $("<img>");
                image.attr("src", still);
                image.attr("data-still", still);
                image.attr("data-animated", animation);
                image.attr("data-state", "still");
                image.addClass("sitcomImage");
                sitcomDiv.append(para);
                sitcomDiv.append(image);
                $("#sitcomView").append(sitcomDiv);
            }
        })
});

$(document).on("click", ".sitcomImage", function () {
    var state = $(this).attr("data-state");

    if (state == "still") {
        $(this).attr("src", $(this).data("animated"));
        $(this).attr("data-state", "still");
    }
})

$("#addShow").on("click", function () {
var newSitcom = $("input").eq(0).val();
topics.push(newSitcom);
createButtons(topics,"sitcom-btn", "#buttonSection");
return false;

})
