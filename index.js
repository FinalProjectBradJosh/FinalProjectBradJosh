$("#popup").click(function () {
    var $this = $(this);
    var $iframe = $("<iframe>").attr("src", $this.data("link")).css({"width": 500, "height": 400,
   'align-content': 'center',
    'border': '5px solid #5E8C92',
    'padding': '0.5px',                      
                                                                     
                                                                     
                                                                    
    });

    
    var $title = $("<h1>").text($this.data("title"));
    $("#video-view").html($title).append($iframe);
    $iframe.wrap("<div class='class-video'>");
  

       
});

$(document).ready(function(){
    $(".button_1").click(function(){
        $(".spacer").css({"padding-top": "260px"});
    });
         
});
