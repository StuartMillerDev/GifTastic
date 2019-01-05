

//variables
var topics=[];
var term;
var topTen=[];
// ajax stuff

generateButton();

//click search and perform ajax call
$("#search").click(function(){
  term=$("#input1").val().trim();
  topics.push(term);
  generateButton(topics);
  console.log(topics);
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          term + "&api_key=dc6zaTOxFJmzC&limit=10";


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
//array of gif data values

    var results = response.data;

    for (var i = 0; i <results.length; i++) {
      var personImage = $("<img>");
      personImage.attr("src", results[i].images.fixed_height.url);
      $(".gifsHere").prepend(personImage);
    };
  });
});

$("#clear").click(function(){
  $(".buttons text-center").empty();
  $(".gifsHere").empty();
});


//generates a single button
function generateButton(item){
  //create a variable to hold a button tag
  if(term!=null){
    var temp =$("<button>"+term+"</button>");
      //add unique ID attrubite to the button
    temp.attr("data-name", item);
    $(".buttons").append(temp);
  }



}
