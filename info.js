$("#popup").click(function () {
    var $this = $(this); //var1
    var $iframe = $("<iframe>").attr("src", /*var2*/ $this.data("link")).css({"width": '100%', "height": '100%',
   'align-content': 'center',
    'border': '5px solid #5E8C92',
    'padding': '0.5px', 
                                                                     
                                                                     
                                                                     
                                                                    
    });

    
    var $title = $("<h1>").text($this.data("title")); //var3
    $("#video-view").html($title).append($iframe);
    $iframe.wrap("<div class='class-video'>");
  
//vars on other files
       
});

$(document).ready(function(){
    $(".button_1").click(function(){
        $(".spacer").css({"padding-top": "50px"});
        $("ul.featured_services li.service_3").css({"padding-right": "00px"});
    });
         
});
