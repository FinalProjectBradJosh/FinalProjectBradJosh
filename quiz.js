function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
   
}

function allowDrop(event) {
    event.preventDefault();
}


/*
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    
}
*/

var answer1 = false;
var answer2 = false;
var answer3 = false;


var numbers = 0;
function drop(ev)
{
  ev.preventDefault();
        var image =ev.dataTransfer.getData("text");
  if (ev.target.id == document.getElementById(image).getAttribute('data-div')){ 
      if(ev.target.id == "div1"){answer1=true;} 
     else if(ev.target.id == "div2"){answer2=true;} 
    else if(ev.target.id == "div3"){answer3=true;} 
  ev.target.appendChild(document.getElementById(image));
  }
  else if(ev.target.id == "div1")
  {
    answer1 = false;
     document.getElementById("check1").innerHTML = "Remember that we can't create clouds they have to be around already.";
    ev.target.appendChild(document.getElementById(image));
  }
  
  
  else if(ev.target.id == "div2")
  {
    answer2 = false;
     document.getElementById("check2").innerHTML = "It would help to re-read the section about what they shoot into the clouds.";
    ev.target.appendChild(document.getElementById(image));
  }
  
  
  else if(ev.target.id == "div3")
  {
    answer3= false;
     document.getElementById("check3").innerHTML = "Be sure to watch the educational news report on the front page!";
    ev.target.appendChild(document.getElementById(image));
  }
  
}


$this = document.getElementById("submit");

function video()
{
  console.log("hello");
  console.log(answer1);
  console.log(answer2);
  console.log(answer3);
  if(answer1===true&answer2===true&answer3===true){
     
  }
  return false;
}




$(".popup").click(function () {
    var $this = $(this);
  if(answer1===true&answer2===true&answer3===true){
    var $iframe = $("<iframe>").attr("src", $this.data("link")).css({"width": 400, "height": 300});
    var $title = $("<h1>").text($this.data("title"));
    $("#video-view").html($title).append($iframe);
    $iframe.wrap("<div class='class-video'>");}
});


function init() {
	'use strict';
    console.log("init()");
	document.getElementById('theForm').onsubmit = video;
}

// End of init() function.
console.log("page is loaded.");
window.onload = init;


