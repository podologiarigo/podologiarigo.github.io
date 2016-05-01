
$(function(){

// efecto campos formulario
	$("input").click(function(){if($(this).attr("title")==$(this).val())$(this).val("");});
	$("input").blur(function(){if(!$(this).val())$(this).val($(this).attr("title"));});
	$("#comment").click(function(){if($(this).attr("title")==$(this).val())$(this).val("");});
	$("#comment").blur(function(){if(!$(this).val())$(this).val($(this).attr("title"));});


	if($('.slideIn').length>0){pBar(790);}else{
		$("#menuPrincipal").css('background-position','0px 0px').find('ul').show();
	}

    $(".scrollable").scrollable({
      circular:true,
      keyboard:true,
      mousewheel: false
    }).navigator().autoscroll({autoplay:true, interval:5000}).click(function(){
        $(this).data("scrollable").next();
        });

    $("ul.destacados li.destacados").click(function(){
      $(this).expose(); 
    });

    $("a.selflink").click(function () {
          var target = $("li." + $(this).attr("rel"));
          if (target.length){
            destination = target.offset().top;
            $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 1100 );
            target.expose();
            return false;
          }else{
            return true;
          }
    });


});


