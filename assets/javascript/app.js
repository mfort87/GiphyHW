$(document).ready(function() {


    var topics = ["Seinfeld", "Friends", "How I Met Your Mother", "Freasier", "King of Queens", "Yes Dear", "The Big Bang Theory"];

    function createButtons(topics, classAddition, areaAddition){
        $(areaAddition).empty();
        for(var i=0; i<topics.length; i++){
            var x = $("<button>");
            x.addClass(classAddition);
            x.attr("data-type", topics[i]);
            x.text(topics[i]);
            $(areaAddition).append(x);
        }
    };

    $(document).on("click", "#button-section", function(){
        $("#sitcomView").empty();
        var sitcom = $this.data("sitcom");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sitcom + "&api_key=IoQ1zJKcgtHnt82LYqSEo1YjOqvwCJfw&limit=10"

        $.ajax({url:queryURL, method: "GET"})
            .then(function(response){
                console.log(response);

                for(var i = 0; i<response.length; i++)
            })
    })
})