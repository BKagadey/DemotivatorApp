//Change demotivator text and background image

var main = function() {
  $(document).ready(function(){
    
    $('input#top-text').keyup(function(){
     	var $top = $('input#top-text').val();
    	$('.top-caption').text($top);       
    });
    
    $('input#bottom-text').keyup(function(){      
    	var $bottom = $('input#bottom-text').val();
    	$('.bottom-caption').text($bottom);      
    });
    
    $('input#image-url').keyup(function(){      
    	var $img = $('input#image-url').val();
    	$('.thumbnail img').attr('src',$img);      
    });
    
  });
  
}
 
$(document).ready(main);