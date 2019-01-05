

//variables
var topics=[];
var term;
var topTen=[];
// ajax stuff

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        term + "&api_key=dc6zaTOxFJmzC&limit=10";

generateButton();


//click search and perform ajax call
$("#search").click(function(){
  collectInput();
  term=$("#input1").val().trim();
  // $("#input1").val("");
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
//array of gif data values

    var results = response.data;

    for (var i = 0; i <results.length; i++) {
      // var gifDiv = $("<div>");
      // gifDiv.addClass("col-lg-6 w-50 p-3");
      var personImage = $("<img>");
      personImage.attr("src", results[i].images.fixed_height.url);
      // gifDiv.append(personImage);
      $(".gifsHere").prepend(personImage);
    };
  });
});

//objects

//functions


//collects the input from the input field and adds it to the array
function collectInput(){
//check if the input is already in the array

term = $("#input1").val().toLowerCase();
console.log(term);

if(topics.includes(term) && term!=null){


  }
  else{
    //add text into the array
  topics.push(term);
  }
}

//generates a single button
function generateButton(item){
topics.forEach(function(index){
  //create a variable to hold a button tag
var temp =$("<button>");
  //add unique ID attrubite to the button
temp.attr("data-name", index);

});

}
