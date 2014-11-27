$(document).ready(function() {    


window.addEventListener('load', function(){ 
 
 document.getElementById("mouth").addEventListener('touchend', function(e){
	 if (e.scale > 1.0)
	 {
  alert("Рот открыт!") 
	 }
 }, false)
 
}, false)


$(document).on("swipeleft", function() {
    
    var slider = $(event.target).parents(".slider");
    right_slider(slider);
    
});

$(document).on("swiperight", function() {
    
    var slider = $(event.target).parents(".slider");
    left_slider(slider);
    
});

function left_slider(slider){
    
   var block_width = slider.find(".slider-block").width() + 20;
   slider.find(".slider-items .slider-block").eq(-1).clone().prependTo(slider.find(".slider-items")); 
   slider.find(".slider-items").css({"left":"-"+block_width+"px"}); 
   slider.find(".slider-items").animate({left: "0px"}, 200); 
   slider.find(".slider-items .slider-block").eq(-1).remove(); 
   
}

function right_slider(slider){
    
   var block_width = slider.find(".slider-block").width() + 20;
   slider.find(".slider-items").animate({left: "-"+ block_width +"px"}, 200); 
   setTimeout(function () { 
      slider.find(".slider-items .slider-block").eq(0).clone().appendTo(slider.find(".slider-items")); 
      slider.find(".slider-items .slider-block").eq(0).remove(); 
      slider.find(".slider-items").css({"left":"0px"}); 
   }, 300);
   
}


function NoElasticScroll(e) {
    
      e.preventDefault(); 
  }
  



});
