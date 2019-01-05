

//variables
var topics=[];
var term;
var topTen=[];
// ajax stuff
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
var api_key= "USL10rIbEzucvIYvECWplGoej2D33CSM";




//click search and perform ajax call
$("#search").click(function(){
  collectInput();
  $("#input1").val("");
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    //array of gif data values;
    var data=response.data;

//for loop to go through all the
    for(var i=0; i<10; i++){

      console.log("Current data item: ", data[i]);

      //add the first ten items
      // topTen.push(data[i]);
      $("#gifsHere").html(generateDiv(data[i]));
    };

  });



});

//objects

//functions


//collects the input from the input field and adds it to the array
function collectInput(){
//check if the input is already in the array

term = $("#input1").val().toLowerCase();


if(topics.includes(term) && term!=null){
    //alert if already in the array
    alert("This term is already a searched item, Please select a new term");
  }
  else{
    //add text into the array
  topics.push(term);
  }
}

//generates a single button
function generateButton(item){

  //create a variable to hold a button tag
var temp =$("<button>");
  //add unique ID attrubite to the button

  //append button to the div



}
//generates the div with the gif
function generateDiv(gifData){
// create a variable to hold the gifURL
var url=gifData;
// creates a new div
var div=$("<div>");

//add attrubites to the div
div.addClass("");
// creates a new gif image onto the div
var gif=$("<image>");

//add attrubites to the gif, src and animated and class
// output a new div in the gifHolder div


}
//generates a gifURL given the input from the user
function generateGifURL(person, rating){
  // create variable to hold person text
  // create variable to hold rating level

  // return URL with person name
}
//CLEARS THE GIF DIV
function clearBoard(){

}

//Fills up a temp array with the first ten gifs returned
function fillBoard(){

}

//When the user clicks on a button, the page should grab 10 static,
// non-animated gif images from the GIPHY API and place them on the page.

//
// When the user clicks one of the still GIPHY images,
// the gif should animate.
// If the user clicks the gif again, it should stop playing.
//
// Under every gif, display its rating (PG, G, so on).
//    * This data is provided by the GIPHY API.
//    * Only once you get images displaying with button presses should you move on to the next step.







//other stuff
