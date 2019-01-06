

//variables
var topics=[];
var term;
var count=10;
// ajax stuff

generateButton();

$("#input1").click(function(meh){
  $("#input1").val("");
});


//click search and perform ajax call
$("#search").click(function(){

  newSearch();
  term=$("#input1").val().trim();

if(topics.includes(term)){
  $("#input1").val("ALREADY SEARCHED");
}
else{
  topics.push(term);
  generateButton(topics);
}
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          term + "&api_key=dc6zaTOxFJmzC&limit="+count;


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var results = response.data;

    //Loop through the data and create images
    for (var i = 0; i <results.length; i++) {
      //create a new image tag
      var personImage = $("<img>");
      //set the image source attribute to the current gif data
      personImage.attr("src", results[i].images.fixed_height.url);
      //put the gif on the html
      $(".gifsHere").prepend(personImage);
    };
  });
});


//Clears out the page
$("#clear").click(function(){
  $(".buttons").empty();
  $(".gifsHere").empty();
});

//When they user clicks search again it clears out the fields and divs
function newSearch(){
  $(".gifsHere").empty();
  $(".input1").text("");
}

//generates a single button
function generateButton(item){
console.log(item);

  if(term!=null){

    var temp =$("<button>"+term+"</button>");
      //add unique ID attrubite to the button
    temp.attr("data-name", item);
    temp.addClass("btn btn-primary");
    $(".buttons").append(temp);
  }



}
