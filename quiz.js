// array 1,variable 1
var words = ["Clouds", "Silver Iodide", "10-15%"];



document.getElementById("dragtarget1").innerHTML = words[0]; //grouping html with js


document.getElementById("dragtarget2").innerHTML = words[1];


document.getElementById("dragtarget3").innerHTML = words[2];


// function 1,1 parameter
function dragStart(event) { //event capture 1
    event.dataTransfer.setData("Text", event.target.id);
   
}
//function 2 , 1 parameter
function allowDrop(event) {
    event.preventDefault(); //event capture 2
}


// variable 2
var answer1 = false;
// variable 3
var answer2 = false;
// variable 4
var answer3 = false;

// function 3, 1 parameter
function drop(ev)
{
  ev.preventDefault();
// variable 5
        var image =ev.dataTransfer.getData("text");
// conditional 1
  if (ev.target.id == document.getElementById(image).getAttribute('data-div')){
// conditional 2
      if(ev.target.id == "div1"){answer1=true;} 
// conditional 3
     else if(ev.target.id == "div2"){answer2=true;} 
//conditional 4
    else if(ev.target.id == "div3"){answer3=true;} 
  ev.target.appendChild(document.getElementById(image));
  }
//conditional 5
  else if(ev.target.id == "div1")
  {
    answer1 = false;
     document.getElementById("check1").innerHTML = "Remember that we can't create clouds they have to be around already.";
    ev.target.appendChild(document.getElementById(image));
  }
  
// conditional 6
  else if(ev.target.id == "div2")
  {
    answer2 = false;
     document.getElementById("check2").innerHTML = "It would help to re-read the section about what they shoot into the clouds.";
    ev.target.appendChild(document.getElementById(image));
  }
// conditional 7
  else if(ev.target.id == "div3")
  {
    answer3= false;
     document.getElementById("check3").innerHTML = "Be sure to watch the educational news report on the front page!";
    ev.target.appendChild(document.getElementById(image));
  }
  
}

// function 4
function video()
{
  console.log("hello");
  console.log(answer1);
  console.log(answer2);
  console.log(answer3);
// conditional 8
  if(answer1===true&answer2===true&answer3===true){
     
  }
  return false;
}



//function 5
$(".popup").click(function () {//event capture 3
//variable 6
    var $this = $(this);
  if(answer1===true&answer2===true&answer3===true){
    var $iframe = $("<iframe>").attr("src", $this.data("link")).css({"width": 400, "height": 300});
//variable 7
    var $title = $("<h1>").text($this.data("title"));
    $("#video-view").html($title).append($iframe);
    $iframe.wrap("<div class='class-video'>");}
});

// function 6
function init() {
	'use strict';
    console.log("init()");
	document.getElementById('theForm').onsubmit = video;//event capture 4
}



// End of init() function.
console.log("page is loaded.");
window.onload = init; //event capture 5
